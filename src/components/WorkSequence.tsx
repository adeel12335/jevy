import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { categorySlug, projectById, sequence } from '../data'
import { Lines, Photo, Reveal } from './ui'

/* The work in the order the company presents it: demolition first, then
   the forms, the stone, the pour, the block, the tile and the floor. One
   photograph per stage, each opening the gallery filtered to that trade. */
export function WorkSequence() {
  return <section id="sequence" className="section section--deep section-anchor" aria-labelledby="sequence-title">
    <div className="container">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">The work, in order</p>
          <h2 id="sequence-title"><Lines text={['From demolition', 'to the finished floor.']} accent={1} /></h2>
        </div>
        <p className="lede">Every stage of a job, photographed on our own sites. Open any one for the full set.</p>
      </Reveal>
      <ol className="seq-grid">
        {sequence.map((stage, index) => {
          const photo = projectById(stage.image)!
          return <Reveal as="li" key={stage.image} className="seq-item" delay={index * 0.05}>
            <Link to={`/projects?trade=${categorySlug(stage.category)}`}>
              <span className="seq-thumb"><Photo id={stage.image} alt={photo.alt} sizes="(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 25vw" /></span>
              <span className="seq-body">
                <span className="seq-no">{String(index + 1).padStart(2, '0')}</span>
                <span className="seq-title">{stage.title}</span>
                <span className="seq-go">See the {stage.category.toLowerCase()} work <ArrowRight size={15} aria-hidden="true" /></span>
              </span>
            </Link>
          </Reveal>
        })}
      </ol>
    </div>
  </section>
}
