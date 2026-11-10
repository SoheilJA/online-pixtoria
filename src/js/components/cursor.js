/**
 * PIXORIA — custom cursor (fine pointer only, decorative accent)
 * Never replaces the cursor over text inputs; disabled for reduced motion.
 */
import { prefersReduced } from '../utils/fa.js'

const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
if (fine.matches && !prefersReduced() && !('ontouchstart' in window)) {
  document.documentElement.classList.add('has-cursor')

  const dot = document.createElement('div')
  dot.className = 'cursor-dot'
  const ring = document.createElement('div')
  ring.className = 'cursor-ring'
  document.body.append(dot, ring)

  let mx = -100, my = -100, rx = -100, ry = -100

  document.addEventListener('pointermove', e => {
    mx = e.clientX; my = e.clientY
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`
  }, { passive: true })

  const hoverables = 'a, button, summary, label, .chip, [data-slider-item]'
  document.addEventListener('pointerover', e => {
    if (e.target.closest(hoverables)) ring.classList.add('is-hover')
  })
  document.addEventListener('pointerout', e => {
    if (e.target.closest(hoverables)) ring.classList.remove('is-hover')
  })

  const loop = () => {
    rx += (mx - rx) * 0.16
    ry += (my - ry) * 0.16
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`
    requestAnimationFrame(loop)
  }
  loop()

  /* hide when leaving window */
  document.addEventListener('pointerleave', () => { dot.style.opacity = ring.style.opacity = '0' })
  document.addEventListener('pointerenter', () => { dot.style.opacity = ring.style.opacity = '1' })
}
