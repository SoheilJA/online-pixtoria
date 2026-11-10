/**
 * PIXORIA — site configuration
 * Single source of truth for contact data used by JS-rendered links.
 * The same values are mirrored in the static HTML by the page generator
 * (templates/layout.mjs imports this file via content/site.mjs).
 *
 * ⚠️ REPLACE BEFORE LAUNCH — see PROJECT_MAP.md "Replace before launch".
 */
export const site = {
  name: 'پیکسوریا',
  nameLatin: 'PIXORIA',
  tagline: 'استودیوی طراحی و توسعه وب',
  url: 'https://pixoria.ir', // SITE_URL — used for canonical/OG/sitemap
  email: 'info@pixoria.ir', // placeholder
  phone: '+989000000000', // placeholder (E.164, no spaces — used in tel:/wa.me)
  phoneDisplay: '+98 900 000 0000', // placeholder
  whatsapp: '989000000000', // placeholder (wa.me format)
  telegram: 'pixoria_studio', // placeholder (t.me username)
  instagram: 'pixoria.studio', // placeholder
  address: 'تهران، ایران',
  hours: 'شنبه تا پنجشنبه — ۹ تا ۱۸',
  coords: { lat: '35.6892° N', lng: '51.3890° E' },
  year: '۱۴۰۵'
}
