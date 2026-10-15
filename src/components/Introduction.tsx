import { useRef } from 'react'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { useScrollTransform } from '../parallax'
import { agencyCount, countByCategory, services } from '../data'
import { tradeIcons } from './icons'
import { CountUp, Lines, Photo, Reveal, Rise, Setout, TextLink } from './ui'

export function Hero() {
  const hero = useRef<HTMLElement>(null)
  const media = useRef<HTMLDivElement>(null)
  const copy = useRef<HTMLDivElement>(null)
  useScrollTransform(hero, media, { from: 0, to: 70 })
  useScrollTransform(hero, copy, { from: 0, to: 48 })

  return <section className="hero" aria-labelledby="hero-title" ref={hero}>
    <div className="hero-media" ref={media}>
      <Photo id="crew" alt="Jevvy project crew preparing a reinforced concrete sidewalk" className="hero-photo" priority sizes="100vw" />
      <div className="hero-scrim" />
      <Setout />
    </div>
    <div className="container hero-inner" ref={copy}>
      <Rise as="p" className="eyebrow" delay={0.05}>MWBE · DBE · SBE certified</Rise>
      <Rise as="h1" id="hero-title" className="hero-title" delay={0.12}>Building with purpose.<span className="accent">Delivering with care.</span></Rise>
      <Rise as="p" className="hero-lede" delay={0.22}>Concrete, masonry and stair construction from our team in Jamaica, New York.</Rise>
      <Rise className="hero-actions" delay={0.3}>
        <Link to="/projects" className="button">Explore Our Work <ArrowRight size={18} aria-hidden="true" /></Link>
        <Link to="/contact" className="button button-outline">Contact Our Team</Link>
      </Rise>
    </div>
    <Rise className="hero-rail" delay={0.42}>
      <div className="container rail-grid">
        {services.map((service, index) => {
          const Icon = tradeIcons[index]
          return <Link key={service.slug} className="rail-item" to={`/services/${service.slug}`}>
            <Icon size={30} strokeWidth={1.4} />
            <span className="rail-text">
              <span className="rail-title">{service.title}</span>
              <span className="rail-count">{countByCategory(service.category)} photographs</span>
            </span>
            <ArrowRight className="rail-go" size={20} aria-hidden="true" />
          </Link>
        })}
      </div>
    </Rise>
  </section>
}

export function AboutIntro() {
  return <section id="about" className="section section--slab section-anchor" aria-labelledby="about-title">
    <div className="container about-grid">
      <Reveal className="about-media">
        <Photo id="sidewalk" alt="Completed concrete sidewalk alongside a stone wall" className="about-photo" sizes="(max-width: 1080px) 100vw, 50vw" />
        <div className="about-stamp"><b><CountUp to={agencyCount} /></b><span>Certifying<br />agencies</span></div>
      </Reveal>
      <Reveal className="about-copy" delay={0.1}>
        <p className="eyebrow">About Jevvy</p>
        <h2 id="about-title"><Lines text={['Care in every detail.', 'Commitment on every site.']} /></h2>
        <p>Jevvy Construction Inc is a New York construction corporation working in concrete, masonry and stair construction. Every photograph on this site is our own work, on our own jobs.</p>
        <p>We hold MWBE, DBE and SBE certifications across {agencyCount} public agencies in New York and New Jersey.</p>
        <TextLink to="/about">Get to know Jevvy</TextLink>
      </Reveal>
    </div>
  </section>
}
