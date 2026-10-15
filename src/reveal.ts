import { useEffect, useRef } from 'react'

/* Scroll reveals are driven by a class rather than by inline styles.

   Every page here is prerendered to static HTML. If the hidden state lived in
   the markup, a crawler without JavaScript — and every reader during the
   moment before hydration — would get a page of blank headings. So the markup
   ships visible, an inline script in the document head adds `js` to <html>
   before first paint, and only then does the CSS hide anything. */
let shared: IntersectionObserver | null = null

function observer() {
  if (!shared) {
    shared = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-in')
        shared?.unobserve(entry.target)
      }
    }, { rootMargin: '0px' })
  }
  return shared
}

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-in')
      return
    }
    const io = observer()
    io.observe(node)
    return () => io.unobserve(node)
  }, [])

  return ref
}

/* True when the element is already on screen at mount — used to skip an
   entrance that the reader would never see begin. */
export function isOnScreen(node: Element | null) {
  if (!node || typeof window === 'undefined') return false
  const box = node.getBoundingClientRect()
  return box.top < window.innerHeight && box.bottom > 0
}
