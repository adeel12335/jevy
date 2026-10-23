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
  description: 'Family-owned, minority-owned small business and licensed general contractor serving New York and New Jersey. Certified WOSB, WBE, MBE and city and state MWBE; credentials with SCA, PANYNJ and MTA; registered vendor with OGS and DASNY.',
  /* The About page, in the company's own words. */
  about: [
    'Jevvy Construction Inc. is a family-owned, minority-owned small business and licensed general contractor serving New York and New Jersey. We provide renovation and new construction services for residential and commercial projects, bringing hands-on experience, skilled craftsmanship, and personal accountability to every stage of the work.',
    'Our experienced team includes union professionals equipped to support a wide range of construction needs. From excavation and drainage to formwork, reinforcement, and finished concrete, we understand the work from the ground up. Our capabilities also include masonry, blockwork, stonework, tiling, building decks, and stairways.',
    'Our business certifications and agency credentials include WOSB, WBE, MBE, city and state MWBE, SCA, PANYNJ, and MTA. We are also registered vendors with OGS and DASNY, reflecting our commitment to pursuing opportunities across the public and private sectors.',
    'As a family business, our reputation is personal. We value clear communication, dependable teamwork, and attention to the details that make a lasting difference.',
    'The photographs on this website show our own projects—actual job sites, materials, and completed work. They offer a firsthand look at our craftsmanship and the care we bring to every project.',
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
