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
  image: string
  tech: string[]
  liveUrl: string
  githubUrl: string
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

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}
