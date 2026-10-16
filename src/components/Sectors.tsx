import { sectors } from '../data'
import { sectorIcons } from './icons'
import { Lines, Reveal } from './ui'

/* The kinds of site the work goes into, as the company lists them. */
export function Sectors() {
  return <section id="sectors" className="section section--panel section-anchor" aria-labelledby="sectors-title">
    <div className="container">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">Where we work</p>
          <h2 id="sectors-title"><Lines text={['Public buildings.', 'Public ground.']} accent={1} /></h2>
        </div>
        <p className="lede">Commercial buildings and homes, museums, schools, hospitals, sidewalks, parking and subway stations: the sites our work goes into.</p>
      </Reveal>
      <ul className="sector-grid">
        {sectors.map((sector, index) => {
          const Icon = sectorIcons[sector.icon]
          return <Reveal as="li" key={sector.name} className="sector" delay={index * 0.05}>
            <Icon size={28} strokeWidth={1.5} />
            <span>{sector.name}</span>
          </Reveal>
        })}
      </ul>
    </div>
  </section>
}
