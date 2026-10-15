import { Link, useSearchParams } from 'react-router'
import { categories, categoryFromSlug, categorySlug, countByCategory, projects, serviceForCategory } from '../data'
import { metaFor } from '../routes'
import { PageHeader } from '../components/PageHeader'
import { CallToAction } from '../components/CallToAction'
import { BeforeAfter } from '../components/BeforeAfter'
import { Photo, Reveal, TextLink } from '../components/ui'

export default function Projects() {
  const meta = metaFor('/projects')
  const [params] = useSearchParams()
  const active = categoryFromSlug(params.get('trade') ?? '')
  const visible = active ? projects.filter(project => project.category === active) : projects
  const service = active ? serviceForCategory(active) : undefined

  return <>
    <PageHeader
      eyebrow="The archive"
      title={['Every photograph', 'is our own work.']}
      lede={<p>{projects.length} frames from our concrete, formwork, masonry, stone, tile, stair and groundwork sites across New York and New Jersey. No stock images and no renders — just the work as it went in.</p>}
      trail={meta.trail!}
      compact
    />

    <section className="section section--deep" aria-labelledby="gallery-heading">
      <div className="container">
        <h2 id="gallery-heading" className="sr-only">Project photographs</h2>

        <Reveal className="filter-bar">
          <nav className="gallery-filters" aria-label="Filter photographs by trade">
            <Link to="/projects" className={active ? undefined : 'active'} aria-current={active ? undefined : 'page'}>
              All<span>{projects.length}</span>
            </Link>
            {categories.map(category => <Link
              key={category}
              to={`/projects?trade=${categorySlug(category)}`}
              className={active === category ? 'active' : undefined}
              aria-current={active === category ? 'page' : undefined}
            >{category}<span>{countByCategory(category)}</span></Link>)}
          </nav>
          <p className="filter-count" role="status">
            Showing {visible.length} {active ? `${active.toLowerCase()} ` : ''}photograph{visible.length === 1 ? '' : 's'}
            {service ? <> · <TextLink to={`/services/${service.slug}`}>About {service.title.toLowerCase()}</TextLink></> : null}
          </p>
        </Reveal>

        <div className="gallery-grid">
          {visible.map((project, index) => <Link className="gallery-item" key={project.id} to={`/projects/${project.id}`}>
            <span className="gallery-thumb">
              <Photo id={project.id} alt={project.alt} sizes="(max-width: 600px) 90vw, (max-width: 1080px) 44vw, 20rem" priority={index < 4} />
            </span>
            <strong>{project.title}</strong>
            <span>{project.category} · {project.caption}</span>
          </Link>)}
        </div>
      </div>
    </section>

    <BeforeAfter />

    <CallToAction
      eyebrow="Seen something like your job?"
      title={['Let us look', 'at your site.']}
    />
  </>
}
