export const sectionBackgrounds = {
  hero: 'section-bg-hero',
  about: 'section-bg-about',
  skills: 'section-bg-skills',
  projects: 'section-bg-projects',
  services: 'section-bg-services',
  contact: 'section-bg-contact',
  footer: 'section-bg-footer',
  projectsPage: 'section-bg-projects-page',
} as const

export type SectionBackground = keyof typeof sectionBackgrounds

const sectionIdToBackground: Record<string, SectionBackground> = {
  about: 'about',
  skills: 'skills',
  projects: 'projects',
  services: 'services',
  contact: 'contact',
  testimonials: 'about',
}

export function sectionBackgroundFromId(id: string): string {
  const key = sectionIdToBackground[id] ?? 'about'
  return sectionBackgrounds[key]
}

export function sectionClasses(background: SectionBackground, className?: string) {
  return ['section-tone', sectionBackgrounds[background], className].filter(Boolean).join(' ')
}
