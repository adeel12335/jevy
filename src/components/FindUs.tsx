import { Link } from 'react-router'
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, MapPin, Phone } from 'lucide-react'
import { company } from '../site'
import { Lines, Reveal } from './ui'

const address = `${company.street}, ${company.locality}, ${company.region} ${company.postalCode}`
/* Google's keyless embed: a map centred on the address with a pin on it.
   The policy in scripts/prerender.mjs and vercel.json allows this one frame. */
const embed = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=16&hl=en&output=embed`
const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`

/* The office on a map, with a card over it like the map's own info window.
   "Free estimate" opens to the telephone number and the email address; it is
   a details element, so it works before scripting and for a screen reader. */
export function FindUs() {
  return <section id="find-us" className="section section--deep section-anchor" aria-labelledby="findus-title">
    <div className="container">
      <Reveal className="section-head">
        <div>
          <p className="eyebrow">Find us</p>
          <h2 id="findus-title"><Lines text={['The office,', 'on the map.']} accent={1} /></h2>
        </div>
        <p className="lede">We are at {address}. Ask for a free estimate and we will come out to look at the site.</p>
      </Reveal>

      <Reveal className="findus-map" delay={0.08}>
        <iframe
          className="findus-frame"
          src={embed}
          title={`Map of the ${company.name} office at ${address}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="findus-card">
          <span className="findus-pin" aria-hidden="true"><MapPin size={18} strokeWidth={1.8} /></span>
          <strong>{company.name}</strong>
          <span className="findus-type">Concrete, masonry &amp; subway construction</span>
          <address>{company.street}<br />{company.locality}, {company.region} {company.postalCode}</address>

          <details className="findus-estimate">
            <summary>Free estimate <ChevronDown size={16} aria-hidden="true" /></summary>
            <div className="findus-reveal">
              <a href={company.telephoneHref}><Phone size={16} aria-hidden="true" />{company.telephone}</a>
              <a href={`mailto:${company.email}`}><Mail size={16} aria-hidden="true" />{company.email}</a>
              <Link to="/contact" className="button">Start a Project <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </details>

          <a className="findus-directions" href={directions} target="_blank" rel="noopener noreferrer">
            Directions <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens Google Maps in a new tab)</span>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
}
