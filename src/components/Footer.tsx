import { Link } from 'react-router'
import { ArrowUp, Mail, MapPin, Phone, Printer } from 'lucide-react'
import { agencyCount, certifications, services, socials } from '../data'
import { company } from '../site'
import { socialIcons } from './icons'
import { Logo, Setout } from './ui'

/* "Building with purpose. Delivering with care." set as two lines. */
const tagline = company.tagline.split('. ').map(part => part.endsWith('.') ? part : `${part}.`)

export function Footer() {
  return <footer className="site-footer">
    <Setout />
    <div className="container footer-inner">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label={`${company.name} home`}><Logo /></Link>
          <p className="footer-tagline">{tagline[0]}<span className="accent">{tagline[1]}</span></p>
          <p className="footer-blurb">Concrete, masonry and subway construction from {company.locality}, New York, prequalified with {agencyCount} public agencies across New York and New Jersey.</p>
        </div>

        <nav className="footer-links" aria-label="Services">
          <h2>Services</h2>
          <ul>
            {services.map(service => <li key={service.slug}><Link to={`/services/${service.slug}`}>{service.title}</Link></li>)}
            <li><Link to="/process">How a job goes in</Link></li>
          </ul>
        </nav>

        <nav className="footer-links" aria-label="Company">
          <h2>Company</h2>
          <ul>
            <li><Link to="/about">About Jevvy</Link></li>
            <li><Link to="/projects">Project gallery</Link></li>
            <li><Link to="/qualifications">Qualifications</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="footer-office">
          <h2>Office</h2>
          <ul className="footer-lines">
            <li><MapPin size={17} aria-hidden="true" /><address>{company.street}<br />{company.locality}, {company.region} {company.postalCode}</address></li>
            <li><Phone size={17} aria-hidden="true" /><a href={company.telephoneHref}>{company.telephone}</a></li>
            <li><Printer size={17} aria-hidden="true" /><span>Fax {company.fax}</span></li>
            <li><Mail size={17} aria-hidden="true" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-strip">
        <div className="footer-certs">
          <ul className="footer-badges" aria-label="Certifications">
            {certifications.map(group => <li key={group.type} title={group.label}>{group.type}</li>)}
          </ul>
          <p>Prequalified with {agencyCount} public agencies in New York &amp; New Jersey</p>
        </div>
        <ul className="footer-socials" aria-label={`Follow ${company.name}`}>
          {socials.map(social => {
            const Icon = socialIcons[social.name]
            return <li key={social.name}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`${social.name} (opens in a new tab)`}>
                {Icon ? <Icon size={19} /> : social.name}
              </a>
            </li>
          })}
        </ul>
      </div>

      <p className="footer-mark" aria-hidden="true">Jevvy Construction</p>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {company.name} · {company.legalType}</span>
        <span>{company.locality}, New York · Serving {company.areaServed.join(' & ')}</span>
        <a href="#top">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
      </div>
    </div>
  </footer>
}
