# PIXORIA — DESIGN SYSTEM

هویت بصری: **ادیتوریال تیره / بروتالیست ظریف** — پس‌زمینه تقریباً سیاه، لهجه نارنجی گرم، تایپوگرافی فارسی درشت و مطمئن، نشانه‌های فنی (شبکه، خط‌کش، شماره‌گذاری بخش‌ها).

مرجع الهام‌بخش خانواده طراحی: soheil-ja.ir (بخش‌های شماره‌دار، حس فنی) — بدون کپی؛ پیکسوریا پالایش‌شده‌تر و business-oriented تر است.

## ۱. رنگ‌ها (توکن‌های `@theme`)

| توکن | مقدار | کاربرد |
|---|---|---|
| `--color-bg` | `#0D0D0D` | پس‌زمینه اصلی — رنگ غالب |
| `--color-surface` | `#111111` | سطح کارت‌ها |
| `--color-elevated` | `#171717` | سطح مرتفع (مودال، آیکون‌باکس) |
| `--color-surface2` | `#1D1D1D` | سطح ثانویه/کد |
| `--color-deep` | `#0A0A0A` | فوتر |
| `--color-ink` | `#F2F0EB` | متن اصلی (گرم و شیری) |
| `--color-ink2` | `#A5A5A5` | متن ثانویه |
| `--color-ink3` | `#8A8A8A` | متادیتای تزئینی (از #777 بالا کشیده شد برای کنتراست ≥۴.۵ در سایز کوچک روی سطح تیره؛ فقط برای متادیتا) |
| `--color-line` | `#303030` | خط اصلی |
| `--color-line2` | `#222222` | خط ظریف/جداکننده |
| `--color-accent` | `#FF5A00` | نارنجی اصلی — CTA، لهجه، کلمات کلیدی تیترها |
| `--color-accent2` | `#E84E00` | نارنجی ثانویه/گرادیان |
| `--color-accentsoft` | `#FF7A36` | حالت hover دکمه اصلی |

**قواعد:** سیاه/تیره حاکم است؛ نارنجی فقط برای حالت فعال، کلمه کلیدی، CTA و لهجه. فقط یک سطح بزرگ نارنجی در کل سایت مجاز است (سکشن CTA پایانی). گرادیان فقط با هدف مشخص. متن بدنه ≥ ۴.۵:۱، متن بزرگ ≥ ۳:۱. دکمه اصلی: متن تیره روی نارنجی (کنتراست ≈ ۶.۲:۱).

## ۲. تایپوگرافی

- **وزیرمتن** (self-host، woff2، مجوز OFL): وزن‌های ۴۰۰/۵۰۰/۷۰۰/۹۰۰ — فقط همین‌ها آپلود شده؛ `font-display: swap`؛ فقط Regular و Black preload می‌شوند.
- مقیاس سیال با `clamp()`: display ۴۲→۸۸px (line-height ۱.۱۵) · H1 ۳۴→۶۴ (۱.۲) · H2 ۲۸→۴۸ (۱.۲۵) · H3 ۲۲→۳۲ (۱.۳۵) · body-lg ۱۷→۲۰ · body ۱۶ · small ۱۴.
- leading فارسی: بدنه ۱.۸–۲.۰۵؛ تیترها ۱.۱۵–۱.۳۵. **هرگز letter-spacing روی متن فارسی.**
- **ارقام فارسی** در همه UI/تاریخ/آمار (۰۱۲۳۴۵۶۷۸۹)؛ لاتین فقط در href/tel/data و تکنیکال.
- متن فنی/لاتین: `.mono-ltr` (فونت مونو + `direction: ltr` + `unicode-bidi: isolate`) — برچسب‌های ریز SECTION/PROCESS/… بخشی از زبان بصری است.

## ۳. فاصله‌ها و شبکه

- عرض محتوا: ۱۴۴۰px با `.wrap` (پدینگ ۲۰/۴۰/۶۴px در موبایل/تبلت/دسکتاپ).
- شبکه دسکتاپ ۱۲ ستونی، ترکیب‌های نامتقارن (مثلاً `[320px_1fr]` برای متن+فهرست).
- شعاع گوشه: ۰ تا ۴px (`--radius-xs/sm`) — هیچ pill (مگر چیپ‌های ریز).
- جداکننده‌ها: خط ۱px `line2`؛ هر بخش با `.section` (border-top) + نشانه `+` در گوشه‌ها.

## ۴. زبان بصری (نشانه‌های فنی)

- **شماره‌گذاری بخش‌ها**: `[۰۱]` مونو + خط تیک + برچسب فارسی + برچسب لاتین ریز.
- **کراس‌هیر** `+` در گوشه سکشن‌ها؛ **شبکه blueprint** (`.grid-bg` — خطوط ۸۸×۸۸px).
- **گرین فیلم** روی کل صفحه (`body::after`، اپاسیتی ۰.۰۵، pointer-events:none).
- **Ghost wordmark** در فوتر (PIXORIA با stroke ظریف).
- مونو-متادیتا: `35.6892° N / 51.3890° E`، `FA/RTL NATIVE` و مختصات زنده ماوس در هیرو.

## ۵. کامپوننت‌ها (۲۴ عدد — کلاس‌های آماده)

هدر/ناوبری: `.site-header` (+`.is-scrolled`) · `.mega` (+`.open`) · `.mobile-nav` (+`.open`) · `.brand`
دکمه‌ها: `.btn-primary` · `.btn-secondary` · `.btn-ghost` · `.btn-sm` (همه با :hover/:focus-visible/:active)
بخش: `.sec-head` (شماره+تیک+تیتر) · `.section` (+crosshair)
کارت‌ها: `.svc-card` · `.prj-card`(+`.prj-cover/.prj-meta/.prj-body`) · `.plan-card`(+`.featured/.plan-badge`) · `.tst-card` · `.post-card` · `.card`
محتوایی: `.faq-list/.faq-item/.faq-q/.faq-a` · `.timeline/.tl-step` · `.stat` · `.crumbs` · `.info-card` · `.socials/.soc`
ابزار: `.marquee` · `.modal` · `.toast` · `.to-top` · `.read-progress` · `.browser` (mockup) · `.chip` · `.pager` · `.prose-fa` (تایپوگرافی مقاله + `[data-fs]`) · `.toc` · `.slider` · `.cursor-dot/.cursor-ring` · `.search-box` · `.empty-note` · `.demo-badge` · `.statement`

هر کدام حالت hover / focus-visible / active (و در صورت نیاز expanded/disabled) دارند.

## ۶. حرکت (Motion)

- فلسفه: «همه‌چیز فقط fade نمی‌شود» — ترکیب: ورود کلمه‌به‌کلمه تیتر (فقط کلمه؛ **حروف فارسی هرگز جدا نمی‌شوند**)، clip/mask روی کاورها، stagger کارت‌ها، شمارنده اعداد فارسی، هایلایت اسکرولی بیانیه، مارکی، خط‌کشِ روبه‌رشد، canvas تعاملی.
- همه حالت‌های شروع فقط زیر `html.js` (progressive enhancement).
- `prefers-reduced-motion: reduce` → همه انیمیشن‌ها خاموش و حالت نهایی نمایش.
- فقط transform/opacity/clip-path انیمیت می‌شود (بدون layout shift؛ فضاها رزرو شده‌اند).

## ۷. قواعد واکنش‌گرایی

- Breakpoint عملی: ۴۸۰ / ۶۴۰ / ۷۶۸ / ۱۰۲۴ / ۱۲۸۰. طراحی موبایل‌اول؛ منوی موبایل تمام‌صفحه؛ هدف‌های لمسی ≥ ۴۴×۴۴.
- RTL از پایه با خواص منطقی (`margin-inline-start`, `ms-*/ps-*/start-*`).
- تست عرض‌ها: ۳۶۰/۳۹۰/۷۶۸/۱۰۲۴/۱۲۸۰/۱۴۴۰/۱۹۲۰ — **صفر اسکرول افقی** (برنامه‌ای تست شده).

## ۸. دسترسی

- skip-link · landmark ها (header/nav/main/footer) · :focus-visible نارنجی پررنگ · اسلایدر/مودال/منو با کلاس و Esc و focus-return · فرم با label + aria-describedby + aria-invalid · آیکون‌ها aria-hidden · سطح ARIA حداقلی و درست.
