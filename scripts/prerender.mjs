import { createHash } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

/* Renders every route to static HTML.

   Social crawlers and many search engines do not execute JavaScript, so a
   client-rendered page would hand them an empty shell with the wrong title.
   Each page is rendered here with its own head already in place, and the
   client hydrates whatever it finds rather than replacing it. */

const DIST = resolve('dist')
const template = await readFile(resolve(DIST, 'index.html'), 'utf8')
const server = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)

const attr = (value) => String(value)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/* A JSON-LD payload must not be able to close its own script element. */
const jsonLd = (value) => value.replace(/</g, '\\u003c')

function headMarkup(head) {
  const tags = [
    `<title>${attr(head.title)}</title>`,
    `<meta name="description" content="${attr(head.description)}" />`,
    `<link rel="canonical" href="${attr(head.canonical)}" />`,
    `<meta name="robots" content="${attr(head.robots)}" />`,
    `<meta property="og:url" content="${attr(head.canonical)}" />`,
    `<meta property="og:title" content="${attr(head.title)}" />`,
    `<meta property="og:description" content="${attr(head.description)}" />`,
    `<meta property="og:image" content="${attr(head.image)}" />`,
    `<meta name="twitter:title" content="${attr(head.title)}" />`,
    `<meta name="twitter:description" content="${attr(head.description)}" />`,
    `<meta name="twitter:image" content="${attr(head.image)}" />`,
  ]
  if (head.preload) {
    tags.push(`<link rel="preload" as="image" href="${attr(head.preload.href)}" imagesrcset="${attr(head.preload.srcSet)}" imagesizes="${attr(head.preload.sizes)}" fetchpriority="high" />`)
  }
  tags.push(`<script type="application/ld+json">${jsonLd(head.jsonLd)}</script>`)
  return tags.map(tag => `    ${tag}`).join('\n')
}

const fileFor = (path) => {
  if (path === '/404') return resolve(DIST, '404.html')
  if (path === '/') return resolve(DIST, 'index.html')
  return resolve(DIST, `.${path}`, 'index.html')
}

const routes = server.routeList()
const pages = []

for (const path of routes) {
  const { html, head } = server.render(path)
  const page = template
    .replace(/<!--app-head-->[\s\S]*?<!--\/app-head-->/, `<!--app-head-->\n${headMarkup(head)}\n    <!--/app-head-->`)
    .replace('<!--app-html-->', html)

  if (!page.includes(html)) throw new Error(`Markup was not injected for ${path}`)

  const file = fileFor(path)
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, page)
  pages.push({ path, bytes: Buffer.byteLength(page) })
}

/* The sitemap can only be written once the full route list is known. */
const site = server.siteUrl.replace(/\/+$/, '')
const today = new Date().toISOString().slice(0, 10)
const indexable = routes.filter(path => path !== '/404')

await writeFile(resolve(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map(path => `  <url>
    <loc>${site}${path === '/' ? '/' : path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${path === '/' ? 'monthly' : 'yearly'}</changefreq>
    <priority>${path === '/' ? '1.0' : path.split('/').length > 2 ? '0.6' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>
`)

await writeFile(resolve(DIST, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml
`)

/* The document head carries one inline script, which a strict content
   security policy will refuse unless its hash is allow-listed. Deriving the
   hash from the built HTML means the policy can never fall out of step with
   the script it is describing. */
const inline = [...template.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)]
  .map(match => match[1])
  .filter(code => code.trim().length)
const hashes = inline.map(code => `'sha256-${createHash('sha256').update(code, 'utf8').digest('base64')}'`)
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  `script-src 'self' ${hashes.join(' ')}`.trim(),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  'frame-src https://www.google.com',
  "form-action 'self'",
  "frame-ancestors 'self'",
  'upgrade-insecure-requests',
].join('; ')

await writeFile(resolve(DIST, '_headers'), `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Content-Security-Policy: ${csp}

# Vite writes content-hashed filenames here, so these can never go stale.
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Photography keeps a stable filename across rebuilds, so a week rather than
# forever.
/media/*
  Cache-Control: public, max-age=604800, stale-while-revalidate=86400

/*.png
  Cache-Control: public, max-age=604800
/og-image.jpg
  Cache-Control: public, max-age=604800
/site.webmanifest
  Cache-Control: public, max-age=86400
`)

/* vercel.json is read from the repository, not from dist, so its copy of the
   policy has to be kept in step by hand. Fail the build rather than ship a
   policy that would block the page. */
const vercel = JSON.parse(await readFile(resolve('vercel.json'), 'utf8'))
const vercelCsp = vercel.headers
  ?.flatMap(entry => entry.headers)
  ?.find(header => header.key === 'Content-Security-Policy')?.value
if (vercelCsp !== csp) {
  throw new Error(`vercel.json Content-Security-Policy is out of date.
Expected:
  ${csp}
Found:
  ${vercelCsp ?? '(none)'}`)
}

const largest = pages.reduce((a, b) => (a.bytes > b.bytes ? a : b))
console.log(`Prerendered ${pages.length} pages (largest ${Math.round(largest.bytes / 1024)} kB — ${largest.path})`)
console.log(`Sitemap lists ${indexable.length} URLs at ${site}`)
console.log(`CSP allows ${hashes.length} inline script hash(es)`)
