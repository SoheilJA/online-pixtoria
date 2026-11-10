/**
 * PIXORIA — Listing pages: services index, blog index (+pagination), portfolio index
 */
import { esc } from '../layout.mjs'
import { icon } from '../icons.mjs'
import { svcCard, prjCard, postCard, crumbs, pager, marquee } from '../components.mjs'
import { postCover, prjCoverArt } from '../covers.mjs'

/* ------------------------------------------------------------------ services index */
export function servicesIndexMain ({ services }) {
  return `
  <div class="wrap"><div class="pt-2">${crumbs([{ label: 'خدمات', href: '/services/' }])}</div></div>
  <section class="page-hero">
    <div class="wrap">
      <p class="ph-kicker"><span class="num">[۱۱×]</span> — ALL SERVICES</p>
      <h1>خدمات پیکسوریا</h1>
      <p class="ph-lead">هر چیز که برای ساختن و رشد حضور آنلاین کسب‌وکارتان لازم است — از اولین دامنه تا صدر نتایج گوگل؛ همه در یک استودیو و با یک استاندارد.</p>
      <div class="ph-meta">
        <span><span class="k">COUNT</span> ۱۱ خدمت تخصصی</span>
        <span><span class="k">MODEL</span> پروژه‌محور و شفاف</span>
        <span><span class="k">START</span> مشاوره رایگان</span>
      </div>
    </div>
  </section>

  <section class="section" aria-label="فهرست خدمات">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-14">
      <div class="grid gap-3 pb-16" data-stagger>
        ${services.map(s => svcCard(s)).join('')}
      </div>
    </div>
  </section>

  ${marquee(services.map(s => s.title))}
  `
}

/* ------------------------------------------------------------------ blog index */
export function blogIndexMain ({ featured, posts, page, totalPages, categories, allTags }) {
  return `
  <div class="wrap"><div class="pt-2">${crumbs([{ label: 'وبلاگ', href: '/blog/' }])}</div></div>
  <section class="page-hero">
    <div class="wrap">
      <p class="ph-kicker"><span class="num">[JNL]</span> — PIXORIA JOURNAL</p>
      <h1>وبلاگ پیکسوریا</h1>
      <p class="ph-lead">راهنماهای کاربردی درباره طراحی وب، سئو، برندینگ و تجربه کاربری — نوشته‌شده برای صاحبان کسب‌وکار، نه فقط طراح‌ها.</p>
      <div class="ph-meta">
        <span><span class="k">POSTS</span> ۱۲ مقاله</span>
        <span><span class="k">CATS</span> ۸ دسته‌بندی</span>
        <span><span class="k">LANG</span> فارسی</span>
      </div>
    </div>
  </section>

  <section class="section" aria-label="مقالات">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-14">

      ${page === 1 ? `
      <!-- featured -->
      <a class="post-card mb-8 lg:grid lg:grid-cols-2" href="/blog/articles/${featured.slug}/" style="border-color:var(--color-line)" data-reveal>
        <div class="post-cover !aspect-auto lg:!aspect-auto min-h-[220px]">${postCover(featured)}</div>
        <div class="post-body p-6 md:p-8">
          <div class="post-meta">
            <span class="cat">${esc(featured.categoryName)}</span>
            <span>${featured.jalaliDate}</span>
            <span>${featured.readingTimeFa} دقیقه مطالعه</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black leading-12 mt-2">${esc(featured.title)}</h2>
          <p class="mt-3">${esc(featured.excerpt)}</p>
          <span class="mt-6 inline-flex items-center gap-2 text-sm font-bold" style="color:var(--color-accent)">خواندن مقاله ${icon('arrowLeft')}</span>
        </div>
      </a>` : ''}

      <!-- search + filters -->
      <div class="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-8 pb-6 border-b border-[color:var(--color-line2)]" data-reveal>
        <div class="search-box w-full lg:max-w-sm" data-search-box>
          <input type="search" id="blog-search" placeholder="جستجو بین مقالات…" aria-label="جستجو بین مقالات" autocomplete="off">
          <span class="search-ic">${icon('search')}</span>
        </div>
        <div class="flex flex-wrap gap-2" role="group" aria-label="فیلتر دسته‌بندی">
          <button class="chip is-active" type="button" data-cat="all" aria-pressed="true">همه</button>
          ${categories.map(c => `<button class="chip" type="button" data-cat="${c.slug}" aria-pressed="false">${esc(c.name)}</button>`).join('')}
        </div>
      </div>

      <!-- grid -->
      <div class="grid-3 mb-6" data-blog-grid>
        ${posts.map(p => postCard(p)).join('')}
      </div>
      <div class="empty-note hidden" data-blog-empty>مقاله‌ای مطابق جستجوی شما پیدا نشد. عبارت دیگری امتحان کنید.</div>

      <!-- tags -->
      <div class="py-8 border-t border-[color:var(--color-line2)]" data-reveal>
        <p class="kicker mb-4">TAGS — برچسب‌ها</p>
        <div class="flex flex-wrap gap-2">
          ${allTags.map(t => `<span class="chip" style="cursor:default">${esc(t)}</span>`).join('')}
        </div>
      </div>

      ${pager({ current: page, total: totalPages, baseHref: '/blog/' })}
    </div>
  </section>
  `
}

/* ------------------------------------------------------------------ portfolio index */
export function portfolioIndexMain ({ featured, projects, categories }) {
  return `
  <div class="wrap"><div class="pt-2">${crumbs([{ label: 'نمونه‌کارها', href: '/portfolio/' }])}</div></div>
  <section class="page-hero">
    <div class="wrap">
      <p class="ph-kicker"><span class="num">[WRK]</span> — SELECTED WORK</p>
      <h1>نمونه‌کارهای پیکسوریا</h1>
      <p class="ph-lead">مجموعه‌ای از پروژه‌های طراحی سایت، وب‌اپلیکیشن، گرافیک و هویت بصری. <span class="demo-badge">همه پروژه‌ها نمایشی‌اند</span> و برای نشان‌دادن رویکرد طراحی ما ساخته شده‌اند — نه به‌عنوان کارفرمای واقعی.</p>
      <div class="ph-meta">
        <span><span class="k">COUNT</span> ۹ پروژه</span>
        <span><span class="k">CATS</span> ۴ دسته</span>
      </div>
    </div>
  </section>

  <section class="section" aria-label="فهرست پروژه‌ها">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-14">
      <!-- featured -->
      <div class="mb-10" data-reveal>
        <p class="kicker mb-4">FEATURED — پروژه منتخب</p>
        <a class="post-card lg:grid lg:grid-cols-2" href="/portfolio/projects/${featured.slug}/" style="border-color:var(--color-line)">
          <div class="post-cover !aspect-auto lg:!aspect-auto min-h-[220px]">${prjCoverArt(featured)}</div>
          <div class="post-body p-6 md:p-8">
            <div class="post-meta">
              <span class="cat">${esc(featured.categoryName)}</span>
              <span class="mono-ltr">${featured.year}</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-black leading-12 mt-2">${esc(featured.title)}</h2>
            <p class="mt-3">${esc(featured.summary)}</p>
            <span class="mt-6 inline-flex items-center gap-2 text-sm font-bold" style="color:var(--color-accent)">دیدن جزئیات پروژه ${icon('arrowLeft')}</span>
          </div>
        </a>
      </div>

      <!-- filters -->
      <div class="flex flex-wrap gap-2 mb-8 pb-6 border-b border-[color:var(--color-line2)]" data-reveal>
        <button class="chip is-active" type="button" data-pfilter="all" aria-pressed="true">همه</button>
        ${categories.map(c => `<button class="chip" type="button" data-pfilter="${c.slug}" aria-pressed="false">${esc(c.name)}</button>`).join('')}
      </div>

      <!-- grid -->
      <div class="grid-3 pb-10" data-portfolio-grid>
        ${projects.map(p => prjCard(p)).join('')}
      </div>
      <div class="empty-note hidden" data-portfolio-empty>پروژه‌ای در این دسته پیدا نشد.</div>
      <p class="text-xs" style="color:var(--color-ink3)">پروژه‌های این بخش <span class="demo-badge">نمونه‌کار نمایشی</span> هستند و نام برندها ساختگی‌اند.</p>
    </div>
  </section>
  `
}
