import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'business-website',
    title: 'Modern Business Website',
    description:
      'A sleek website for a fictional business with service pages and contact form.',
    image: '/projects/elevate-digital.png',
    tech: ['React', 'Tailwind', 'Responsive Design'],
    liveUrl: 'https://elevate-digital-red.vercel.app/',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard UI',
    description:
      'A modern dashboard showcasing component architecture and data visualization.',
    image: '/projects/insightflow-ai.png',
    tech: ['Next.js', 'Charts', 'Authentication UI'],
    liveUrl: 'https://insightflow-ai-mu.vercel.app/',
  },
  {
    id: 'ecommerce-storefront',
    title: 'E-commerce Storefront',
    description:
      'A responsive shopping interface with filtering and product pages.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tech: ['React', 'API Integration', 'Cart Functionality'],
    liveUrl: '#',
  },
]
