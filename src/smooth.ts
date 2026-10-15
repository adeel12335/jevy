import Lenis from 'lenis'

let active: Lenis | null = null

/* Jump to the top of a newly navigated page. Lenis owns the scroll position
   while it is running, so going through it avoids a fight between the native
   jump and the smoothed one. */
export function resetScroll() {
  if (active) active.scrollTo(0, { immediate: true })
  else window.scrollTo(0, 0)
}

/* Smooth scrolling for the page.

   Radix locks the body while a dialog is open. Lenis listens on the window
   and would keep driving the page underneath that lock, so the lock itself
   is watched and Lenis is stopped for as long as one is up — that covers
   every dialog on the site without each one having to know about this. */
export function startSmoothScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  const lenis = new Lenis({
    duration: 1.05,
    lerp: 0.1,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
    anchors: { offset: -8 },
  })

  active = lenis

  let frame = requestAnimationFrame(function raf(time) {
    lenis.raf(time)
    frame = requestAnimationFrame(raf)
  })

  const syncToScrollLock = () => {
    const locked = document.body.hasAttribute('data-scroll-locked')
      || getComputedStyle(document.body).overflowY === 'hidden'
    if (locked) lenis.stop()
    else lenis.start()
  }
  const observer = new MutationObserver(syncToScrollLock)
  observer.observe(document.body, { attributes: true, attributeFilter: ['style', 'class', 'data-scroll-locked'] })

  return () => {
    observer.disconnect()
    cancelAnimationFrame(frame)
    lenis.destroy()
    active = null
  }
}
