/**
 * PIXORIA — accessible modal/lightbox (focus trap, Esc, backdrop, focus return)
 * Used by the portfolio project gallery.
 */
const modal = document.querySelector('[data-modal]')
if (modal) {
  const box = modal.querySelector('.modal-box')
  const closeBtn = modal.querySelector('[data-modal-close]')
  const content = modal.querySelector('[data-modal-content]')
  const caption = modal.querySelector('[data-modal-caption]')
  let lastFocus = null

  const open = () => {
    lastFocus = document.activeElement
    modal.classList.add('open')
    document.body.classList.add('nav-locked')
    if (closeBtn) closeBtn.focus()
    document.addEventListener('keydown', keys)
  }
  const close = () => {
    modal.classList.remove('open')
    document.body.classList.remove('nav-locked')
    document.removeEventListener('keydown', keys)
    if (lastFocus) lastFocus.focus()
  }
  const keys = e => {
    if (e.key === 'Escape') return close()
    if (e.key !== 'Tab') return
    const list = [...modal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    if (!list.length) return
    const first = list[0]
    const last = list[list.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }

  if (closeBtn) closeBtn.addEventListener('click', close)
  modal.addEventListener('click', e => { if (e.target === modal) close() })

  /* gallery integration */
  document.querySelectorAll('[data-gallery-item]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-gallery-item'), 10)
      const clone = btn.querySelector('.aspect-\\[16\\/10\\]') || btn.firstElementChild
      if (content && clone) {
        content.innerHTML = ''
        const art = clone.cloneNode(true)
        art.classList.remove('aspect-[16/10]', 'border-b')
        art.style.aspectRatio = '16/10'
        art.style.height = 'auto'
        art.style.border = 'none'
        art.style.background = 'var(--color-elevated)'
        content.appendChild(art)
      }
      if (caption) caption.textContent = btn.querySelector('figcaption span')?.textContent || ''
      open()
    })
  })
}
