import { Helmet } from 'react-helmet-async'
import { siteConfig, absoluteUrl } from '@/config/site'
import { getStructuredDataGraph } from '@/utils/structuredData'

export function Seo() {
  const ogImage = absoluteUrl(siteConfig.ogImagePath)
  const structuredData = JSON.stringify(getStructuredDataGraph())

  return (
    <Helmet>
      <html lang="en" />

      <title>{siteConfig.title}</title>
      <meta name="description" content={siteConfig.description} />
      <meta name="keywords" content={siteConfig.keywords.join(', ')} />
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={siteConfig.url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.shortDescription} />
      <meta property="og:url" content={siteConfig.url} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`${siteConfig.name}, ${siteConfig.jobTitle}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteConfig.title} />
      <meta name="twitter:description" content={siteConfig.shortDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${siteConfig.name}, ${siteConfig.jobTitle}`} />

      <meta name="theme-color" content="#050506" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.webmanifest" />

      <script type="application/ld+json">{structuredData}</script>
    </Helmet>
  )
}
