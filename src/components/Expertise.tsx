import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { projectById, services } from '../data'
import { Lines, Photo, Reveal } from './ui'

export function Expertise({ heading = true }: { heading?: boolean }) {
  return <section id="expertise" className="section section--deep section-anchor" aria-labelledby="expertise-title">
    <div className="container">
      {heading ? <Reveal className="section-head">
        <div>
          <p className="eyebrow">Our expertise</p>
          <h2 id="expertise-title"><Lines text={['Practical expertise.', 'Careful execution.']} /></h2>
        </div>
        <p className="lede">Three trades, documented across our own project sites in New York. Open any one of them for the detail.</p>
      </Reveal> : null}
      <div className="trade-strip">
        {services.map((service, index) => {
          const photo = projectById(service.image)!
          return <Reveal key={service.slug} className="trade-panel" delay={index * 0.08}>
            <Photo id={service.image} alt={photo.alt} sizes="(max-width: 1080px) 100vw, 34vw" />
            <div className="trade-shade" />
            <div className="trade-body">
              <span className="trade-index">{service.category}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="trade-list">{service.items.map(item => <li key={item}>{item}</li>)}</ul>
              <Link className="trade-cta" to={`/services/${service.slug}`}>
                Explore service<span className="sr-only">: {service.title}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        })}
      </div>
    </div>
  </section>
}
