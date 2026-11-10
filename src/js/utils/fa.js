/** Persian digits & shared helpers */

export const faDigits = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
export const enDigits = s => String(s)
  .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
  .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))

export const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)')
export const prefersReduced = () => REDUCED.matches

/** Add the `js` class as early as possible (progressive enhancement hook) */
document.documentElement.classList.add('js')

export const onVisible = (el, cb, opts = { threshold: 0.15 }) => {
  if (!el) return
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        cb(e.target)
        io.unobserve(e.target)
      }
    }
  }, opts)
  io.observe(el)
}
