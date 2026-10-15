import { Link } from 'react-router'
import { ArrowRight, Plus } from 'lucide-react'
import { projects } from '../data'
import { Lines, Photo, Reveal } from './ui'

const FEATURED = 4

export function FeaturedWork() {
  const featured = projects.slice(0, FEATURED)
  const remaining = projects.length - FEATURED

  return <section id="projects" className="section section--panel section-anchor" aria-labelledby="projects-title">
    <div className="container">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">Our work</p>
          <h2 id="projects-title"><Lines text={['A closer look', 'at the build.']} /></h2>
        </div>
        <p className="lede">Concrete, masonry and stair work from sites across New York. Open a project to see it full size.</p>
      </Reveal>
      <Reveal className="work-grid">
        {featured.map((project, index) => <Link
          key={project.id}
          className={`work-card${index === 0 ? ' work-card--lead' : ''}`}
          to={`/projects/${project.id}`}
        >
          <Photo id={project.id} alt={project.alt} sizes={index === 0 ? '(max-width: 860px) 100vw, 52vw' : '(max-width: 860px) 50vw, 26vw'} priority={index === 0} />
          <span className="work-shade" />
          <span className="work-open" aria-hidden="true"><Plus size={20} /></span>
          <span className="work-body">
            <span className="work-meta">{project.category}{index === 0 && <><i />{project.caption}</>}</span>
            <span className="work-title">{project.title}</span>
          </span>
        </Link>)}
        <Link className="work-more" to="/projects">
          <span>
            <b>+{remaining}</b>
            <span className="work-more-label">More photographs<br />in the gallery</span>
          </span>
          <span className="trade-cta">View all {projects.length}<ArrowRight size={17} aria-hidden="true" /></span>
        </Link>
      </Reveal>
    </div>
  </section>
}
