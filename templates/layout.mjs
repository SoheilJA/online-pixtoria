/**
 * PIXORIA — base layout: document head, header, mega menu, mobile nav, footer
 */
import { SITE, NAV, SERVICES, SOCIALS, FOOTER_SERVICES } from '../content/site.mjs'
import { icon, logoMark } from './icons.mjs'

export const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

/* -------------------------------------------------------------------------- head */
function head ({ title, description, path, ogType = 'website', ogImage = '/og/default.png', jsonld = [] }) {
  const url = SITE.url + path
  const canonical = `<link rel="canonical" href="${url}">`
  const ld = jsonld.length
    ? jsonld.map(j => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`).join('\n    ')
    : ''
  return `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  ${canonical}
  <meta name="theme-color" content="#0D0D0D">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${SITE.url}${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="fa_IR">
  <meta property="og:site_name" content="${SITE.name}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${SITE.url}${ogImage}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon/favicon-32.png" sizes="32x32" type="image/png">
  <link rel="icon" href="/favicon/favicon-16.png" sizes="16x16" type="image/png">
  <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="preload" href="/fonts/Vazirmatn-Regular.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/fonts/Vazirmatn-Black.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/src/css/app.css">
  ${ld}`
}

/* -------------------------------------------------------------------------- header */
function header (currentPath) {
  const navLinks = NAV.map(n => {
    const active = currentPath.startsWith(n.href) && (n.href !== '/' || currentPath === '/')
    const cur = active ? ' aria-current="page"' : ''
    if (n.mega) {
      return `
        <div class="mega-wrap" data-mega>
          <a href="${n.href}" class="nav-link" aria-haspopup="true" aria-expanded="false" data-mega-trigger>${esc(n.label)} ${icon('chevronDown')}</a>
          <div class="mega" id="mega-services">
            <div class="mega-grid">
              ${SERVICES.map(s => `
              <a class="mega-item" href="/services/${s.slug}/">
                <span class="mega-num">${s.num}</span>
                <span>
                  <span class="mega-title">${esc(s.title)}</span>
                  <span class="mega-desc block">${esc(s.short)}</span>
                </span>
              </a>`).join('')}
            </div>
            <div class="mega-foot">
              <a href="/services/" class="link-draw" style="color:var(--color-accent);font-weight:600">مشاهده همه خدمات ${icon('arrowLeft', 'inline-block align-middle')}</a>
              <span class="mono-ltr">11 SERVICES</span>
            </div>
          </div>
        </div>`
    }
    return `<a href="${n.href}" class="nav-link"${cur}>${esc(n.label)}</a>`
  }).join('')

  const mobileServices = SERVICES.map(s =>
    `<a href="/services/${s.slug}/"><span class="mono-ltr" style="font-size:.7rem">${s.num}</span> ${esc(s.title)}</a>`).join('')

  return `
  <a class="skip-link" href="#main">پرش به محتوای اصلی</a>
  <header class="site-header" id="site-header" data-header>
    <div class="wrap header-inner">
      <a href="/" class="brand" aria-label="پیکسوریا — صفحه اصلی">
        ${logoMark(26)}
        <span class="flex flex-col">
          <span class="brand-name">${SITE.name}</span>
          <span class="brand-sub">${SITE.nameLatin}® STUDIO</span>
        </span>
      </a>
      <nav class="nav-desktop" aria-label="منوی اصلی">
        ${navLinks}
      </nav>
      <div class="flex items-center gap-3">
        <a href="/contact/" class="btn btn-primary btn-sm hidden sm:inline-flex">شروع پروژه</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="باز و بسته کردن منو" data-nav-toggle>
          <span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <nav class="mobile-nav" id="mobile-nav" aria-label="منوی موبایل" data-mobile-nav>
    <nav class="relative flex flex-col gap-1" aria-label="ناوبری موبایل">
      ${NAV.filter(n => !n.mega).map(n => `
      <a class="m-link" href="${n.href}"><span class="mono-ltr">↖</span>${esc(n.label)}</a>`).join('')}
      <a class="m-link" href="/services/"><span class="mono-ltr">↖</span>خدمات</a>
    </nav>
    <div class="relative mt-4">
      <p class="kicker mb-3" style="color:var(--color-ink3)">ALL SERVICES</p>
      <div class="m-sub">${mobileServices}</div>
    </div>
    <div class="relative mt-auto pt-8">
      <a href="/contact/" class="btn btn-primary w-full">شروع پروژه</a>
      <div class="flex items-center justify-between mt-6">
        <span class="mono-ltr text-xs" style="color:var(--color-ink3)">${SITE.nameLatin}.IR</span>
        <div class="socials">
          ${SOCIALS.map(s => `<a class="soc" href="${s.href}" aria-label="${s.label}" rel="noopener">${icon(s.icon)}</a>`).join('')}
        </div>
      </div>
    </div>
  </nav>`
}

/* -------------------------------------------------------------------------- footer */
function footer () {
  return `
  <footer class="site-footer">
    <div class="footer-ghost" aria-hidden="true">${SITE.nameLatin}</div>
    <div class="wrap">
      <div class="footer-grid">
        <div class="f-about">
          <a href="/" class="brand mb-5" aria-label="پیکسوریا — صفحه اصلی">
            ${logoMark(24)}
            <span class="flex flex-col">
              <span class="brand-name">${SITE.name}</span>
              <span class="brand-sub">${SITE.nameLatin}® STUDIO</span>
            </span>
          </a>
          <p>${SITE.name} یک استودیوی طراحی و توسعه وب است؛ وب‌سایت‌ها، فروشگاه‌ها و هویت‌های بصری‌ای می‌سازیم که کسب‌وکار شما را در فضای آنلاین جدی و قابل‌اتکا نشان می‌دهند.</p>
          <div class="socials mt-5">
            ${SOCIALS.map(s => `<a class="soc" href="${s.href}" aria-label="${s.label}" rel="noopener">${icon(s.icon)}</a>`).join('')}
          </div>
        </div>
        <nav aria-label="دسترسی سریع">
          <h2 class="f-title">دسترسی سریع</h2>
          <div class="f-list">
            <a href="/">صفحه اصلی</a>
            <a href="/about/">درباره پیکسوریا</a>
            <a href="/services/">همه خدمات</a>
            <a href="/portfolio/">نمونه‌کارها</a>
            <a href="/blog/">وبلاگ</a>
            <a href="/contact/">تماس و مشاوره</a>
          </div>
        </nav>
        <nav aria-label="خدمات">
          <h2 class="f-title">خدمات</h2>
          <div class="f-list">
            ${FOOTER_SERVICES.slice(0, 6).map(s => `<a href="/services/${s.slug}/">${esc(s.title)}</a>`).join('')}
            <a href="/services/" style="color:var(--color-accent)">+ ۵ خدمت دیگر</a>
          </div>
        </nav>
        <div>
          <h2 class="f-title">تماس</h2>
          <ul class="f-contact">
            <li>${icon('mail')}<a class="mono-ltr" href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li>${icon('phone')}<a class="mono-ltr" href="tel:${SITE.phone.replace(/\s/g, '')}">${SITE.phoneDisplay}</a></li>
            <li>${icon('mapPin')}<span>${SITE.address}</span></li>
            <li>${icon('clock')}<span>${SITE.hours}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${SITE.year} ${SITE.name} — تمام حقوق محفوظ است.</span>
        <span class="flex items-center gap-4">
          <a href="/privacy/" class="hover:text-[color:var(--color-accent)] transition-colors">حریم خصوصی</a>
          <a href="/terms/" class="hover:text-[color:var(--color-accent)] transition-colors">قوانین و شرایط</a>
          <button class="btn-ghost btn-sm" type="button" data-to-top aria-label="بازگشت به بالای صفحه">${icon('arrowUp')}</button>
        </span>
      </div>
    </div>
  </footer>`
}

/* -------------------------------------------------------------------------- page */
export function page ({ title, description, path = '/', bodyClass = '', ogType, ogImage, jsonld = [], main = '' }) {
  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
${head({ title, description, path, ogType, ogImage, jsonld })}
  <script type="module" src="/src/js/main.js"></script>
</head>
<body class="${bodyClass}">
${header(path)}
<main id="main">
${main}
</main>
${footer()}
<div class="toast-region" aria-live="polite" data-toast-region></div>
<button class="to-top" type="button" data-to-top aria-label="بازگشت به بالای صفحه">${icon('arrowUp')}</button>
</body>
</html>`
}
