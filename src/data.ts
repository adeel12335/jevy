export type Category = 'Concrete' | 'Formwork' | 'Masonry' | 'Stone' | 'Tile' | 'Stairs' | 'Groundwork'
export type Project = { id: string; title: string; category: Category; caption: string; alt: string }

/* Every photograph supplied by the company, catalogued by trade. Titles and
   captions describe what is in the frame — no locations, values or client
   names have been attached to any of them. Ordered so the unfiltered gallery
   opens on the strongest work and stays varied as it runs. */
export const projects: Project[] = [
  { id: 'sidewalk', title: 'Sidewalk & Retaining Wall', category: 'Concrete', caption: 'Finished panels', alt: 'Finished concrete sidewalk panels running alongside a stone retaining wall' },
  { id: 'stairs', title: 'Stair Construction', category: 'Stairs', caption: 'In progress', alt: 'Stair flight under construction with tiled walls and protected handrails' },
  { id: 'masonry', title: 'Block Wall', category: 'Masonry', caption: 'Laid and pointed', alt: 'Concrete block wall under construction on a project site' },
  { id: 'crew', title: 'Reinforcement Tied Out', category: 'Groundwork', caption: 'On site with the team', alt: 'Crew preparing a reinforced concrete sidewalk behind street barriers' },
  { id: 'station-stairs', title: 'Station Stairway', category: 'Stairs', caption: 'Reopened', alt: 'Rebuilt subway station stairway with yellow nosings, handrails and new floor tile' },
  { id: 'plaza-float', title: 'Floating the Slab', category: 'Concrete', caption: 'Floated', alt: 'Three crew members floating a fresh concrete plaza slab beside a glass curtain wall' },
  { id: 'tile-band', title: 'Wall Tile with Band', category: 'Tile', caption: 'Finished', alt: 'White wall tile with a blue and black band above a red quarry tile floor' },
  { id: 'stone-steps', title: 'Stone Steps', category: 'Stone', caption: 'Set and protected', alt: 'Wide flight of stone steps taped off while the joints cure' },
  { id: 'walkway', title: 'Residential Sidewalk', category: 'Concrete', caption: 'Finished, reopened', alt: 'Completed concrete walkway along a residential street with street trees' },
  { id: 'driveway', title: 'Driveway Apron', category: 'Concrete', caption: 'Finished', alt: 'Wide concrete driveway apron leading to a garage in early morning light' },
  { id: 'plaza-formwork', title: 'Formwork & Mesh', category: 'Formwork', caption: 'Set to line', alt: 'Timber formwork and reinforcing mesh set out across a plaza before the pour' },
  { id: 'entrance', title: 'Gated Entrance', category: 'Concrete', caption: 'Finished', alt: 'Concrete entrance drive between stone gateposts under a blue sky' },
  { id: 'block-wall', title: 'Block Wall Detail', category: 'Masonry', caption: 'Laid and pointed', alt: 'Detailed view of a newly laid concrete block wall above a timber plate' },
  { id: 'stair-detail', title: 'Stairs at the Block Wall', category: 'Stairs', caption: 'In progress', alt: 'Stair flight running alongside a new concrete block wall' },
  { id: 'tile-floor', title: 'Quarry Tile Floor', category: 'Tile', caption: 'Grouted', alt: 'Two crew members grouting a red quarry tile floor beside a glass wall' },
  { id: 'stair-progress', title: 'Stairway Progress', category: 'Stairs', caption: 'In progress', alt: 'Steps under construction with blue protective tape on the treads' },
  { id: 'pour', title: 'Night Pour', category: 'Concrete', caption: 'Placed and finished', alt: 'Freshly finished concrete panels on a city street after dark' },
  { id: 'stone-steps-crew', title: 'Setting the Steps', category: 'Stone', caption: 'In progress', alt: 'Crew working on a wide flight of stone steps with a forklift alongside' },
  { id: 'mesh', title: 'Mesh Over Subbase', category: 'Groundwork', caption: 'Site preparation', alt: 'Reinforcing mesh laid over a prepared subbase behind street barriers' },
  { id: 'prep', title: 'Drainage & Subbase', category: 'Groundwork', caption: 'Site preparation', alt: 'Trenching and drainage pipe laid before a concrete pour' },
  { id: 'plaza-pour', title: 'Plaza Slab Pour', category: 'Concrete', caption: 'Placed', alt: 'Crew placing concrete across a reinforced plaza slab in front of a glass-fronted building' },
  { id: 'gate-driveway', title: 'Drive Through the Gates', category: 'Concrete', caption: 'Finished', alt: 'Finished concrete drive running between stone gateposts and iron gates' },
  { id: 'stair-rail', title: 'New Flight with Rail', category: 'Stairs', caption: 'Poured', alt: 'New concrete stair flight with a temporary timber handrail' },
  { id: 'stairwell-narrow', title: 'Narrow Stairwell', category: 'Stairs', caption: 'In progress', alt: 'Narrow stair flight rising between a rendered wall and a block wall' },
  { id: 'tile-ceiling', title: 'Tile to the Ceiling', category: 'Tile', caption: 'Finished', alt: 'White wall tile with a black band meeting a finished ceiling' },
  { id: 'retaining-walk', title: 'Walk Below the Wall', category: 'Concrete', caption: 'Finished', alt: 'Broad concrete walkway below a stone retaining wall with street barriers' },
  { id: 'tree-pit-walk', title: 'Walk with Tree Pits', category: 'Concrete', caption: 'Finished', alt: 'New sidewalk finished around a street tree pit on a residential block' },
  { id: 'stair-treads', title: 'Treads Set Out', category: 'Stairs', caption: 'Set out', alt: 'Stair treads set out and taped ready for finishing' },
  { id: 'slab-formwork', title: 'Forming a Slab Edge', category: 'Formwork', caption: 'Formwork in place', alt: 'Timber formwork braced along a slab edge inside a plant room' },
  { id: 'slab-wide', title: 'Wide Slab', category: 'Concrete', caption: 'Fresh finish', alt: 'Wide concrete slab freshly floated across a street frontage' },
  { id: 'joint-detail', title: 'Control Joints', category: 'Concrete', caption: 'Jointed and floated', alt: 'Close view of control joints cut into a floated concrete surface' },
  { id: 'stair-opening', title: 'Stair Opening', category: 'Stairs', caption: 'Opened up', alt: 'Stair opening excavated and framed with the first treads set' },
  { id: 'alley-walk', title: 'Alley Walkway', category: 'Concrete', caption: 'Finished', alt: 'Concrete walkway laid along a narrow alley between brick buildings' },
  { id: 'ramp-formwork', title: 'Ramp & Formwork', category: 'Formwork', caption: 'Formwork in place', alt: 'Concrete ramp with plywood formwork still in place' },
  { id: 'plaza-screed', title: 'Screeding the Plaza', category: 'Concrete', caption: 'Screeded', alt: 'Concrete being screeded level across formwork on a plaza slab' },
  { id: 'pour-edge', title: 'Pour at the Edge', category: 'Concrete', caption: 'Placed', alt: 'Fresh concrete placed against a gravel edge beside a stone wall' },
  { id: 'stair-blockwork', title: 'Stair & Blockwork', category: 'Stairs', caption: 'In progress', alt: 'Stair flight beside a block wall with a scaffold jack supporting the run' },
  { id: 'stone-steps-detail', title: 'Steps in Detail', category: 'Stone', caption: 'In progress', alt: 'Stone step treads taped off along the flight with the crew working above' },
  { id: 'curved-walk', title: 'Curved Walkway', category: 'Concrete', caption: 'Finished', alt: 'Curved concrete walkway passing a scaffold standard' },
  { id: 'sidewalk-taped', title: 'Taped Off to Cure', category: 'Concrete', caption: 'Curing', alt: 'New sidewalk panels taped off with a traffic cone while the concrete cures' },
  { id: 'stair-nosings', title: 'Nosings Set', category: 'Stairs', caption: 'Nosings in', alt: 'Stair treads with new nosings set between tiled walls' },
  { id: 'stone-wall-walk', title: 'Walk at the Stone Wall', category: 'Concrete', caption: 'Barriers in place', alt: 'Concrete walkway beside a stone wall with orange street barriers' },
  { id: 'manhole-apron', title: 'Apron with Covers', category: 'Concrete', caption: 'Finished', alt: 'Concrete apron finished around two utility covers beside a stone wall' },
  { id: 'tile-membrane', title: 'Membrane Before Tile', category: 'Tile', caption: 'In progress', alt: 'Blue waterproofing membrane on a wall beside new tile, with a mixer and cone on the floor' },
  { id: 'side-passage', title: 'Side Passage', category: 'Concrete', caption: 'Finished', alt: 'Narrow concrete passage between a brick wall and a fence' },
  { id: 'formwork-edge', title: 'Formed Edge', category: 'Formwork', caption: 'Formwork in place', alt: 'Timber formwork holding the edge of a new concrete sidewalk panel' },
  { id: 'stair-rebuilt', title: 'Flight Rebuilt', category: 'Stairs', caption: 'Poured', alt: 'Freshly poured concrete stair flight rising between plain walls' },
  { id: 'hoarding-walk', title: 'Walk at the Hoarding', category: 'Concrete', caption: 'Finished', alt: 'Concrete walkway running past a green site hoarding' },
  { id: 'street-barriers', title: 'Street Frontage', category: 'Concrete', caption: 'Barriers in place', alt: 'New concrete street frontage protected by barriers at dusk' },
  { id: 'plaza-cured', title: 'Plaza Slab Finished', category: 'Concrete', caption: 'Cured and sealed', alt: 'Finished plaza slab with curing compound rolled on beside a glass-fronted building' },
  { id: 'gateway-apron', title: 'Gateway Apron', category: 'Concrete', caption: 'Curing', alt: 'Concrete apron at a gated entrance with barriers set out' },
  { id: 'stone-apron', title: 'Stone Wall Apron', category: 'Concrete', caption: 'Finished', alt: 'Concrete apron meeting a mortared stone wall' },
  { id: 'station-stairs-before', title: 'Station Stairway, Before', category: 'Stairs', caption: 'Before', alt: 'Worn subway station stairway behind iron gates before reconstruction' },
  { id: 'column-base', title: 'Slab at the Column', category: 'Concrete', caption: 'Finished', alt: 'Concrete slab finished tight to a painted steel column base' },
  { id: 'driveway-garage', title: 'Garage Driveway', category: 'Concrete', caption: 'Finished', alt: 'Concrete driveway leading to a brick garage with a car parked alongside' },
  { id: 'stair-breakout', title: 'Breaking Out', category: 'Stairs', caption: 'Demolition', alt: 'Crew breaking out an old stair flight with jackhammers' },
  { id: 'ramp-fence', title: 'Ramped Walkway', category: 'Concrete', caption: 'Finished', alt: 'Concrete ramp rising beside a timber fence' },
  { id: 'gateway-clearance', title: 'Clearing the Gateway', category: 'Groundwork', caption: 'Demolition', alt: 'Excavator clearing concrete rubble between stone gate pillars' },
  { id: 'excavation', title: 'Excavation', category: 'Groundwork', caption: 'Site preparation', alt: 'Excavated ground with service pipe and bucket before new work' },
]

export const categories: Category[] = ['Concrete', 'Formwork', 'Masonry', 'Stone', 'Tile', 'Stairs', 'Groundwork']

export const categorySlug = (category: Category) => category.toLowerCase()
export const categoryFromSlug = (slug: string) => categories.find(category => categorySlug(category) === slug)
export const serviceForCategory = (category: Category) => services.find(service => service.category === category)
export const projectById = (id: string) => projects.find(project => project.id === id)
export const inCategory = (category: Category) => projects.filter(project => project.category === category)

export const countByCategory = (category: Category) => projects.filter(project => project.category === category).length

/* The photographs that run full-bleed in the home slider; these are the only
   four written at 1600px by scripts/prepare-assets.mjs. */
export const fullBleed = new Set(['crew', 'sidewalk', 'masonry', 'stairs'])

export const services: { slug: string; title: string; lines: string[]; category: Category; description: string; detail: string; image: string; items: string[] }[] = [
  { slug: 'concrete-sidewalks', title: 'Concrete & Sidewalks', lines: ['Concrete &', 'Sidewalks'], category: 'Concrete', description: 'Preparation, forming and finishing for concrete surfaces.', detail: 'From the preparation beneath the surface to the finished concrete, explore the details in our site photography.', image: 'sidewalk', items: ['Surface preparation', 'Formwork & reinforcement', 'Sidewalks & walkways', 'Driveways & aprons'] },
  { slug: 'masonry-blockwork', title: 'Masonry & Blockwork', lines: ['Masonry &', 'Blockwork'], category: 'Masonry', description: 'Block walls and masonry details from our project sites.', detail: 'A closer look at our blockwork and masonry. Tell us about your site and the scope you have in mind.', image: 'masonry', items: ['Concrete block walls', 'Masonry construction', 'Blockwork around services'] },
  { slug: 'stair-construction', title: 'Stair Construction', lines: ['Stair', 'Construction'], category: 'Stairs', description: 'Stairways, steps and associated construction work.', detail: 'Explore stair construction and associated masonry work through photographs from our project sites.', image: 'stairs', items: ['Steps & stairways', 'Associated blockwork', 'Stair construction details'] },
]

/* The four stages every concrete job runs through, each illustrated with a
   photograph from one of our own sites rather than a stock image. */
export const process: { step: string; title: string; body: string; image: string; alt: string }[] = [
  { step: '01', title: 'Excavate & prep', body: 'Excavation, drainage and subbase, cut to the depth the new surface needs.', image: 'prep', alt: 'Trenching and drainage pipe laid before a concrete pour' },
  { step: '02', title: 'Form & reinforce', body: 'Edges set to line and grade, then reinforcing mesh tied out across the base.', image: 'mesh', alt: 'Reinforcing mesh laid over a prepared subbase behind street barriers' },
  { step: '03', title: 'Pour & finish', body: 'Concrete placed, screeded and floated, then jointed and finished by hand.', image: 'pour', alt: 'Freshly finished concrete panels on a city street after dark' },
  { step: '04', title: 'Cure & reopen', body: 'Protection stays on through the cure. Barriers come off and the walk goes back into use.', image: 'walkway', alt: 'Completed concrete walkway reopened along a residential street' },
]

/* Prequalifications as supplied by the company. Agency names are given in
   full so a procurement reader can match them to their own register. */
export const certifications: { type: string; label: string; agencies: { code: string; name: string }[] }[] = [
  {
    type: 'MWBE', label: 'Minority and Women-owned Business Enterprise', agencies: [
      { code: 'DASNY', name: 'Dormitory Authority of the State of New York' },
      { code: 'NYC SBS', name: 'NYC Department of Small Business Services' },
      { code: 'NYS ESD', name: 'Empire State Development' },
      { code: 'NYC SCA', name: 'NYC School Construction Authority' },
      { code: 'OGS NY', name: 'NYS Office of General Services' },
      { code: 'PANYNJ', name: 'The Port Authority of New York and New Jersey' },
    ],
  },
  {
    type: 'DBE', label: 'Disadvantaged Business Enterprise', agencies: [
      { code: 'MTA', name: 'Metropolitan Transportation Authority' },
      { code: 'NJDOT', name: 'New Jersey Department of Transportation' },
    ],
  },
  {
    type: 'SBE', label: 'Small Business Enterprise', agencies: [
      { code: 'PANYNJ', name: 'The Port Authority of New York and New Jersey' },
    ],
  },
]

export const agencyCount = new Set(certifications.flatMap(group => group.agencies.map(agency => agency.code))).size

export const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Projects', href: '/projects' },
  { label: 'Qualifications', href: '/qualifications' },
]

export { socials } from './site'

/* The home page opens on a slider: the company first, then one frame for
   each trade. Every photograph here is one of the four written at 1600px. */
export type HeroSlide = {
  id: string
  image: string
  eyebrow: string
  title: [string, string]
  lede: string
  primary: { label: string; to: string }
  secondary: { label: string; to: string }
}

const serviceBySlug = (slug: string) => {
  const found = services.find(service => service.slug === slug)
  if (!found) throw new Error(`No service "${slug}" for the home slider`)
  return found
}

const tradeSlide = (slug: string, title: [string, string], lede: string): HeroSlide => {
  const service = serviceBySlug(slug)
  return {
    id: service.slug,
    image: service.image,
    eyebrow: service.title,
    title,
    lede,
    primary: { label: service.title, to: `/services/${service.slug}` },
    secondary: { label: `${countByCategory(service.category)} photographs`, to: `/projects?trade=${categorySlug(service.category)}` },
  }
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'company',
    image: 'crew',
    eyebrow: 'MWBE · DBE · SBE certified',
    title: ['Building with purpose.', 'Delivering with care.'],
    lede: 'Concrete, masonry and stair construction from our team in Jamaica, New York.',
    primary: { label: 'Explore Our Work', to: '/projects' },
    secondary: { label: 'Contact Our Team', to: '/contact' },
  },
  tradeSlide('concrete-sidewalks', ['Poured to line.', 'Finished by hand.'], 'Sidewalks, driveways and aprons, taken from the subbase up to the final float.'),
  tradeSlide('masonry-blockwork', ['Laid true.', 'Built to last.'], 'Block walls and masonry on live sites, around services and down tight corridors.'),
  tradeSlide('stair-construction', ['Every tread', 'set out right.'], 'Stairways and steps, with the blockwork that carries them.'),
]

/* The kinds of site the company's work goes into, as supplied by the
   company. Named here only, so no photograph is attributed to a place. */
export const sectors: { name: string; icon: 'museum' | 'school' | 'hospital' | 'sidewalk' | 'parking' | 'station' }[] = [
  { name: 'Museums', icon: 'museum' },
  { name: 'Schools', icon: 'school' },
  { name: 'Hospitals', icon: 'hospital' },
  { name: 'Sidewalks', icon: 'sidewalk' },
  { name: 'Parking', icon: 'parking' },
  { name: 'Subway stations', icon: 'station' },
]

/* Before-and-after pairs. Each side is a photograph from the archive, so
   both open to their own page. */
export type Transformation = { id: string; title: string; before: string; after: string; note: string }

export const transformations: Transformation[] = [
  { id: 'station-stairway', title: 'Station stairway', before: 'station-stairs-before', after: 'station-stairs', note: 'The old flight broken out, new treads poured, nosings and rails set and the floor tile relaid.' },
  { id: 'stair-flight', title: 'Stair flight', before: 'stair-breakout', after: 'stair-rebuilt', note: 'From breaking out the old steps with jackhammers to a new concrete flight ready for its finishes.' },
  { id: 'plaza-slab', title: 'Plaza slab', before: 'plaza-formwork', after: 'plaza-cured', note: 'Formwork and mesh set out, concrete placed and floated, then sealed and left to cure.' },
  { id: 'tiled-wall', title: 'Tiled wall', before: 'tile-membrane', after: 'tile-ceiling', note: 'Waterproofing membrane first, then wall tile set to line with the band and trims.' },
]

/* Footage from the same sites, encoded by scripts/prepare-videos.mjs. The
   running time is written here so the page can show it before anything has
   downloaded. */
export type Clip = { id: string; title: string; category: Category; seconds: number; description: string }

export const clips: Clip[] = [
  { id: 'plaza-pour', title: 'Placing the plaza slab', category: 'Concrete', seconds: 31, description: 'Concrete placed over the mesh and screeded off the forms, bay by bay, across the plaza.' },
  { id: 'plaza-seal', title: 'Sealing the slab', category: 'Concrete', seconds: 9, description: 'Curing compound rolled across the finished slab so it holds its moisture while it cures.' },
  { id: 'stone-steps-set', title: 'Setting a stone tread', category: 'Stone', seconds: 21, description: 'A stone tread brought in by forklift on a sling and lowered onto the flight.' },
  { id: 'stone-steps-lift', title: 'Lifting the next tread', category: 'Stone', seconds: 16, description: 'The next tread rigged and lifted while the crew lines it up on the step below.' },
]
