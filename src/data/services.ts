import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Development',
    description:
      'From early wireframes through shipped screens: layout, interaction states, and handoff-ready frontend work.',
  },
  {
    id: 'react-lwc',
    title: 'React & Lightning Web Components',
    description:
      'Day-to-day work in React and Salesforce LWC for enterprise web apps, with attention to responsive layout and maintainable markup.',
  },
  {
    id: 'design-systems',
    title: 'Design Systems & Standards',
    description:
      'Reusable components, shared spacing and type rules, and UI patterns teams can repeat across products.',
  },
  {
    id: 'prototyping',
    title: 'Prototyping & Mockups',
    description:
      'Figma and Adobe mockups translated into working HTML/CSS, with a close match to the approved design.',
  },
  {
    id: 'consulting',
    title: 'Team Guidance & Delivery',
    description:
      'Working with designers, BAs, and engineers on reviews, usability fixes, and keeping UI work on track before release.',
  },
]
