/**
 * PIXORIA — portfolio index filter (no page reload, hash sync)
 * Without JS all projects remain visible.
 */
const grid = document.querySelector('[data-portfolio-grid]')
if (grid) {
  const cards = [...grid.querySelectorAll('.prj-card')]
  const chips = [...document.querySelectorAll('[data-pfilter]')]
  const empty = document.querySelector('[data-portfolio-empty]')

  const apply = cat => {
    let shown = 0
    cards.forEach(c => {
      const show = cat === 'all' || c.getAttribute('data-filter-cat') === cat
      c.style.display = show ? '' : 'none'
      if (show) { shown++; c.animate?.([{ opacity: 0, transform: 'scale(.96)' }, { opacity: 1, transform: 'none' }], { duration: 350, easing: 'cubic-bezier(.16,1,.3,1)' }) }
    })
    if (empty) empty.classList.toggle('hidden', shown > 0)
    /* hash sync */
    if (cat === 'all') {
      if (location.hash) history.replaceState(null, '', location.pathname)
    } else if (location.hash !== `#filter-${cat}`) {
      history.replaceState(null, '', `#filter-${cat}`)
    }
  }

  chips.forEach(ch => {
    ch.addEventListener('click', () => {
      const cat = ch.getAttribute('data-pfilter')
      chips.forEach(c => {
        const on = c === ch
        c.classList.toggle('is-active', on)
        c.setAttribute('aria-pressed', on ? 'true' : 'false')
      })
      apply(cat)
    })
  })

  /* initial state from hash */
  const m = location.hash.match(/^#filter-(\w+)$/)
  if (m) {
    const chip = chips.find(c => c.getAttribute('data-pfilter') === m[1])
    if (chip) chip.click()
  }
}
