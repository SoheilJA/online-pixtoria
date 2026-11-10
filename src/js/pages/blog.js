/**
 * PIXORIA — blog index: client-side search + category filter
 * Search fetches the dev-time generated static /search-index.json.
 * Without JS all posts remain visible via pagination (progressive enhancement).
 */
const grid = document.querySelector('[data-blog-grid]')
if (grid) {
  const cards = [...grid.querySelectorAll('.post-card')]
  const chips = [...document.querySelectorAll('[data-cat]')]
  const empty = document.querySelector('[data-blog-empty]')
  const searchInput = document.querySelector('#blog-search')
  let index = null // search index (articles of ALL pages)
  let activeCat = 'all'
  let query = ''

  const matches = (card, q, cat) => {
    const catOk = cat === 'all' || card.getAttribute('data-filter-cat') === cat
    if (!q) return catOk
    if (!catOk) return false
    const rec = index?.find(r => card.getAttribute('href') === r.url)
    if (!rec) return false
    const hay = `${rec.title} ${rec.excerpt} ${rec.categoryName} ${rec.tags.join(' ')}`
    return hay.toLowerCase().includes(q.toLowerCase())
  }

  const apply = () => {
    let shown = 0
    cards.forEach(c => {
      const show = matches(c, query, activeCat)
      c.style.display = show ? '' : 'none'
      if (show) shown++
    })
    if (empty) empty.classList.toggle('hidden', shown > 0 || !query)
  }

  chips.forEach(ch => {
    ch.addEventListener('click', () => {
      activeCat = ch.getAttribute('data-cat')
      chips.forEach(c => {
        const on = c === ch
        c.classList.toggle('is-active', on)
        c.setAttribute('aria-pressed', on ? 'true' : 'false')
      })
      apply()
    })
  })

  if (searchInput) {
    let t = null
    searchInput.addEventListener('input', () => {
      query = searchInput.value.trim()
      clearTimeout(t)
      t = setTimeout(async () => {
        if (query && !index) {
          try {
            const res = await fetch('/search-index.json')
            index = await res.json()
          } catch { index = [] }
        }
        apply()
      }, 160)
    })
  }
}
