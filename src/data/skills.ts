import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Building responsive, performant interfaces with modern JavaScript and CSS.',
    skills: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'LESS', 'Bootstrap', 'jQuery'],
  },
  {
    id: 'design',
    title: 'Design & UX',
    description: 'User-centered design from wireframes and mockups through polished UI delivery.',
    skills: ['Figma', 'Adobe Tools', 'User-Centered Design'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Platforms',
    description: 'Client-ready experiences on Salesforce and enterprise web applications.',
    skills: ['SFDC LWC'],
  },
]
