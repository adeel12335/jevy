import { useId, useState, type CSSProperties } from 'react'
import { Link } from 'react-router'
import { projectById, transformations } from '../data'
import { Lines, Photo, Reveal } from './ui'

/* Two photographs of the same work stacked in one frame. The "before" sits
   on top, clipped to the left of a handle the reader drags; the drag is a
   full-size range input, so it also answers to the keyboard and a screen
   reader, and the prerendered markup opens at the halfway mark. */
function Compare({ before, after, title }: { before: string; after: string; title: string }) {
  const [position, setPosition] = useState(50)
  const id = useId()
  const beforePhoto = projectById(before)!
  const afterPhoto = projectById(after)!

  return <div className="compare" style={{ '--pos': `${position}%` } as CSSProperties}>
    <div className="compare-after">
      <Photo id={after} alt={afterPhoto.alt} sizes="(max-width: 860px) 100vw, 50vw" />
    </div>
    <div className="compare-before" aria-hidden="true">
      <Photo id={before} alt="" sizes="(max-width: 860px) 100vw, 50vw" />
    </div>
    <span className="compare-badge compare-badge--before" aria-hidden="true">Before</span>
    <span className="compare-badge compare-badge--after" aria-hidden="true">After</span>
    <span className="compare-handle" aria-hidden="true"><span /></span>
    <label className="sr-only" htmlFor={id}>Compare before and after: {title}. Before: {beforePhoto.alt}.</label>
    <input
      id={id}
      className="compare-range"
      type="range"
      min={0}
      max={100}
      value={position}
      onChange={event => setPosition(Number(event.target.value))}
      aria-valuetext={`${position}% of the before photograph showing`}
    />
  </div>
}

export function BeforeAfter() {
  return <section id="before-after" className="section section--slab section-anchor" aria-labelledby="compare-title">
    <div className="container">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">Start to finish</p>
          <h2 id="compare-title"><Lines text={['The same site,', 'before and after.']} /></h2>
        </div>
        <p className="lede">Drag the handle across each pair. Both frames are our own site, photographed as the job went in and again when it was done.</p>
      </Reveal>
      <div className="compare-grid">
        {transformations.map((pair, index) => <Reveal key={pair.id} className="compare-item" delay={index * 0.07}>
          <Compare before={pair.before} after={pair.after} title={pair.title} />
          <div className="compare-caption">
            <h3>{pair.title}</h3>
            <p>{pair.note}</p>
            <span className="compare-links">
              <Link to={`/projects/${pair.before}`}>Before<span className="sr-only">: {pair.title}</span></Link>
              <i aria-hidden="true" />
              <Link to={`/projects/${pair.after}`}>After<span className="sr-only">: {pair.title}</span></Link>
            </span>
          </div>
        </Reveal>)}
      </div>
    </div>
  </section>
}
