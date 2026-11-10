/**
 * PIXORIA — Portfolio project page template
 */
import { esc } from '../layout.mjs'
import { icon } from '../icons.mjs'
import { crumbs, crumbsJsonld, relatedProjects, ctaFinal } from '../components.mjs'
import { prjCoverArt } from '../covers.mjs'
import { SITE } from '../../content/site.mjs'

export function projectMain ({ p, related, serviceName }) {
  return `
  <div class="wrap"><div class="pt-2">${crumbs([
    { label: 'نمونه‌کارها', href: '/portfolio/' },
    { label: p.title, href: `/portfolio/projects/${p.slug}/` }
  ])}</div></div>

  <section class="page-hero">
    <div class="wrap">
      <p class="ph-kicker">
        <span class="num">[WRK]</span> — ${esc(p.categoryName)}
        <span class="demo-badge">نمونه‌کار نمایشی</span>
      </p>
      <h1>${esc(p.title)}</h1>
      <p class="ph-lead">${esc(p.summary)}</p>
      <div class="ph-meta">
        <span><span class="k">CATEGORY</span> ${esc(p.categoryName)}</span>
        <span><span class="k">YEAR</span> ${p.year}</span>
        <span><span class="k">SERVICE</span> <a href="/services/${p.serviceSlug}/" style="color:var(--color-accent)">${esc(serviceName)}</a></span>
      </div>
    </div>
    <div class="wrap mt-10" data-reveal="mask">
      <div class="p-3 md:p-6 border border-[color:var(--color-line2)] bg-[color:var(--color-surface)]">
        <div class="browser">
          <div class="browser-bar">
            <span class="browser-dots" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="browser-url">${p.slug.replace(/-/g, '')}.ir</span>
            <span class="mono-ltr text-xs" style="color:var(--color-ink3)">DEMO</span>
          </div>
          <div class="browser-body !aspect-auto min-h-[280px]">${prjCoverArt(p)}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" aria-label="درباره پروژه">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-14">
      <div class="grid gap-10 lg:grid-cols-2">
        <div data-reveal>
          <h2 class="text-2xl font-black mb-4 flex items-center gap-3">
            <span class="mono-ltr text-xs" style="color:var(--color-accent)">01</span> چالش پروژه
          </h2>
          <p class="leading-9 text-lg" style="color:var(--color-ink2)">${esc(p.challenge)}</p>
        </div>
        <div data-reveal style="--reveal-delay:.1s">
          <h2 class="text-2xl font-black mb-4 flex items-center gap-3">
            <span class="mono-ltr text-xs" style="color:var(--color-accent)">02</span> راه‌حل پیکسوریا
          </h2>
          <p class="leading-9 text-lg" style="color:var(--color-ink2)">${esc(p.solution)}</p>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 mt-14" data-stagger>
        <div class="border border-[color:var(--color-line2)] bg-[color:var(--color-surface)] p-6">
          <h2 class="kicker mb-4">DELIVERABLES — تحویل‌داده‌شده‌ها</h2>
          <ul class="flex flex-col gap-3">
            ${p.deliverables.map(d => `<li class="flex gap-3 text-sm leading-7"><span class="mono-ltr" style="color:var(--color-accent)">+</span>${esc(d)}</li>`).join('')}
          </ul>
        </div>
        <div class="border border-[color:var(--color-line2)] bg-[color:var(--color-surface)] p-6">
          <h2 class="kicker mb-4">STACK — ابزارها و تکنیک‌ها</h2>
          <div class="flex flex-wrap gap-2">
            ${p.tech.map(t => `<span class="chip" style="cursor:default">${esc(t)}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- gallery -->
  <section class="section" aria-label="گالری پروژه">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-14">
      <div class="sec-label mb-8" data-reveal>
        <span class="num">[3×]</span><span class="tick" data-line-grow></span><span>گالری</span>
        <span class="mono-ltr" style="color:var(--color-ink3)">GALLERY</span>
      </div>
      <div class="grid-3" data-gallery>
        ${p.gallery.map((g, i) => `
        <figure class="card overflow-hidden">
          <button class="w-full block text-start cursor-pointer group" type="button" data-gallery-item="${i}" aria-label="باز کردن تصویر: ${esc(g.caption)}">
            <div class="aspect-[16/10] border-b border-[color:var(--color-line2)] bg-[color:var(--color-elevated)]">
              <div class="h-full">${prjCoverArt({ ...p, template: g.template })}</div>
            </div>
            <figcaption class="p-3 text-xs leading-6 flex items-center justify-between gap-2" style="color:var(--color-ink2)">
              <span>${esc(g.caption)}</span>
              <span class="group-hover:text-[color:var(--color-accent)] transition-colors" style="color:var(--color-ink3)">${icon('eye')}</span>
            </figcaption>
          </button>
        </figure>`).join('')}
      </div>
    </div>
  </section>

  <!-- related -->
  <section class="section" aria-label="پروژه‌های مرتبط">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-14">
      <div class="sec-label mb-8" data-reveal>
        <span class="num">[→]</span><span class="tick" data-line-grow></span><span>پروژه‌های مرتبط</span>
        <span class="mono-ltr" style="color:var(--color-ink3)">NEXT PROJECTS</span>
      </div>
      ${relatedProjects(related)}
    </div>
  </section>

  ${ctaFinal({
    num: 'NEW',
    title: 'پروژه بعدی می‌تواند پروژه شما باشد',
    text: 'اگر دوست دارید سایتی با همین دقت و کیفیت برای کسب‌وکارتان بسازیم، خوشحال می‌شویم صحبت‌مان را شروع کنیم.',
    primaryLabel: 'شروع پروژه',
    secondaryHref: '/portfolio/',
    secondaryLabel: 'بقیه نمونه‌کارها'
  })}

  <!-- gallery lightbox (single modal, filled by JS) -->
  <div class="modal" id="gallery-modal" role="dialog" aria-modal="true" aria-label="نمایش تصویر پروژه" data-modal>
    <div class="modal-box">
      <button class="modal-close" type="button" data-modal-close aria-label="بستن">${icon('close')}</button>
      <div class="min-h-[300px] bg-[color:var(--color-elevated)]" data-modal-content></div>
      <p class="modal-cap" data-modal-caption></p>
    </div>
  </div>
`
}

export function projectJsonld (p) {
  const path = `/portfolio/projects/${p.slug}/`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: p.title,
      description: p.summary,
      url: `${SITE.url}${path}`,
      image: `${SITE.url}/og/project.png`,
      inLanguage: 'fa-IR',
      creator: { '@type': 'Organization', name: SITE.name, url: `${SITE.url}/` },
      dateCreated: p.year,
      keywords: [...p.tech, p.categoryName].join(', '),
      isBasedOn: 'https://pixoria.ir/'
    },
    crumbsJsonld([
      { label: 'نمونه‌کارها', href: '/portfolio/' },
      { label: p.title, href: path }
    ], path)
  ]
}
