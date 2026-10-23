import { allProjects, categories, certifications, inCategory, prequalified, projects, services } from './data'
import { SITE_URL, company, socials } from './site'

/* Every page on the site, with the head it needs. The client reads this on
   navigation and the prerenderer reads it at build time, so a page can never
   end up with markup and metadata that disagree. */
export type PageMeta = {
  path: string
  title: string
  description: string
  /* Photograph id used for the social card. */
  image: string
  /* Trail shown in the page header and emitted as BreadcrumbList. */
  trail?: { name: string; path: string }[]
  /* True when the page opens on that photograph full-bleed, which makes it
     the largest contentful paint and worth preloading. */
  photo?: boolean
  noindex?: boolean
}

const brand = company.name
const abs = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`

const HOME: PageMeta = {
  path: '/',
  title: `${brand} | Residential & Commercial Construction Services | New York & New Jersey`,
  description: `Jevvy Construction Inc provides renovation and new construction services for residential and commercial projects throughout New York and New Jersey. ${prequalified.join('. ')}.`,
  image: 'stair-forms',
  photo: true,
}

const STATIC: PageMeta[] = [
  HOME,
  {
    path: '/about',
    title: `About ${brand} | Construction Corporation in Jamaica, NY`,
    description: `${brand} is a construction corporation in Jamaica, New York, providing residential and commercial construction services, certified WOSB, WBE, MBE and MWBE NY/NYC across New York and New Jersey.`,
    image: 'sidewalk',
    photo: true,
    trail: [{ name: 'About', path: '/about' }],
  },
  {
    path: '/services',
    title: `Construction Services | Residential & Commercial | ${brand}`,
    description: `Renovation and new construction for residential and commercial projects across New York and New Jersey: ${services.map(service => service.title.toLowerCase()).join(', ')}.`,
    image: 'masonry',
    photo: true,
    trail: [{ name: 'Services', path: '/services' }],
  },
  {
    path: '/process',
    title: `How a Concrete Job Goes In | ${brand}`,
    description: 'Excavate and prep, form and reinforce, pour and finish, cure and reopen. The four stages of a concrete job, photographed on our own sites rather than illustrated with stock images.',
    image: 'pour',
    photo: true,
    trail: [{ name: 'Process', path: '/process' }],
  },
  {
    path: '/projects',
    title: `Project Gallery | ${projects.length} Photographs from Our Sites | ${brand}`,
    description: `Every photograph here is our own work: ${categories.map(category => `${inCategory(category).length} ${category.toLowerCase()}`).join(', ')} photographs from jobs across New York and New Jersey.`,
    image: 'crew',
    trail: [{ name: 'Projects', path: '/projects' }],
  },
  {
    path: '/qualifications',
    title: `Certifications & Agency Credentials | ${brand}`,
    description: `${prequalified.join('. ')}.`,
    image: 'crew',
    trail: [{ name: 'Qualifications', path: '/qualifications' }],
  },
  {
    path: '/contact',
    title: `Contact ${brand} | Jamaica, NY`,
    description: `${company.street}, ${company.locality}, ${company.region} ${company.postalCode}. Email ${company.email} or call the office on ${company.telephone} to discuss renovation or new construction work.`,
    image: 'sidewalk',
    trail: [{ name: 'Contact', path: '/contact' }],
  },
]

const SERVICE_PAGES: PageMeta[] = services.map(service => ({
  path: `/services/${service.slug}`,
  title: `${service.title} in New York & New Jersey | ${brand}`,
  description: service.category
    ? `${service.items.join(', ')}. ${inCategory(service.category).length} photographs from ${service.category.toLowerCase()} jobs by ${brand} across New York and New Jersey.`
    : `${service.description} ${service.items.join(', ')}. Residential and commercial ${service.title.toLowerCase()} from ${brand}, Jamaica NY.`,
  image: service.image ?? 'crew',
  photo: Boolean(service.image),
  trail: [{ name: 'Services', path: '/services' }, { name: service.title, path: `/services/${service.slug}` }],
}))

const PROJECT_PAGES: PageMeta[] = allProjects.map(project => ({
  path: `/projects/${project.id}`,
  title: `${project.title} — ${project.category} | ${brand}`,
  description: `${project.alt}. ${project.category} work photographed on site by ${brand}, Jamaica, New York.`,
  image: project.id,
  photo: true,
  trail: [{ name: 'Projects', path: '/projects' }, { name: project.title, path: `/projects/${project.id}` }],
}))

export const pages: PageMeta[] = [...STATIC, ...SERVICE_PAGES, ...PROJECT_PAGES]

/* Service URLs that changed when the service list was corrected to the
   eleven trades the company actually offers. Kept as permanent redirects so
   anything already linking to the old paths lands somewhere useful instead
   of on the 404 page. "Subway construction" has no successor service — the
   station stairway photographs now live in the gallery — so it goes to the
   service index rather than guessing at a replacement. */
export const redirects: { from: string; to: string }[] = [
  { from: '/services/concrete-sidewalks', to: '/services/concrete-work' },
  { from: '/services/masonry-blockwork', to: '/services/masonry-brick-block' },
  { from: '/services/subway-construction', to: '/services' },
  /* A photograph withdrawn at the company's request. */
  { from: '/projects/stair-opening', to: '/projects?trade=demolition' },
]

export const notFoundMeta: PageMeta = {
  path: '/404',
  title: `Page not found | ${brand}`,
  description: 'That page is not on this site. Everything we build — residential and commercial construction — is one click away.',
  image: 'crew',
  noindex: true,
}

export const metaFor = (path: string): PageMeta => {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return pages.find(page => page.path === clean) ?? notFoundMeta
}

/* ---------- structured data ---------- */

const organization = {
  '@type': 'GeneralContractor',
  '@id': `${SITE_URL}/#organization`,
  name: brand,
  description: company.description,
  url: abs('/'),
  logo: `${SITE_URL}/icon-512.png`,
  image: `${SITE_URL}/og-image.jpg`,
  email: company.email,
  telephone: '+1-786-767-0403',
  faxNumber: '+1-646-352-503',
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.street,
    addressLocality: company.locality,
    addressRegion: company.region,
    postalCode: company.postalCode,
    addressCountry: company.country,
  },
  areaServed: company.areaServed.map(name => ({ '@type': 'State', name })),
  knowsAbout: ['Residential construction', 'Commercial construction', 'Renovation', ...services.map(service => service.title), 'Contract administration', 'Owner and contractor representation', 'Cost estimating', 'Quality control inspections', 'Subcontracting support'],
  hasCredential: certifications.map(group => ({
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: `${group.label} (${group.type})`,
    recognizedBy: group.agencies.map(agency => ({ '@type': 'Organization', name: agency.name })),
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction services',
    itemListElement: services.map(service => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title, description: service.items.join(', '), url: abs(`/services/${service.slug}`) },
    })),
  },
  sameAs: socials.map(social => social.href),
}

export function structuredData(meta: PageMeta): unknown[] {
  const graph: unknown[] = [organization]

  graph.push({
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: abs('/'),
    name: brand,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  })

  if (meta.trail?.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [{ name: 'Home', path: '/' }, ...meta.trail].map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: abs(crumb.path),
      })),
    })
  }

  const service = services.find(entry => meta.path === `/services/${entry.slug}`)
  if (service) {
    graph.push({
      '@type': 'Service',
      '@id': `${abs(meta.path)}#service`,
      name: service.title,
      description: service.description,
      serviceType: service.title,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: company.areaServed.map(name => ({ '@type': 'State', name })),
      url: abs(meta.path),
      image: `${SITE_URL}/media/${service.image}-1200.webp`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.title} scope`,
        itemListElement: service.items.map(item => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: item } })),
      },
    })
  }

  const project = projects.find(entry => meta.path === `/projects/${entry.id}`)
  if (project) {
    graph.push({
      '@type': 'ImageObject',
      '@id': `${abs(meta.path)}#photo`,
      name: project.title,
      caption: project.alt,
      description: project.alt,
      contentUrl: `${SITE_URL}/media/${project.id}-1200.webp`,
      thumbnailUrl: `${SITE_URL}/media/${project.id}-400.webp`,
      creator: { '@id': `${SITE_URL}/#organization` },
      creditText: brand,
      representativeOfPage: true,
      isPartOf: { '@id': `${abs('/projects')}#gallery` },
    })
  }

  if (meta.path === '/projects') {
    graph.push({
      '@type': 'ImageGallery',
      '@id': `${abs('/projects')}#gallery`,
      name: `${brand} project gallery`,
      description: meta.description,
      url: abs('/projects'),
      numberOfItems: projects.length,
    })
  }

  if (meta.path === '/contact') {
    graph.push({ '@type': 'ContactPage', '@id': `${abs('/contact')}#page`, url: abs('/contact'), about: { '@id': `${SITE_URL}/#organization` } })
  }

  if (meta.path === '/about') {
    graph.push({ '@type': 'AboutPage', '@id': `${abs('/about')}#page`, url: abs('/about'), about: { '@id': `${SITE_URL}/#organization` } })
  }

  return graph
}

/* Widths written for every photograph; the hero pair also gets 1600. */
const srcSet = (image: string) => {
  const widths = image === 'crew' || image === 'sidewalk' ? [400, 800, 1200, 1600] : [400, 800, 1200]
  return widths.map(width => `/media/${image}-${width}.webp ${width}w`).join(', ')
}

export function headFor(meta: PageMeta) {
  return {
    title: meta.title,
    description: meta.description,
    canonical: abs(meta.path),
    image: `${SITE_URL}/media/${meta.image}-1200.webp`,
    robots: meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    preload: meta.photo
      ? { href: `/media/${meta.image}-1200.webp`, srcSet: srcSet(meta.image), sizes: '100vw' }
      : null,
    jsonLd: JSON.stringify({ '@context': 'https://schema.org', '@graph': structuredData(meta) }),
  }
}
