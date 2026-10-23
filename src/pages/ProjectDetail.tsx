import { Link, Navigate, useParams } from 'react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { categorySlug, inCategory, projectById, projects, serviceForCategory } from '../data'
import { metaFor } from '../routes'
import { Breadcrumbs } from '../components/PageHeader'
import { CallToAction } from '../components/CallToAction'
import { Photo, Reveal, Setout } from '../components/ui'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = id ? projectById(id) : undefined
  if (!project) return <Navigate to="/projects" replace />

  const meta = metaFor(`/projects/${project.id}`)
  /* A "before" frame is not in the gallery run, so it steps through from
     the start of its trade instead. */
  const index = Math.max(0, projects.findIndex(entry => entry.id === project.id))
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const service = serviceForCategory(project.category)
  const siblings = inCategory(project.category).filter(entry => entry.id !== project.id).slice(0, 4)

  return <>
    <article className="project-page">
      <header className="project-head">
        <Setout />
        <div className="container">
          <Breadcrumbs trail={meta.trail!} />
          <div className="project-headline">
            <div>
              <p className="eyebrow">{project.category} · {project.caption}</p>
              <h1>{project.title}</h1>
            </div>
            {project.hidden ? null : <p className="project-counter">{index + 1} <i>/</i> {projects.length}</p>}
          </div>
        </div>
      </header>

      <figure className="project-figure">
        <div className="container">
          <Photo id={project.id} alt={project.alt} className="project-photo" priority sizes="(max-width: 1320px) 100vw, 1320px" />
          <figcaption>{project.alt}.</figcaption>
        </div>
      </figure>

      <div className="container">
        <div className="project-meta">
          <dl>
            <div><dt>Trade</dt><dd>{service
              ? <Link to={`/services/${service.slug}`}>{service.title}</Link>
              : <Link to={`/projects?trade=${categorySlug(project.category)}`}>{project.category}</Link>}</dd></div>
            <div><dt>Stage</dt><dd>{project.caption}</dd></div>
            <div><dt>Photographed by</dt><dd>Jevvy Construction Inc, on site</dd></div>
          </dl>
        </div>

        <nav className="project-nav" aria-label="Project photographs">
          <Link to={`/projects/${previous.id}`} rel="prev">
            <ArrowLeft size={18} aria-hidden="true" />
            <span><small>Previous</small>{previous.title}</span>
          </Link>
          <Link to="/projects" className="project-nav-all">All {projects.length} photographs</Link>
          <Link to={`/projects/${next.id}`} rel="next" className="project-nav-next">
            <span><small>Next</small>{next.title}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </article>

    {siblings.length ? <section className="section section--panel" aria-labelledby="more-trade">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">More {project.category.toLowerCase()}</p>
            <h2 id="more-trade">From the same trade.</h2>
          </div>
          <p className="lede">
            {inCategory(project.category).length} photographs in total.{' '}
            <Link to={`/projects?trade=${categorySlug(project.category)}`}>See them all</Link>.
          </p>
        </Reveal>
        <div className="gallery-grid">
          {siblings.map(sibling => <Link className="gallery-item" key={sibling.id} to={`/projects/${sibling.id}`}>
            <span className="gallery-thumb"><Photo id={sibling.id} alt={sibling.alt} sizes="(max-width: 600px) 90vw, 20rem" /></span>
            <strong>{sibling.title}</strong>
            <span>{sibling.caption}</span>
          </Link>)}
        </div>
      </div>
    </section> : null}

    <CallToAction
      eyebrow={project.category}
      title={['Need work', 'like this?']}
      lede={service
        ? `We build ${service.title.toLowerCase()} across New York and New Jersey. Send us your site and scope.`
        : 'Send us your site and scope and we will come back to you about the work.'}
    />
  </>
}
