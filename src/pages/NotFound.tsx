import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { navigation } from '../data'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/ui'

export default function NotFound() {
  return <>
    <PageHeader
      eyebrow="Error 404"
      title={['This page is', 'not on site.']}
      lede={<p>The link you followed does not lead anywhere. Everything we build is one of these.</p>}
      trail={[{ name: 'Page not found', path: '/404' }]}
      compact
    />
    <section className="section section--deep" aria-label="Site pages">
      <div className="container">
        <Reveal className="notfound-links">
          <Link to="/" className="button">Back to the home page <ArrowRight size={18} aria-hidden="true" /></Link>
          <nav className="notfound-nav" aria-label="All pages">
            {navigation.map(item => <Link key={item.href} to={item.href}>{item.label}<ArrowRight size={16} aria-hidden="true" /></Link>)}
          </nav>
        </Reveal>
      </div>
    </section>
  </>
}
