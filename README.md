# Jevvy Construction Inc — website

Marketing site for Jevvy Construction Inc: residential and commercial construction services,
Jamaica, New York. **74 pages, all prerendered to static HTML.** No server required.

Vite · React 19 · TypeScript · React Router · Lenis · Radix Dialog · sharp (build-time image pipeline)

---

## Running it

Requires Node 20.19+ (built and tested on Node 24).

```bash
npm install
npm run assets     # one-off: builds /public/media from /images — see "Photography"
npm run dev        # http://127.0.0.1:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Typecheck, build the client, build the SSR bundle, prerender all 74 pages |
| `npm run preview` | Vite's preview server — **note the caveat below** |
| `npm run typecheck` | `tsc -b`, no emit |
| `npm run assets` | Regenerates every image in `public/media` from `images/` |
| `npm run videos` | Re-encodes the clips in `videos/` into `public/media/video` with posters (needs ffmpeg) |

`npm run assets` is **not** part of `npm run build` — it takes a couple of minutes and its
output is committed. Run it only when the photographs change.

> **`npm run preview` is not a faithful test of the build.** It serves `index.html` for
> every path, so every route appears to have the home page's title. To check the real
> thing, use any static server that resolves `about/index.html` for `/about` — which is
> what Netlify, Vercel and Cloudflare Pages all do.

---

## Before you deploy

**Set the real domain.** No website address was supplied with the company details, so
`https://www.jevvyconstruction.com` is a placeholder. It feeds every canonical link, the
Open Graph tags, the structured data, `robots.txt` and `sitemap.xml`.

```bash
# .env
VITE_SITE_URL=https://the-real-domain.com
```

Then `npm run build`. Nothing else needs editing — the value is substituted into every
page at build time and read by `src/site.ts` at runtime.

---

## How the pages are built

Social crawlers and many search engines do not run JavaScript. A client-rendered site
would hand them an empty shell with the wrong title on every page, so the build renders
each route to real HTML:

```
tsc -b
vite build                                       → dist/ (client bundle)
vite build --ssr src/entry-server.tsx            → dist-ssr/ (used only by the next step)
node scripts/prerender.mjs                       → dist/**/index.html, sitemap, robots, _headers
```

`scripts/prerender.mjs` walks the route list from `src/routes.ts`, renders each one, and
writes its head — title, description, canonical, Open Graph, Twitter card, hero preload
and JSON-LD — directly into the markup. The browser then **hydrates** that HTML rather
than replacing it, and `src/head.ts` keeps the head in step on client-side navigation.

### Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/services`, `/services/:slug` | Services index and one page per trade (3) |
| `/process` | How a job goes in |
| `/projects`, `/projects/:id` | Gallery and one page per photograph (64) |
| `/qualifications` | MWBE / DBE / SBE register |
| `/contact` | Contact |
| `404.html` | Served by the host for anything else |

`/projects?trade=concrete` filters the gallery; the unfiltered page stays canonical.

**Adding a page** means adding it to `pages` in `src/routes.ts` *and* to the `<Routes>`
in `src/App.tsx`. The prerenderer, the sitemap and the client head all read the first;
miss the second and the page prerenders as the 404 component.

---

## Deploying

`dist/` is plain static files. Any static host works.

**Netlify** — `netlify.toml` is set up (`npm run build` → `dist`). Headers and caching
come from `dist/_headers`, which the build generates.

**Vercel** — `vercel.json` is set up with the same headers, `cleanUrls` and the build.

**Anything else** — upload `dist/` and apply the rules in `dist/_headers`:

- `/assets/*` → `max-age=31536000, immutable` (Vite content-hashes these)
- `/media/*` → `max-age=604800` — photographs keep stable filenames, so they must **not** be immutable
- `404.html` for unknown paths

### The content security policy

The policy is strict: everything the page loads is same-origin, fonts included, with one exception: the office map on the home and contact pages is a Google Maps frame, so `frame-src` allows `https://www.google.com`. The
document head carries one inline script (it marks the document script-capable before
first paint, so scroll reveals never hide content from a reader without JavaScript), and
a strict policy refuses inline scripts unless their hash is allow-listed.

`scripts/prerender.mjs` derives that hash from the built HTML and writes
`dist/_headers` itself, so Netlify can never drift. `vercel.json` is read from the repo
rather than from `dist`, so it keeps its own copy — **and the build fails loudly if the
two disagree.** If you change the inline script, run the build, copy the expected policy
out of the error, and paste it into `vercel.json`.

---

## The inquiry form

By default the form has **no backend**. It validates, then drafts the message and hands it
to the visitor's own email client, with a copy-to-clipboard fallback. Nothing is silently
dropped and there is nothing to maintain.

To take real submissions instead, point it at an endpoint:

```bash
# .env
VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

It posts JSON (`name`, `email`, `location`, `message`, `_subject`) and shows a success
state; if the request fails it falls back to the email draft so the inquiry is never lost.
A hidden honeypot field catches the simplest bots.

> If you set an endpoint, add its origin to `connect-src` in `scripts/prerender.mjs`
> **and** `vercel.json`, or the content security policy will block the request.

---

## Editing content

Almost everything readable lives in three files.

**`src/site.ts`** — company name, address, phone, fax, email, social links, site URL.
Changing the phone number here changes it in the header, contact page, footer and
structured data at once.

**`src/data.ts`** — the photo catalogue, the three services, the four process stages, the
prequalification register and the nav.

**`src/routes.ts`** — every page's title, description, social image and breadcrumb, plus
the JSON-LD graph. This is the only place SEO copy lives.

---

## Photography

64 of the 69 supplied photographs are used (five of the seven block-wall frames were set aside at the company's request). They live in `images/` as the original JPEGs and are
catalogued by number in `mockups/asset-index.txt`.

`scripts/prepare-assets.mjs` turns them into `public/media/`:

- every photograph at **400 / 800 / 1200px** WebP
- the hero and about images additionally at **1600px** (`FULL_BLEED` in the script)
- the logo, a light variant for dark surfaces, the favicon and app icon set, and the
  1200×630 social card

### To add or replace a photograph

1. Drop the JPEG in `images/`.
2. Add it to `mockups/asset-index.txt` with the next number.
3. Add a `slug: number` entry to the `photos` map in `scripts/prepare-assets.mjs`.
4. Add a matching entry to `projects` in `src/data.ts` — `id` must equal the slug, plus
   `category`, `title`, `caption` and a real `alt` description.
5. `npm run assets && npm run build`.

Counts, filters, the archive strip, the sitemap and the new `/projects/<slug>` page all
derive from `projects`, so they update themselves. The first four entries are the featured
cards on the home page.

---

## Motion

There is no animation library. Scroll reveals and heading line-masks are CSS transitions
switched on by a class (`src/reveal.ts`), and the two scroll-linked effects — the hero
photograph drifting against the page, the archive rows sliding past each other — are one
transform each driven by `src/parallax.ts`. Lenis provides smooth scrolling.

All of it is off under `prefers-reduced-motion`, and because the hidden states live in
CSS behind the `js` class, a reader without JavaScript sees the finished page rather than
a blank one.

---

## What was deliberately left out

The reference sites this was based on lead with figures like "2500+ projects" and
"18 years experience", and with client testimonials. None of those were available for
Jevvy, and `mockups/DESIGN-BRIEF.md` rules out inventing them. The prequalification
register does that job instead, with facts that matter more to the actual reader: a
general contractor or agency checking whether this firm can be counted toward a
participation goal. The only figures on the site are ones it can show you — the number of
photographs, trades and certifying agencies, each counted from the data.

No analytics, cookie banner or tracking is installed. Nothing on the page sets a cookie or
talks to a third party, which is why the policy can stay as tight as it is. Adding
analytics means loosening `script-src` and `connect-src`, and almost certainly adding a
consent notice.

---

## Accessibility

- Skip link is the first tab stop; focus rings are visible throughout.
- Every page has one `<h1>`, a breadcrumb trail and a `BreadcrumbList` in its JSON-LD.
- The archive strip on the home page is a visual duplicate of `/projects` and is hidden
  from screen readers; the gallery page holds the same 64 photographs with captions,
  filters and links.
- `prefers-reduced-motion` disables smooth scrolling, both parallax effects, the reveals
  and the count-up — everything renders at its final state.
- Verified at 1440 / 1024 / 768 / 390px with no horizontal overflow on any page.
