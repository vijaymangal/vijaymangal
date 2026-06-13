import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'React, JavaScript, HTML/CSS, and the styling tools I use on client projects.',
    skills: ['ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'LESS', 'Bootstrap', 'jQuery'],
  },
  {
    id: 'design',
    title: 'Design & UX',
    description: 'Wireframes and mockups in Figma and Adobe, then into production UI.',
    skills: ['Figma', 'Adobe Tools', 'Wireframing', 'Prototyping'],
  },
  {
    id: 'enterprise',
    title: 'Enterprise Platforms',
    description: 'Salesforce Lightning Web Components and large-team delivery workflows.',
    skills: ['SFDC LWC'],
  },
]
