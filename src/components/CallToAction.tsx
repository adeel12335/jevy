import { Link } from 'react-router'
import { ArrowRight, Mail } from 'lucide-react'
import { company } from '../site'
import { Lines, Reveal, Setout } from './ui'

/* The band every detail page closes on, so each one ends somewhere useful. */
export function CallToAction({ eyebrow = 'Next step', title = ['Tell us about', 'your site.'], lede }: {
  eyebrow?: string
  title?: string[]
  lede?: string
}) {
  return <section className="section section--navy cta-band" aria-labelledby="cta-title">
    <Setout />
    <div className="container cta-inner">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="cta-title"><Lines text={title} /></h2>
      </div>
      <Reveal className="cta-actions" delay={0.1}>
        <p className="lede">{lede ?? 'Send us the scope and the timeline by email and we will come back to you about the work.'}</p>
        <div className="cta-buttons">
          <Link to="/contact" className="button">Start a Project <ArrowRight size={18} aria-hidden="true" /></Link>
          <a href={`mailto:${company.email}`} className="button button-outline"><Mail size={17} aria-hidden="true" />Email us</a>
        </div>
      </Reveal>
    </div>
  </section>
}
