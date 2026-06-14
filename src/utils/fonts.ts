import brandFontUrl from '@/assets/Authentic Photograph.ttf?url'

export const BRAND_FONT_FAMILY = 'Authentic Photograph'

const brandFontSpec = `1rem "${BRAND_FONT_FAMILY}"`

let brandFontPromise: Promise<boolean> | null = null

function preloadBrandFontFile() {
  const existing = document.getElementById('brand-font-preload') as HTMLLinkElement | null

  if (existing?.href === brandFontUrl) return

  if (existing) existing.remove()

  const link = document.createElement('link')
  link.id = 'brand-font-preload'
  link.rel = 'preload'
  link.as = 'font'
  link.type = 'font/ttf'
  link.href = brandFontUrl
  link.crossOrigin = 'anonymous'
  document.head.appendChild(link)
}

export function loadBrandFont() {
  if (typeof document === 'undefined') return Promise.resolve(true)

  if (!brandFontPromise) {
    brandFontPromise = (async () => {
      preloadBrandFontFile()

      try {
        await Promise.all([
          document.fonts.load(`400 1rem "${BRAND_FONT_FAMILY}"`),
          document.fonts.load(brandFontSpec),
        ])
        await document.fonts.ready
        return document.fonts.check(brandFontSpec)
      } catch {
        return false
      }
    })()
  }

  return brandFontPromise
}
