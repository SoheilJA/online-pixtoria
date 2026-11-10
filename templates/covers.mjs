/**
 * PIXORIA — generated covers & mockup art (inline SVG / CSS skeletons)
 * Branded, lightweight, no raster images for essential art.
 */

/* -------------------------------------------------------------- blog covers */
const GRID = `<g stroke="#222" stroke-width="1"><path d="M0 75H800M0 150H800M0 225H800M0 300H800M0 375H800M100 0V450M200 0V450M300 0V450M400 0V450M500 0V450M600 0V450M700 0V450"/></g>`

const VARIANTS = {
  1: `<circle cx="620" cy="200" r="130" fill="none" stroke="#FF5A00" stroke-width="1.5"/><circle cx="620" cy="200" r="90" fill="none" stroke="#303030"/><circle cx="620" cy="200" r="5" fill="#FF5A00"/><path d="M620 60v40M620 300v40M480 200h40M720 200h40" stroke="#303030"/>`,
  2: `<path d="M120 320 400 120l280 200" fill="none" stroke="#FF5A00" stroke-width="1.5"/><path d="M120 320h560" stroke="#303030"/><rect x="380" y="106" width="40" height="40" fill="none" stroke="#FF5A00" transform="rotate(45 400 126)"/><circle cx="120" cy="320" r="5" fill="#FF5A00"/><circle cx="680" cy="320" r="5" fill="#303030"/>`,
  3: `<rect x="480" y="80" width="240" height="290" fill="none" stroke="#FF5A00" stroke-width="1.5"/><rect x="510" y="110" width="180" height="10" fill="#303030"/><rect x="510" y="132" width="120" height="10" fill="#303030"/><rect x="510" y="154" width="150" height="10" fill="#FF5A00"/><rect x="510" y="190" width="180" height="60" fill="none" stroke="#303030"/><rect x="510" y="262" width="84" height="60" fill="none" stroke="#303030"/><rect x="606" y="262" width="84" height="60" fill="none" stroke="#303030"/><path d="M100 370h240" stroke="#303030"/>`,
  4: `<g fill="#303030">${Array.from({ length: 5 }, (_, r) => Array.from({ length: 6 }, (_, c) => `<circle cx="${140 + c * 52}" cy="${120 + r * 46}" r="6"/>`).join('')).join('')}</g><circle cx="296" cy="212" r="6" fill="#FF5A00"/><circle cx="244" cy="166" r="6" fill="#FF5A00" opacity=".6"/><circle cx="348" cy="258" r="6" fill="#FF5A00" opacity=".6"/><path d="M540 320V160l80 50 80-50v160" fill="none" stroke="#FF5A00" stroke-width="1.5"/>`,
  5: `<g fill="none" stroke="#303030">${Array.from({ length: 7 }, (_, i) => `<path d="M80 ${120 + i * 30}q90 -36 180 0t180 0 180 0"/>`).join('')}</g><path d="M80 270q90 -36 180 0t180 0 180 0" fill="none" stroke="#FF5A00" stroke-width="1.5"/><rect x="560" y="90" width="160" height="120" fill="none" stroke="#FF5A00" stroke-width="1.5"/><path d="M560 170h160M600 90v80" stroke="#303030"/>`,
  6: `<text x="660" y="290" text-anchor="middle" font-family="monospace" font-size="190" font-weight="bold" fill="none" stroke="#303030" stroke-width="1.5">07</text><text x="660" y="290" text-anchor="middle" font-family="monospace" font-size="190" font-weight="bold" fill="none" stroke="#FF5A00" stroke-width="1.5" opacity=".35">07</text><path d="M120 110v260M120 370h280" stroke="#FF5A00" stroke-width="1.5"/><rect x="140" y="130" width="10" height="10" fill="#FF5A00"/>`
}

export function postCover (a) {
  const v = VARIANTS[a.cover.variant] || VARIANTS[1]
  return `
  <svg class="cover-art absolute inset-0" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" role="img" aria-label="کاور مقاله: ${a.title}">
    <rect width="800" height="450" fill="#141414"/>
    ${GRID}
    <rect width="800" height="450" fill="none" stroke="#222"/>
    ${v}
    <g font-family="monospace" font-size="11" fill="#8a8a8a" direction="ltr">
      <text x="24" y="34">PIXORIA / JOURNAL</text>
      <text x="24" y="426">FIG. ${a.cover.variant} — ${a.slug.toUpperCase().slice(0, 22)}</text>
      <text x="776" y="426" text-anchor="end">${a.date.replaceAll('-', '/')}</text>
    </g>
    <rect x="0" y="0" width="4" height="450" fill="#FF5A00"/>
    <text x="776" y="34" text-anchor="end" font-size="13" font-weight="700" fill="#F2F0EB" font-family="Vazirmatn">${a.categoryName}</text>
  </svg>`
}

/* -------------------------------------------------------------- project cover art */
const SK = (w, h, cls = '') => `<i class="block bg-[#2a2a2a] ${cls}" style="width:${w};height:${h}"></i>`

export function prjCoverArt (p) {
  const t = p.template || 'landing'
  const url = `${p.slug.replace(/-/g, '')}.ir`

  const bodies = {
    shop: `
      <div class="absolute inset-0 p-4 flex flex-col gap-3">
        <div class="flex gap-2">${SK('18%', '14px')}${SK('14%', '14px')}${SK('14%', '14px')}${SK('10%', '14px', 'ms-auto !bg-[#3a3a3a]')}</div>
        <div class="flex items-end justify-between"><div class="w-[46%]">${SK('100%', '26px')}</div>${SK('12%', '12px')}</div>
        <div class="grid grid-cols-4 gap-2 flex-1">
          ${Array.from({ length: 4 }, () => `<div class="border border-[#2a2a2a] flex flex-col gap-1.5 p-1.5"><div class="flex-1 bg-[#232323]"></div>${SK('80%', '8px')}${SK('55%', '8px', '!bg-[#FF5A00] opacity-70')}</div>`).join('')}
        </div>
      </div>`,
    landing: `
      <div class="absolute inset-0 flex flex-col">
        <div class="flex items-center justify-between px-5 py-3 border-b border-[#2a2a2a]">${SK('16%', '12px')}<div class="flex gap-2">${SK('40px', '8px')}${SK('40px', '8px')}${SK('40px', '8px')}</div></div>
        <div class="flex-1 grid grid-cols-2 gap-6 p-6 items-center">
          <div class="flex flex-col gap-2">${SK('100%', '30px')}${SK('86%', '30px')}${SK('60%', '30px', '!bg-[#FF5A00] opacity-75')}<div class="mt-3 flex gap-2">${SK('90px', '24px', '!bg-[#3a3a3a]')}${SK('90px', '24px')}</div></div>
          <div class="h-full border border-[#2a2a2a] bg-[#1b1b1b] grid place-items-center"><span class="mono-ltr text-xs text-[#4a4a4a]">HERO / 16:9</span></div>
        </div>
      </div>`,
    dashboard: `
      <div class="absolute inset-0 flex">
        <div class="w-[22%] border-e border-[#2a2a2a] p-3 flex flex-col gap-2">${SK('70%', '10px', '!bg-[#FF5A00] opacity-60')}${SK('90%', '10px')}${SK('80%', '10px')}${SK('85%', '10px')}${SK('75%', '10px')}</div>
        <div class="flex-1 p-4 flex flex-col gap-3">
          <div class="grid grid-cols-3 gap-2">${Array.from({ length: 3 }, () => `<div class="border border-[#2a2a2a] p-2 flex flex-col gap-1.5">${SK('60%', '8px')}${SK('40%', '14px', '!bg-[#3a3a3a]')}</div>`).join('')}</div>
          <div class="flex-1 border border-[#2a2a2a] relative overflow-hidden">
            <svg class="absolute inset-0" viewBox="0 0 300 100" preserveAspectRatio="none"><path d="M0 85 40 70 80 75 120 50 160 55 200 30 240 38 300 12" fill="none" stroke="#FF5A00" stroke-width="2"/><path d="M0 90 40 82 80 80 120 68 160 62 200 55 240 48 300 30" fill="none" stroke="#3a3a3a" stroke-width="1.5"/></svg>
          </div>
        </div>
      </div>`,
    gallery: `
      <div class="absolute inset-0 p-4 flex flex-col gap-3">
        <div class="flex items-center justify-between">${SK('22%', '14px')}<span class="mono-ltr text-[10px] text-[#4a4a4a]">GALLERY — 12</span></div>
        <div class="grid grid-cols-3 grid-rows-2 gap-2 flex-1">
          <div class="bg-[#232323] col-span-2"></div>
          <div class="bg-[#2a2a2a]"></div>
          <div class="bg-[#2a2a2a]"></div>
          <div class="bg-[#232323] col-span-2"></div>
        </div>
      </div>`,
    booking: `
      <div class="absolute inset-0 flex">
        <div class="flex-1 p-4 flex flex-col gap-2">
          ${SK('40%', '18px')}${SK('70%', '10px')}
          <div class="grid grid-cols-7 gap-1 mt-1 flex-1">
            ${Array.from({ length: 28 }, (_, i) => `<i class="block bg-[#232323] border border-[#2a2a2a] ${i === 9 || i === 17 ? '!bg-[#FF5A00] opacity-70' : ''}" style="height:100%"></i>`).join('')}
          </div>
        </div>
        <div class="w-[34%] border-s border-[#2a2a2a] p-3 flex flex-col gap-2">
          ${SK('80%', '12px')}
          <div class="border border-[#FF5A00] opacity-70 p-2 flex flex-col gap-1.5">${SK('100%', '8px')}${SK('70%', '8px')}${SK('45%', '18px', '!bg-[#FF5A00] opacity-60')}</div>
          <div class="border border-[#2a2a2a] p-2 flex flex-col gap-1.5">${SK('100%', '8px')}${SK('60%', '8px')}</div>
        </div>
      </div>`,
    brand: `
      <div class="absolute inset-0 grid place-items-center">
        <div class="flex items-center gap-8">
          <div class="grid grid-cols-2 gap-1 p-4 border border-[#2a2a2a]">
            <i class="block w-9 h-9 bg-[#F2F0EB]"></i><i class="block w-9 h-9 bg-[#2a2a2a]"></i>
            <i class="block w-9 h-9 bg-[#2a2a2a]"></i><i class="block w-9 h-9 bg-[#FF5A00]"></i>
          </div>
          <div class="flex flex-col gap-2">${SK('140px', '18px', '!bg-[#3a3a3a]')}${SK('100px', '10px')}${SK('120px', '10px')}</div>
        </div>
      </div>`,
    poster: `
      <div class="absolute inset-0 grid place-items-center">
        <div class="flex items-center gap-6">
          <div class="w-[30%] aspect-[3/4] border border-[#2a2a2a] bg-[#181818] relative overflow-hidden">
            <div class="absolute top-3 inset-x-3 flex justify-between"><i class="block w-2 h-2 bg-[#FF5A00]"></i><i class="block w-2 h-2 bg-[#2a2a2a]"></i></div>
            <div class="absolute inset-x-3 bottom-3 flex flex-col gap-1.5">${SK('100%', '10px')}${SK('70%', '10px')}${SK('50%', '10px')}</div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="w-40 h-10 border border-[#2a2a2a] bg-[#181818]"></div>
            <div class="w-40 h-24 border border-[#2a2a2a] bg-[#181818] flex items-center justify-center"><i class="block w-4 h-4 bg-[#FF5A00]"></i></div>
          </div>
        </div>
      </div>`
  }

  const isScreen = ['shop', 'landing', 'dashboard', 'gallery', 'booking'].includes(t)

  if (isScreen) {
    return `
    <div class="cover-art p-3 md:p-4">
      <div class="browser h-full flex flex-col">
        <div class="browser-bar">
          <span class="browser-dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="browser-url">${url}</span>
        </div>
        <div class="browser-body !aspect-auto flex-1">${bodies[t]}</div>
      </div>
    </div>`
  }
  return `<div class="cover-art">${bodies[t]}</div>`
}
