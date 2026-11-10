/**
 * PIXORIA — interactive hero canvas
 * Lightweight Canvas 2D dot-grid field reacting to pointer.
 * Static under prefers-reduced-motion; degrades silently without canvas support.
 */
import { prefersReduced } from '../utils/fa.js'

const holder = document.querySelector('[data-hero-canvas]')
if (holder && !prefersReduced()) {
  const canvas = document.createElement('canvas')
  holder.appendChild(canvas)
  const ctx = canvas.getContext('2d')
  if (ctx) {
    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    let W = 0, H = 0, dots = []
    const GAP = 64
    const mouse = { x: -9999, y: -9999 }

    const build = () => {
      const r = holder.parentElement.getBoundingClientRect()
      W = r.width; H = r.height
      canvas.width = W * DPR
      canvas.height = H * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      dots = []
      for (let y = GAP / 2; y < H; y += GAP) {
        for (let x = GAP / 2; x < W; x += GAP) {
          dots.push({ x, y, ox: x, oy: y, p: 0 })
        }
      }
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, W, H)
      const time = t * 0.001
      for (const d of dots) {
        const dx = d.ox - mouse.x
        const dy = d.oy - mouse.y
        const dist = Math.hypot(dx, dy)
        const near = dist < 150
        if (near) d.p = Math.min(d.p + 0.08, 1)
        else d.p = Math.max(d.p - 0.06, 0)

        const wave = Math.sin(time * 1.4 + d.ox * 0.011 + d.oy * 0.007) * 1.6
        const push = d.p * 16
        const x = d.ox + (dist > 1 ? (dx / dist) * push : 0) + wave * 0.4
        const y = d.oy + (dist > 1 ? (dy / dist) * push : 0) + wave * 0.4

        const base = 1.4 + d.p * 2.4
        ctx.fillStyle = d.p > 0.25 ? 'rgba(255,90,0,' + (0.28 + d.p * 0.6) + ')' : 'rgba(96,96,96,0.5)'
        ctx.fillRect(x - base / 2, y - base / 2, base, base)
      }
      /* connecting lines to pointer for nearest dots */
      ctx.strokeStyle = 'rgba(255,90,0,0.16)'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (const d of dots) {
        if (d.p > 0.34) {
          ctx.moveTo(d.x || d.ox, d.y || d.oy)
          ctx.lineTo(mouse.x, mouse.y)
        }
      }
      ctx.stroke()
      requestAnimationFrame(draw)
    }

    build()
    requestAnimationFrame(draw)

    let rt = null
    window.addEventListener('resize', () => {
      clearTimeout(rt)
      rt = setTimeout(build, 150)
    }, { passive: true })

    const hero = holder.parentElement
    hero.addEventListener('pointermove', e => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
      /* coordinate readout */
      const cx = document.querySelector('[data-coords-x]')
      const cy = document.querySelector('[data-coords-y]')
      if (cx) cx.textContent = 'X: ' + String(Math.round(e.clientX - r.left)).padStart(4, '0')
      if (cy) cy.textContent = 'Y: ' + String(Math.round(e.clientY - r.top)).padStart(4, '0')
    }, { passive: true })
    hero.addEventListener('pointerleave', () => { mouse.x = -9999; mouse.y = -9999 }, { passive: true })
  }
}
