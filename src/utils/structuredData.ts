import { siteConfig, absoluteUrl } from '@/config/site'

export function getStructuredDataGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        jobTitle: siteConfig.jobTitle,
        worksFor: {
          '@type': 'Organization',
          name: siteConfig.employer,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Jaipur',
          addressCountry: 'IN',
        },
        sameAs: siteConfig.sameAs,
        image: absoluteUrl(siteConfig.ogImagePath),
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: `${siteConfig.name} Portfolio`,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: 'en-IN',
        author: { '@id': `${siteConfig.url}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteConfig.url}/#profile`,
        name: siteConfig.title,
        url: siteConfig.url,
        description: siteConfig.description,
        isPartOf: { '@id': `${siteConfig.url}/#website` },
        mainEntity: { '@id': `${siteConfig.url}/#person` },
      },
    ],
  }
}
