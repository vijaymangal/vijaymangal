import type { ContactChannel, SocialLink } from '@/types'

export const socialLinks: SocialLink[] = [
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:thevijaymangal@gmail.com',
    icon: 'email',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vijaymangal',
    icon: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/vijaymangal',
    icon: 'github',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/vijay.mangal',
    icon: 'instagram',
  },
]

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email',
    display: 'thevijaymangal@gmail.com',
    href: 'mailto:thevijaymangal@gmail.com',
    icon: 'email',
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    display: 'linkedin.com/in/vijaymangal',
    href: 'https://linkedin.com/in/vijaymangal',
    icon: 'linkedin',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    display: 'github.com/vijaymangal',
    href: 'https://github.com/vijaymangal',
    icon: 'github',
    external: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    display: 'instagram.com/vijay.mangal',
    href: 'https://instagram.com/vijay.mangal',
    icon: 'instagram',
    external: true,
  },
]

export const contactInfo = {
  email: 'thevijaymangal@gmail.com',
  phone: '+91-8385884836',
  location: 'Jaipur, India',
  linkedin: 'https://linkedin.com/in/vijaymangal',
  github: 'https://github.com/vijaymangal',
  instagram: 'https://instagram.com/vijay.mangal',
}

export const resumeUrl = '/VijayKumarMangal-Resume.pdf'
