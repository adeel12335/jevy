import { useCallback, useEffect, useRef, useState, type AnimationEvent, type CSSProperties, type FocusEvent, type KeyboardEvent, type PointerEvent } from 'react'
import { Link } from 'react-router'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { prefersReducedMotion, useScrollTransform } from '../parallax'
import { agencyCount, countByCategory, featuredServices, heroSlides, projectById } from '../data'
import { company } from '../site'
import { serviceIcons } from './icons'
import { CountUp, Lines, Photo, Reveal, Rise, Setout, TextLink } from './ui'

/* Milliseconds per slide. Written into the section as --hero-interval so the
   progress bar runs on the same clock. */
const INTERVAL = 6000

const pad = (value: number) => String(value).padStart(2, '0')
const order = (index: number) => ({ '--i': index } as CSSProperties)

/* The opening slider: the company first, then one frame per trade.

   Autoplay is clocked by the progress bar on the active dot. The slide
   advances when that CSS animation ends, so the bar the reader watches and
   the moment the frame changes can never drift apart; a timer a little
   longer than the bar stands behind it in case the animation never reports.
   Keyboard focus inside the slider, the pause button, scrolling past or
   hiding the tab pauses the bar; a mouse resting on the hero does not.
   Reduced motion turns autoplay off. The first slide is in the prerendered
   markup, so a reader without scripting gets the company frame and nothing
   moves. */
export function Hero() {
  const hero = useRef<HTMLElement>(null)
  const media = useRef<HTMLDivElement>(null)
  const copy = useRef<HTMLDivElement>(null)
  useScrollTransform(hero, media, { from: 0, to: 70 })
  useScrollTransform(hero, copy, { from: 0, to: 48 })

  const count = heroSlides.length
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(false)
  const [held, setHeld] = useState(false)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(true)
  const swipe = useRef<number | null>(null)

  const go = useCallback((to: number) => setIndex(((to % count) + count) % count), [count])

  useEffect(() => { if (!prefersReducedMotion()) setAutoplay(true) }, [])

  useEffect(() => {
    const node = hero.current
    if (!node || typeof IntersectionObserver === 'undefined') return
    let onScreen = true
    const sync = () => setInView(onScreen && document.visibilityState !== 'hidden')
    const io = new IntersectionObserver(entries => {
      onScreen = entries.some(entry => entry.isIntersecting)
      sync()
    }, { threshold: 0.15 })
    io.observe(node)
    document.addEventListener('visibilitychange', sync)
    return () => { io.disconnect(); document.removeEventListener('visibilitychange', sync) }
  }, [])

  const playing = autoplay && inView && !held && !paused

  useEffect(() => {
    if (!playing) return
    const timer = setTimeout(() => go(index + 1), INTERVAL + 1500)
    return () => clearTimeout(timer)
  }, [playing, index, go])

  const onBarEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (playing && event.animationName === 'hero-progress') go(index + 1)
  }
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); go(index - 1) }
    if (event.key === 'ArrowRight') { event.preventDefault(); go(index + 1) }
  }
  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') swipe.current = event.clientX
  }
  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (swipe.current === null) return
    const delta = event.clientX - swipe.current
    swipe.current = null
    if (Math.abs(delta) > 48) go(index + (delta < 0 ? 1 : -1))
  }
  /* Only focus that came from the keyboard holds the slider: a mouse click
     on an arrow also focuses it, and that must not stop the show. */
  const onFocus = (event: FocusEvent<HTMLElement>) => {
    if (event.target instanceof Element && event.target.matches(':focus-visible')) setHeld(true)
  }
  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setHeld(false)
  }

  return <section
    className="hero"
    aria-labelledby="hero-title"
    aria-roledescription="carousel"
    ref={hero}
    style={{ '--hero-interval': `${INTERVAL}ms` } as CSSProperties}
    onFocus={onFocus}
    onBlur={onBlur}
    onPointerDown={onPointerDown}
    onPointerUp={onPointerUp}
    onPointerCancel={() => { swipe.current = null }}
  >
    <div className="hero-media" ref={media}>
      {heroSlides.map((slide, i) => <div key={slide.id} className={`hero-layer${i === index ? ' is-active' : ''}`} aria-hidden={i !== index}>
        <Photo id={slide.image} alt={projectById(slide.image)?.alt ?? ''} className="hero-photo" priority={i === 0} sizes="100vw" />
      </div>)}
      <div className="hero-scrim" />
      <Setout />
    </div>

    <div className="container hero-inner" ref={copy}>
      <div className="hero-slides" aria-live={playing ? 'off' : 'polite'}>
        {heroSlides.map((slide, i) => {
          const active = i === index
          const Title = i === 0 ? 'h1' : 'h2'
          return <div
            key={slide.id}
            className={`hero-slide${active ? ' is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={!active}
            inert={!active}
          >
            <p className="eyebrow hero-anim" style={order(0)}>{slide.eyebrow}</p>
            <Title id={i === 0 ? 'hero-title' : undefined} className="hero-title hero-anim" style={order(1)}>
              {slide.title[0]}<span className="accent">{slide.title[1]}</span>
            </Title>
            <p className="hero-lede hero-anim" style={order(2)}>{slide.lede}</p>
            <div className="hero-actions hero-anim" style={order(3)}>
              <Link to={slide.primary.to} className="button">{slide.primary.label} <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link to={slide.secondary.to} className="button button-outline">{slide.secondary.label}</Link>
            </div>
          </div>
        })}
      </div>

      <div className="hero-controls" data-playing={playing} onKeyDown={onKeyDown}>
        <div className="hero-dots" onAnimationEnd={onBarEnd}>
          {heroSlides.map((slide, i) => <button
            key={slide.id}
            type="button"
            className={`hero-dot${i === index ? ' is-active' : ''}`}
            aria-label={`Show slide ${i + 1}: ${slide.eyebrow}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => go(i)}
          ><span className="hero-dot-bar" /></button>)}
        </div>
        <span className="hero-count" aria-hidden="true"><b>{pad(index + 1)}</b> / {pad(count)}</span>
        <div className="hero-arrows">
          {autoplay ? <button type="button" className="icon-button" aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} aria-pressed={paused} onClick={() => setPaused(value => !value)}>
            {paused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
          </button> : null}
          <button type="button" className="icon-button" aria-label="Previous slide" onClick={() => go(index - 1)}><ChevronLeft size={20} aria-hidden="true" /></button>
          <button type="button" className="icon-button" aria-label="Next slide" onClick={() => go(index + 1)}><ChevronRight size={20} aria-hidden="true" /></button>
        </div>
      </div>
    </div>

    <Rise className="hero-rail" delay={0.42}>
      <div className="container rail-grid">
        {featuredServices.map(service => {
          const Icon = serviceIcons[service.slug]
          return <Link key={service.slug} className="rail-item" to={`/services/${service.slug}`}>
            {Icon ? <Icon size={30} strokeWidth={1.4} /> : null}
            <span className="rail-text">
              <span className="rail-title">{service.title}</span>
              <span className="rail-count">{countByCategory(service.category!)} photographs</span>
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
        <div className="about-stamp"><b><CountUp to={agencyCount} /></b><span>Agency<br />credentials</span></div>
      </Reveal>
      <Reveal className="about-copy" delay={0.1}>
        <p className="eyebrow">About Jevvy Construction</p>
        <h2 id="about-title"><Lines text={['Care in every detail.', 'Commitment on every site.']} /></h2>
        <p>{company.intro}</p>
        <p>A family-owned, minority-owned small business and licensed general contractor. Every photograph on this site is our own work, on our own jobs. We are certified WOSB, WBE, MBE and city and state MWBE, hold credentials with {agencyCount} public agencies, and are registered vendors with OGS and DASNY.</p>
        <TextLink to="/about">Get to know Jevvy Construction</TextLink>
      </Reveal>
    </div>
  </section>
}
