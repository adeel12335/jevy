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
  description: 'Concrete, masonry and stair construction from Jamaica, New York. MWBE, DBE and SBE prequalified with public agencies across New York and New Jersey.',
  street: '175-61 Hillside Avenue, Suite 202',
  locality: 'Jamaica',
  region: 'NY',
  postalCode: '11432',
  country: 'US',
  telephone: '(415) 747-4786',
  telephoneHref: 'tel:+14157474786',
  fax: '(917) 325-5173',
  email: 'info@jevvyconstruction.com',
  areaServed: ['New York', 'New Jersey'],
} as const

export const socials = [
  { name: 'Instagram', href: 'https://instagram.com/jevvy_construction' },
  { name: 'Facebook', href: 'https://www.facebook.com/share/1YvMy7qdpX/' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/preet-k-965778275' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@jevvy_construction' },
]
