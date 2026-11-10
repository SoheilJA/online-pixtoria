/**
 * PIXORIA — testimonial slider (RTL-correct, keyboard + swipe + pause)
 */
const slider = document.querySelector('[data-slider]')
if (slider) {
  const track = slider.querySelector('[data-slider-track]')
  const cards = [...slider.querySelectorAll('.tst-card')]
  const dotsBox = slider.querySelector('[data-slider-dots]')
  const prev = slider.querySelector('[data-slider-prev]')
  const next = slider.querySelector('[data-slider-next]')
  if (track && cards.length) {
    let index = 0
    let paused = false

    /* dots */
    const dots = cards.map((_, i) => {
      const b = document.createElement('button')
      b.type = 'button'
      b.setAttribute('role', 'tab')
      b.setAttribute('aria-label', `اسلاید ${i + 1}`)
      b.addEventListener('click', () => go(i))
      dotsBox.appendChild(b)
      return b
    })

    const visibleCount = () => {
      const w = window.innerWidth
      if (w >= 1280) return 3
      if (w >= 768) return 2
      return 1
    }
    const maxIndex = () => Math.max(0, cards.length - visibleCount())

    const apply = () => {
      /* RTL: moving to later slides = positive translateX */
      const cardW = cards[0].offsetWidth
      const gap = parseFloat(getComputedStyle(track).gap) || 20
      const x = index * (cardW + gap)
      track.style.transform = `translateX(${x}px)`
      dots.forEach((d, i) => {
        d.setAttribute('aria-current', i === index ? 'true' : 'false')
        d.classList.toggle('is-active', i === index)
      })
      if (prev) prev.disabled = index === 0
      if (next) next.disabled = index >= maxIndex()
    }
    const go = i => { index = Math.max(0, Math.min(i, maxIndex())); apply() }

    if (prev) prev.addEventListener('click', () => go(index - 1))
    if (next) next.addEventListener('click', () => go(index + 1))

    /* keyboard arrows on track */
    track.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') { go(index + 1); e.preventDefault() }
      if (e.key === 'ArrowLeft') { go(index - 1); e.preventDefault() }
    })

    /* swipe */
    let sx = null
    track.addEventListener('pointerdown', e => { sx = e.clientX })
    track.addEventListener('pointerup', e => {
      if (sx === null) return
      const dx = e.clientX - sx
      if (Math.abs(dx) > 48) {
        /* RTL: swipe left (negative dx) = next */
        dx < 0 ? go(index + 1) : go(index - 1)
      }
      sx = null
    })

    /* pause on hover / focus — and autoplay that respects it */
    slider.addEventListener('mouseenter', () => { paused = true })
    slider.addEventListener('mouseleave', () => { paused = false })
    slider.addEventListener('focusin', () => { paused = true })
    slider.addEventListener('focusout', () => { paused = false })

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInterval(() => {
        if (paused || document.hidden) return
        if (index >= maxIndex()) go(0)
        else go(index + 1)
      }, 5200)
    }

    window.addEventListener('resize', apply, { passive: true })
    apply()
  }
}
