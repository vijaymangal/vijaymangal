import { projects } from '@/data/projects'
import { absoluteUrl, siteConfig } from '@/config/site'

function personNode() {
  return {
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
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    sameAs: siteConfig.sameAs,
    image: absoluteUrl(siteConfig.ogImagePath),
    knowsAbout: [
      'UI/UX Design',
      'Frontend Development',
      'React',
      'Figma',
      'Lightning Web Components',
      'Design Systems',
    ],
  }
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: `${siteConfig.name} Portfolio`,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: 'en-IN',
    publisher: { '@id': `${siteConfig.url}/#person` },
    author: { '@id': `${siteConfig.url}/#person` },
  }
}

function homePageNode() {
  return {
    '@type': 'ProfilePage',
    '@id': `${siteConfig.url}/#profile`,
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    mainEntity: { '@id': `${siteConfig.url}/#person` },
    about: { '@id': `${siteConfig.url}/#person` },
  }
}

function projectsPageNode() {
  const pageUrl = absoluteUrl('/projects')

  return [
    {
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#webpage`,
      name: 'Side Projects | Vijay Mangal',
      url: pageUrl,
      description:
        'Personal UI builds and frontend experiments by Vijay Mangal, including live demos for SkyRoute, Summit Supply, Elevate Digital, and InsightFlow AI.',
      isPartOf: { '@id': `${siteConfig.url}/#website` },
      about: { '@id': `${siteConfig.url}/#person` },
      mainEntity: { '@id': `${pageUrl}#itemlist` },
    },
    {
      '@type': 'ItemList',
      '@id': `${pageUrl}#itemlist`,
      name: 'Portfolio projects',
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          url: project.liveUrl !== '#' ? project.liveUrl : pageUrl,
          author: { '@id': `${siteConfig.url}/#person` },
          keywords: project.tech.join(', '),
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteConfig.url,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects',
          item: pageUrl,
        },
      ],
    },
  ]
}

export function getStructuredDataGraph(path = '/') {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const graph: Record<string, unknown>[] = [personNode(), websiteNode()]

  if (normalizedPath === '/projects') {
    graph.push(...projectsPageNode())
  } else {
    graph.push(homePageNode())
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
