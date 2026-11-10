/**
 * PIXORIA — back to top buttons
 */
document.querySelectorAll('[data-to-top]').forEach(btn => {
  const update = () => btn.classList.toggle('show', window.scrollY > 600)
  update()
  window.addEventListener('scroll', update, { passive: true })
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  })
})
