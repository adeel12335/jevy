import { process } from '../data'
import { Lines, Photo, Reveal } from './ui'

export function Process({ heading = true }: { heading?: boolean }) {
  return <section
    id="process"
    className="section section--slab section-anchor"
    aria-labelledby={heading ? 'process-title' : undefined}
    aria-label={heading ? undefined : 'How the work goes in'}
  >
    <div className="container">
      {heading ? <Reveal className="section-head">
        <div>
          <p className="eyebrow">From our site photography</p>
          <h2 id="process-title"><Lines text={['How the work', 'goes in.']} /></h2>
        </div>
        <p className="lede">Four stages every concrete job runs through, photographed on our own sites — from the first cut to the day the walk reopens.</p>
      </Reveal> : null}
      <ol className="process-grid">
        {process.map((stage, index) => <Reveal key={stage.step} as="li" className="process-step" delay={index * 0.07}>
          <Photo id={stage.image} alt={stage.alt} className="process-photo" sizes="(max-width: 560px) 100vw, (max-width: 1080px) 46vw, 23vw" />
          <div className="process-bar">
            <span className="step-no">{stage.step}</span>
            <h3>{stage.title}</h3>
          </div>
          <p>{stage.body}</p>
        </Reveal>)}
      </ol>
    </div>
  </section>
}
