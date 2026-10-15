import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import { headFor, notFoundMeta, pages, metaFor } from './routes'
import { SITE_URL } from './site'

/* Used only by scripts/prerender.mjs. Everything it needs to write a page —
   the markup and the head — comes from here, so the two can never drift. */
export function render(path: string) {
  const html = renderToString(<StrictMode><StaticRouter location={path}><App /></StaticRouter></StrictMode>)
  const meta = path === '/404' ? notFoundMeta : metaFor(path)
  return { html, head: headFor(meta) }
}

export const siteUrl = SITE_URL

export function routeList(): string[] {
  return [...pages.map(page => page.path), '/404']
}
