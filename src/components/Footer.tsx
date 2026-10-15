import { Link } from 'react-router'
import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { services, socials } from '../data'
import { company } from '../site'
import { Logo } from './ui'

export function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-grid">
      <div className="footer-brand">
        <Link to="/" aria-label={`${company.name} home`}><Logo /></Link>
        <p>Concrete, masonry and stair construction. {company.locality}, New York.</p>
        <p className="footer-certs">MWBE · DBE · SBE prequalified</p>
      </div>

      <nav aria-label="Services">
        <h2>Services</h2>
        {services.map(service => <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>)}
        <Link to="/process">Our process</Link>
      </nav>

      <nav aria-label="Company">
        <h2>Company</h2>
        <Link to="/about">About Jevvy</Link>
        <Link to="/projects">Project gallery</Link>
        <Link to="/qualifications">Qualifications</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div>
        <h2>Our office</h2>
        <address>{company.street}<br />{company.locality}, {company.region} {company.postalCode}</address>
        <a href={company.telephoneHref}>T: {company.telephone}</a>
        <p>F: {company.fax}</p>
        <a href={`mailto:${company.email}`}>{company.email}</a>
      </div>

      <div className="footer-socials">
        <h2>Follow us</h2>
        {socials.map(social => <a href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">
          {social.name}<ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
        </a>)}
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} {company.name} · {company.legalType}</span>
      <a href="#top">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
    </div>
  </div></footer>
}
