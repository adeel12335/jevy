import { headFor, type PageMeta } from './routes'

/* The prerenderer writes the head into every page's HTML, so this only has to
   keep it right across client-side navigation. Each tag is addressed by the
   same selector the template uses, so nothing is ever duplicated. */
function upsert(selector: string, create: () => HTMLElement, apply: (element: HTMLElement) => void) {
  let element = document.head.querySelector<HTMLElement>(selector)
  if (!element) {
    element = create()
    document.head.appendChild(element)
  }
  apply(element)
}

const metaTag = (attribute: 'name' | 'property', key: string, content: string) =>
  upsert(`meta[${attribute}="${key}"]`, () => {
    const element = document.createElement('meta')
    element.setAttribute(attribute, key)
    return element
  }, element => element.setAttribute('content', content))

export function applyHead(meta: PageMeta) {
  const head = headFor(meta)

  document.title = head.title
  metaTag('name', 'description', head.description)
  metaTag('name', 'robots', head.robots)

  upsert('link[rel="canonical"]', () => {
    const element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    return element
  }, element => element.setAttribute('href', head.canonical))

  metaTag('property', 'og:url', head.canonical)
  metaTag('property', 'og:title', head.title)
  metaTag('property', 'og:description', head.description)
  metaTag('property', 'og:image', head.image)
  metaTag('name', 'twitter:title', head.title)
  metaTag('name', 'twitter:description', head.description)
  metaTag('name', 'twitter:image', head.image)

  upsert('script[type="application/ld+json"]', () => {
    const element = document.createElement('script')
    element.setAttribute('type', 'application/ld+json')
    return element
  }, element => { element.textContent = head.jsonLd })
}
