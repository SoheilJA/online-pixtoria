/**
 * PIXORIA — toast notifications (aria-live region)
 */
export function toast (message, timeout = 4200) {
  let region = document.querySelector('[data-toast-region]')
  if (!region) return
  const el = document.createElement('output')
  el.className = 'toast'
  el.textContent = message
  region.appendChild(el)
  setTimeout(() => {
    el.style.opacity = '0'
    el.style.transition = 'opacity .3s'
    setTimeout(() => el.remove(), 320)
  }, timeout)
}
