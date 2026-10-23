export type Category = 'Commercial' | 'Concrete' | 'Formwork' | 'Masonry' | 'Stone' | 'Tile' | 'Stairs' | 'Demolition' | 'Groundwork'
export type Project = { id: string; title: string; category: Category; caption: string; alt: string }

/* Every photograph supplied by the company, catalogued by trade. Titles and
   captions describe what is in the frame; the only place named is the one
   the company asked to be named. Ordered so the unfiltered gallery opens on
   the strongest work and stays varied as it runs. */
/* In the order the company presents the work. */
export const categories: Category[] = ['Demolition', 'Formwork', 'Stone', 'Concrete', 'Masonry', 'Tile', 'Stairs', 'Commercial', 'Groundwork']

const catalogue: Project[] = [
  { id: 'commercial-deck', title: 'Commercial Build: Deck Reinforcement', category: 'Commercial', caption: 'Reinforcement in', alt: 'Reinforcing steel tied out across a commercial building deck, with the city skyline beyond' },
  { id: 'stair-forms', title: 'Stair Flight Formed Up', category: 'Formwork', caption: 'Forms set', alt: 'Timber forms and scaffold for a new stair flight under a skylight, with the crew on the landing above' },
  { id: 'sidewalk', title: 'Sidewalk & Retaining Wall', category: 'Concrete', caption: 'Finished panels', alt: 'Finished concrete sidewalk panels running alongside a stone retaining wall' },
  { id: 'stairs', title: 'Subway Stairway Flight', category: 'Stairs', caption: 'In progress', alt: 'Stair flight under construction with tiled walls and protected handrails' },
  { id: 'masonry', title: 'Block Wall', category: 'Masonry', caption: 'Laid and pointed', alt: 'Concrete block wall under construction on a project site' },
  { id: 'block-stair-forms', title: 'Concrete Block Installation', category: 'Masonry', caption: 'Block walls up', alt: 'Timber stair forms and scaffold between newly laid concrete block walls' },
  { id: 'crew', title: 'Reinforcement Tied Out', category: 'Groundwork', caption: 'On site with the team', alt: 'Crew preparing a reinforced concrete sidewalk behind street barriers' },
  { id: 'station-stairs', title: 'Station Stairway', category: 'Stairs', caption: 'Reopened', alt: 'Rebuilt subway station stairway with yellow nosings, handrails and new floor tile' },
  { id: 'plaza-float', title: 'Lehman College: Floating the Slab', category: 'Concrete', caption: 'Floated', alt: 'Three crew members floating the fresh slab at the Lehman College building stairs' },
  { id: 'commercial-wall-forms', title: 'Commercial Build: Wall Forms', category: 'Commercial', caption: 'Forms set', alt: 'Wall forms and reinforcement set for a concrete wall on a commercial building site' },
  { id: 'tile-band', title: 'Wall Tile with Band', category: 'Tile', caption: 'Finished', alt: 'White wall tile with a blue and black band above a red quarry tile floor' },
  { id: 'tile-before-wall', title: 'Wall Tile, Spacers In', category: 'Tile', caption: 'Before grouting', alt: 'White wall tile set with red spacers along a concrete stair flight, before grouting' },
  { id: 'stone-steps', title: 'Lehman College: Stone Steps', category: 'Stone', caption: 'Set and protected', alt: 'Wide flight of stone steps at the Lehman College building, taped off while the joints cure' },
  { id: 'walkway', title: 'Residential Sidewalk', category: 'Concrete', caption: 'Finished, reopened', alt: 'Completed concrete walkway along a residential street with street trees' },
  { id: 'driveway', title: 'Driveway Apron', category: 'Concrete', caption: 'Finished', alt: 'Wide concrete driveway apron leading to a garage in early morning light' },
  { id: 'commercial-wall-crew', title: 'Commercial Build: Setting a Wall Form', category: 'Commercial', caption: 'In progress', alt: 'Crew member on a ladder setting a wall form on a commercial building site' },
  { id: 'plaza-formwork', title: 'Lehman College: Set Out for the Pour', category: 'Formwork', caption: 'Set to line', alt: 'Timber forms and reinforcing mesh set out before the pour at the Lehman College building stairs' },
  { id: 'entrance', title: 'Gated Entrance', category: 'Concrete', caption: 'Finished', alt: 'Concrete entrance drive between stone gateposts under a blue sky' },
  { id: 'block-wall', title: 'Block Wall Detail', category: 'Masonry', caption: 'Laid and pointed', alt: 'Detailed view of a newly laid concrete block wall above a timber plate' },
  { id: 'stair-detail', title: 'Stairs at the Block Wall', category: 'Stairs', caption: 'In progress', alt: 'Stair flight running alongside a new concrete block wall' },
  { id: 'tile-floor', title: 'Quarry Tile Floor', category: 'Tile', caption: 'Grouted', alt: 'Two crew members grouting a red quarry tile floor beside a glass wall' },
  { id: 'tile-after-wall', title: 'Wall Tile, Completed', category: 'Tile', caption: 'Grouted and finished', alt: 'Finished white wall tile with a tiled skirting above a flight of station steps' },
  { id: 'stair-progress', title: 'Stairway Progress', category: 'Stairs', caption: 'In progress', alt: 'Steps under construction with blue protective tape on the treads' },
  { id: 'pour', title: 'Night Pour', category: 'Concrete', caption: 'Placed and finished', alt: 'Freshly finished concrete panels on a city street after dark' },
  { id: 'commercial-column', title: 'Commercial Build: Column Cage', category: 'Commercial', caption: 'Reinforcement in', alt: 'Column reinforcement cage standing between shoring posts under a formed deck' },
  { id: 'stone-steps-crew', title: 'Lehman College: Setting the Steps', category: 'Stone', caption: 'In progress', alt: 'Crew setting the stone steps at the Lehman College building with a forklift alongside' },
  { id: 'mesh', title: 'Mesh Over Subbase', category: 'Groundwork', caption: 'Site preparation', alt: 'Reinforcing mesh laid over a prepared subbase behind street barriers' },
  { id: 'prep', title: 'Drainage & Subbase', category: 'Groundwork', caption: 'Site preparation', alt: 'Trenching and drainage pipe laid before a concrete pour' },
  { id: 'plaza-pour', title: 'Lehman College: Slab Pour', category: 'Concrete', caption: 'Placed', alt: 'Crew placing concrete across the reinforced slab at the Lehman College building stairs' },
  { id: 'gate-driveway', title: 'Drive Through the Gates', category: 'Concrete', caption: 'Finished', alt: 'Finished concrete drive running between stone gateposts and iron gates' },
  { id: 'stair-rail', title: 'New Flight with Rail', category: 'Stairs', caption: 'Poured', alt: 'New concrete stair flight with a temporary timber handrail' },
  { id: 'stairwell-narrow', title: 'Narrow Stairwell', category: 'Stairs', caption: 'In progress', alt: 'Narrow stair flight rising between a rendered wall and a block wall' },
  { id: 'tile-ceiling', title: 'Tile to the Ceiling, Spacers In', category: 'Tile', caption: 'Before grouting', alt: 'White wall tile with red spacers set up to the ceiling, before grouting' },
  { id: 'tile-before-flight', title: 'Tile up the Flight', category: 'Tile', caption: 'Before grouting', alt: 'Wall tile with red spacers rising alongside a concrete stair flight, membrane still showing at the edge' },
  { id: 'retaining-walk', title: 'Walk Below the Wall', category: 'Concrete', caption: 'Finished', alt: 'Broad concrete walkway below a stone retaining wall with street barriers' },
  { id: 'tree-pit-walk', title: 'Walk with Tree Pits', category: 'Concrete', caption: 'Finished', alt: 'New sidewalk finished around a street tree pit on a residential block' },
  { id: 'stair-treads', title: 'Treads Set Out', category: 'Stairs', caption: 'Set out', alt: 'Stair treads set out and taped ready for finishing' },
  { id: 'commercial-columns', title: 'Commercial Build: Columns & Shoring', category: 'Commercial', caption: 'In progress', alt: 'Column cages and shoring under a formed deck on a commercial building site' },
  { id: 'slab-formwork', title: 'Slab Edge, Set to Line', category: 'Formwork', caption: 'Forms in place', alt: 'Timber forms braced along a slab edge inside a plant room' },
  { id: 'slab-wide', title: 'Wide Slab', category: 'Concrete', caption: 'Fresh finish', alt: 'Wide concrete slab freshly floated across a street frontage' },
  { id: 'joint-detail', title: 'Control Joints', category: 'Concrete', caption: 'Jointed and floated', alt: 'Close view of control joints cut into a floated concrete surface' },
  { id: 'stair-opening', title: 'Landing Broken Out', category: 'Demolition', caption: 'Opened up', alt: 'Stair opening excavated and framed with the first treads set' },
  { id: 'alley-walk', title: 'Alley Walkway', category: 'Concrete', caption: 'Finished', alt: 'Concrete walkway laid along a narrow alley between brick buildings' },
  { id: 'ramp-formwork', title: 'Ramp, Edges Set', category: 'Formwork', caption: 'Forms in place', alt: 'Concrete ramp with the plywood forms still in place' },
  { id: 'plaza-screed', title: 'Lehman College: Screeding', category: 'Concrete', caption: 'Screeded', alt: 'Concrete screeded level across the slab at the Lehman College building stairs' },
  { id: 'pour-edge', title: 'Pour at the Edge', category: 'Concrete', caption: 'Placed', alt: 'Fresh concrete placed against a gravel edge beside a stone wall' },
  { id: 'stair-blockwork', title: 'Stair & Blockwork', category: 'Stairs', caption: 'In progress', alt: 'Stair flight beside a block wall with a scaffold jack supporting the run' },
  { id: 'stone-steps-detail', title: 'Lehman College: Steps in Detail', category: 'Stone', caption: 'In progress', alt: 'Stone treads taped off along the Lehman College building stairs with the crew working above' },
  { id: 'curved-walk', title: 'Curved Walkway', category: 'Concrete', caption: 'Finished', alt: 'Curved concrete walkway passing a scaffold standard' },
  { id: 'sidewalk-taped', title: 'Taped Off to Cure', category: 'Concrete', caption: 'Curing', alt: 'New sidewalk panels taped off with a traffic cone while the concrete cures' },
  { id: 'stair-nosings', title: 'Nosings Set', category: 'Stairs', caption: 'Nosings in', alt: 'Stair treads with new nosings set between tiled walls' },
  { id: 'stone-wall-walk', title: 'Walk at the Stone Wall', category: 'Concrete', caption: 'Barriers in place', alt: 'Concrete walkway beside a stone wall with orange street barriers' },
  { id: 'manhole-apron', title: 'Apron with Covers', category: 'Concrete', caption: 'Finished', alt: 'Concrete apron finished around two utility covers beside a stone wall' },
  { id: 'tile-membrane', title: 'Membrane Before Tile', category: 'Tile', caption: 'In progress', alt: 'Blue waterproofing membrane on a wall beside new tile, with a mixer and cone on the floor' },
  { id: 'tile-floor-grouting', title: 'Floor Tiles: Grouting', category: 'Tile', caption: 'Grouting', alt: 'Crew member grouting a red quarry tile floor by hand beside a glass wall' },
  { id: 'tile-before-shoring', title: 'Tile Under the Shoring', category: 'Tile', caption: 'Before grouting', alt: 'White wall tile with red spacers set behind two shoring posts under a formed landing' },
  { id: 'tile-after-rail', title: 'Tile and Handrail, Completed', category: 'Tile', caption: 'Grouted and finished', alt: 'Finished white wall tile with a stainless handrail above a flight of station steps' },
  { id: 'tile-before-shoring-stair', title: 'Tile to the Stair', category: 'Tile', caption: 'Before grouting', alt: 'White wall tile with red spacers running past a shoring post to the stair flight' },
  { id: 'side-passage', title: 'Side Passage', category: 'Concrete', caption: 'Finished', alt: 'Narrow concrete passage between a brick wall and a fence' },
  { id: 'formwork-edge', title: 'Sidewalk Edge, Set to Line', category: 'Formwork', caption: 'Forms in place', alt: 'Timber forms holding the edge of a new concrete sidewalk panel' },
  { id: 'stair-rebuilt', title: 'Flight Rebuilt', category: 'Stairs', caption: 'Poured', alt: 'Freshly poured concrete stair flight rising between plain walls' },
  { id: 'hoarding-walk', title: 'Walk at the Hoarding', category: 'Concrete', caption: 'Finished', alt: 'Concrete walkway running past a green site hoarding' },
  { id: 'street-barriers', title: 'Street Frontage', category: 'Concrete', caption: 'Barriers in place', alt: 'New concrete street frontage protected by barriers at dusk' },
  { id: 'plaza-cured', title: 'Lehman College: Slab Sealed', category: 'Concrete', caption: 'Cured and sealed', alt: 'The finished slab at the Lehman College building stairs with curing compound rolled on' },
  { id: 'gateway-apron', title: 'Gateway Apron', category: 'Concrete', caption: 'Curing', alt: 'Concrete apron at a gated entrance with barriers set out' },
  { id: 'stone-apron', title: 'Stone Wall Apron', category: 'Concrete', caption: 'Finished', alt: 'Concrete apron meeting a mortared stone wall' },
  { id: 'station-stairs-before', title: 'Station Stairway, Before', category: 'Stairs', caption: 'Before', alt: 'Worn subway station stairway behind iron gates before reconstruction' },
  { id: 'column-base', title: 'Slab at the Column', category: 'Concrete', caption: 'Finished', alt: 'Concrete slab finished tight to a painted steel column base' },
  { id: 'driveway-garage', title: 'Garage Driveway', category: 'Concrete', caption: 'Finished', alt: 'Concrete driveway leading to a brick garage with a car parked alongside' },
  { id: 'stair-breakout', title: 'Breaking Out', category: 'Demolition', caption: 'Breaking out', alt: 'Crew breaking out an old stair flight with jackhammers' },
  { id: 'ramp-fence', title: 'Ramped Walkway', category: 'Concrete', caption: 'Finished', alt: 'Concrete ramp rising beside a timber fence' },
  { id: 'gateway-clearance', title: 'Clearing the Gateway', category: 'Demolition', caption: 'Breaking out', alt: 'Excavator clearing concrete rubble between stone gate pillars' },
  { id: 'gateway-rubble', title: 'Gateway Broken Out', category: 'Demolition', caption: 'Broken out', alt: 'Broken concrete piled between stone gate pillars behind orange barriers' },
  { id: 'excavation', title: 'Excavation', category: 'Demolition', caption: 'Site preparation', alt: 'Excavated ground with service pipe and bucket before new work' },
]

/* The gallery runs in the company's order of work (see `categories`), each
   trade keeping the order the frames were catalogued in. */
export const projects: Project[] = [...catalogue].sort((a, b) => categories.indexOf(a.category) - categories.indexOf(b.category))


export const categorySlug = (category: Category) => category.toLowerCase().replace(/\s+/g, '-')
export const categoryFromSlug = (slug: string) => categories.find(category => categorySlug(category) === slug)
export const serviceForCategory = (category: Category) => services.find(service => service.category === category)
export const projectById = (id: string) => projects.find(project => project.id === id)
export const inCategory = (category: Category) => projects.filter(project => project.category === category)

export const countByCategory = (category: Category) => projects.filter(project => project.category === category).length

/* The photographs that run full-bleed in the home slider; these are the only
   four written at 1600px by scripts/prepare-assets.mjs. */
export const fullBleed = new Set(['crew', 'sidewalk', 'masonry', 'stairs', 'commercial-deck', 'commercial-wall-forms', 'stair-forms'])

/* The eleven services the company offers, in its own wording.

   `category` and `image` are set only for the four trades the photo archive
   actually covers. The other seven carry no imagery rather than borrow a
   picture of somebody else's work. */
export const services: {
  slug: string
  title: string
  lines: string[]
  description: string
  items: string[]
  category?: Category
  image?: string
  detail?: string
}[] = [
  {
    slug: 'concrete-work', title: 'Concrete Work', lines: ['Concrete', 'Work'],
    category: 'Concrete', image: 'sidewalk',
    description: 'Preparation, forming and finishing for concrete surfaces, inside and out.',
    detail: 'From the ground beneath a surface, through formwork and reinforcement, to the finished and jointed pour.',
    items: ['Site preparation & subbase', 'Formwork & reinforcement', 'Sidewalks, slabs & driveways', 'Steps, ramps & aprons'],
  },
  {
    slug: 'masonry-brick-block', title: 'Masonry, Brick & Block Work', lines: ['Masonry, Brick', '& Block Work'],
    category: 'Masonry', image: 'masonry',
    description: 'Block walls, brickwork and the masonry details that go with them.',
    detail: 'Concrete block, brick, and the blockwork that carries stairs, services and structure.',
    items: ['Concrete block walls', 'Brickwork', 'Blockwork around services', 'Repairs and making good'],
  },
  {
    slug: 'stonework', title: 'Stonework & Installation', lines: ['Stonework &', 'Installation'],
    category: 'Stone', image: 'stone-steps',
    description: 'Cut stone set by hand — treads, copings, facings and surrounds.',
    detail: 'Setting cut stone to line and level, from stair treads through to copings, facings and surrounds.',
    items: ['Stone steps & treads', 'Copings & facings', 'Setting & bedding', 'Pointing & finishing'],
  },
  {
    slug: 'tile-installation', title: 'Tile Installation', lines: ['Tile', 'Installation'],
    category: 'Tile', image: 'tile-band',
    description: 'Wall and floor tile, with the membranes and substrates beneath them.',
    detail: 'Tile laid over a prepared substrate, including the waterproof membrane where the room needs one.',
    items: ['Wall tile', 'Floor & quarry tile', 'Membranes & substrates', 'Banding & detail courses'],
  },
  {
    slug: 'k-rail-installation', title: 'K-Rail Installation', lines: ['K-Rail', 'Installation'],
    description: 'Concrete barrier placed, moved and struck as the work moves across a site.',
    items: ['Barrier placement', 'Site & lane protection', 'Repositioning as work moves', 'Removal & reinstatement'],
  },
  {
    slug: 'plumbing', title: 'Plumbing', lines: ['Plumbing'],
    description: 'Plumbing for renovation and new construction, residential and commercial.',
    items: ['Rough-in & fit-out', 'Fixture installation', 'Alterations & repairs', 'Coordination with other trades'],
  },
  {
    slug: 'painting', title: 'Interior & Exterior Painting', lines: ['Interior & Exterior', 'Painting'],
    description: 'Preparation and painting to interior and exterior surfaces.',
    items: ['Surface preparation', 'Interior finishes', 'Exterior coatings', 'Making good behind other trades'],
  },
  {
    slug: 'countertops', title: 'Countertops', lines: ['Countertops'],
    description: 'Countertop supply and installation for kitchens, bathrooms and work areas.',
    items: ['Templating & fitting', 'Installation', 'Cut-outs & edge work', 'Sealing & finishing'],
  },
  {
    slug: 'scaffolding', title: 'Scaffolding', lines: ['Scaffolding'],
    description: 'Access scaffold erected, maintained and struck as the job needs it.',
    items: ['Erection & dismantling', 'Access & working platforms', 'Inspection through the works'],
  },
  {
    slug: 'waterproofing', title: 'Waterproofing', lines: ['Waterproofing'],
    description: 'Membranes and waterproof detailing that keep water where it belongs.',
    items: ['Membranes & tanking', 'Wet area waterproofing', 'Detailing at junctions & upstands'],
  },
  {
    slug: 'cleaning-services', title: 'Cleaning Services', lines: ['Cleaning', 'Services'],
    description: 'Construction cleaning through the works and on handover.',
    items: ['Builders clean through the works', 'Final clean at handover', 'Debris clearance'],
  },
]

/* The four with photography behind them — used wherever the layout shows a
   service as a picture rather than as a line in a list. */
export const featuredServices = services.filter(service => service.image)

/* The four stages every concrete job runs through, each illustrated with a
   photograph from one of our own sites rather than a stock image. */
export const process: { step: string; title: string; body: string; image: string; alt: string }[] = [
  { step: '01', title: 'Excavate & prep', body: 'Excavation, drainage and subbase, cut to the depth the new surface needs.', image: 'prep', alt: 'Trenching and drainage pipe laid before a concrete pour' },
  { step: '02', title: 'Form & reinforce', body: 'Edges set to line and grade, then reinforcing mesh tied out across the base.', image: 'mesh', alt: 'Reinforcing mesh laid over a prepared subbase behind street barriers' },
  { step: '03', title: 'Pour & finish', body: 'Concrete placed, screeded and floated, then jointed and finished by hand.', image: 'pour', alt: 'Freshly finished concrete panels on a city street after dark' },
  { step: '04', title: 'Cure & reopen', body: 'Protection stays on through the cure. Barriers come off and the walk goes back into use.', image: 'walkway', alt: 'Completed concrete walkway reopened along a residential street' },
]

/* Certifications and agency credentials as the company states them. Codes
   are given with the full name so a procurement reader can match them to
   their own register. */
export type Credential = { type: string; label: string; kind: 'certification' | 'agency' | 'registration'; agencies: { code: string; name: string }[] }

export const certifications: Credential[] = [
  {
    type: 'Certified', label: 'Business certifications', kind: 'certification', agencies: [
      { code: 'WOSB', name: 'Women-Owned Small Business' },
      { code: 'WBE', name: 'Women-owned Business Enterprise' },
      { code: 'MBE', name: 'Minority-owned Business Enterprise' },
      { code: 'MWBE NY', name: 'Minority and Women-owned Business Enterprise, New York State' },
      { code: 'MWBE NYC', name: 'Minority and Women-owned Business Enterprise, New York City' },
    ],
  },
  {
    type: 'Credentialed', label: 'Agency credentials', kind: 'agency', agencies: [
      { code: 'SCA', name: 'NYC School Construction Authority' },
      { code: 'PANYNJ', name: 'The Port Authority of New York and New Jersey' },
      { code: 'MTA', name: 'Metropolitan Transportation Authority' },
    ],
  },
  {
    type: 'Registered', label: 'Registered vendor', kind: 'registration', agencies: [
      { code: 'OGS', name: 'New York State Office of General Services' },
      { code: 'DASNY', name: 'Dormitory Authority of the State of New York' },
    ],
  },
]

export const certified = certifications.filter(group => group.kind === 'certification')
export const agencyCredentials = certifications.filter(group => group.kind === 'agency')
export const registrations = certifications.filter(group => group.kind === 'registration')
/* The public agencies the company holds a credential with. */
export const agencyCount = new Set(agencyCredentials.flatMap(group => group.agencies.map(agency => agency.code))).size

const listOf = (items: string[]) => items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}` : items.join('')
/* The codes in one line each, in the company's own form. */
/* The two MWBE certificates, state and city, read as one entry: "MWBE NY/NYC". */
export const certificationLine = listOf([...new Set(certified.flatMap(group => group.agencies.map(agency => agency.code.startsWith('MWBE') ? 'MWBE NY/NYC' : agency.code)))])
export const agencyLine = listOf(agencyCredentials.flatMap(group => group.agencies.map(agency => agency.code)))
export const registrationLine = listOf(registrations.flatMap(group => group.agencies.map(agency => agency.code)))
/* "Certified WOSB, WBE, MBE and city and state MWBE" and so on, one phrase each. */
export const prequalified = [`Certified ${certificationLine}`, `Credentials with ${agencyLine}`, `Registered with ${registrationLine}`]

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
    image: service.image!,
    eyebrow: service.title,
    title,
    lede,
    primary: { label: service.title, to: `/services/${service.slug}` },
    secondary: { label: `${countByCategory(service.category!)} photographs`, to: `/projects?trade=${categorySlug(service.category!)}` },
  }
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'company',
    image: 'stair-forms',
    eyebrow: 'MWBE · SBE · DBE certified',
    title: ['Building with purpose.', 'Delivering with care.'],
    lede: 'We provide construction services throughout New York and New Jersey.',
    primary: { label: 'Explore Our Work', to: '/projects' },
    secondary: { label: 'Contact Our Team', to: '/contact' },
  },
  {
    id: 'commercial',
    image: 'commercial-wall-forms',
    eyebrow: 'Residential & commercial',
    title: ['Renovation and', 'new construction.'],
    lede: 'Residential and commercial projects, from start to finish.',
    primary: { label: 'See the commercial work', to: '/projects?trade=commercial' },
    secondary: { label: 'Start a Project', to: '/contact' },
  },
  tradeSlide('concrete-work', ['Poured to line.', 'Finished by hand.'], 'Sidewalks, driveways and aprons, taken from the subbase up to the final float.'),
  tradeSlide('masonry-brick-block', ['Laid true.', 'Built to last.'], 'Block, brick and masonry on live sites, around services and down tight corridors.'),
  tradeSlide('stonework', ['Cut stone.', 'Set by hand.'], 'Treads, copings and facings, bedded to line and level and pointed up.'),
]

/* The kinds of site the company's work goes into, as supplied by the
   company. */
export const sectors: { name: string; icon: 'commercial' | 'residential' | 'museum' | 'school' | 'hospital' | 'sidewalk' | 'parking' | 'station' }[] = [
  { name: 'Commercial buildings', icon: 'commercial' },
  { name: 'Residential', icon: 'residential' },
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
  { id: 'stair-flight', title: 'Demolition / concrete pouring completed', before: 'stair-breakout', after: 'stair-rebuilt', note: 'Demolition of the old steps with jackhammers, then the new concrete flight poured and completed.' },
  { id: 'plaza-slab', title: 'Lehman College building stairs', before: 'plaza-formwork', after: 'plaza-cured', note: 'Forms and mesh set out, concrete placed and floated, then sealed and left to cure at the Lehman College building stairs.' },
  { id: 'tiled-wall', title: 'Tiled wall', before: 'tile-before-wall', after: 'tile-after-wall', note: 'Wall tile set with spacers along the flight, then grouted and finished with the skirting.' },
  { id: 'tiled-rail', title: 'Tile and handrail', before: 'tile-before-shoring', after: 'tile-after-rail', note: 'Tile set behind the shoring while the landing above is formed, then grouted and the handrail fixed.' },
]

/* Footage from the same sites, encoded by scripts/prepare-videos.mjs. The
   running time is written here so the page can show it before anything has
   downloaded. */
export type Clip = { id: string; title: string; category: Category; seconds: number; description: string; portrait?: boolean }

export const clips: Clip[] = [
  { id: 'plaza-pour', title: 'Lehman College: placing the slab', category: 'Concrete', seconds: 31, description: 'Concrete placed over the mesh and screeded off the forms, bay by bay, at the Lehman College building stairs.' },
  { id: 'plaza-seal', title: 'Lehman College: sealing the slab', category: 'Concrete', seconds: 9, description: 'Curing compound rolled across the finished slab so it holds its moisture while it cures.' },
  { id: 'stone-steps-set', title: 'Lehman College: setting a stone tread', category: 'Stone', seconds: 21, description: 'A stone tread brought in by forklift on a sling and lowered onto the flight.' },
  { id: 'stone-steps-lift', title: 'Lehman College: lifting the next tread', category: 'Stone', seconds: 16, description: 'The next tread rigged and lifted while the crew lines it up on the step below.' },
  { id: 'commercial-deck-site', title: 'Commercial build: the deck', category: 'Commercial', seconds: 30, portrait: true, description: 'Deck forms and reinforcement across a commercial building site, the next floor going up.' },
  { id: 'commercial-pour-night', title: 'Commercial build: night pour', category: 'Commercial', seconds: 17, portrait: true, description: 'The pump placing concrete across the reinforced deck after dark.' },
  { id: 'commercial-deck-crew', title: 'Commercial build: tying the deck', category: 'Commercial', seconds: 42, portrait: true, description: 'Crew working across the reinforcement under the formed floor above.' },
]

/* What the company does, as supplied by the company: the work on site and
   the services around a project. */
export const capabilities: { title: string; items: string[] }[] = [
  { title: 'Our services include', items: services.map(service => service.title) },
  { title: 'For the project', items: ['Contract administration', 'Owner / contractor representation', 'Cost estimating', 'Quality control inspections', 'Subcontracting support'] },
]

/* One photograph per stage, in the order the company wants the work shown. */
export const sequence: { title: string; category: Category; image: string }[] = [
  { title: 'Demolition', category: 'Demolition', image: 'stair-breakout' },
  { title: 'Formwork', category: 'Formwork', image: 'stair-forms' },
  { title: 'Stone installation', category: 'Stone', image: 'stone-steps-crew' },
  { title: 'Concrete pouring', category: 'Concrete', image: 'plaza-pour' },
  { title: 'Block work', category: 'Masonry', image: 'block-stair-forms' },
  { title: 'Tiles', category: 'Tile', image: 'tile-after-wall' },
  { title: 'Floor tiles', category: 'Tile', image: 'tile-floor' },
]
