import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'fs'

const siteUrl = (process.env.VITE_SITE_URL || 'https://vijaymangal.github.io/vijaymangal').replace(
  /\/$/,
  ''
)

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
  writeFileSync(
    path.join(targetDir, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  )

  writeFileSync(
    path.join(targetDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>\n`
  )
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'seo-assets',
      buildStart() {
        copyOgImage(path.resolve(__dirname, 'public'))
      },
      closeBundle() {
        copyOgImage(path.resolve(__dirname, 'dist'))
        writeSeoFiles(path.resolve(__dirname, 'dist'))
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
