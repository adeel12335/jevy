import { Link } from 'react-router'
import { capabilities, services } from '../data'
import { company } from '../site'
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
          <h2 id="capabilities-title"><Lines text={['Residential & commercial', 'construction services.']} /></h2>
        </div>
        <p className="lede">{company.intro}</p>
      </Reveal>
      <div className="cap-grid">
        {capabilities.map((group, index) => <Reveal key={group.title} className="cap-group" delay={index * 0.08}>
          <h3>{group.title}</h3>
          <ol className="cap-list">
            {group.items.map(item => {
              count += 1
              /* Each trade we offer has its own page; the project services
                 around it do not, so those stay as plain entries. */
              const service = services.find(entry => entry.title === item)
              return <li key={item}>
                <span className="cap-index" aria-hidden="true">{pad(count)}</span>
                {service ? <Link to={`/services/${service.slug}`}>{item}</Link> : item}
              </li>
            })}
          </ol>
        </Reveal>)}
      </div>
      <Reveal as="div" className="cap-foot" delay={0.16}><span>From new construction to renovations.</span></Reveal>
    </div>
  </section>
}
