/**
 * PIXORIA — Service page template (11 pages)
 */
import { esc } from '../layout.mjs'
import { icon } from '../icons.mjs'
import { secHead, planCards, timeline, faqList, faqJsonld, ctaFinal, crumbs, crumbsJsonld, relatedServices, relatedProjects, tstSlider } from '../components.mjs'
import { prjCoverArt } from '../covers.mjs'
import { svcIllustration } from '../illustrations.mjs'
import { SITE, TESTIMONIALS, SERVICE_BY_SLUG } from '../../content/site.mjs'

export function serviceMain ({ svc, relatedPrj, relatedSvcs }) {
  const tms = (svc.testimonialIds || []).map(id => TESTIMONIALS.find(t => t.id === id)).filter(Boolean)
  return `
  <!-- breadcrumb -->
  <div class="wrap"><div class="pt-2">${crumbs([
    { label: 'خدمات', href: '/services/' },
    { label: svc.title, href: `/services/${svc.slug}/` }
  ])}</div></div>

  <!-- hero -->
  <section class="page-hero">
    <div class="wrap">
      <p class="ph-kicker"><span class="num">[${svc.num}]</span> — SERVICE ${icon('arrowLeft')}</p>
      <h1>${esc(svc.title)}</h1>
      <p class="ph-lead mt-4 text-xl font-medium" style="color:var(--color-ink)">${esc(svc.tagline)}</p>
      <p class="ph-lead">${esc(svc.heroText)}</p>
      <div class="hero-cta mt-8">
        <a class="btn btn-primary" href="/contact/?service=${svc.slug}">شروع همین حالا ${icon('arrowLeft', 'arr')}</a>
        <a class="btn btn-secondary" href="#plans">دیدن پلن‌ها</a>
      </div>
      <div class="ph-meta">
        <span><span class="k">TIMELINE</span> برنامه زمانی مکتوب</span>
        <span><span class="k">SUPPORT</span> دوره پشتیبانی رایگان</span>
        <span><span class="k">PRICING</span> مشاوره و استعلام رایگان</span>
      </div>
    </div>
    <div class="wrap mt-10 lg:mt-14" data-reveal>
      <div class="grid gap-6 lg:grid-cols-[1.15fr_1fr] items-center">
        <div class="p-4 md:p-6 border border-[color:var(--color-line2)] bg-[color:var(--color-surface)]">${svcIllustration(svc.slug)}</div>
        <div class="flex flex-col gap-5">
          ${svc.features.slice(0, 4).map(f => `
          <div class="flex items-start gap-3 pb-4 border-b border-[color:var(--color-line2)]">
            <span class="mono-ltr text-xs pt-1.5" style="color:var(--color-accent)">+</span>
            <span class="text-sm md:text-base leading-7">${esc(f)}</span>
          </div>`).join('')}
          <a href="#features" class="link-draw text-sm font-bold self-start" style="color:var(--color-accent)">مشاهده همه ویژگی‌ها ${icon('arrowLeft')}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- intro -->
  <section class="section" aria-label="معرفی خدمت">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      <div class="grid gap-10 lg:grid-cols-[320px_1fr]">
        <div>
          ${secHead({ num: '۰۱', label: 'معرفی', en: 'OVERVIEW', title: esc(svc.intro.title) })}
        </div>
        <div class="flex flex-col gap-6">
          ${svc.intro.paragraphs.map(p => `<p class="text-lg leading-9" style="color:var(--color-ink2)" data-reveal>${esc(p)}</p>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- offers -->
  <section class="section" aria-label="چه کاری انجام می‌دهیم">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({ num: '۰۲', label: 'چه کاری انجام می‌دهیم', en: 'WHAT WE DO', title: 'خدمات ما در این حوزه' })}
      <div class="grid-3 pb-4" data-stagger>
        ${svc.offers.map((o, i) => `
        <div class="card p-6">
          <span class="mono-ltr text-xs" style="color:var(--color-accent)">۰${faDigits(i + 1)}</span>
          <h3 class="mt-3 text-lg font-bold leading-8">${esc(o.t)}</h3>
          <p class="mt-2 text-sm leading-7" style="color:var(--color-ink2)">${esc(o.d)}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- benefits -->
  <section class="section" aria-label="مزایا">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      <div class="grid gap-10 lg:grid-cols-[320px_1fr]">
        <div>
          ${secHead({ num: '۰۳', label: 'مزایا', en: 'BENEFITS', title: 'این خدمت چه چیزی به شما می‌دهد؟' })}
        </div>
        <div data-stagger>
          ${svc.benefits.map((b, i) => `
          <div class="svc-card">
            <span class="svc-num">۰${faDigits(i + 1)}</span>
            <span class="svc-body">
              <h3>${esc(b.t)}</h3>
              <p style="display:block">${esc(b.d)}</p>
            </span>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- features -->
  <section class="section" id="features" aria-label="ویژگی‌ها">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({ num: '۰۴', label: 'ویژگی‌ها', en: 'FEATURES', title: 'در هر پروژه، این موارد جزء اصول کار ماست' })}
      <ul class="grid gap-3 sm:grid-cols-2 pb-4" data-stagger>
        ${svc.features.map(f => `
        <li class="flex items-start gap-3 p-4 border border-[color:var(--color-line2)] bg-[color:var(--color-surface)]">
          <span class="mono-ltr text-xs pt-1.5" style="color:var(--color-accent)">+</span>
          <span class="text-sm leading-7">${esc(f)}</span>
        </li>`).join('')}
      </ul>
    </div>
  </section>

  <!-- workflow -->
  <section class="section" aria-label="فرآیند اجرا">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      <div class="grid gap-10 lg:grid-cols-[280px_1fr]">
        <div>
          ${secHead({ num: '۰۵', label: 'فرآیند اجرا', en: 'WORKFLOW', title: 'مسیر پروژه شما' })}
        </div>
        ${timeline(svc.workflow)}
      </div>
    </div>
  </section>

  <!-- pricing -->
  <section class="section" id="plans" aria-label="پلن‌ها">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({
        num: '۰۶',
        label: 'پلن‌ها',
        en: 'PLANS',
        title: 'چهار پلن، یک استاندارد کیفیت',
        desc: 'قیمت هر پروژه بعد از جلسه مشاوره رایگان و بر اساس نیاز واقعی شما اعلام می‌شود — بدون هزینه پنهان.'
      })}
      ${planCards(svc)}
    </div>
  </section>

  ${relatedPrj.length ? `
  <!-- related projects -->
  <section class="section" aria-label="پروژه‌های مرتبط">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({ num: '۰۷', label: 'پروژه‌های مرتبط', en: 'RELATED WORK', title: 'کارهای مرتبط با این خدمت' })}
      ${relatedProjects(relatedPrj)}
      <p class="mt-4 text-xs" style="color:var(--color-ink3)">پروژه‌های بالا <span class="demo-badge">نمونه‌کار نمایشی</span> هستند.</p>
    </div>
  </section>` : ''}

  ${tms.length ? `
  <!-- testimonials -->
  <section class="section" aria-label="نظر مشتریان این خدمت">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({ num: '۰۸', label: 'نظر مشتریان', en: 'CLIENTS', title: 'تجربه کار با ما' })}
      ${tstSlider(tms, `tst-${svc.slug}`)}
    </div>
  </section>` : ''}

  <!-- faq -->
  <section class="section" aria-label="سوالات پرتکرار">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      <div class="grid gap-10 lg:grid-cols-[320px_1fr]">
        <div>
          ${secHead({ num: '۰۹', label: 'سوالات پرتکرار', en: 'FAQ', title: 'پرسش‌های رایج این خدمت' })}
        </div>
        ${faqList(svc.faq)}
      </div>
    </div>
  </section>

  <!-- related services -->
  <section class="section" aria-label="خدمات مرتبط">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({ num: '۱۰', label: 'خدمات مرتبط', en: 'RELATED', title: 'شاید این هم به کارتان بیاید' })}
      ${relatedServices(relatedSvcs, svc.slug)}
    </div>
  </section>

  ${ctaFinal({
    num: '۱۱',
    title: `آماده‌اید <span style="text-decoration:underline;text-underline-offset:8px">${esc(svc.title)}</span> را شروع کنید؟`,
    text: 'در جلسه مشاوره رایگان، نیازتان را دقیق بررسی می‌کنیم و مسیر شفاف پروژه — همراه با برنامه زمانی — را پیش روی شما می‌گذاریم.',
    primaryHref: `/contact/?service=${svc.slug}`,
    secondaryHref: '/portfolio/'
  })}
`
}

function faDigits (n) {
  return String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])
}

export function serviceJsonld (svc) {
  const path = `/services/${svc.slug}/`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${svc.title} — پیکسوریا`,
      description: svc.metaDesc,
      url: `${SITE.url}${path}`,
      provider: {
        '@type': 'Organization',
        name: SITE.name,
        url: `${SITE.url}/`
      },
      areaServed: 'IR',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `${SITE.url}/contact/?service=${svc.slug}`,
        servicePhone: SITE.phone
      }
    },
    faqJsonld(svc.faq, path),
    crumbsJsonld([
      { label: 'خدمات', href: '/services/' },
      { label: svc.title, href: path }
    ], path)
  ]
}
