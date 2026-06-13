import { contactInfo } from '@/data/social'

const defaultSiteUrl = 'https://vijaymangal.github.io/vijaymangal'

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
  sameAs: [
    contactInfo.linkedin,
    contactInfo.github,
    contactInfo.instagram,
  ],
  ogImagePath: '/og-image.jpg',
} as const

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`
}
