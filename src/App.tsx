import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import ProcessPage from './pages/ProcessPage'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import QualificationsPage from './pages/QualificationsPage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import { metaFor } from './routes'
import { applyHead } from './head'
import { resetScroll } from './smooth'

/* The head is prerendered into every page, so this only has to keep it in
   step with client-side navigation — and put the reader at the top of the
   page they just asked for. */
function RouteEffects() {
  const { pathname, search } = useLocation()
  const first = useRef(true)

  useEffect(() => {
    applyHead(metaFor(pathname))
    if (first.current) { first.current = false; return }
    resetScroll()
  }, [pathname, search])

  return null
}

export default function App() {
  return <>
    <RouteEffects />
    <a href="#main" className="skip-link">Skip to content</a>
    <Header />
    <main id="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/qualifications" element={<QualificationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>
}
