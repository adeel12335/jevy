export type Category = 'Concrete' | 'Masonry' | 'Stairs' | 'Groundwork'
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
  { id: 'walkway', title: 'Residential Sidewalk', category: 'Concrete', caption: 'Finished, reopened', alt: 'Completed concrete walkway along a residential street with street trees' },
  { id: 'driveway', title: 'Driveway Apron', category: 'Concrete', caption: 'Finished', alt: 'Wide concrete driveway apron leading to a garage in early morning light' },
  { id: 'entrance', title: 'Gated Entrance', category: 'Concrete', caption: 'Finished', alt: 'Concrete entrance drive between stone gateposts under a blue sky' },
  { id: 'block-wall', title: 'Block Wall Detail', category: 'Masonry', caption: 'Laid and pointed', alt: 'Detailed view of a newly laid concrete block wall above a timber plate' },
  { id: 'stair-detail', title: 'Stairs at the Block Wall', category: 'Stairs', caption: 'In progress', alt: 'Stair flight running alongside a new concrete block wall' },
  { id: 'stair-progress', title: 'Stairway Progress', category: 'Stairs', caption: 'In progress', alt: 'Steps under construction with blue protective tape on the treads' },
  { id: 'pour', title: 'Night Pour', category: 'Concrete', caption: 'Placed and finished', alt: 'Freshly finished concrete panels on a city street after dark' },
  { id: 'mesh', title: 'Mesh Over Subbase', category: 'Groundwork', caption: 'Site preparation', alt: 'Reinforcing mesh laid over a prepared subbase behind street barriers' },
  { id: 'prep', title: 'Drainage & Subbase', category: 'Groundwork', caption: 'Site preparation', alt: 'Trenching and drainage pipe laid before a concrete pour' },
  { id: 'gate-driveway', title: 'Drive Through the Gates', category: 'Concrete', caption: 'Finished', alt: 'Finished concrete drive running between stone gateposts and iron gates' },
  { id: 'block-services', title: 'Blockwork Around Services', category: 'Masonry', caption: 'In progress', alt: 'Block wall built around ductwork and service runs in a plant room' },
  { id: 'stairwell-narrow', title: 'Narrow Stairwell', category: 'Stairs', caption: 'In progress', alt: 'Narrow stair flight rising between a rendered wall and a block wall' },
  { id: 'retaining-walk', title: 'Walk Below the Wall', category: 'Concrete', caption: 'Finished', alt: 'Broad concrete walkway below a stone retaining wall with street barriers' },
  { id: 'tree-pit-walk', title: 'Walk with Tree Pits', category: 'Concrete', caption: 'Finished', alt: 'New sidewalk finished around a street tree pit on a residential block' },
  { id: 'stair-treads', title: 'Treads Set Out', category: 'Stairs', caption: 'Set out', alt: 'Stair treads set out and taped ready for finishing' },
  { id: 'block-interior', title: 'Interior Blockwork', category: 'Masonry', caption: 'In progress', alt: 'Interior concrete block wall built up against a timber plate' },
  { id: 'slab-wide', title: 'Wide Slab', category: 'Concrete', caption: 'Fresh finish', alt: 'Wide concrete slab freshly floated across a street frontage' },
  { id: 'joint-detail', title: 'Control Joints', category: 'Concrete', caption: 'Jointed and floated', alt: 'Close view of control joints cut into a floated concrete surface' },
  { id: 'stair-opening', title: 'Stair Opening', category: 'Stairs', caption: 'Opened up', alt: 'Stair opening excavated and framed with the first treads set' },
  { id: 'block-mixer', title: 'Mixing on Site', category: 'Masonry', caption: 'In progress', alt: 'Mixing buckets and a mixer standing at the foot of a new block wall' },
  { id: 'alley-walk', title: 'Alley Walkway', category: 'Concrete', caption: 'Finished', alt: 'Concrete walkway laid along a narrow alley between brick buildings' },
  { id: 'ramp-formwork', title: 'Ramp & Formwork', category: 'Concrete', caption: 'Formwork in place', alt: 'Concrete ramp with plywood formwork still in place' },
  { id: 'pour-edge', title: 'Pour at the Edge', category: 'Concrete', caption: 'Placed', alt: 'Fresh concrete placed against a gravel edge beside a stone wall' },
  { id: 'stair-blockwork', title: 'Stair & Blockwork', category: 'Stairs', caption: 'In progress', alt: 'Stair flight beside a block wall with a scaffold jack supporting the run' },
  { id: 'block-corner', title: 'Blockwork Corner', category: 'Masonry', caption: 'In progress', alt: 'Corner of a block wall with service runs and tape at a plant room' },
  { id: 'curved-walk', title: 'Curved Walkway', category: 'Concrete', caption: 'Finished', alt: 'Curved concrete walkway passing a scaffold standard' },
  { id: 'sidewalk-taped', title: 'Taped Off to Cure', category: 'Concrete', caption: 'Curing', alt: 'New sidewalk panels taped off with a traffic cone while the concrete cures' },
  { id: 'stone-wall-walk', title: 'Walk at the Stone Wall', category: 'Concrete', caption: 'Barriers in place', alt: 'Concrete walkway beside a stone wall with orange street barriers' },
  { id: 'manhole-apron', title: 'Apron with Covers', category: 'Concrete', caption: 'Finished', alt: 'Concrete apron finished around two utility covers beside a stone wall' },
  { id: 'block-corridor', title: 'Blockwork Corridor', category: 'Masonry', caption: 'In progress', alt: 'Block wall running down a plant corridor past ductwork and cones' },
  { id: 'side-passage', title: 'Side Passage', category: 'Concrete', caption: 'Finished', alt: 'Narrow concrete passage between a brick wall and a fence' },
  { id: 'formwork-edge', title: 'Formed Edge', category: 'Concrete', caption: 'Formwork in place', alt: 'Timber formwork holding the edge of a new concrete sidewalk panel' },
  { id: 'hoarding-walk', title: 'Walk at the Hoarding', category: 'Concrete', caption: 'Finished', alt: 'Concrete walkway running past a green site hoarding' },
  { id: 'street-barriers', title: 'Street Frontage', category: 'Concrete', caption: 'Barriers in place', alt: 'New concrete street frontage protected by barriers at dusk' },
  { id: 'gateway-apron', title: 'Gateway Apron', category: 'Concrete', caption: 'Curing', alt: 'Concrete apron at a gated entrance with barriers set out' },
  { id: 'stone-apron', title: 'Stone Wall Apron', category: 'Concrete', caption: 'Finished', alt: 'Concrete apron meeting a mortared stone wall' },
  { id: 'column-base', title: 'Slab at the Column', category: 'Concrete', caption: 'Finished', alt: 'Concrete slab finished tight to a painted steel column base' },
  { id: 'driveway-garage', title: 'Garage Driveway', category: 'Concrete', caption: 'Finished', alt: 'Concrete driveway leading to a brick garage with a car parked alongside' },
  { id: 'ramp-fence', title: 'Ramped Walkway', category: 'Concrete', caption: 'Finished', alt: 'Concrete ramp rising beside a timber fence' },
  { id: 'excavation', title: 'Excavation', category: 'Groundwork', caption: 'Site preparation', alt: 'Excavated ground with service pipe and bucket before new work' },
]

export const categories: Category[] = ['Concrete', 'Masonry', 'Stairs', 'Groundwork']

export const categorySlug = (category: Category) => category.toLowerCase()
export const categoryFromSlug = (slug: string) => categories.find(category => categorySlug(category) === slug)
export const serviceForCategory = (category: Category) => services.find(service => service.category === category)
export const projectById = (id: string) => projects.find(project => project.id === id)
export const inCategory = (category: Category) => projects.filter(project => project.category === category)

export const countByCategory = (category: Category) => projects.filter(project => project.category === category).length

/* The photographs that run full-bleed; these are the only two written at
   1600px by scripts/prepare-assets.mjs. */
export const fullBleed = new Set(['crew', 'sidewalk'])

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
