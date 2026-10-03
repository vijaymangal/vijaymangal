import { chromium } from 'playwright'
import assert from 'node:assert/strict'
import { existsSync, mkdirSync } from 'node:fs'

mkdirSync('artifacts', { recursive: true })
const baseUrl = process.env.PORTFOLIO_URL || 'http://127.0.0.1:5173'
const browser = await chromium.launch({ headless: true, ...(existsSync(chromium.executablePath()) ? {} : { channel: 'chrome' }) })
const errors = []

try {
  for (const width of [390, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: 'dark', reducedMotion: 'reduce' })
    page.on('pageerror', error => errors.push(error.message))
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' })
    await page.locator('h1').waitFor()
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark')
    await page.getByRole('button', { name: 'Switch to light theme' }).filter({ visible: true }).click()
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'light')
    assert.equal(await page.evaluate(() => localStorage.getItem('portfolio-theme')), 'light')
    await page.reload({ waitUntil: 'domcontentloaded' })
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'light', 'Saved theme applied at startup')
    await page.locator('h1').waitFor()
    assert.equal(await page.locator('h1').evaluate(el => getComputedStyle(el).color), 'rgb(28, 25, 23)')
    assert.equal(await page.locator('#hero').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(245, 243, 239)')
    assert.equal(await page.locator('a.bg-accent').first().evaluate(el => getComputedStyle(el).color), 'rgb(255, 255, 255)')
    assert.equal(await page.locator('meta[name="theme-color"]').getAttribute('content'), '#f5f3ef')
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
    await page.waitForTimeout(900)
    await page.screenshot({ path: `artifacts/theme-light-${width}.png` })

    await page.goto(`${baseUrl}/projects`, { waitUntil: 'domcontentloaded' })
    await page.locator('h1').waitFor()
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'light')
    assert.equal(await page.locator('article h2').first().evaluate(el => getComputedStyle(el).color), 'rgb(28, 25, 23)')
    await page.waitForTimeout(900)
    await page.screenshot({ path: `artifacts/theme-light-projects-${width}.png` })
    await page.getByRole('button', { name: 'Switch to dark theme' }).filter({ visible: true }).click()
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark')
    assert.equal(await page.locator('article h2').first().evaluate(el => getComputedStyle(el).color), 'rgb(250, 250, 250)')
    await page.reload({ waitUntil: 'domcontentloaded' })
    assert.equal(await page.locator('html').getAttribute('data-theme'), 'dark')
    await page.locator('h1').waitFor()
    assert.equal(await page.locator('meta[name="theme-color"]').getAttribute('content'), '#111111')
    await page.waitForTimeout(900)
    await page.screenshot({ path: `artifacts/theme-dark-projects-${width}.png` })
    console.log(`PASS light/dark toggle, colors, saved preference, routes: ${width}px`)
    await page.close()
  }

  const systemPage = await browser.newPage({ colorScheme: 'dark' })
  await systemPage.goto(baseUrl, { waitUntil: 'domcontentloaded' })
  await systemPage.locator('h1').waitFor()
  await systemPage.emulateMedia({ colorScheme: 'light' })
  await systemPage.waitForFunction(() => document.documentElement.dataset.theme === 'light')
  await systemPage.emulateMedia({ colorScheme: 'dark' })
  await systemPage.waitForFunction(() => document.documentElement.dataset.theme === 'dark')
  console.log('PASS system theme changes before an explicit choice')

  const blockedStoragePage = await browser.newPage({ colorScheme: 'dark' })
  blockedStoragePage.on('pageerror', error => errors.push(error.message))
  await blockedStoragePage.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new Error('Storage disabled') }
    Storage.prototype.setItem = () => { throw new Error('Storage disabled') }
  })
  await blockedStoragePage.goto(baseUrl, { waitUntil: 'domcontentloaded' })
  await blockedStoragePage.locator('h1').waitFor()
  await blockedStoragePage.getByRole('button', { name: 'Switch to light theme' }).filter({ visible: true }).click()
  assert.equal(await blockedStoragePage.locator('html').getAttribute('data-theme'), 'light')
  assert.deepEqual(errors, [])
  console.log('PASS switching with unavailable browser storage; no runtime errors')
} finally {
  await browser.close()
}
