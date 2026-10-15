import { useEffect, type RefObject } from 'react'

/* Scroll-linked transforms.

   The only motion left on the site that is not a CSS transition is the hero
   photograph drifting against the page and the archive rows sliding past each
   other. Both are a single transform driven by one number, so they are done
   here rather than by pulling in an animation library for two effects. */

type Track = 'enter' | 'cover'

const clamp = (value: number) => (value < 0 ? 0 : value > 1 ? 1 : value)

/* `enter` runs 0 → 1 as the element's top passes the top of the viewport.
   `cover` runs 0 → 1 across the whole time any part of it is on screen. */
function progress(rect: DOMRect, track: Track) {
  const viewport = window.innerHeight
  if (track === 'enter') return clamp(-rect.top / Math.max(rect.height, 1))
  return clamp((viewport - rect.top) / Math.max(viewport + rect.height, 1))
}

export function useScrollTransform(
  section: RefObject<HTMLElement | null>,
  moved: RefObject<HTMLElement | null>,
  options: { from: number; to: number; unit?: 'px' | '%'; axis?: 'x' | 'y'; track?: Track },
) {
  const { from, to, unit = 'px', axis = 'y', track = 'enter' } = options

  useEffect(() => {
    const container = section.current
    const element = moved.current
    if (!container || !element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    let last = NaN

    const update = () => {
      frame = 0
      const value = from + (to - from) * progress(container.getBoundingClientRect(), track)
      if (value === last) return
      last = value
      element.style.translate = axis === 'y' ? `0 ${value}${unit}` : `${value}${unit} 0`
    }

    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      element.style.translate = ''
    }
  }, [section, moved, from, to, unit, axis, track])
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
