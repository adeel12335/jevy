import { useEffect, useRef, useState, type PropsWithChildren, type ReactNode } from 'react'
import { Link } from 'react-router'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowRight, X } from 'lucide-react'
import { fullBleed } from '../data'
import { isOnScreen, useReveal } from '../reveal'

/* Reveals and line masks are CSS-driven (see src/reveal.ts): the markup these
   render is the finished state, and the hidden state only exists once the
   document has been marked as script-capable. */
export function Reveal({ children, className = '', delay = 0, as = 'div' }: PropsWithChildren<{ className?: string; delay?: number; as?: 'div' | 'li' }>) {
  const ref = useReveal<HTMLDivElement & HTMLLIElement>()
  const props = {
    ref,
    className: `reveal${className ? ` ${className}` : ''}`,
    style: delay ? ({ '--reveal-delay': `${delay}s` } as React.CSSProperties) : undefined,
  }
  return as === 'li' ? <li {...props}>{children}</li> : <div {...props}>{children}</div>
}

/* Same mechanism as Reveal, for elements that must keep their own tag. */
export function Rise({ as: Tag = 'div', className = '', delay = 0, id, children }: PropsWithChildren<{ as?: 'p' | 'h1' | 'h2' | 'div' | 'span'; className?: string; delay?: number; id?: string }>) {
  const ref = useReveal<HTMLElement>()
  return <Tag
    ref={ref as React.Ref<never>}
    id={id}
    className={`reveal${className ? ` ${className}` : ''}`}
    style={delay ? ({ '--reveal-delay': `${delay}s` } as React.CSSProperties) : undefined}
  >{children}</Tag>
}

function Line({ text, delay }: { text: string; delay: number }) {
  const ref = useReveal<HTMLSpanElement>()
  return <span className="line-mask" ref={ref} style={{ '--line-delay': `${delay}s` } as React.CSSProperties}>
    <span className="line-inner">{text}</span>
  </span>
}

/* Headings rise into a mask one line at a time. */
export function Lines({ text, delay = 0, accent = -1 }: { text: string[]; delay?: number; accent?: number }) {
  return <>{text.map((line, index) => index === accent
    ? <span className="accent" key={line}><Line text={line} delay={delay + index * 0.09} /></span>
    : <Line key={line} text={line} delay={delay + index * 0.09} />)}</>
}

/* Counts up to a real figure. The markup carries the true number so it is
   correct without scripting; the climb only runs for a figure the reader
   scrolls down to, never for one already on screen. */
export function CountUp({ to, duration = 1.1 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(to)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (typeof IntersectionObserver === 'undefined' || isOnScreen(node)) return

    setValue(0)
    let frame = 0
    const io = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return
      io.disconnect()
      const started = performance.now()
      frame = requestAnimationFrame(function tick(now) {
        const progress = Math.min(1, (now - started) / (duration * 1000))
        setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) frame = requestAnimationFrame(tick)
      })
    }, { threshold: 0.6 })
    io.observe(node)

    return () => { io.disconnect(); cancelAnimationFrame(frame) }
  }, [to, duration])

  return <span ref={ref}>{value}</span>
}

/* The set-out grid: the chalk lines a crew snaps across a subbase before
   anything is poured, used here to lay out the page it sits on. */
export function Setout() {
  return <div className="setout" aria-hidden="true" />
}

export function Logo() {
  return <img className="brand-logo" src="/media/jevvy-logo-light.webp" width="900" height="272" alt="Jevvy Construction Inc" />
}

export function TextLink({ children, href, to, onClick, className = '' }: PropsWithChildren<{ href?: string; to?: string; onClick?: () => void; className?: string }>) {
  const content = <><span>{children}</span><ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" /></>
  if (to) return <Link className={`text-link ${className}`} to={to} onClick={onClick}>{content}</Link>
  if (href) return <a className={`text-link ${className}`} href={href} onClick={onClick}>{content}</a>
  return <button type="button" className={`text-link ${className}`} onClick={onClick}>{content}</button>
}

const SIZES = [400, 800, 1200]

export function Photo({ id, alt, className = '', priority = false, sizes = '(max-width: 700px) 100vw, 60vw' }: { id: string; alt: string; className?: string; priority?: boolean; sizes?: string }) {
  const widths = fullBleed.has(id) ? [...SIZES, 1600] : SIZES
  return <img
    className={className}
    src={`/media/${id}-${widths[widths.length - 1]}.webp`}
    srcSet={widths.map(width => `/media/${id}-${width}.webp ${width}w`).join(', ')}
    sizes={sizes}
    alt={alt}
    loading={priority ? 'eager' : 'lazy'}
    fetchPriority={priority ? 'high' : 'auto'}
    decoding="async"
  />
}

export function Modal({ open, onOpenChange, title, description, children, className = '' }: { open: boolean; onOpenChange: (open: boolean) => void; title: string; description: string; children: ReactNode; className?: string }) {
  return <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="dialog-overlay" />
      <Dialog.Content className={`dialog-content ${className}`}>
        <div className="dialog-heading">
          <div><Dialog.Title>{title}</Dialog.Title><Dialog.Description>{description}</Dialog.Description></div>
          <Dialog.Close className="icon-button" aria-label="Close dialog"><X size={22} /></Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
}
