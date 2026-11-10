/**
 * PIXORIA — Home page template (13 sections)
 */
import { esc } from '../layout.mjs'
import { icon } from '../icons.mjs'
import { secHead, svcCard, prjCard, postCard, statsGrid, timeline, faqList, faqJsonld, marquee, ctaFinal, tstSlider } from '../components.mjs'
import { SITE, STATS, PROCESS, FAQ_HOME, TESTIMONIALS } from '../../content/site.mjs'

/* hero words: pre-wrapped for stagger animation (words only — Persian letters never split) */
function heroH1 () {
  const words = ['ما', 'وب‌سایت‌هایی', 'می‌سازیم', 'که', 'کار', 'می‌کنند.']
  const accent = ['کار', 'می‌کنند.']
  return words.map(w =>
    `<span class="word${accent.includes(w) ? ' accent-word' : ''}">${w}</span>`).join(' ')
}

const STATEMENT_WORDS = [
  { t: 'ما' }, { t: 'معتقدیم' }, { t: 'وب‌سایت' }, { t: 'هزینه' }, { t: 'نیست؛' },
  { t: 'ابزار', hl: true }, { t: 'فروش', hl: true }, { t: 'شماست.' },
  { t: 'هر' }, { t: 'پیکسل،' }, { t: 'هر' }, { t: 'خط' }, { t: 'کد' }, { t: 'و' }, { t: 'هر' }, { t: 'کلمه' },
  { t: 'باید' }, { t: 'در' }, { t: 'خدمت' }, { t: 'یک', hl: true }, { t: 'هدف', hl: true }, { t: 'باشد:' },
  { t: 'تبدیل', hl: true }, { t: 'بازدیدکننده', hl: true }, { t: 'به', hl: true }, { t: 'مشتری.', hl: true },
  { t: 'ساده،' }, { t: 'دقیق' }, { t: 'و' }, { t: 'بی‌اضافه.' }
]

const WHY = [
  { num: 'A', title: 'طراحی اختصاصی، نه قالب', text: 'هیچ دو پروژه‌ای در پیکسوریا شبیه هم نیستند. طراحی از صفر و بر اساس برند و مخاطب شماست — نه یک قالب خریداری‌شده با تغییر رنگ.' },
  { num: 'B', title: 'مهندسی، نه فقط زیبایی', text: 'سرعت، امنیت و کد تمیز برای ما قابل مذاکره نیست. سایت شما روی هر دستگاهی سریع و پایدار کار می‌کند؛ چون از روز اول همین‌طور ساخته شده.' },
  { num: 'C', title: 'شفافیت در همه مراحل', text: 'برنامه زمانی مکتوب، گزارش منظم پیشرفت و قیمت ثابت. هیچ‌وقت با «فقط یک مورد دیگه بود» غافلگیر نمی‌شوید.' },
  { num: 'D', title: 'فارسی، درست و حساب‌شده', text: 'تایپوگرافی فارسی، ارقام فارسی، تاریخ شمسی و جزئیات RTL — نه ترجمه‌ای از یک قالب خارجی که «تقریباً» کار می‌کند.' },
  { num: 'E', title: 'بعد از تحویل، تنها نمی‌مانید', text: 'آموزش کامل مدیریت سایت و دوره پشتیبانی رایگان در همه پروژه‌ها. رشد سایت شما، کار ما است.' }
]

export function homeMain ({ services, featuredProjects, latestPosts }) {
  return `
  <!-- ۰۱ — HERO -->
  <section class="hero" aria-label="معرفی پیکسوریا">
    <div class="hero-canvas" data-hero-canvas aria-hidden="true"></div>
    <div class="hero-coords mono-ltr" aria-hidden="true">
      <span data-coords-x>X: 0000</span>
      <span data-coords-y>Y: 0000</span>
      <span>${SITE.coords.lat} / ${SITE.coords.lng}</span>
    </div>
    <div class="wrap hero-inner">
      <div class="hero-kicker">
        <span class="live-dot"></span>
        <span class="tag">PIXORIA® — <b>DIGITAL STUDIO</b> / TEHRAN</span>
      </div>
      <h1 class="hero-h1" data-hero-title>${heroH1()}</h1>
      <p class="hero-lead">پیکسوریا استودیوی طراحی و توسعه وب است؛ از سایت معرفی و فروشگاه اینترنتی تا وب‌اپلیکیشن، سئو و هویت بصری — همه با یک تیم، یک استاندارد و یک مسئولیت‌پذیری.</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="/contact/">شروع پروژه ${icon('arrowLeft', 'arr')}</a>
        <a class="btn btn-secondary" href="/portfolio/">دیدن نمونه‌کارها</a>
      </div>
    </div>
    <a class="hero-scroll" href="#services-section" aria-label="اسکرول به بخش خدمات">SCROLL</a>
  </section>

  ${marquee(services.map(s => s.title))}

  <!-- ۰۲ — BRAND STATEMENT -->
  <section class="section" aria-label="بیانیه پیکسوریا" data-statement>
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-20 md:py-28">
      <div class="sec-label mb-8" data-reveal>
        <span class="num">[۰۲]</span>
        <span class="tick" data-line-grow></span>
        <span>بیانیه</span>
        <span class="mono-ltr" style="color:var(--color-ink3)">MANIFESTO</span>
      </div>
      <p class="statement" data-statement-text>
        ${STATEMENT_WORDS.map(w => `<span class="w${w.hl ? ' hl' : ''}">${w.t}</span>`).join(' ')}
      </p>
      <div class="mt-12 flex flex-wrap gap-x-10 gap-y-4 mono-ltr text-xs" style="color:var(--color-ink3)" data-reveal>
        <span>EST. ۱۴۰۲ — TEHRAN</span>
        <span>FA / RTL NATIVE</span>
        <span>NO TEMPLATES</span>
      </div>
    </div>
  </section>

  <!-- ۰۳ — SERVICES -->
  <section class="section" id="services-section" aria-label="خدمات پیکسوریا">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap">
      ${secHead({
        num: '۰۳',
        label: 'خدمات',
        en: 'SERVICES',
        title: 'هر چیزی که حضور آنلاین شما لازم دارد',
        desc: 'از طراحی سایت تا هویت بصری — ۱۱ خدمت تخصصی، همه زیر یک سقف و با یک استاندارد کیفیت.'
      })}
      <div class="grid gap-3 md:grid-cols-2 pb-20" data-stagger>
        ${services.map(s => svcCard(s)).join('')}
      </div>
    </div>
  </section>

  <!-- ۰۴ — STATISTICS -->
  <section class="section" aria-label="آمار پیکسوریا">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      <!-- آمار زیر «مقادیر قابل ویرایش» هستند — قبل از راه‌اندازی نهایی با اعداد واقعی جایگزین شوند (PROJECT_MAP.md) -->
      ${statsGrid(STATS)}
      <p class="mt-4 text-xs" style="color:var(--color-ink3)">* ارقام بالا قابل به‌روزرسانی است و به‌عنوان آمار رسمی تأییدشده ارائه نمی‌شود.</p>
    </div>
  </section>

  <!-- ۰۵ — SELECTED PORTFOLIO -->
  <section class="section" aria-label="نمونه‌کارهای منتخب">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap">
      ${secHead({
        num: '۰۵',
        label: 'نمونه‌کارهای منتخب',
        en: 'SELECTED WORK',
        title: 'پروژه‌هایی که به آن‌ها افتخار می‌کنیم',
        desc: 'گزیده‌ای از کارهای وب، اپلیکیشن و هویت بصری. پروژه‌ها نمایشی‌اند و برای نمایش توان طراحی ساخته شده‌اند.'
      })}
      <div class="pb-6" data-stagger>
        ${featuredProjects.map(p => prjCard(p)).join('')}
      </div>
      <div class="pb-20 flex justify-center" data-reveal>
        <a class="btn btn-secondary" href="/portfolio/">همه نمونه‌کارها ${icon('arrowLeft', 'arr')}</a>
      </div>
    </div>
  </section>

  <!-- ۰۶ — PROCESS -->
  <section class="section" aria-label="فرآیند کار">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      <div class="grid gap-10 lg:grid-cols-[280px_1fr]">
        <div>
          ${secHead({
            num: '۰۶',
            label: 'فرآیند کار',
            en: 'PROCESS',
            title: 'از ایده تا تحویل',
            desc: 'فرآیند شفاف و مکتوب؛ در هر مرحله می‌دانید کجای کار ایستاده‌اید.'
          })}
        </div>
        ${timeline(PROCESS)}
      </div>
    </div>
  </section>

  <!-- ۰۷ — WHY PIXORIA -->
  <section class="section" aria-label="چرا پیکسوریا">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({
        num: '۰۷',
        label: 'چرا پیکسوریا؟',
        en: 'WHY US',
        title: 'تفاوت در جزئیاتی است که دیده نمی‌شوند',
        desc: 'حس خوبِ کار با ما از تصمیم‌های کوچک اما مهمی می‌آید که در طول پروژه تکرار می‌شوند.'
      })}
      <div class="pb-8" data-stagger>
        ${WHY.map(w => `
        <div class="svc-card" style="grid-template-columns:auto 1fr">
          <span class="svc-num">${w.num}</span>
          <span class="svc-body">
            <h3>${esc(w.title)}</h3>
            <p style="display:block">${esc(w.text)}</p>
          </span>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ۰۸ — PRICING PREVIEW -->
  <section class="section" aria-label="پلن‌های قیمت">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({
        num: '۰۸',
        label: 'پلن‌های قیمت',
        en: 'PRICING',
        title: 'برای هر خدمت، چهار پلن روشن',
        desc: 'پایه، حرفه‌ای، پیشرفته و سازمانی — با امکانات شفاف و قابل مقایسه. قیمت دقیق بعد از جلسه مشاوره رایگان اعلام می‌شود.'
      })}
      <div class="grid-4 pb-8" data-stagger>
        ${[
          { s: 'web-design', t: 'طراحی سایت', d: 'از سایت معرفی تا وب‌سایت سازمانی' },
          { s: 'ecommerce-website-design', t: 'فروشگاه اینترنتی', d: 'فروش آنلاین با تجربه خرید روان' },
          { s: 'seo', t: 'سئو و بهینه‌سازی', d: 'دیده‌شدن پایدار در نتایج گوگل' },
          { s: 'logo-and-branding', t: 'هویت بصری', d: 'برندی که در ذهن می‌ماند' }
        ].map(x => `
        <a class="card p-6 flex flex-col gap-2 group" href="/services/${x.s}/">
          <span class="kicker">PLAN / ۴×</span>
          <h3 class="text-lg font-bold leading-8 mt-1">${x.t}</h3>
          <p class="text-sm leading-7" style="color:var(--color-ink2)">${x.d}</p>
          <span class="mt-3 text-sm font-bold inline-flex items-center gap-2 group-hover:text-[color:var(--color-accent)] transition-colors">دیدن پلن‌ها ${icon('arrowLeft')}</span>
        </a>`).join('')}
      </div>
      <p class="text-xs pb-12" style="color:var(--color-ink3)">هیچ قیمت عددی «رسمی» روی سایت نمی‌بینید؛ چون قیمت واقعی به نیاز واقعی شما وابسته است.</p>
    </div>
  </section>

  <!-- ۰۹ — TESTIMONIALS -->
  <section class="section" aria-label="نظرات مشتریان">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({
        num: '۰۹',
        label: 'نظرات مشتریان',
        en: 'TESTIMONIALS',
        title: 'آن‌هایی که با ما کار کرده‌اند چه می‌گویند؟'
      })}
      ${tstSlider(TESTIMONIALS)}
    </div>
  </section>

  <!-- ۱۰ — LATEST BLOG -->
  <section class="section" aria-label="آخرین مقالات">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap">
      ${secHead({
        num: '۱۰',
        label: 'وبلاگ',
        en: 'JOURNAL',
        title: 'تازه‌ترین نوشته‌ها',
        desc: 'راهنماهای کاربردی درباره وب، سئو و برندینگ — بدون حاشیه.'
      })}
      <div class="pb-6" data-stagger>
        ${latestPosts.map(p => postCard(p)).join('')}
      </div>
      <div class="pb-20 flex justify-center" data-reveal>
        <a class="btn btn-secondary" href="/blog/">همه مقالات ${icon('arrowLeft', 'arr')}</a>
      </div>
    </div>
  </section>

  <!-- ۱۱ — FAQ -->
  <section class="section" aria-label="سوالات پرتکرار">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      <div class="grid gap-10 lg:grid-cols-[320px_1fr]">
        <div>
          ${secHead({
            num: '۱۱',
            label: 'سوالات پرتکرار',
            en: 'FAQ',
            title: 'پاسخ سوال‌های رایج',
            desc: 'اگر پاسخ سوال‌تان اینجا نبود، بپرسید — سریع جواب می‌دهیم.'
          })}
        </div>
        ${faqList(FAQ_HOME)}
      </div>
    </div>
  </section>

  ${ctaFinal({
    num: '۱۲',
    title: 'ایده‌تان را به یک <span style="text-decoration:underline;text-underline-offset:8px">وب‌سایت واقعی</span> تبدیل کنیم؟',
    text: 'یک جلسه مشاوره رایگان کوتاه — بدون تعارف و بدون فشار فروش. فقط گوش می‌دهیم، سوال درست می‌پرسیم و اگر پروژه‌ای که لازم دارید با ما ساخته نمی‌شود، صادقانه می‌گوییم.',
    primaryLabel: 'شروع پروژه',
    secondaryLabel: 'دیدن نمونه‌کارها'
  })}
`
}

export function homeJsonld () {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: SITE.nameLatin,
      url: `${SITE.url}/`,
      logo: `${SITE.url}/favicon.svg`,
      email: SITE.email,
      telephone: SITE.phone,
      address: { '@type': 'PostalAddress', addressLocality: 'تهران', addressCountry: 'IR' },
      sameAs: [
        'https://instagram.com/pixoria.studio',
        'https://t.me/pixoria_studio'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: `${SITE.url}/`,
      name: SITE.name,
      description: 'استودیوی طراحی و توسعه وب پیکسوریا — طراحی سایت، فروشگاه اینترنتی، سئو و هویت بصری',
      inLanguage: 'fa-IR',
      publisher: { '@id': `${SITE.url}/#organization` }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: SITE.name,
      image: `${SITE.url}/og/home.png`,
      '@id': `${SITE.url}/#service`,
      url: `${SITE.url}/`,
      priceRange: '$$',
      telephone: SITE.phone,
      address: { '@type': 'PostalAddress', addressLocality: 'تهران', addressCountry: 'IR' },
      areaServed: 'IR'
    },
    faqJsonld(FAQ_HOME, '/')
  ]
}
