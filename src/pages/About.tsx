import { Link } from 'react-router'
import { agencyCount, countByCategory, featuredServices, projects, services } from '../data'
import { company } from '../site'
import { metaFor } from '../routes'
import { PageHeader } from '../components/PageHeader'
import { CallToAction } from '../components/CallToAction'
import { Sectors } from '../components/Sectors'
import { Capabilities } from '../components/Capabilities'
import { CountUp, Lines, Photo, Reveal, TextLink } from '../components/ui'

export default function About() {
  const meta = metaFor('/about')

  return <>
    <PageHeader
      eyebrow="About Jevvy Construction"
      title={['Care in every detail.', 'Commitment on every site.']}
      lede={<p>{company.name} is a licensed general contractor serving New York and New Jersey, built on family values and proudly led by minority ownership.</p>}
      trail={meta.trail!}
      image="sidewalk"
      imageAlt="Finished concrete sidewalk panels alongside a stone retaining wall"
    />

    <section className="section section--slab" aria-labelledby="about-story">
      <div className="container about-page-grid">
        <Reveal>
          <p className="eyebrow">Who we are</p>
          <h2 id="about-story"><Lines text={['About Jevvy', 'Construction Inc']} /></h2>
        </Reveal>
        <Reveal className="about-page-copy" delay={0.08}>
          {company.about.map(paragraph => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
          <TextLink to="/qualifications">See the certifications and credentials</TextLink>
        </Reveal>
      </div>
    </section>

    <section className="section section--deep" aria-labelledby="about-figures">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">By the numbers</p>
            <h2 id="about-figures"><Lines text={['What is on', 'this site.']} /></h2>
          </div>
          <p className="lede">Only figures we can show you. No project totals, ratings or years in business are claimed anywhere on this website.</p>
        </Reveal>
        <Reveal className="figure-grid">
          <div className="figure"><b><CountUp to={projects.length} /></b><span>Photographs, all our own work</span></div>
          <div className="figure"><b><CountUp to={services.length} /></b><span>Trades we build in</span></div>
          <div className="figure"><b><CountUp to={agencyCount} /></b><span>Agency credentials</span></div>
          <div className="figure"><b><CountUp to={company.areaServed.length} /></b><span>States we work across</span></div>
        </Reveal>
      </div>
    </section>

    <Capabilities />

    <Sectors />

    <section className="section section--panel" aria-labelledby="about-trades">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">What we build</p>
            <h2 id="about-trades"><Lines text={['Every trade,', 'one standard.']} /></h2>
          </div>
          <p className="lede">Each trade has its own page, with the full set of photographs behind it.</p>
        </Reveal>
        <div className="service-rows">
          {featuredServices.map((service, index) => <Reveal key={service.slug} delay={index * 0.07}>
            <Link className="service-row" to={`/services/${service.slug}`}>
              <Photo id={service.image!} alt="" sizes="200px" />
              <span className="service-row-body">
                <span className="service-row-title">{service.title}</span>
                <span className="service-row-text">{service.description}</span>
              </span>
              <span className="service-row-count">{countByCategory(service.category!)}<small>photos</small></span>
            </Link>
          </Reveal>)}
          <Reveal delay={0.21}>
            <Link className="service-row" to="/projects?trade=groundwork">
              <Photo id="mesh" alt="" sizes="200px" />
              <span className="service-row-body">
                <span className="service-row-title">Groundwork</span>
                <span className="service-row-text">Excavation, drainage, subbase and reinforcement — the work that goes in before a pour.</span>
              </span>
              <span className="service-row-count">{countByCategory('Groundwork')}<small>photos</small></span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>

    <CallToAction
      eyebrow="Work with us"
      title={['Bring us in', 'on your next job.']}
      lede={`Email ${company.email} or send the scope through the form. We will come back to you about the work.`}
    />
  </>
}
