import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'fs'

const siteUrl = (process.env.VITE_SITE_URL || 'https://vijaymangal.vercel.app').replace(/\/$/, '')

const sitemapRoutes = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/projects', changefreq: 'monthly', priority: '0.8' },
]

const profilePhotoCandidates = [
  path.resolve(__dirname, 'src/assets/profile-photo.JPG'),
  path.resolve(__dirname, 'src/assets/profile-photo.jpg'),
  path.resolve(__dirname, 'src/assets/profile-photo.jpeg'),
  path.resolve(__dirname, 'src/assets/profile-photo.JPEG'),
]

function copyOgImage(targetDir: string) {
  const source = profilePhotoCandidates.find((candidate) => existsSync(candidate))
  if (!source) return

  mkdirSync(targetDir, { recursive: true })
  copyFileSync(source, path.join(targetDir, 'og-image.jpg'))
}

function writeSeoFiles(targetDir: string) {
  const lastmod = new Date().toISOString().slice(0, 10)

  writeFileSync(
    path.join(targetDir, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  )

  const urlEntries = sitemapRoutes
    .map(
      (route) => `  <url>
    <loc>${siteUrl}${route.path === '/' ? '/' : route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n')

  writeFileSync(
    path.join(targetDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>\n`
  )
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'seo-assets',
      buildStart() {
        copyOgImage(path.resolve(__dirname, 'public'))
      },
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist')
        copyOgImage(distDir)
        writeSeoFiles(distDir)

        const indexPath = path.join(distDir, 'index.html')
        if (existsSync(indexPath)) {
          copyFileSync(indexPath, path.join(distDir, '404.html'))
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      ignored: ['**/*.pdf'],
    },
  },
})
