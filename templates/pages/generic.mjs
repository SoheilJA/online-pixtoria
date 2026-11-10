/**
 * PIXORIA — About / Contact / Privacy / Terms / Error pages
 */
import { esc } from '../layout.mjs'
import { icon } from '../icons.mjs'
import { secHead, timeline, statsGrid, ctaFinal, crumbs, infoCards, marquee } from '../components.mjs'
import { SITE, STATS, PROCESS, SOCIALS } from '../../content/site.mjs'

/* ------------------------------------------------------------------ ABOUT */
const VALUES = [
  { num: '۰۱', t: 'صداقت پیش از فروش', d: 'اگر پروژه‌ای به کار ما نباشد یا لازم نباشد، همان اول می‌گوییم. مشتری راضی‌ای که برند واقعی باشد، از ده پروژه‌ی نیمه‌راضی باارزش‌تر است.' },
  { num: '۰۲', t: 'کیفیت قابل‌لمس', d: 'کیفیت برای ما یعنی سایتی که سریع باز می‌شود، کدی که تمیز است و فرآیندی که مشتری در آن گم نمی‌شود — نه شعار روی صفحه درباره‌ی «تعهد به کیفیت».' },
  { num: '۰۳', t: 'یادگیری مداوم', d: 'وب هر روز عوض می‌شود؛ ما هم. ابزارها، استانداردها و سلیقه‌های طراحی را دنبال می‌کنیم تا پروژه شما دیروز نماند.' },
  { num: '۰۴', t: 'احترام به وقت شما', d: 'جلسات کوتاه و مفید، گزارش‌های شفاف و پاسخ سریع. وقت شما گران‌ترین منبع پروژه است — با آن مثل سرمایه رفتار می‌کنیم.' }
]

const TOOLS = [
  { g: 'DESIGN', items: ['Figma', 'Photoshop', 'Illustrator'] },
  { g: 'FRONTEND', items: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'] },
  { g: 'BACKEND', items: ['Node.js', 'PHP / Laravel'] },
  { g: 'CMS', items: ['WordPress', 'PrestaShop'] },
  { g: 'SEO', items: ['Search Console', 'PageSpeed', 'Ahrefs'] },
  { g: 'WORKFLOW', items: ['Git', 'Vite', 'Notion'] }
]

export function aboutMain () {
  return `
  <div class="wrap"><div class="pt-2">${crumbs([{ label: 'درباره ما', href: '/about/' }])}</div></div>

  <section class="page-hero">
    <div class="wrap">
      <p class="ph-kicker"><span class="num">[ABT]</span> — WHO WE ARE</p>
      <h1>استودیویی کوچک، با استانداردهای بزرگ</h1>
      <p class="ph-lead">پیکسوریا یک استودیوی جوان و متمرکز طراحی و توسعه وب است. ما نمی‌خواهیم بزرگ‌ترین باشیم؛ می‌خواهیم در هر پروژه‌ای که قبول می‌کنیم، بهترین عملکرد ممکن را داشته باشیم.</p>
      <div class="ph-meta">
        <span><span class="k">BASE</span> تهران، ایران</span>
        <span><span class="k">LANG</span> فارسی، انگلیسی</span>
        <span><span class="k">FOCUS</span> وب، برندینگ، سئو</span>
      </div>
    </div>
  </section>

  <!-- story -->
  <section class="section" aria-label="داستان پیکسوریا">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      <div class="grid gap-10 lg:grid-cols-[320px_1fr]">
        <div>${secHead({ num: '۰۱', label: 'داستان ما', en: 'STORY', title: 'از یک اعتقاد ساده شروع شد' })}</div>
        <div class="flex flex-col gap-6">
          <p class="text-lg leading-9" style="color:var(--color-ink2)" data-reveal>پیکسوریا از یک مشاهده ساده به دنیا آمد: بازار ایران پر از وب‌سایت‌هایی است که یا قالب‌های تکراری‌اند، یا ساخته‌های شتاب‌زده‌ای که چند ماه بعد از راه‌اندازی رها می‌شوند. ما باور داشتیم — و هنوز باور داریم — که می‌شود هم زیبا ساخت، هم درست؛ هم سریع تحویل داد، هم بعد از تحویل پاسخ‌گو بود.</p>
          <p class="text-lg leading-9" style="color:var(--color-ink2)" data-reveal>نام ما از «پیکسل» و «اورَکسترا» می‌آید: باور به اینکه یک وب‌سایت خوب، حاصل هم‌نواختی ده‌ها جزء کوچک است — تایپوگرافی، فاصله‌ها، سرعت، متن‌ها و کد — که هیچ‌کدام به‌تنهایی دیده نمی‌شوند اما همه با هم حس نهایی را می‌سازند.</p>
          <p class="text-lg leading-9" style="color:var(--color-ink2)" data-reveal>امروز پروژه‌هایمان از سایت معرفی تک‌صفحه‌ای تا فروشگاه و وب‌اپلیکیشن کشیده شده و هر کدام با همان وسواس روز اول ساخته می‌شوند. آینده را هم همین‌طور می‌خواهیم: رشد کنترل‌شده، نه انبوه پروژه.</p>
          <div class="grid grid-cols-3 gap-px bg-[color:var(--color-line2)] border border-[color:var(--color-line2)] mt-2" data-reveal>
            <div class="bg-[color:var(--color-bg)] p-4 md:p-5 text-center"><span class="mono-ltr block text-xs" style="color:var(--color-ink3)">SINCE</span><span class="block text-xl font-black mt-1">۱۴۰۲</span></div>
            <div class="bg-[color:var(--color-bg)] p-4 md:p-5 text-center"><span class="mono-ltr block text-xs" style="color:var(--color-ink3)">FOCUS</span><span class="block text-xl font-black mt-1">وب و برند</span></div>
            <div class="bg-[color:var(--color-bg)] p-4 md:p-5 text-center"><span class="mono-ltr block text-xs" style="color:var(--color-ink3)">MODEL</span><span class="block text-xl font-black mt-1">پروژه‌محور</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- values -->
  <section class="section" aria-label="ماموریت و ارزش‌ها">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({ num: '۰۲', label: 'ماموریت و ارزش‌ها', en: 'MISSION', title: 'چیزی که تحت هیچ شرایطی عوض نمی‌شود', desc: 'ماموریت ما روشن است: وب‌سایت‌هایی بسازیم که برای کسب‌وکار مشتری نتیجه بگیرند. راه رسیدن به آن هم با این ارزش‌ها مهار می‌شود.' })}
      <div class="grid-2 pb-4" data-stagger>
        ${VALUES.map(v => `
        <div class="card p-6 md:p-7">
          <span class="mono-ltr text-xs" style="color:var(--color-accent)">[${v.num}]</span>
          <h3 class="text-xl font-bold mt-3 mb-2">${esc(v.t)}</h3>
          <p class="leading-8" style="color:var(--color-ink2)">${esc(v.d)}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- philosophy -->
  <section class="section" aria-label="فلسفه کار">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-24">
      <p class="sec-label mb-8" data-reveal><span class="num">[۰۳]</span><span class="tick" data-line-grow></span><span>فلسفه کار</span><span class="mono-ltr" style="color:var(--color-ink3)">PHILOSOPHY</span></p>
      <p class="statement">به <span class="w on">کمکِ</span> <span class="w on">جزئیاتِ</span> <span class="w on">کوچک،</span> <span class="w on">حسِ</span> <span class="w on hl">بزرگی</span> <span class="w on">می‌سازیم.</span> <span class="w on">هر</span> <span class="w on">پروژه</span> <span class="w on">برای</span> <span class="w on">ما</span> <span class="w on hl">یک</span> <span class="w on hl">امضاست</span> <span class="w on">—</span> <span class="w on">نه</span> <span class="w on">یک</span> <span class="w on">سفارش.</span></p>
    </div>
  </section>

  <!-- tools -->
  <section class="section" aria-label="مهارت‌ها و ابزارها">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      ${secHead({ num: '۰۴', label: 'مهارت‌ها و ابزارها', en: 'TOOLBOX', title: 'جعبه‌ابزار پیکسوریا', desc: 'ابزار خدمت‌گزار هدف است، نه برعکس؛ برای هر پروژه دقیقاً همان چیزی را انتخاب می‌کنیم که به درد آن می‌خورد.' })}
      <div class="grid-3 pb-4" data-stagger>
        ${TOOLS.map(t => `
        <div class="border border-[color:var(--color-line2)] bg-[color:var(--color-surface)] p-5">
          <p class="mono-ltr text-xs mb-3" style="color:var(--color-accent)">${t.g}</p>
          <div class="flex flex-wrap gap-2">
            ${t.items.map(i => `<span class="text-sm px-2.5 py-1 border border-[color:var(--color-line2)]" style="color:var(--color-ink2)">${esc(i)}</span>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- process + stats -->
  <section class="section" aria-label="فرآیند و آمار">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-16 md:py-20">
      <div class="grid gap-12 lg:grid-cols-2">
        <div>
          ${secHead({ num: '۰۵', label: 'فرآیند', en: 'PROCESS', title: 'شش قدم تا تحویل' })}
          ${timeline(PROCESS)}
        </div>
        <div>
          ${secHead({ num: '۰۶', label: 'آمار', en: 'NUMBERS', title: 'پیکسوریا در چند عدد' })}
          <!-- PLACEHOLDER آمار — قبل از راه‌اندازی با اعداد واقعی جایگزین شود (PROJECT_MAP.md) -->
          ${statsGrid(STATS)}
          <p class="mt-4 text-xs" style="color:var(--color-ink3)">* ارقام قابل ویرایش؛ آمار رسمی تأییدشده نیست.</p>
        </div>
      </div>
    </div>
  </section>

  ${ctaFinal({
    num: '۰۷',
    title: 'دوست داریم شما را بشناسیم',
    text: 'پروژه‌ای در ذهن دارید یا فقط می‌خواهید درباره امکان‌ها حرف بزنیم؟ در هر دو حالت، صندلی روبه‌روی ما خالی است.',
    secondaryHref: '/portfolio/',
    secondaryLabel: 'دیدن نمونه‌کارها'
  })}
`
}

/* ------------------------------------------------------------------ CONTACT */
export function contactMain ({ services }) {
  return `
  <div class="wrap"><div class="pt-2">${crumbs([{ label: 'تماس', href: '/contact/' }])}</div></div>

  <section class="page-hero">
    <div class="wrap">
      <p class="ph-kicker"><span class="num">[CNT]</span> — SAY HELLO</p>
      <h1>پروژه‌تان را برای ما بفرستید</h1>
      <p class="ph-lead">فرم زیر را پر کنید یا مستقیم تماس بگیرید. معمولاً در کمتر از یک روز کاری پاسخ می‌دهیم — با جزئیات و قدم بعدی مشخص، نه پیام‌های کلیشه‌ای.</p>
      <div class="ph-meta">
        <span><span class="k">RESPONSE</span> کمتر از ۲۴ ساعت کاری</span>
        <span><span class="k">CONSULT</span> جلسه اول رایگان</span>
      </div>
    </div>
  </section>

  <section class="section" aria-label="اطلاعات تماس و فرم">
    <span class="cross-tl" aria-hidden="true">+</span>
    <span class="cross-tr" aria-hidden="true">+</span>
    <div class="wrap py-14">
      <div class="grid gap-10 lg:grid-cols-[380px_1fr]">
        <!-- info side -->
        <div>
          <p class="kicker mb-5">CONTACT INFO</p>
          ${infoCards()}
          <div class="mt-6">
            <p class="kicker mb-4">SOCIAL</p>
            <div class="socials">
              ${SOCIALS.map(s => `<a class="soc" href="${s.href}" aria-label="${s.label}" rel="noopener">${icon(s.icon)}</a>`).join('')}
            </div>
          </div>
          <div class="mt-8 p-5 border border-dashed border-[color:var(--color-line)] text-sm leading-8" style="color:var(--color-ink2)">
            <span class="kicker block mb-2">NOTE</span>
            این سایت فرم ارسال مستقیم به سرور ندارد؛ پیام شما از طریق برنامه ایمیل یا پیام‌رسان خودتان ارسال می‌شود. یعنی بدون واسطه و بدون ذخیره‌سازی روی سرور ما.
          </div>
        </div>

        <!-- form side -->
        <form novalidate data-contact-form class="flex flex-col gap-5">
          <p class="kicker">PROJECT INQUIRY — درخواست پروژه</p>
          <p class="text-sm leading-7 hidden" data-plan-note style="color:var(--color-accent)"></p>

          <div class="grid gap-5 sm:grid-cols-2">
            <div class="field">
              <label for="f-name">نام و نام خانوادگی <span class="req">*</span></label>
              <input id="f-name" name="name" type="text" autocomplete="name" placeholder="مثلاً: سارا محمدی" required aria-describedby="e-name">
              <p class="field-err" id="e-name">لطفاً نام‌تان را بنویسید.</p>
            </div>
            <div class="field">
              <label for="f-phone">شماره تماس <span class="req">*</span></label>
              <input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰" required aria-describedby="e-phone" dir="rtl">
              <p class="field-err" id="e-phone">شماره تماس معتبر وارد کنید (۱۱ رقم، با ارقام فارسی یا انگلیسی).</p>
            </div>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div class="field">
              <label for="f-email">ایمیل <span class="req">*</span></label>
              <input id="f-email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required aria-describedby="e-email" dir="ltr" style="text-align:left">
              <p class="field-err" id="e-email">ایمیل معتبر وارد کنید (مثلاً name@mail.com).</p>
            </div>
            <div class="field">
              <label for="f-service">خدمت موردنیاز <span class="req">*</span></label>
              <select id="f-service" name="service" required aria-describedby="e-service">
                <option value="">انتخاب کنید…</option>
                ${services.map(s => `<option value="${s.slug}">${s.num} — ${esc(s.title)}</option>`).join('')}
                <option value="other">خدمت دیگری / هنوز نمی‌دانم</option>
              </select>
              <p class="field-err" id="e-service">یک خدمت را انتخاب کنید.</p>
            </div>
          </div>

          <div class="field">
            <label for="f-plan">پلن موردنظر (اختیاری)</label>
            <select id="f-plan" name="plan">
              <option value="">انتخاب کنید…</option>
              <option value="basic">پایه</option>
              <option value="professional">حرفه‌ای (پیشنهادی)</option>
              <option value="advanced">پیشرفته</option>
              <option value="enterprise">سازمانی</option>
            </select>
          </div>

          <div class="field">
            <label for="f-msg">درباره پروژه‌تان بنویسید <span class="req">*</span></label>
            <textarea id="f-msg" name="message" placeholder="چه می‌خواهید؟ چه هدفی دارید؟ زمان‌بندی؟ هر توضیحی که کمک می‌کند…" required aria-describedby="e-msg"></textarea>
            <p class="field-err" id="e-msg">چند خط درباره پروژه بنویسید تا بتوانیم دقیق راهنمایی کنیم.</p>
          </div>

          <div class="form-note">
            ${icon('mail')}
            <span>با ثبت فرم، برنامه ایمیل شما با پیام آماده باز می‌شود؛ می‌توانید واتساپ یا تلگرام را هم انتخاب کنید. <strong>ارسال نهایی با خود شماست</strong> — هیچ داده‌ای بدون اجازه‌تان جای ذخیره نمی‌شود.</span>
          </div>

          <div class="flex flex-col sm:flex-row gap-3">
            <button class="btn btn-primary" type="submit" data-submit-mail>آماده‌سازی پیام و ارسال با ایمیل ${icon('mail', 'arr')}</button>
            <a class="btn btn-secondary hidden" data-wa-btn href="https://wa.me/989000000000" target="_blank" rel="noopener">${icon('whatsapp')} ارسال با واتساپ</a>
            <a class="btn btn-secondary hidden" data-tg-btn href="https://t.me/pixoria_studio" target="_blank" rel="noopener">${icon('telegram')} ارسال با تلگرام</a>
          </div>
        </form>
      </div>
    </div>
  </section>

  ${marquee(['پاسخ در ۲۴ ساعت کاری', 'مشاوره رایگان', 'قرارداد شفاف', 'پشتیبانی بعد از تحویل'])}
`
}

/* ------------------------------------------------------------------ PRIVACY / TERMS */
export function privacyMain () {
  return `
  <div class="wrap"><div class="pt-2">${crumbs([{ label: 'حریم خصوصی', href: '/privacy/' }])}</div></div>
  <section class="page-hero">
    <div class="wrap">
      <p class="ph-kicker"><span class="num">[PRV]</span> — PRIVACY</p>
      <h1>حریم خصوصی</h1>
      <p class="ph-lead">آخرین به‌روزرسانی: آبان ۱۴۰۵</p>
    </div>
  </section>
  <section class="section"><div class="wrap py-14">
    <div class="prose-fa max-w-3xl" data-reveal>
      <p>این صفحه به زبان ساده توضیح می‌دهد که سایت پیکسوریا چه اطلاعاتی از بازدیدکنندگان دریافت می‌کند و با آن چه می‌کند. خلاصه کوتاه: <strong>خیلی چیزهایی نگه نمی‌داریم.</strong></p>
      <h2>اطلاعاتی که دریافت می‌شود</h2>
      <ul>
        <li>فرم تماس این سایت داده‌ای را روی سرور ذخیره نمی‌کند؛ پیام شما مستقیماً از طریق برنامه ایمیل یا پیام‌رسان خودتان (مثل واتساپ و تلگرام) ارسال می‌شود.</li>
        <li>اگر از ابزارهای تحلیلی (مثل گوگل آنالیتیکس) استفاده شود، صرفاً برای دیدن آمار کلی بازدید است و هویت فردی شما برای ما قابل شناسایی نیست.</li>
        <li>هیچ اطلاعات بانکی یا پرداختی از طریق این سایت دریافت نمی‌شود؛ ما پرداخت آنلاین نداریم.</li>
      </ul>
      <h2>کوکی‌ها</h2>
      <p>از این سایت فقط برای کارکرد فنی (مثل یادآوری تنظیم اندازه متن مقالات) ممکن است از حافظه محلی مرورگر (localStorage) استفاده شود. این داده‌ها روی دستگاه خود شما می‌مانند و برای ما قابل مشاهده نیستند.</p>
      <h2>لینک‌های بیرونی</h2>
      <p>سایت ما به شبکه‌های اجتماعی و پیام‌رسان‌ها لینک دارد؛ رفتار آن سرویس‌ها تابع قوانین خودشان است و مسئولیت آن‌ها با ما نیست.</p>
      <h2>حقوق شما</h2>
      <p>اگر در گذشته با ما مکاتبه یا همکاری داشته‌اید و می‌خواهید اطلاعاتی که از شما داریم حذف شود، با همین ایمیل سایت در تماس باشید؛ در سریع‌ترین زمان انجام می‌شود.</p>
      <h2>تغییرات این صفحه</h2>
      <p>اگر رویه‌های ما تغییر کند، همین صفحه به‌روز می‌شود و تاریخ به‌روزرسانی بالای صفحه اصلاح خواهد شد.</p>
    </div>
  </div></section>
`
}

export function termsMain () {
  return `
  <div class="wrap"><div class="pt-2">${crumbs([{ label: 'قوانین و شرایط', href: '/terms/' }])}</div></div>
  <section class="page-hero">
    <div class="wrap">
      <p class="ph-kicker"><span class="num">[TRM]</span> — TERMS</p>
      <h1>قوانین و شرایط</h1>
      <p class="ph-lead">آخرین به‌روزرسانی: آبان ۱۴۰۵</p>
    </div>
  </section>
  <section class="section"><div class="wrap py-14">
    <div class="prose-fa max-w-3xl" data-reveal>
      <p>این صفحه چارچوب کلی همکاری با پیکسوریا را نشان می‌دهد. جزئیات دقیق هر پروژه در قرارداد همان پروژه نوشته می‌شود و همان معتبر است.</p>
      <h2>شروع همکاری</h2>
      <p>همه پروژه‌ها با جلسه مشاوره رایگان شروع می‌شوند. پس از مشخص‌شدن دامنه کار، پیشنهاد فنی و قیمت به‌صورت مکتوب ارائه می‌شود؛ پروژه رسماً با تأیید شما و پرداخت پیش‌پرداخت شروع می‌شود.</p>
      <h2>مدت و تحویل</h2>
      <ul>
        <li>برنامه زمانی هر پروژه مکتوب و بخشی از پیشنهاد است.</li>
        <li>تأخیر در تحویل محتوا و اطلاعات از سوی کارفرما، زمان‌بندی را متناسب جابه‌جا می‌کند.</li>
        <li>تغییرات خارج از دامنه توافق‌شده، به‌صورت افزوده (change request) قیمت‌گذاری می‌شود — قبل از اجرا و با اطلاع شما.</li>
      </ul>
      <h2>پرداخت</h2>
      <p>پرداخت معمولاً در دو یا سه مرحله (پیش‌پرداخت، میان‌پروژه، تحویل) انجام می‌شود. این سایت پرداخت آنلاین ندارد و روش پرداخت در قرارداد مشخص می‌شود.</p>
      <h2>مالکیت و کپی‌رایت</h2>
      <p>پس از تسویه کامل، مالکیت طراحی و کدهای اختصاصی پروژه به شما منتقل می‌شود. ابزارها، فونت‌ها و کتابخانه‌های متن‌باز استفاده‌شده تابع مجوزهای خودشان هستند (مثلاً فونت وزیرمتن با مجوز آزاد OFL).</p>
      <h2>پشتیبانی و مسئولیت</h2>
      <ul>
        <li>هر پروژه دوره پشتیبانی رایگان دارد که در پیشنهاد مشخص شده است.</li>
        <li>پشتیبانی شامل ایرادهای فنی کار ماست، نه تغییرات جدید یا مشکلات هاست/دامنه از سوی سرویس‌دهنده بیرونی.</li>
        <li>ما هیچ تضمینی برای رتبه مشخص گوگل نمی‌دهیم؛ سئو فرآیندی بلندمدت است و با ابزارهای استاندارد و شفاف پیش می‌رود.</li>
      </ul>
      <h2>محتوای این سایت</h2>
      <p>مقالات وبلاگ صرفاً جنبه آموزشی دارند و مسئولیت تصمیم‌های تجاری بر عهده خواننده است. نمونه‌کارهای این سایت نمایشی‌اند و به مشتریان واقعی اشاره نمی‌کنند.</p>
    </div>
  </div></section>
`
}

/* ------------------------------------------------------------------ ERROR PAGES */
export function errorMain ({ code, faTitle, desc }) {
  return `
  <section class="hero !min-h-[86svh]">
    <div class="hero-canvas grid-bg opacity-60" aria-hidden="true"></div>
    <div class="wrap hero-inner text-center items-center">
      <p class="ph-kicker justify-center"><span class="num">[ERR]</span> — PIXORIA / ${code}</p>
      <div class="mono-ltr" style="font-size:clamp(6rem,22vw,14rem);font-weight:700;line-height:1;color:transparent;-webkit-text-stroke:2px var(--color-line)" aria-hidden="true">${code}</div>
      <h1 class="text-h2 font-black mt-2">${esc(faTitle)}</h1>
      <p class="hero-lead !max-w-lg mx-auto mt-4">${esc(desc)}</p>
      <div class="hero-cta !justify-center mt-8">
        <a class="btn btn-primary" href="/">بازگشت به خانه ${icon('arrowLeft', 'arr')}</a>
        <a class="btn btn-secondary" href="/services/">دیدن خدمات</a>
        <a class="btn btn-secondary" href="/contact/">تماس با ما</a>
      </div>
      <div class="mt-12 blink mono-ltr text-xs" style="color:var(--color-accent)">+ ERROR ${code} — STAND BY</div>
    </div>
  </section>
`
}
