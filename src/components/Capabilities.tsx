import { capabilities } from '../data'
import { Lines, Reveal, Setout } from './ui'

const pad = (value: number) => String(value).padStart(2, '0')

/* What the company does, in its own words: the work on site and the
   services that carry a project around it. */
export function Capabilities() {
  let count = 0
  return <section id="capabilities" className="section section--navy section-anchor" aria-labelledby="capabilities-title">
    <Setout />
    <div className="container">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">What we do</p>
          <h2 id="capabilities-title"><Lines text={['Expertise in', 'subway construction.']} /></h2>
        </div>
        <p className="lede">The work on site, and the services that carry a project from the estimate to the close-out.</p>
      </Reveal>
      <div className="cap-grid">
        {capabilities.map((group, index) => <Reveal key={group.title} className="cap-group" delay={index * 0.08}>
          <h3>{group.title}</h3>
          <ol className="cap-list">
            {group.items.map(item => {
              count += 1
              return <li key={item}><span className="cap-index" aria-hidden="true">{pad(count)}</span>{item}</li>
            })}
          </ol>
        </Reveal>)}
      </div>
    </div>
  </section>
}
