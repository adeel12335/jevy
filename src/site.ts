/* Single source of truth for the company's published details. Everything that
   has to agree across the page, the document head and the structured data
   reads from here. */

/* The live domain. No website address was supplied with the company details,
   so this is a placeholder: set it before deploying, because the canonical
   link, the social card and the sitemap are all built from it. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://www.jevvyconstruction.com').replace(/\/+$/, '')

export const company = {
  name: 'Jevvy Construction Inc',
  legalType: 'Construction Corporation',
  tagline: 'Building with purpose. Delivering with care.',
  positioning: 'Residential & Commercial Construction Services',
  reach: 'We provide construction services throughout New York and New Jersey.',
  description: 'Residential and commercial construction services throughout New York and New Jersey. Prequalified MWBE, SBE and DBE with public agencies in both states, and a registered vendor with New York State OGS.',
  intro: 'Jevvy Construction Inc. provides renovation and new construction services for residential and commercial projects, from start to finish. Our experienced and dedicated team brings hands-on expertise, attention to detail, and a commitment to quality workmanship to every job. With union professionals on our team, we have the skilled workforce to support a wide range of construction needs.',
  street: '175-61 Hillside Avenue, Suite 202',
  locality: 'Jamaica',
  region: 'NY',
  postalCode: '11432',
  country: 'US',
  telephone: '(786) 767-0403',
  telephoneHref: 'tel:+17867670403',
  fax: '+1 646 352 503',
  email: 'info@jevvyconstruction.com',
  areaServed: ['New York', 'New Jersey'],
} as const

export const socials = [
  { name: 'Instagram', href: 'https://instagram.com/jevvy_construction' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1YvMy7qdpX/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/preet-k-965778275' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@jevvy_construction' },
]
