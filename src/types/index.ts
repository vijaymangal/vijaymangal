export interface NavItem {
  id: string
  label: string
  href: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'instagram' | 'twitter' | 'email'
}

export type ContactChannelIcon = 'email' | 'linkedin' | 'github' | 'instagram'

export interface ContactChannel {
  id: string
  label: string
  display: string
  href: string
  icon: ContactChannelIcon
  external: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  overview: string
  highlights: string[]
  image: string
  tech: string[]
  liveUrl: string
}

export interface Service {
  id: string
  title: string
  description: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar: string
}

export interface TimelineItem {
  id: string
  year: string
  title: string
  description: string
}

export interface Skill {
  id: string
  name: string
  icon: string
}

export interface SkillCategory {
  id: string
  title: string
  description: string
  skills: string[]
}
