import { Link, Navigate, useParams } from 'react-router'
import { Check } from 'lucide-react'
import { inCategory, projectById, services } from '../data'
import { metaFor } from '../routes'
import { PageHeader } from '../components/PageHeader'
import { CallToAction } from '../components/CallToAction'
import { Lines, Photo, Reveal, TextLink } from '../components/ui'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(entry => entry.slug === slug)
  if (!service) return <Navigate to="/services" replace />

  const meta = metaFor(`/services/${service.slug}`)
  const gallery = inCategory(service.category)
  const others = services.filter(entry => entry.slug !== service.slug)

  return <>
    <PageHeader
      eyebrow={service.category}
      title={service.lines}
      lede={<p>{service.detail}</p>}
      trail={meta.trail!}
      image={service.image}
      imageAlt={projectById(service.image)!.alt}
    />

    <section className="section section--slab" aria-labelledby="scope-title">
      <div className="container scope-grid">
        <Reveal>
          <p className="eyebrow">The scope</p>
          <h2 id="scope-title"><Lines text={['What this', 'covers.']} /></h2>
          <p className="lede">{service.description}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="scope-list">
            {service.items.map(item => <li key={item}><Check size={18} strokeWidth={2.2} aria-hidden="true" />{item}</li>)}
          </ul>
          <div className="scope-foot">
            <TextLink to="/process">How a job goes in</TextLink>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section section--deep" aria-labelledby="service-work">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">{service.category} work</p>
            <h2 id="service-work"><Lines text={[`${gallery.length} photographs`, 'from these jobs.']} accent={1} /></h2>
          </div>
          <p className="lede">Every frame here came off one of our own {service.category.toLowerCase()} sites. Open any one for the full-size photograph.</p>
        </Reveal>
        <div className="gallery-grid">
          {gallery.map(project => <Link className="gallery-item" key={project.id} to={`/projects/${project.id}`}>
            <span className="gallery-thumb">
              <Photo id={project.id} alt={project.alt} sizes="(max-width: 600px) 90vw, 20rem" />
            </span>
            <strong>{project.title}</strong>
            <span>{project.caption}</span>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="section section--panel" aria-labelledby="other-services">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Also from Jevvy</p>
            <h2 id="other-services"><Lines text={['The other', 'two trades.']} /></h2>
          </div>
        </Reveal>
        <div className="service-rows">
          {others.map((other, index) => <Reveal key={other.slug} delay={index * 0.07}>
            <Link className="service-row" to={`/services/${other.slug}`}>
              <Photo id={other.image} alt="" sizes="200px" />
              <span className="service-row-body">
                <span className="service-row-title">{other.title}</span>
                <span className="service-row-text">{other.description}</span>
              </span>
              <span className="service-row-count">{inCategory(other.category).length}<small>photos</small></span>
            </Link>
          </Reveal>)}
        </div>
      </div>
    </section>

    <CallToAction
      eyebrow={service.title}
      title={['Get a price', 'on the work.']}
      lede={`Send us the site, the scope and the timeline for your ${service.category.toLowerCase()} work and we will come back to you.`}
    />
  </>
}
