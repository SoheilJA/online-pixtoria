/**
 * PIXORIA — custom code-based illustrations for the 11 service pages.
 * Pure inline SVG + CSS animations (disabled under prefers-reduced-motion).
 * Each illustration is visually distinct and specific to its service.
 */

const frame = (inner, label) => `
<svg viewBox="0 0 560 420" class="w-full h-auto" role="img" aria-label="${label}">
  <defs>
    <pattern id="igrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0v40" fill="none" stroke="#1e1e1e" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="560" height="420" fill="#111"/>
  <rect width="560" height="420" fill="url(#igrid)"/>
  ${inner}
  <g font-family="monospace" font-size="10" fill="#777" direction="ltr">
    <text x="16" y="26">PX — ILLUSTRATION</text>
    <text x="544" y="404" text-anchor="end">35.6892N / 51.3890E</text>
  </g>
  <g stroke="#303030" stroke-width="1.5">
    <path d="M12 32v-8M8 28h8"/><path d="M548 32v-8M544 28h8"/>
    <path d="M12 396v-8M8 392h8"/><path d="M548 396v-8M544 392h8"/>
  </g>
</svg>`

const O = '#FF5A00', L = '#303030', T = '#F2F0EB', M = '#232323'

/* browser window scaffold */
const browser = (x, y, w, h, url, inner) => `
  <g>
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#171717" stroke="${L}"/>
    <line x1="${x}" y1="${y + 34}" x2="${x + w}" y2="${y + 34}" stroke="${L}"/>
    <rect x="${x + 14}" y="${y + 13}" width="8" height="8" fill="${O}"/>
    <rect x="${x + 28}" y="${y + 13}" width="8" height="8" fill="${M}"/>
    <rect x="${x + 42}" y="${y + 13}" width="8" height="8" fill="${M}"/>
    <rect x="${x + 62}" y="${y + 10}" width="${w - 84}" height="14" fill="#0d0d0d" stroke="${L}"/>
    <text x="${x + 70}" y="${y + 21}" font-family="monospace" font-size="9" fill="#8a8a8a">${url}</text>
    ${inner}
  </g>`

export const ILLUSTRATIONS = {
  'web-design': () => frame(`
    ${browser(60, 80, 320, 230, 'pixoria.ir', `
      <rect x="84" y="134" width="120" height="12" fill="${T}"/>
      <rect x="84" y="156" width="84" height="12" fill="${O}"/>
      <rect x="84" y="190" width="272" height="46" fill="none" stroke="${L}"/>
      <rect x="84" y="248" width="86" height="42" fill="none" stroke="${L}"/>
      <rect x="182" y="248" width="86" height="42" fill="none" stroke="${L}"/>
      <rect x="280" y="248" width="76" height="42" fill="none" stroke="${O}"/>
    `)}
    <g class="float-y">
      <rect x="410" y="150" width="100" height="180" rx="8" fill="#171717" stroke="${L}"/>
      <rect x="410" y="150" width="100" height="24" rx="8" fill="#1d1d1d"/>
      <rect x="426" y="190" width="68" height="8" fill="${T}"/>
      <rect x="426" y="206" width="48" height="8" fill="${O}"/>
      <rect x="426" y="226" width="68" height="34" fill="none" stroke="${L}"/>
      <rect x="426" y="270" width="68" height="8" fill="${M}"/>
      <rect x="426" y="286" width="52" height="8" fill="${M}"/>
    </g>
    <g stroke="${L}" stroke-dasharray="4 4" fill="none">
      <rect x="380" y="120" width="160" height="240"/>
      <text x="388" y="114" font-family="monospace" font-size="9" fill="#777" stroke="none">RESPONSIVE / 390px</text>
    </g>
  `, 'طراحی سایت — پنجره مرورگر و نسخه موبایل'),

  'ecommerce-website-design': () => frame(`
    ${browser(50, 60, 300, 200, 'shop.ir', `
      <g>
        ${[0, 1, 2].map(i => `<rect x="${74 + i * 88}" y="${110}" width="72" height="60" fill="none" stroke="${i === 1 ? O : L}"/>`).join('')}
        ${[0, 1, 2].map(i => `<rect x="${74 + i * 88}" y="${178}" width="${i === 1 ? 40 : 52}" height="8" fill="${M}"/>`).join('')}
        <rect x="108" y="196" width="28" height="8" fill="${O}"/>
        <rect x="196" y="196" width="28" height="8" fill="${O}"/>
        <rect x="284" y="196" width="28" height="8" fill="${O}"/>
      </g>
    `)}
    <g class="float-y">
      <rect x="390" y="90" width="120" height="90" fill="#171717" stroke="${L}"/>
      <text x="404" y="128" font-family="monospace" font-size="11" fill="${T}">CART</text>
      <rect x="404" y="140" width="80" height="6" fill="${M}"/>
      <rect x="404" y="152" width="60" height="6" fill="${M}"/>
      <rect x="404" y="164" width="70" height="8" fill="${O}"/>
      <path d="M390 90l14-18h92l14 18" fill="none" stroke="${T}"/>
    </g>
    <g class="float-y" style="animation-delay:-3s">
      <rect x="410" y="250" width="80" height="70" fill="none" stroke="${O}"/>
      <path d="M410 250h80v70h-80z" fill="none"/>
      <path d="M410 270h80M410 250l16 20-16 20" stroke="${L}" fill="none"/>
      <text x="422" y="345" font-family="monospace" font-size="9" fill="#777">DELIVERY</text>
    </g>
    <path d="M150 300c40 30 120 30 160 10" stroke="${L}" stroke-dasharray="5 5" fill="none"/>
    <circle cx="150" cy="300" r="4" fill="${O}"/>
  `, 'فروشگاه اینترنتی — محصولات، سبد خرید و بسته‌بندی'),

  'service-website-design': () => frame(`
    ${browser(50, 60, 280, 200, 'booking.ir', `
      <rect x="74" y="104" width="100" height="12" fill="${T}"/>
      <rect x="74" y="126" width="70" height="8" fill="${O}"/>
      <g>
        ${Array.from({ length: 14 }, (_, i) => `<rect x="${74 + (i % 7) * 22}" y="${150 + Math.floor(i / 7) * 22}" width="16" height="16" fill="${[4, 10].includes(i) ? O : '#1d1d1d'}" stroke="${L}"/>`).join('')}
      </g>
    `)}
    <g class="float-y">
      <rect x="360" y="100" width="150" height="150" fill="#171717" stroke="${L}"/>
      <rect x="360" y="100" width="150" height="30" fill="#1d1d1d"/>
      <text x="374" y="120" font-family="monospace" font-size="10" fill="${T}">BOOK A SLOT</text>
      ${[0, 1, 2].map(i => `<g><rect x="374" y="${142 + i * 34}" width="122" height="26" fill="none" stroke="${i === 1 ? O : L}"/><circle cx="${388}" cy="${155 + i * 34}" r="4" fill="${i === 1 ? O : M}"/><rect x="${400}" y="${151 + i * 34}" width="${i === 1 ? 50 : 70}" height="8" fill="${M}"/></g>`).join('')}
    </g>
    <path d="M330 180c10 0 14 10 30 10" stroke="${L}" stroke-dasharray="4 4" fill="none"/>
    <circle cx="330" cy="180" r="3" fill="${O}"/>
  `, 'سایت خدماتی — تقویم و رزرو نوبت آنلاین'),

  'corporate-website-design': () => frame(`
    <g>
      <rect x="70" y="180" width="60" height="150" fill="#171717" stroke="${L}"/>
      <rect x="140" y="120" width="90" height="210" fill="#1d1d1d" stroke="${L}"/>
      <rect x="240" y="150" width="70" height="180" fill="#171717" stroke="${L}"/>
      <rect x="70" y="180" width="60" height="150" fill="none"/>
      ${Array.from({ length: 4 }, (_, i) => `<rect x="${80}" y="${195 + i * 30}" width="40" height="14" fill="#0d0d0d"/>`).join('')}
      ${Array.from({ length: 6 }, (_, i) => `<rect x="${150}" y="${135 + i * 30}" width="70" height="14" fill="#0d0d0d"/>`).join('')}
      ${Array.from({ length: 5 }, (_, i) => `<rect x="${250}" y="${165 + i * 30}" width="50" height="14" fill="#0d0d0d"/>`).join('')}
      <rect x="150" y="135" width="18" height="14" fill="${O}"/>
      <rect x="80" y="195" width="14" height="14" fill="${O}" opacity=".55"/>
    </g>
    <g class="float-y">
      <rect x="360" y="90" width="150" height="110" fill="#171717" stroke="${L}"/>
      <circle cx="435" cy="130" r="16" fill="none" stroke="${O}"/>
      <rect x="395" y="158" width="80" height="8" fill="${M}"/>
      ${[0, 1, 2].map(i => `<circle cx="${405 + i * 30}" cy="182" r="8" fill="none" stroke="${L}"/>`).join('')}
      <path d="M405 182h60" stroke="${L}"/>
    </g>
    <text x="366" y="220" font-family="monospace" font-size="9" fill="#777">ORG / TEAM</text>
  `, 'سایت شرکتی — ساختمان و ساختار سازمانی'),

  'portfolio-website-design': () => frame(`
    ${browser(50, 70, 300, 260, 'me.ir', `
      <circle cx="96" cy="120" r="18" fill="none" stroke="${O}"/>
      <rect x="84" y="146" width="70" height="8" fill="${T}"/>
      <rect x="84" y="160" width="46" height="6" fill="${M}"/>
      <g>
        ${[0, 1, 2].map(i => `<rect x="${84}" y="${186 + i * 24}" width="${[130, 100, 116][i]}" height="8" fill="none" stroke="${L}"/>`).join('')}
        ${[0, 1, 2].map(i => `<rect x="${84}" y="${186 + i * 24}" width="${[90, 64, 40][i]}" height="8" fill="${i === 0 ? O : '#3a3a3a'}"/>`).join('')}
      </g>
      <rect x="190" y="104" width="136" height="96" fill="none" stroke="${L}"/>
      <rect x="190" y="208" width="64" height="48" fill="none" stroke="${L}"/>
      <rect x="262" y="208" width="64" height="48" fill="none" stroke="${O}"/>
    `)}
    <g class="float-y">
      <rect x="400" y="140" width="110" height="150" fill="#171717" stroke="${L}"/>
      <rect x="400" y="140" width="110" height="150" fill="none"/>
      <circle cx="455" cy="180" r="20" fill="none" stroke="${T}"/>
      <rect x="420" y="212" width="70" height="8" fill="${T}"/>
      <rect x="432" y="226" width="46" height="6" fill="${M}"/>
      <rect x="420" y="248" width="30" height="20" fill="none" stroke="${O}"/>
      <rect x="456" y="248" width="30" height="20" fill="none" stroke="${L}"/>
    </g>
  `, 'سایت رزومه‌ای — کارت پروفایل و مهارت‌ها'),

  'web-app-development': () => frame(`
    <g>
      <rect x="60" y="70" width="280" height="190" fill="#0d0d0d" stroke="${L}"/>
      <rect x="60" y="70" width="280" height="26" fill="#171717"/>
      ${[0, 1, 2].map(i => `<circle cx="${74 + i * 14}" cy="83" r="3.5" fill="${i === 0 ? O : M}"/>`).join('')}
      ${[0, 1, 2, 3, 4, 5, 6].map(i => `<rect x="${78}" y="${112 + i * 20}" width="${[110, 160, 80, 190, 130, 60, 100][i]}" height="8" fill="${i === 3 ? O : '#2a2a2a'}"/>`).join('')}
      <rect x="78" y="112" width="16" height="8" fill="${O}" opacity=".4"/>
    </g>
    <g class="float-y">
      ${[[420, 90], [480, 160], [410, 230], [500, 250]].map(([cx, cy]) => `<rect x="${cx - 10}" y="${cy - 10}" width="20" height="20" fill="#171717" stroke="${L}"/>`).join('')}
      <g stroke="${L}" fill="none">
        <path d="M430 100 470 150M470 150 422 222M470 150 490 242"/>
      </g>
      <rect x="470" y="150" width="20" height="20" fill="none" stroke="${O}" transform="translate(-10 -10)"/>
      <text x="440" y="70" font-family="monospace" font-size="9" fill="#777">API / NODES</text>
    </g>
    <g class="float-y" style="animation-delay:-4s">
      <ellipse cx="150" cy="330" rx="34" ry="12" fill="none" stroke="${L}"/>
      <ellipse cx="150" cy="320" rx="34" ry="12" fill="none" stroke="${O}"/>
      <text x="196" y="328" font-family="monospace" font-size="9" fill="#777">DB</text>
    </g>
  `, 'توسعه وب‌اپلیکیشن — ترمینال، نودهای API و پایگاه داده'),

  'seo': () => frame(`
    ${browser(50, 60, 300, 180, 'google.com', `
      <rect x="110" y="110" width="180" height="24" fill="#0d0d0d" stroke="${O}"/>
      <circle cx="126" cy="122" r="5" fill="none" stroke="${M}"/>
      <path d="M130 126l4 4" stroke="${M}"/>
      <rect x="120" y="152" width="160" height="8" fill="${T}"/>
      <rect x="120" y="168" width="110" height="6" fill="${M}"/>
      <rect x="120" y="190" width="130" height="8" fill="#3a3a3a"/>
      <rect x="120" y="206" width="90" height="6" fill="${M}"/>
    `)}
    <g class="float-y">
      ${[0, 1, 2, 3].map(i => `<rect x="${390 + i * 34}" y="${300 - [40, 80, 120, 170][i]}" width="24" height="${[40, 80, 120, 170][i]}" fill="${i === 3 ? O : '#232323'}" stroke="${L}"/>`).join('')}
      <path d="M402 270l40-40 40 10 44-60" stroke="${T}" stroke-width="1.5" fill="none" stroke-dasharray="3 3"/>
    </g>
    <g>
      ${[0, 1, 2].map(i => `<g><rect x="390" y="${90 + i * 42}" width="150" height="30" fill="#171717" stroke="${i === 0 ? O : L}"/><circle cx="404" cy="${105 + i * 42}" r="6" fill="none" stroke="${i === 0 ? O : M}"/><rect x="418" y="${101 + i * 42}" width="${i === 0 ? 100 : 70}" height="7" fill="${i === 0 ? T : M}"/></g>`).join('')}
    </g>
    <text x="392" y="330" font-family="monospace" font-size="9" fill="#777">RANK / TREND</text>
  `, 'سئو — جستجو، رتبه و روند رشد'),

  'network-services': () => frame(`
    <g stroke="${L}" fill="none">
      <path d="M180 200 100 110M180 200l120-60M180 200 90 300M180 200l160 80M300 140l60 60M300 140 100 110"/>
    </g>
    <g class="float-y">
      <rect x="160" y="182" width="40" height="36" fill="#171717" stroke="${O}"/>
      <rect x="168" y="190" width="24" height="4" fill="${O}"/>
      <rect x="168" y="198" width="24" height="4" fill="${M}"/>
      <rect x="168" y="206" width="16" height="4" fill="${M}"/>
    </g>
    ${[[80, 92], [280, 122], [372, 182], [70, 282], [332, 272]].map(([x, y], i) => `
    <g class="float-y" style="animation-delay:${-i * 1.5}s">
      <rect x="${x}" y="${y}" width="28" height="28" fill="#171717" stroke="${L}"/>
      <rect x="${x + 6}" y="${y + 6}" width="16" height="4" fill="${M}"/>
      <rect x="${x + 6}" y="${y + 14}" width="16" height="4" fill="${M}"/>
      <circle cx="${x + 14}" cy="${y - 6}" r="3" fill="${i === 1 ? O : '#3a3a3a'}"/>
    </g>`).join('')}
    <g stroke="${O}" stroke-dasharray="6 6" fill="none"><path d="M90 110c60 100 200 140 280 60"/></g>
    <text x="60" y="380" font-family="monospace" font-size="9" fill="#777">LAN / TOPOLOGY — MESH</text>
  `, 'خدمات شبکه — نودها، روترها و اتصالات'),

  'graphic-design': () => frame(`
    <g>
      <rect x="70" y="60" width="220" height="280" fill="#171717" stroke="${L}"/>
      <rect x="70" y="60" width="220" height="280" fill="none" stroke="${L}"/>
      <path d="M100 280c40-80 60-120 80-140s40-10 60 40" fill="none" stroke="${O}" stroke-width="1.5"/>
      ${[[100, 280], [240, 180], [300, 220]].map(([x, y], i) => `<rect x="${x - 4}" y="${y - 4}" width="8" height="8" fill="${i === 0 ? O : T}" transform="rotate(45 ${x} ${y})"/>`).join('')}
      <path d="M100 280 240 180" stroke="${L}" stroke-dasharray="3 3"/>
      <rect x="96" y="120" width="60" height="60" fill="none" stroke="${L}"/>
      <circle cx="126" cy="150" r="20" fill="none" stroke="${T}"/>
    </g>
    <g class="float-y">
      ${[0, 1, 2, 3, 4].map(i => `<rect x="330" y="${80 + i * 30}" width="22" height="22" fill="${['#FF5A00', '#F2F0EB', '#3a3a3a', '#232323', '#171717'][i]}" stroke="${L}"/>`).join('')}
      <text x="360" y="96" font-family="monospace" font-size="8" fill="#777">#FF5A00</text>
    </g>
    <g class="float-y" style="animation-delay:-2s">
      <rect x="380" y="240" width="130" height="90" fill="#171717" stroke="${L}"/>
      <rect x="394" y="264" width="90" height="10" fill="${T}"/>
      <rect x="394" y="282" width="60" height="8" fill="${O}"/>
      <rect x="394" y="302" width="76" height="6" fill="${M}"/>
    </g>
  `, 'طراحی گرافیک — آرت‌بورد، مسیر بزیه و پالت رنگ'),

  'logo-and-branding': () => frame(`
    <g>
      <circle cx="180" cy="170" r="110" fill="none" stroke="${L}" stroke-dasharray="4 4"/>
      <circle cx="180" cy="170" r="70" fill="none" stroke="${L}"/>
      <path d="M180 60v220M70 170h220" stroke="${L}"/>
      <path d="M102 92 258 248M258 92 102 248" stroke="#1e1e1e"/>
      <g class="float-y">
        <rect x="155" y="145" width="50" height="50" fill="#171717" stroke="${O}" stroke-width="1.5"/>
        <rect x="163" y="153" width="18" height="18" fill="${T}"/>
        <rect x="181" y="171" width="18" height="18" fill="${O}"/>
        <rect x="163" y="171" width="18" height="18" fill="#2a2a2a"/>
        <rect x="181" y="153" width="18" height="18" fill="#2a2a2a"/>
      </g>
      <text x="132" y="310" font-family="monospace" font-size="9" fill="#777">GRID / 1:1</text>
    </g>
    <g class="float-y" style="animation-delay:-3s">
      <rect x="370" y="90" width="140" height="80" fill="#171717" stroke="${L}"/>
      <rect x="382" y="102" width="28" height="28" fill="none" stroke="${O}"/>
      <rect x="389" y="109" width="10" height="10" fill="${O}"/>
      <rect x="420" y="106" width="70" height="8" fill="${T}"/>
      <rect x="420" y="122" width="46" height="6" fill="${M}"/>
      <rect x="420" y="140" width="60" height="6" fill="${M}"/>
    </g>
    <g class="float-y" style="animation-delay:-5s">
      <rect x="370" y="200" width="140" height="100" fill="#171717" stroke="${L}"/>
      <rect x="382" y="212" width="116" height="52" fill="none" stroke="${L}"/>
      <rect x="392" y="222" width="60" height="6" fill="${M}"/>
      <rect x="392" y="234" width="40" height="6" fill="${M}"/>
      <rect x="392" y="248" width="86" height="8" fill="${O}" opacity=".7"/>
      <text x="382" y="286" font-family="monospace" font-size="8" fill="#777">STATIONERY</text>
    </g>
  `, 'هویت بصری — شبکه ساختار لوگو و ست اداری'),

  'banner-and-ads': () => frame(`
    <g>
      <rect x="70" y="80" width="380" height="90" fill="#171717" stroke="${L}"/>
      <rect x="70" y="80" width="6" height="90" fill="${O}"/>
      <rect x="92" y="100" width="140" height="12" fill="${T}"/>
      <rect x="92" y="122" width="90" height="8" fill="${M}"/>
      <rect x="92" y="146" width="60" height="16" fill="none" stroke="${O}"/>
      <circle cx="400" cy="125" r="30" fill="none" stroke="${L}"/>
      <circle cx="400" cy="125" r="30" fill="none" stroke="${O}" stroke-dasharray="10 10" class="spin-slow-svg" style="transform-origin:400px 125px"/>
    </g>
    <g>
      <rect x="70" y="200" width="180" height="150" fill="#171717" stroke="${L}"/>
      <rect x="70" y="200" width="180" height="150" fill="none"/>
      <rect x="88" y="220" width="80" height="10" fill="${T}"/>
      <rect x="88" y="240" width="120" height="8" fill="${M}"/>
      <rect x="88" y="256" width="90" height="8" fill="${M}"/>
      <rect x="88" y="300" width="70" height="20" fill="${O}"/>
      <g class="float-y"><rect x="180" y="290" width="40" height="40" fill="none" stroke="${T}"/></g>
    </g>
    <g class="float-y" style="animation-delay:-2s">
      <rect x="290" y="220" width="160" height="130" fill="#1d1d1d" stroke="${L}"/>
      <rect x="306" y="240" width="70" height="8" fill="${M}"/>
      <rect x="306" y="258" width="110" height="8" fill="${T}"/>
      <rect x="306" y="276" width="86" height="8" fill="${O}"/>
      <g>
        <path d="M396 300l18 18-18 18-18-18z" fill="none" stroke="${T}"/>
        <path d="M366 318h-14m54 0h14M396 288v-14" stroke="${L}"/>
      </g>
    </g>
    <g class="float-y" style="animation-delay:-4s">
      <path d="M420 60l14 28h-28z" fill="${O}"/>
      <path d="M420 74v14m0 0-9 9m9-9 9 9" stroke="#0d0d0d" stroke-width="2"/>
    </g>
  `, 'طراحی بنر — قاب‌های تبلیغاتی و ترکیب‌بندی')
}

export function svcIllustration (slug) {
  const fn = ILLUSTRATIONS[slug]
  return fn ? fn() : ILLUSTRATIONS['web-design']()
}
