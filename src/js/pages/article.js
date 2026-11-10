/**
 * PIXORIA — article page: ToC, active heading, font-size persistence, reading progress
 */
import { faDigits } from '../utils/fa.js'

const body = document.querySelector('[data-article-body]')
const toc = document.querySelector('[data-toc]')
const tocList = toc?.querySelector('[data-toc-list]')

if (body && tocList) {
  const heads = [...body.querySelectorAll('h2, h3')]
  if (heads.length) {
    heads.forEach((h, i) => {
      if (!h.id) h.id = 'h-' + faDigits(i + 1)
      const a = document.createElement('a')
      a.href = '#' + h.id
      a.textContent = h.textContent
      a.className = h.tagName === 'H3' ? 'lvl-3' : ''
      const li = document.createElement('li')
      li.appendChild(a)
      tocList.appendChild(li)
    })

    /* active heading highlight */
    const links = [...tocList.querySelectorAll('a')]
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id))
        }
      })
    }, { rootMargin: '-15% 0px -75% 0px' })
    heads.forEach(h => io.observe(h))
  } else {
    toc.remove()
  }
}

/* font size persistence (localStorage guarded) */
const fsButtons = document.querySelectorAll('[data-fs]')
if (fsButtons.length) {
  const set = size => {
    body?.setAttribute('data-fs', size)
    fsButtons.forEach(b => b.setAttribute('aria-pressed', b.getAttribute('data-fs') === size ? 'true' : 'false'))
    try { localStorage.setItem('px-font-size', size) } catch { /* private mode */ }
  }
  let saved = 'md'
  try { saved = localStorage.getItem('px-font-size') || 'md' } catch { /* ignore */ }
  set(saved)
  fsButtons.forEach(b => b.addEventListener('click', () => set(b.getAttribute('data-fs'))))
}

/* reading progress bar */
const progress = document.querySelector('[data-read-progress]')
if (progress) {
  const bar = progress.querySelector('.bar')
  const update = () => {
    const h = document.documentElement
    const max = h.scrollHeight - h.clientHeight
    const p = max > 0 ? Math.min(h.scrollTop / max, 1) : 0
    bar.style.width = (p * 100) + '%'
  }
  update()
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update, { passive: true })
}
