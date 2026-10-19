import { Link } from 'react-router'
import { featuredServices, process } from '../data'
import { metaFor } from '../routes'
import { PageHeader } from '../components/PageHeader'
import { CallToAction } from '../components/CallToAction'
import { Process } from '../components/Process'
import { Lines, Photo, Reveal } from '../components/ui'

export default function ProcessPage() {
  const meta = metaFor('/process')

  return <>
    <PageHeader
      eyebrow="From our site photography"
      title={['How the work', 'goes in.']}
      lede={<p>Four stages every concrete job runs through, photographed on our own sites — from the first cut in the ground to the day the walk reopens.</p>}
      trail={meta.trail!}
      image="pour"
      imageAlt="Freshly finished concrete panels on a city street after dark"
    />

    <Process heading={false} />

    <section className="section section--deep" aria-labelledby="process-note">
      <div className="container process-note">
        <Reveal>
          <p className="eyebrow">Why it matters</p>
          <h2 id="process-note"><Lines text={['Most of the work', 'is under the surface.']} accent={1} /></h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="lede">What a finished sidewalk looks like in year five is decided long before the pour: how deep the ground was cut, how the water gets away, whether the mesh was tied out properly and held at the right height. Those stages are the ones nobody sees, so they are the ones we photograph.</p>
          <p className="lede">{process.map(stage => stage.title).join(' · ')}</p>
        </Reveal>
      </div>
    </section>

    <section className="section section--panel" aria-labelledby="process-trades">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">Where it applies</p>
            <h2 id="process-trades"><Lines text={['The trades', 'this runs through.']} /></h2>
          </div>
        </Reveal>
        <div className="service-rows">
          {featuredServices.map((service, index) => <Reveal key={service.slug} delay={index * 0.07}>
            <Link className="service-row" to={`/services/${service.slug}`}>
              <Photo id={service.image!} alt="" sizes="200px" />
              <span className="service-row-body">
                <span className="service-row-title">{service.title}</span>
                <span className="service-row-text">{service.description}</span>
              </span>
            </Link>
          </Reveal>)}
        </div>
      </div>
    </section>

    <CallToAction eyebrow="Start here" title={['Walk the site', 'with us.']} />
  </>
}
