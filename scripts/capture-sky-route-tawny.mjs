import { chromium } from 'playwright'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.resolve(__dirname, '../public/projects/sky-route-tawny.png')

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })

try {
  await page.goto('https://sky-route-tawny.vercel.app/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  })
  await page.waitForTimeout(3000)
  await page.screenshot({ path: outputPath, fullPage: false })
  console.log(`Saved screenshot to ${outputPath}`)
} finally {
  await browser.close()
}
