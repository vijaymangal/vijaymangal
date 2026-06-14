import { chromium } from 'playwright'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.resolve(__dirname, '../public/projects/sky-route-companion.png')
const baseUrl = 'https://sky-route-companion.vercel.app'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })

try {
  await page.goto(`${baseUrl}/`, { waitUntil: 'domcontentloaded', timeout: 60000 })
  await page.waitForURL(/sign-in/, { timeout: 30000 })

  const email = page.getByPlaceholder('you@example.com')
  const password = page.getByPlaceholder('Enter your password')

  await email.waitFor({ state: 'visible', timeout: 30000 })
  await email.fill('admin@mail.com')
  await password.fill('password@1234')
  await page.getByRole('button', { name: 'Sign In' }).click()

  await page.waitForURL(/\/home/, { timeout: 30000 })
  await page.waitForTimeout(3000)

  await page.screenshot({ path: outputPath, fullPage: false })
  console.log(`Saved screenshot to ${outputPath}`)
} finally {
  await browser.close()
}
