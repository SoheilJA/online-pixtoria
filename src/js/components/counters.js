/**
 * PIXORIA — animated statistic counters (Persian digits)
 */
import { faDigits, onVisible, prefersReduced } from '../utils/fa.js'

document.querySelectorAll('[data-counter]').forEach(el => {
  const target = parseFloat(el.getAttribute('data-counter'))
  if (prefersReduced()) { el.textContent = faDigits(target); return }
  onVisible(el, () => {
    const dur = 1400
    const t0 = performance.now()
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = faDigits(Math.round(target * eased))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  })
})
