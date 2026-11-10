/**
 * PIXORIA — reusable HTML components
 */
import { esc } from './layout.mjs'
import { icon } from './icons.mjs'
import { SITE } from '../content/site.mjs'
import { prjCoverArt, postCover } from './covers.mjs'

/* -------------------------------------------------------------- section head */
export function secHead ({ num, label, en, title, desc }) {
  return `
  <div class="sec-head" data-reveal>
    <div class="sec-label">
      <span class="num">[${num}]</span>
      <span class="tick" data-line-grow></span>
      <span>${esc(label)}</span>
      ${en ? `<span class="mono-ltr" style="color:var(--color-ink3)">${esc(en)}</span>` : ''}
    </div>
    <div class="flex-1">
      <h2 class="sec-title">${title}</h2>
      ${desc ? `<p class="sec-desc mt-3">${esc(desc)}</p>` : ''}
    </div>
  </div>`
}

/* -------------------------------------------------------------- service card */
export function svcCard (s) {
  return `
  <a class="svc-card" href="/services/${s.slug}/">
    <span class="svc-num">${s.num}</span>
    <span class="svc-body">
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.short)}</p>
    </span>
    <span class="svc-arrow">${icon('arrowLeft')}</span>
  </a>`
}

/* -------------------------------------------------------------- project card */
export function prjCard (p) {
  return `
  <a class="prj-card" href="/portfolio/projects/${p.slug}/" data-filter-cat="${p.category}">
    <div class="prj-cover">${prjCoverArt(p)}</div>
    <div class="prj-meta">
      <span class="flex items-center gap-2"><span class="live-dot" style="animation:none;width:6px;height:6px;background:var(--color-accent);border-radius:0"></span>${esc(p.categoryName)}</span>
      <span class="mono-ltr">${esc(p.year)}</span>
    </div>
    <div class="prj-body">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.summary)}</p>
    </div>
  </a>`
}

/* -------------------------------------------------------------- blog post card */
export function postCard (a) {
  return `
  <a class="post-card" href="/blog/articles/${a.slug}/" data-filter-cat="${a.category}">
    <div class="post-cover">${postCover(a)}</div>
    <div class="post-body">
      <div class="post-meta">
        <span class="cat">${esc(a.categoryName)}</span>
        <span>${a.jalaliDate}</span>
        <span>${a.readingTimeFa} دقیقه مطالعه</span>
      </div>
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.excerpt)}</p>
    </div>
  </a>`
}

/* -------------------------------------------------------------- pricing plans */
export function planCards (service) {
  const plans = service.plans
  return `
  <div class="grid-4" data-stagger>
    ${plans.map(pl => `
    <div class="plan-card${pl.featured ? ' featured' : ''}">
      ${pl.featured ? `<span class="plan-badge">پیشنهادی</span>` : ''}
      <div class="flex items-baseline justify-between gap-2">
        <h3 class="plan-name">${esc(pl.name)}</h3>
        <span class="mono-ltr text-xs" style="color:var(--color-ink3)">${esc(pl.slug).toUpperCase()}</span>
      </div>
      <p class="plan-desc">${esc(pl.desc)}</p>
      <p class="plan-price">
        قیمت بر اساس پروژه
        <span class="hint">برای دریافت قیمت دقیق، مشاوره رایگان بگیرید</span>
      </p>
      <ul class="plan-feats">
        ${pl.features.map(f => `<li>${esc(f)}</li>`).join('')}
      </ul>
      <a class="btn ${pl.featured ? 'btn-primary' : 'btn-secondary'}" href="/contact/?service=${service.slug}&plan=${pl.slug}">
        ${esc(pl.cta || 'شروع همین حالا')}
      </a>
    </div>`).join('')}
  </div>`
}

/* -------------------------------------------------------------- FAQ */
export function faqList (items, { column = false } = {}) {
  return `
  <div class="${column ? 'grid-2' : ''}">
    <div class="faq-list ${column ? 'md:col-span-2' : ''}">
      ${items.map((f, i) => `
      <details class="faq-item" ${i === 0 ? 'open' : ''}>
        <summary class="faq-q">
          <span>${esc(f.q)}</span>
          <span class="fx" aria-hidden="true">+</span>
        </summary>
        <div class="faq-a">
          <p>${esc(f.a)}</p>
        </div>
      </details>`).join('')}
    </div>
  </div>`
}

export function faqJsonld (items, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }
}

/* -------------------------------------------------------------- timeline */
export function timeline (steps) {
  return `
  <div class="timeline">
    ${steps.map((st, i) => `
    <div class="tl-step" data-reveal style="--reveal-delay:${i * 0.07}s">
      <div class="tl-dot">${st.num}</div>
      <div class="tl-body">
        <h3>${esc(st.title)}</h3>
        <p>${esc(st.text)}</p>
      </div>
    </div>`).join('')}
  </div>`
}

/* -------------------------------------------------------------- stats */
export function statsGrid (stats) {
  return `
  <div class="grid-4" data-stagger>
    ${stats.map(s => `
    <div class="stat">
      <div class="stat-val"><span data-counter="${s.value}">۰</span>${s.suffix ? `<span class="plus">${s.suffix}</span>` : ''}</div>
      <div class="stat-label">${esc(s.label)}</div>
    </div>`).join('')}
  </div>`
}

/* -------------------------------------------------------------- breadcrumb */
export function crumbs (items) {
  return `
  <nav class="crumbs" aria-label="مسیر صفحه">
    <a href="/">خانه</a>
    ${items.slice(0, -1).map(it => `<span class="sep">/</span><a href="${it.href}">${esc(it.label)}</a>`).join('')}
    <span class="sep">/</span><span aria-current="page">${esc(items[items.length - 1].label)}</span>
  </nav>`
}

export function crumbsJsonld (items, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'خانه', item: SITE.url + '/' },
      ...items.slice(0, -1).map((it, i) => ({ '@type': 'ListItem', position: i + 2, name: it.label, item: SITE.url + it.href })),
      { '@type': 'ListItem', position: items.length + 1, name: items[items.length - 1].label, item: SITE.url + path }
    ]
  }
}

/* -------------------------------------------------------------- marquee */
export function marquee (items) {
  const seq = items.map(t => `<span>${esc(t)}</span><span class="dot">✦</span>`).join('')
  return `
  <div class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <div class="marquee-item">${seq}</div>
      <div class="marquee-item">${seq}</div>
    </div>
  </div>`
}

/* -------------------------------------------------------------- final CTA */
export function ctaFinal ({ title, text, primaryHref = '/contact/', primaryLabel = 'شروع پروژه', secondaryHref = '/portfolio/', secondaryLabel = 'دیدن نمونه‌کارها', num = '۱۲' }) {
  return `
  <section class="section cta-final">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-20 md:py-28">
      <div class="flex items-center gap-3 mb-6" data-reveal>
        <span class="mono-ltr text-xs" style="color:rgb(22 8 0/.55)">[${num}] — LET'S TALK</span>
      </div>
      <h2 data-reveal>${title}</h2>
      <p class="mt-6 max-w-2xl text-lg leading-9" style="color:rgb(22 8 0/.8)" data-reveal>${esc(text)}</p>
      <div class="flex flex-wrap gap-3 mt-10" data-reveal>
        <a class="btn btn-primary" href="${primaryHref}">${esc(primaryLabel)} ${icon('arrowLeft', 'arr')}</a>
        <a class="btn btn-secondary" href="${secondaryHref}">${esc(secondaryLabel)}</a>
      </div>
    </div>
  </section>`
}

/* -------------------------------------------------------------- testimonials slider */
export function tstSlider (items, id = 'tst') {
  return `
  <div class="slider" id="${id}" data-slider>
    <p class="text-xs mb-5" style="color:var(--color-ink3)">* نظرات بالا <span class="demo-badge">محتوای نمایشی</span> هستند و صرفاً ساختار بخش را نشان می‌دهند.</p>
    <div class="slider-track" data-slider-track tabindex="0" role="group" aria-label="اسلایدر نظرات مشتریان — برای جابه‌جایی از کلیدهای جهت استفاده کنید">
      ${items.map(t => `
      <figure class="tst-card">
        <blockquote class="tst-quote">${esc(t.text)}</blockquote>
        <figcaption class="tst-who">
          <span class="tst-ava" aria-hidden="true">${esc(t.name.trim()[0])}</span>
          <span>
            <span class="tst-name block">${esc(t.name)}</span>
            <span class="tst-role block">${esc(t.role)}</span>
          </span>
        </figcaption>
      </figure>`).join('')}
    </div>
    <div class="flex items-center justify-between mt-6">
      <div class="slider-dots" data-slider-dots role="tablist" aria-label="انتخاب اسلاید"></div>
      <div class="slider-nav">
        <button class="slider-btn" type="button" data-slider-prev aria-label="اسلاید قبلی">${icon('chevronLeft')}</button>
        <button class="slider-btn" type="button" data-slider-next aria-label="اسلاید بعدی"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></button>
      </div>
    </div>
  </div>`
}

/* -------------------------------------------------------------- contact info cards */
export function infoCards () {
  return `
  <div class="grid-2" data-stagger>
    <div class="info-card">
      <span class="info-ic">${icon('mail')}</span>
      <div>
        <h3>ایمیل</h3>
        <a class="mono-ltr" href="mailto:${SITE.email}">${SITE.email}</a>
      </div>
    </div>
    <div class="info-card">
      <span class="info-ic">${icon('phone')}</span>
      <div>
        <h3>تلفن تماس</h3>
        <a class="mono-ltr" href="tel:${SITE.phone.replace(/\s/g, '')}">${SITE.phoneDisplay}</a>
      </div>
    </div>
    <div class="info-card">
      <span class="info-ic">${icon('clock')}</span>
      <div>
        <h3>ساعات کاری</h3>
        <p>${SITE.hours}</p>
      </div>
    </div>
    <div class="info-card">
      <span class="info-ic">${icon('mapPin')}</span>
      <div>
        <h3>آدرس</h3>
        <p>${SITE.address}</p>
      </div>
    </div>
  </div>`
}

/* -------------------------------------------------------------- related cards row */
export function relatedServices (services, currentSlug) {
  return `
  <div class="grid-3" data-stagger>
    ${services.map(s => `
    <a class="card p-6 flex flex-col gap-3 group" href="/services/${s.slug}/">
      <span class="mono-ltr text-xs" style="color:var(--color-accent)">${s.num}</span>
      <h3 class="text-lg font-bold leading-8">${esc(s.title)}</h3>
      <p class="text-sm leading-7" style="color:var(--color-ink2)">${esc(s.short)}</p>
      <span class="mt-auto pt-2 text-sm font-bold inline-flex items-center gap-2 group-hover:text-[color:var(--color-accent)] transition-colors">مشاهده خدمت ${icon('arrowLeft')}</span>
    </a>`).join('')}
  </div>`
}

export function relatedPosts (posts) {
  return `<div class="grid-3" data-stagger>${posts.map(p => postCard(p)).join('')}</div>`
}

export function relatedProjects (projects) {
  return `<div class="grid-3" data-stagger>${projects.map(p => prjCard(p)).join('')}</div>`
}

/* -------------------------------------------------------------- pagination */
export function pager ({ current, total, baseHref }) {
  const items = []
  if (current > 1) items.push(`<a href="${current === 2 ? baseHref : `${baseHref}page/${current - 1}/`}" aria-label="صفحه قبل">${icon('chevronLeft')}</a>`)
  else items.push(`<span class="disabled">${icon('chevronLeft')}</span>`)
  for (let i = 1; i <= total; i++) {
    items.push(i === current
      ? `<span aria-current="page">${i === 1 ? '۱' : '۲'}</span>`
      : `<a href="${i === 1 ? baseHref : `${baseHref}page/${i}/`}">${i === 1 ? '۱' : '۲'}</a>`)
  }
  if (current < total) items.push(`<a href="${baseHref}page/${current + 1}/" aria-label="صفحه بعد"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></a>`)
  else items.push(`<span class="disabled"><svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></span>`)
  return `<nav class="pager" aria-label="صفحه‌بندی">${items.join('')}</nav>`
}
