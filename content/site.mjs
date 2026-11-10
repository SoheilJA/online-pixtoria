/**
 * PIXORIA — shared site data (used by the static page generator)
 */

export const SITE = {
  name: 'پیکسوریا',
  nameLatin: 'PIXORIA',
  tagline: 'استودیوی طراحی و توسعه وب',
  url: 'https://pixoria.ir',
  email: 'info@pixoria.ir', // placeholder
  phone: '+989000000000', // placeholder
  phoneDisplay: '+98 900 000 0000', // placeholder
  whatsapp: '989000000000', // placeholder
  telegram: 'pixoria_studio', // placeholder
  instagram: 'pixoria.studio', // placeholder
  address: 'تهران، ایران',
  hours: 'شنبه تا پنجشنبه — ۹ تا ۱۸',
  coords: { lat: '35.6892° N', lng: '51.3890° E' },
  year: '۱۴۰۵'
}

export const NAV = [
  { label: 'خدمات', href: '/services/', mega: true },
  { label: 'نمونه‌کارها', href: '/portfolio/' },
  { label: 'وبلاگ', href: '/blog/' },
  { label: 'درباره ما', href: '/about/' },
  { label: 'تماس', href: '/contact/' }
]

/** The 11 services — order = numbering ۰۱..۱۱ */
export const SERVICES = [
  { slug: 'web-design', num: '۰۱', title: 'طراحی سایت', short: 'طراحی سایت اختصاصی، سریع و استاندارد؛ از ایده تا راه‌اندازی.' },
  { slug: 'ecommerce-website-design', num: '۰۲', title: 'طراحی سایت فروشگاهی', short: 'فروشگاه اینترنتی حرفه‌ای با تجربه خرید روان و آماده رشد.' },
  { slug: 'service-website-design', num: '۰۳', title: 'طراحی سایت خدماتی', short: 'سایت خدماتی با نوبت‌دهی آنلاین و فرم‌های هوشمند.' },
  { slug: 'corporate-website-design', num: '۰۴', title: 'طراحی سایت شرکتی', short: 'وب‌سایت شرکتی معتبر برای ارائه حرفه‌ای کسب‌وکار شما.' },
  { slug: 'portfolio-website-design', num: '۰۵', title: 'طراحی سایت رزومه‌ای و نمونه‌کار', short: 'ویترین شخصی برای نمایش مهارت‌ها و پروژه‌های شما.' },
  { slug: 'web-app-development', num: '۰۶', title: 'برنامه‌نویسی و توسعه وب‌اپلیکیشن', short: 'وب‌اپلیکیشن‌های سفارشی، پنل‌های مدیریتی و سیستم‌های تخصصی.' },
  { slug: 'seo', num: '۰۷', title: 'سئو و بهینه‌سازی', short: 'بهبون رتبه سایت در گوگل و جذب مشتری هدفمند.' },
  { slug: 'network-services', num: '۰۸', title: 'خدمات شبکه', short: 'راه‌اندازی و پشتیبانی شبکه‌های کوچک و متوسط سازمانی.' },
  { slug: 'graphic-design', num: '۰۹', title: 'طراحی گرافیک', short: 'طراحی بصری حرفه‌ای برای همه نیازهای دیجیتال و چاپی.' },
  { slug: 'logo-and-branding', num: '۱۰', title: 'طراحی لوگو و هویت بصری', short: 'هویت بصری متمایز که برند شما را به یاد می‌ماند.' },
  { slug: 'banner-and-ads', num: '۱۱', title: 'طراحی بنر و تبلیغات', short: 'بنرها و کمپین‌های تبلیغاتی که دیده می‌شوند و کلیک می‌گیرند.' }
]

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map(s => [s.slug, s]))

/** Shared demo testimonials — DEMO CONTENT, clearly labeled. */
export const TESTIMONIALS = [
  { id: 't1', name: 'سارا محمدی', role: 'مدیر فروشگاه آرتیش — نمونه‌کار نمایشی', text: 'فرآیند کار خیلی منظم بود؛ از جلسه اول تا راه‌اندازی دقیقاً می‌دانستیم هر هفته چه اتفاقی می‌افتد. سایت نهایی خیلی بهتر از چیزی بود که تصور می‌کردیم.' },
  { id: 't2', name: 'امیر رضایی', role: 'هم‌بنیان‌گذار استارتاپ تسک‌یار — نمونه‌کار نمایشی', text: 'چیزهایی که برایمان مهم بود — سرعت، جزئیات رابط کاربری و کد تمیز — همه رعایت شد. ارتباط شفاف تیم در طول پروژه ارزشمند بود.' },
  { id: 't3', name: 'نگار کریمی', role: 'مدیر برند کافه رُست — نمونه‌کار نمایشی', text: 'هویت بصری‌ای که طراحی شد دقیقاً حس کافه ما را منتقل می‌کند. مشتری‌ها مدام از لوگو و طراحی ست پیدا می‌کنند.' },
  { id: 't4', name: 'حسین احمدی', role: 'مدیر کلینیک سلامت‌گستر — نمونه‌کار نمایشی', text: 'سیستم نوبت‌دهی آنلاین حجم تماس‌های تلفنی را به‌شدت کم کرد. آموزش استفاده به کارمندان هم کامل انجام شد.' },
  { id: 't5', name: 'مریم موسوی', role: 'عکاس — نمونه‌کار نمایشی', text: 'سایت نمونه‌کارم حالا واقعاً کارِ من را نشان می‌دهد، نه فقط عکس‌هایم را. سرعت سایت برای گالری‌های سنگین عالی است.' }
]

/**
 * Home statistics — EDITABLE PLACEHOLDERS.
 * Replace with real numbers before launch (see PROJECT_MAP.md).
 */
export const STATS = [
  { value: 40, suffix: '+', label: 'پروژه تکمیل‌شده' }, // PLACEHOLDER
  { value: 3, suffix: '+', label: 'سال تجربه' }, // PLACEHOLDER
  { value: 11, suffix: '', label: 'خدمت تخصصی' },
  { value: 30, suffix: '+', label: 'مشتری راضی' } // PLACEHOLDER
]

export const PROCESS = [
  { num: '۰۱', title: 'مشاوره', text: 'گفت‌وگوی اولیه برای فهم دقیق کسب‌وکار، اهداف و مخاطب شما؛ بدون هیچ تعهدی.' },
  { num: '۰۲', title: 'تحلیل و برنامه‌ریزی', text: 'بررسی رقبا، تعیین ساختار صفحات، نقشه سایت و برنامه زمانی شفاف.' },
  { num: '۰۳', title: 'طراحی', text: 'طراحی اختصاصی رابط و تجربه کاربری بر اساس هویت برند شما — نه قالب آماده.' },
  { num: '۰۴', title: 'توسعه', text: 'پیاده‌سازی تمیز و استاندارد؛ سریع، امن و واکنش‌گرا روی همه دستگاه‌ها.' },
  { num: '۰۵', title: 'تست', text: 'آزمودن سایت روی دستگاه‌ها و مرورگرهای مختلف، بررسی سرعت و رفع ایرادها.' },
  { num: '۰۶', title: 'تحویل و پشتیبانی', text: 'آموزش، تحویل کامل فایل‌ها و پشتیبانی بعد از راه‌اندازی.' }
]

export const FAQ_HOME = [
  { q: 'یک وب‌سایت معمولاً چقدر طول می‌کشد؟', a: 'بستگی به پیچیدگی پروژه دارد. یک سایت معرفی معمولی حدود ۲ تا ۴ هفته، فروشگاه اینترنتی ۴ تا ۸ هفته و پروژه‌های سفارشی بزرگ‌تر زمان بیشتری نیاز دارند. در جلسه اول، برنامه زمانی دقیق و مکتوب به شما ارائه می‌شود.' },
  { q: 'آیا از قالب آماده استفاده می‌کنید؟', a: 'خیر. طراحی‌ها از صفر و اختصاصی برای کسب‌وکار شما انجام می‌شود. این یعنی ظاهر متفاوت، سرعت بهتر و کدی که کاملاً با نیازهای شما منطبق است.' },
  { q: 'هزینه پروژه چگونه محاسبه می‌شود؟', a: 'هزینه بر اساس حجم و پیچیدگی کار تعیین می‌شود، نه هزینه ساعتی مبهم. بعد از جلسه مشاوره و مشخص‌شدن دقیق نیازها، قیمت شفاف و ثابت اعلام می‌شود که تغییرات آن در طول پروژه غافلگیرکننده نیست.' },
  { q: 'بعد از راه‌اندازی سایت، پشتیبانی هم دارید؟', a: 'بله. همه پروژه‌ها شامل یک دوره پشتیبانی رایگان هستند و بعد از آن امکان قرارداد پشتیبانی دوره‌ای وجود دارد تا سایت شما همیشه به‌روز و امن بماند.' },
  { q: 'خودم می‌توانم محتوای سایت را به‌روز کنم؟', a: 'بله؛ ساختار و آموزش به‌روزرسانی محتوا بخشی از تحویل پروژه است. برای نیازهای پیچیده‌تر می‌توانیم پنل مدیریت متناسب با کار خودتان طراحی کنیم.' },
  { q: 'سایتم را کجا میزبانی کنم؟', a: 'برای سایت‌های معمولی، یک هاست اشتراکی معتبر ایرانی کافی است. ما در ابتدای پروژه بسته میزبانی مناسب با حجم بازدید شما را پیشنهاد می‌دهیم و راه‌اندازی اولیه را هم انجام می‌دهیم.' }
]

/** Blog categories */
export const BLOG_CATEGORIES = [
  { slug: 'web-design', name: 'طراحی وب' },
  { slug: 'seo', name: 'سئو و بهینه‌سازی' },
  { slug: 'branding', name: 'برندینگ' },
  { slug: 'ux', name: 'تجربه کاربری' },
  { slug: 'ecommerce', name: 'فروشگاه اینترنتی' },
  { slug: 'performance', name: 'کارایی و سرعت' },
  { slug: 'security', name: 'امنیت وب' },
  { slug: 'content', name: 'تولید محتوا' }
]

/** Portfolio categories */
export const PORTFOLIO_CATEGORIES = [
  { slug: 'web', name: 'طراحی سایت' },
  { slug: 'app', name: 'برنامه‌نویسی و وب‌اپلیکیشن' },
  { slug: 'graphic', name: 'طراحی گرافیک' },
  { slug: 'brand', name: 'هویت بصری' }
]

export const SOCIALS = [
  { id: 'instagram', label: 'اینستاگرام', href: 'https://instagram.com/pixoria.studio', icon: 'instagram' },
  { id: 'telegram', label: 'تلگرام', href: 'https://t.me/pixoria_studio', icon: 'telegram' },
  { id: 'whatsapp', label: 'واتساپ', href: 'https://wa.me/989000000000', icon: 'whatsapp' },
  { id: 'email', label: 'ایمیل', href: 'mailto:info@pixoria.ir', icon: 'mail' }
]

export const FOOTER_SERVICES = SERVICES // all 11 listed in footer
