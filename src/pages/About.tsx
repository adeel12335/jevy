import { Link } from 'react-router'
import { agencyCount, categories, countByCategory, projects, services } from '../data'
import { company } from '../site'
import { metaFor } from '../routes'
import { PageHeader } from '../components/PageHeader'
import { CallToAction } from '../components/CallToAction'
import { CountUp, Lines, Photo, Reveal, TextLink } from '../components/ui'

export default function About() {
  const meta = metaFor('/about')

  return <>
    <PageHeader
      eyebrow="About Jevvy"
      title={['Care in every detail.', 'Commitment on every site.']}
      lede={<p>{company.name} is a {company.legalType.toLowerCase()} working in concrete, masonry and stair construction out of {company.locality}, New York.</p>}
      trail={meta.trail!}
      image="sidewalk"
      imageAlt="Finished concrete sidewalk panels alongside a stone retaining wall"
    />

    <section className="section section--slab" aria-labelledby="about-story">
      <div className="container about-page-grid">
        <Reveal>
          <p className="eyebrow">Who we are</p>
          <h2 id="about-story"><Lines text={['The work speaks', 'for itself.']} /></h2>
        </Reveal>
        <Reveal className="about-page-copy" delay={0.08}>
          <p>Jevvy Construction Inc builds in concrete, masonry and stairs. The work runs from the excavation and drainage beneath a surface through formwork and reinforcement to the finished, jointed pour — and from a single block wall to the stair flights and the blockwork that carries them.</p>
          <p>Every photograph on this site came off one of our own jobs. There are no renders here and no stock photography: {projects.length} frames of real surfaces, real formwork and real site conditions, so you can judge the standard before you call us.</p>
          <p>We are prequalified as a Minority and Women-owned, Disadvantaged and Small Business Enterprise with {agencyCount} public agencies across New York and New Jersey, which lets general contractors and agencies count our scope toward their participation goals.</p>
          <TextLink to="/qualifications">See the prequalifications</TextLink>
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
          <div className="figure"><b><CountUp to={agencyCount} /></b><span>Certifying public agencies</span></div>
          <div className="figure"><b><CountUp to={company.areaServed.length} /></b><span>States we work across</span></div>
        </Reveal>
      </div>
    </section>

    <section className="section section--panel" aria-labelledby="about-trades">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <p className="eyebrow">What we build</p>
            <h2 id="about-trades"><Lines text={['Three trades,', 'one standard.']} /></h2>
          </div>
          <p className="lede">Each trade has its own page, with the full set of photographs behind it.</p>
        </Reveal>
        <div className="service-rows">
          {services.map((service, index) => <Reveal key={service.slug} delay={index * 0.07}>
            <Link className="service-row" to={`/services/${service.slug}`}>
              <Photo id={service.image} alt="" sizes="200px" />
              <span className="service-row-body">
                <span className="service-row-title">{service.title}</span>
                <span className="service-row-text">{service.description}</span>
              </span>
              <span className="service-row-count">{countByCategory(service.category)}<small>photos</small></span>
            </Link>
          </Reveal>)}
          <Reveal delay={0.21}>
            <Link className="service-row" to="/projects?trade=groundwork">
              <Photo id="mesh" alt="" sizes="200px" />
              <span className="service-row-body">
                <span className="service-row-title">Groundwork</span>
                <span className="service-row-text">Excavation, drainage, subbase and reinforcement — the work that goes in before a pour.</span>
              </span>
              <span className="service-row-count">{countByCategory(categories[3])}<small>photos</small></span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>

    <CallToAction
      eyebrow="Work with us"
      title={['Bring us in', 'on your next job.']}
      lede={`Call the office on ${company.telephone} or send the scope through. We will come back to you about the work.`}
    />
  </>
}
