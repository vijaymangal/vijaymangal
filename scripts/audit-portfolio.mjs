import { chromium } from 'playwright'
import assert from 'node:assert/strict'
import { existsSync, mkdirSync } from 'node:fs'

mkdirSync('artifacts', { recursive: true })
const baseUrl = process.env.PORTFOLIO_URL || 'http://127.0.0.1:5173'
const browser = await chromium.launch({ headless: true, ...(existsSync(chromium.executablePath()) ? {} : { channel: 'chrome' }) })
const errors = []
const assets = new Set()

try {
  for (const width of [320, 390, 768, 1440]) {
    for (const route of ['/', '/projects', '/missing-page']) {
      const page = await browser.newPage({ viewport: { width, height: 900 } })
      page.on('pageerror', error => errors.push(error.message))
      await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' })
      await page.locator('h1').waitFor()
      assert.equal(await page.locator('h1').count(), 1, `One h1: ${width} ${route}`)
      // Scroll through every section to trigger reveals and lazy image loading.
      await page.evaluate(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += 650) {
          window.scrollTo({ top: y, behavior: 'instant' })
          await new Promise(resolve => setTimeout(resolve, 90))
        }
      })
      await page.waitForFunction(() => [...document.images].every(img => img.complete && img.naturalWidth > 0))
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `No overflow: ${width} ${route}`)
      for (const src of await page.locator('img').evaluateAll(images => images.map(img => img.src))) assets.add(src)
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
      await page.waitForTimeout(800)
      if (width === 390 || width === 1440) {
        const name = `${width === 390 ? 'mobile' : 'desktop'}-${route === '/' ? 'home' : route === '/projects' ? 'projects' : '404'}`
        await page.screenshot({ path: `artifacts/${name}.png` })
        await page.screenshot({ path: `artifacts/${name}-full.png`, fullPage: true })
      }
      if (route === '/projects') {
        assert.equal(await page.locator('article').count(), 5)
        assert.equal(await page.locator('link[rel="canonical"]').count(), 1)
        assert.match(await page.locator('link[rel="canonical"]').getAttribute('href'), /\/projects$/)
      }
      if (route === '/missing-page') assert.match(await page.locator('meta[name="robots"]').last().getAttribute('content'), /noindex/)
      console.log(`PASS layout, headings, images: ${width}px ${route}`)
      await page.close()
    }
  }

  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' })
  page.on('pageerror', error => errors.push(error.message))
  await page.goto(baseUrl)
  await page.getByRole('heading', { name: 'Vijay Mangal', exact: true }).waitFor()
  assert.equal(await page.getByText('Preparing portfolio').count(), 0)
  const menu = page.getByRole('button', { name: 'Open menu' })
  await menu.click()
  assert.equal(await page.getByRole('button', { name: 'Close menu' }).getAttribute('aria-expanded'), 'true')
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: 'Open menu' }).waitFor()
  assert.equal(await menu.evaluate(el => el === document.activeElement), true)
  await menu.click()
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Projects', exact: true }).click()
  await page.waitForFunction(() => location.hash === '#projects' && Math.abs(document.querySelector('#projects').getBoundingClientRect().top - 96) < 5)
  assert.equal(await menu.getAttribute('aria-expanded'), 'false')
  await page.getByRole('link', { name: 'View build details' }).first().click()
  await page.waitForURL('**/projects#sky-route')
  await page.waitForFunction(() => Math.abs((document.querySelector('#sky-route')?.getBoundingClientRect().top ?? Infinity) - 96) < 5)
  await menu.click()
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Let\'s talk' }).click()
  await page.waitForURL('**/#contact')
  await page.waitForFunction(() => Math.abs((document.querySelector('#contact')?.getBoundingClientRect().top ?? Infinity) - 96) < 5)
  assert.equal(await menu.getAttribute('aria-expanded'), 'false')
  console.log('PASS mobile menu, Escape focus, reduced-motion anchors, project details, cross-page contact')

  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(baseUrl)
  await page.getByRole('heading', { name: 'Vijay Mangal', exact: true }).waitFor()
  await page.keyboard.press('Tab')
  assert.equal(await page.getByRole('link', { name: 'Skip to main content' }).evaluate(el => el === document.activeElement), true)
  await page.keyboard.press('Enter')
  assert.equal(await page.locator('main').evaluate(el => el === document.activeElement), true)
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'About', exact: true }).click()
  await page.waitForFunction(() => document.querySelector('nav[aria-label="Main navigation"] a[aria-current="location"]')?.textContent === 'About')
  console.log('PASS skip link and active section navigation')

  const resumeHref = await page.getByRole('link', { name: 'Download résumé', exact: true }).first().getAttribute('href')
  const resume = await page.request.get(new URL(resumeHref, baseUrl).href)
  assert.equal(resume.ok(), true)
  assert.equal((await resume.body()).subarray(0, 5).toString(), '%PDF-')
  for (const asset of assets) {
    const response = await page.request.get(asset)
    assert.equal(response.ok(), true, `Asset exists: ${asset}`)
    assert.match(response.headers()['content-type'], /image\//, `Image response: ${asset}`)
  }
  assert.deepEqual(errors, [], 'No browser runtime errors')
  console.log('PASS resume download, all project/portrait assets, no runtime errors')
} finally {
  await browser.close()
}
