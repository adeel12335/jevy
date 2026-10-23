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
  description: 'Licensed general contractor serving New York and New Jersey, built on family values and led by minority ownership. Certified WOSB, WBE, MBE and MWBE NY/NYC; credentials with SCA, PANYNJ and MTA; registered vendor with OGS and DASNY.',
  /* The About page, in the company's own words. */
  about: [
    'Jevvy Construction Inc. is a licensed general contractor serving New York and New Jersey, built on family values and proudly led by minority ownership. We provide residential and commercial renovation and new construction services, bringing hands-on experience, skilled craftsmanship, and personal accountability to every project.',
    'Our experienced team includes union professionals who bring practical knowledge and attention to detail to every job. From excavation and drainage to formwork, reinforcement, and finished concrete, we understand construction from the ground up. Our capabilities also include masonry, blockwork, stonework, tiling, building decks, and stairways.',
    'Our business certifications and agency credentials include WOSB, WBE, MBE, city and state MWBE, SCA, PANYNJ, and MTA. We are also registered vendors with OGS and DASNY, supporting our continued work across the public and private sectors.',
    'As a family business, our reputation is personal. We believe strong working relationships begin with clear communication, dependable teamwork, and respect for our clients’ time and investment. Whether working as a general contractor or subcontractor, we bring that commitment to every project we undertake.',
    'Every photograph on this website features our own work—real job sites, materials, and completed projects. Together, they tell the story of our team’s experience and the care we put into what we build.',
  ],
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
