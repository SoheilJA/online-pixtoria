/**
 * PIXORIA — header, mega menu, mobile navigation
 */
const header = document.querySelector('[data-header]')
const toggle = document.querySelector('[data-nav-toggle]')
const mobileNav = document.querySelector('[data-mobile-nav]')
const megaWraps = document.querySelectorAll('[data-mega]')

/* sticky header condense */
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
}

/* mega menu (desktop): open on hover/focus, close on leave/blur/Esc */
megaWraps.forEach(wrap => {
  const trigger = wrap.querySelector('[data-mega-trigger]')
  const panel = wrap.querySelector('.mega')
  if (!trigger || !panel) return

  const open = () => { panel.classList.add('open'); trigger.setAttribute('aria-expanded', 'true') }
  const close = () => { panel.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false') }

  wrap.addEventListener('mouseenter', open)
  wrap.addEventListener('mouseleave', close)
  wrap.addEventListener('focusin', open)
  wrap.addEventListener('focusout', e => {
    if (!wrap.contains(e.relatedTarget)) close()
  })
  trigger.addEventListener('click', e => {
    // keyboard/touch users: first click toggles, second navigates
    if (panel.classList.contains('open') === false && window.matchMedia('(hover: none)').matches) {
      e.preventDefault()
      open()
    }
  })
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { close(); trigger.focus() }
  })
})

/* mobile nav overlay — focus trap + Esc + body lock */
if (toggle && mobileNav) {
  const links = mobileNav.querySelectorAll('a, button')
  let lastFocus = null

  const openNav = () => {
    lastFocus = document.activeElement
    toggle.setAttribute('aria-expanded', 'true')
    mobileNav.classList.add('open')
    document.body.classList.add('nav-locked')
    if (links.length) links[0].focus()
    document.addEventListener('keydown', trapKey)
  }
  const closeNav = () => {
    toggle.setAttribute('aria-expanded', 'false')
    mobileNav.classList.remove('open')
    document.body.classList.remove('nav-locked')
    if (lastFocus) lastFocus.focus()
    document.removeEventListener('keydown', trapKey)
  }

  const trapKey = e => {
    if (e.key === 'Escape') { closeNav(); return }
    if (e.key !== 'Tab') return
    const focusables = mobileNav.querySelectorAll('a[href], button:not([disabled])')
    const list = [...focusables]
    if (!list.length) return
    const first = list[0]
    const last = list[list.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }

  toggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open')
    isOpen ? closeNav() : openNav()
  })

  /* close when a nav link is followed */
  links.forEach(l => l.addEventListener('click', closeNav))
  mobileNav.addEventListener('click', e => {
    if (e.target === mobileNav) closeNav()
  })
}
