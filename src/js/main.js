/**
 * PIXORIA — site entry point
 * Modules self-activate only when their markup exists on the page.
 */
import { prefersReduced } from './utils/fa.js'
import { toast } from './components/toast.js'

import './navigation.js'
import './components/back-to-top.js'
import './components/reveal.js'
import './components/hero-canvas.js'
import './components/counters.js'
import './components/slider.js'
import './components/cursor.js'
import './components/modal.js'

import './pages/contact-form.js'
import './pages/blog.js'
import './pages/article.js'
import './pages/portfolio.js'

/* copy-link buttons (article share) */
document.querySelectorAll('[data-copy-link]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const url = btn.getAttribute('data-copy-link')
    try {
      await navigator.clipboard.writeText(url)
      toast('Ù„ÛŒÙ†Ú© Ù…Ù‚Ø§Ù„Ù‡ Ú©Ù¾ÛŒ Ø´Ø¯.')
    } catch {
      toast('Ú©Ù¾ÛŒ Ù†Ø´Ø¯ â€” Ù„ÛŒÙ†Ú© Ø±Ø§ Ø¯Ø³ØªÛŒ Ø§Ù†ØªØ®Ø§Ø¨ Ú©Ù†ÛŒØ¯.')
    }
  })
})
})

/* smooth anchor scrolling with header offset (native smooth handled by CSS) */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1)
    if (!id) return
    const target = document.getElementById(id)
    if (!target) return
    e.preventDefault()
    const y = target.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top: y, behavior: prefersReduced() ? 'auto' : 'smooth' })
    target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
  })
})
