import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRight, Menu, X } from 'lucide-react'
import { navigation } from '../data'
import { company } from '../site'
import { Logo } from './ui'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return <header className="site-header" id="top" data-scrolled={scrolled}>
    <div className="container header-inner">
      <Link to="/" className="brand" aria-label={`${company.name} home`}><Logo /></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(item => <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) => isActive ? 'is-active' : undefined}
        >{item.label}</NavLink>)}
      </nav>
      <Link to="/contact" className="button header-cta">Start a Project <ArrowRight size={18} aria-hidden="true" /></Link>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger className="icon-button mobile-menu-trigger" aria-label="Open navigation menu"><Menu size={24} /></Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay menu-overlay" />
          <Dialog.Content className="mobile-menu">
            <div className="mobile-menu-top"><Logo /><Dialog.Close className="icon-button" aria-label="Close navigation menu"><X size={24} /></Dialog.Close></div>
            <Dialog.Title className="sr-only">Main navigation</Dialog.Title>
            <Dialog.Description className="sr-only">Explore Jevvy Construction and get in touch.</Dialog.Description>
            <nav aria-label="Mobile navigation">
              {navigation.map(item => <Link key={item.href} to={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowRight size={22} /></Link>)}
            </nav>
            <Link to="/contact" className="button" onClick={() => setOpen(false)}>Start a Project <ArrowRight size={18} /></Link>
            <div className="mobile-menu-contact">
              <span>Let us talk about your project</span>
              <a href={company.telephoneHref}>{company.telephone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  </header>
}
