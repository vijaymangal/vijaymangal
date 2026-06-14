import { Helmet } from 'react-helmet-async'
import { absoluteUrl, siteAsset, siteConfig } from '@/config/site'
import { getStructuredDataGraph } from '@/utils/structuredData'

interface SeoProps {
  title?: string
  description?: string
  path?: string
}

export function Seo({
  title = siteConfig.title,
  description = siteConfig.description,
  path = '/',
}: SeoProps) {
  const canonicalUrl = absoluteUrl(path)
  const socialDescription =
    description === siteConfig.description ? siteConfig.shortDescription : description
  const ogImage = absoluteUrl(siteConfig.ogImagePath)
  const structuredData = JSON.stringify(getStructuredDataGraph(path))
  const sitemapUrl = absoluteUrl('/sitemap.xml')

  return (
    <Helmet>
      <html lang="en-IN" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={siteConfig.keywords.join(', ')} />
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />
      <meta name="format-detection" content="telephone=no" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href={sitemapUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content={String(siteConfig.ogImageWidth)} />
      <meta property="og:image:height" content={String(siteConfig.ogImageHeight)} />
      <meta property="og:image:alt" content={`${siteConfig.name}, ${siteConfig.jobTitle}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${siteConfig.name}, ${siteConfig.jobTitle}`} />

      <meta name="theme-color" content="#111111" />
      <link rel="icon" type="image/svg+xml" href={siteAsset('/favicon.svg')} />
      <link rel="manifest" href={siteAsset('/manifest.webmanifest')} />

      <script type="application/ld+json">{structuredData}</script>
    </Helmet>
  )
}
