/**
 * PIXORIA — scroll reveal + hero title + manifesto word highlight
 */
import { prefersReduced } from '../utils/fa.js'

/* generic reveals */
const revealEls = document.querySelectorAll('[data-reveal], [data-stagger]')
if (revealEls.length && !prefersReduced()) {
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('is-in')
        io.unobserve(e.target)
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
  revealEls.forEach(el => io.observe(el))
} else {
  revealEls.forEach(el => el.classList.add('is-in'))
}

/* hero title word stagger */
const heroTitle = document.querySelector('[data-hero-title]')
if (heroTitle) {
  if (prefersReduced()) heroTitle.classList.add('is-in')
  else {
    requestAnimationFrame(() => requestAnimationFrame(() => heroTitle.classList.add('is-in')))
  }
}

/* manifesto: scroll-driven word highlight */
const statement = document.querySelector('[data-statement]')
if (statement && !prefersReduced()) {
  const words = statement.querySelectorAll('.w')
  let ticking = false
  const update = () => {
    ticking = false
    const r = statement.getBoundingClientRect()
    const vh = window.innerHeight
    /* progress: 0 when section enters viewport, 1 when it leaves */
    const total = r.height + vh
    const passed = Math.min(Math.max(vh - r.top, 0), total)
    const p = passed / total
    const n = Math.floor(p * words.length * 1.25) // slightly ahead of scroll
    words.forEach((w, i) => w.classList.toggle('on', i < n))
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update) }
  }, { passive: true })
  update()
} else if (statement) {
  statement.querySelectorAll('.w').forEach(w => w.classList.add('on'))
}
