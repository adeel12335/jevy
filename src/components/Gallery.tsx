import { useRef } from 'react'
import { Link } from 'react-router'
import { Images } from 'lucide-react'
import { useScrollTransform } from '../parallax'
import { categories, categorySlug, countByCategory, projects } from '../data'
import { Lines, Photo, Reveal } from './ui'

/* Two rows of the archive drifting past each other as the page scrolls. The
   strip is a visual duplicate of the gallery page, so screen readers are sent
   straight there instead — it holds the same photographs with their captions,
   filters and links. */
export function Archive() {
  const ref = useRef<HTMLElement>(null)
  const rowOne = useRef<HTMLDivElement>(null)
  const rowTwo = useRef<HTMLDivElement>(null)
  useScrollTransform(ref, rowOne, { from: 0, to: -26, unit: '%', axis: 'x', track: 'cover' })
  useScrollTransform(ref, rowTwo, { from: -26, to: 0, unit: '%', axis: 'x', track: 'cover' })

  const half = Math.ceil(projects.length / 2)
  const rows = [projects.slice(0, half), projects.slice(half)]
  const rowRefs = [rowOne, rowTwo]

  return <section id="gallery" className="section section--deep section-anchor gallery-section" aria-labelledby="gallery-title" ref={ref}>
    <div className="container">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">The archive</p>
          <h2 id="gallery-title"><Lines text={['Every photograph', 'is our own work.']} accent={1} /></h2>
        </div>
        <div className="gallery-intro">
          <p className="lede">{projects.length} photographs from our concrete, masonry, stair and groundwork sites. No stock images, no renders.</p>
          <Link className="button button-outline gallery-open" to="/projects">
            <Images size={18} aria-hidden="true" />View all {projects.length} photographs
          </Link>
        </div>
      </Reveal>
    </div>

    <div className="marquee" aria-hidden="true">
      {rows.map((row, index) => <div className="marquee-row" key={index} ref={rowRefs[index]}>
        {row.map(project => <Link className="marquee-tile" key={project.id} to={`/projects/${project.id}`} tabIndex={-1}>
          <Photo id={project.id} alt="" sizes="260px" />
          <span className="marquee-label">{project.title}</span>
        </Link>)}
      </div>)}
    </div>

    <div className="container">
      <Reveal className="gallery-tally">
        {categories.map(category => <Link key={category} className="tally-item" to={`/projects?trade=${categorySlug(category)}`}>
          <b>{countByCategory(category)}</b>
          <span>{category}</span>
          <span className="sr-only"> photographs — open the gallery filtered to {category.toLowerCase()}</span>
        </Link>)}
      </Reveal>
    </div>
  </section>
}
