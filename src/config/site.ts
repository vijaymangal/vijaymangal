import { contactInfo } from '@/data/social'

export const defaultSiteUrl = 'https://vijaymangal.vercel.app'

export const siteConfig = {
  name: 'Vijay Mangal',
  title: 'Vijay Mangal | Senior UI/UX Engineer',
  description:
    'Senior UI/UX Engineer at Deloitte with 14+ years of experience in frontend development, UI/UX design, and responsive web applications. Based in Jaipur, India.',
  shortDescription:
    'Senior UI/UX Engineer at Deloitte. 14 years in React, Figma, and Lightning Web Components.',
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || defaultSiteUrl,
  locale: 'en_IN',
  email: contactInfo.email,
  phone: contactInfo.phone,
  location: contactInfo.location,
  jobTitle: 'Senior UI/UX Engineer',
  employer: 'Deloitte',
  keywords: [
    'Vijay Mangal',
    'Senior UI/UX Engineer',
    'Frontend Developer',
    'UI Developer',
    'UX Designer',
    'React Developer',
    'Deloitte',
    'Jaipur',
    'India',
    'Figma',
    'Lightning Web Components',
    'Portfolio',
  ],
  sameAs: [contactInfo.linkedin, contactInfo.github, contactInfo.instagram],
  ogImagePath: '/og-image.jpg',
  ogImageWidth: 640,
  ogImageHeight: 640,
} as const

export const sitemapRoutes = [
  { path: '/', changefreq: 'monthly', priority: '1.0' },
  { path: '/projects', changefreq: 'monthly', priority: '0.8' },
] as const

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function siteAsset(path: string) {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedPath = path.replace(/^\//, '')
  return `${base}${normalizedPath}`
}
