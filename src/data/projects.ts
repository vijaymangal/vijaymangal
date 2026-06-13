import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ecommerce-storefront',
    title: 'E-commerce Storefront',
    description:
      'A premium outdoor gear storefront with product filtering, cart, and responsive product pages.',
    overview:
      'Summit Supply is a full-featured e-commerce experience built for outdoor enthusiasts. The storefront combines immersive product storytelling with practical shopping flows, including search, category filters, wishlists, and a persistent cart.',
    highlights: [
      'Product catalog with filtering, search, and category navigation',
      'Cart and wishlist flows with responsive product detail pages',
      'Dark, premium visual design with hero imagery and trust signals',
      'Mobile-first layout optimized for browsing and checkout intent',
    ],
    image: '/projects/summit-supply.png',
    tech: ['React', 'API Integration', 'Cart Functionality'],
    liveUrl: 'https://summit-supply.vercel.app/',
  },
  {
    id: 'business-website',
    title: 'Modern Business Website',
    description:
      'A sleek website for a fictional business with service pages and contact form.',
    overview:
      'Elevate Digital is a marketing site for a fictional digital agency. It showcases service offerings, social proof, and conversion-focused CTAs through a polished dark interface with animated metrics and a performance dashboard preview.',
    highlights: [
      'Hero section with layered messaging and dual call-to-action paths',
      'Service overview and credibility stats across the homepage',
      'Dashboard-style visual mockup reinforcing product value',
      'Responsive navigation with contact and project inquiry flows',
    ],
    image: '/projects/elevate-digital.png',
    tech: ['React', 'Tailwind', 'Responsive Design'],
    liveUrl: 'https://elevate-digital-red.vercel.app/',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard UI',
    description:
      'A modern dashboard showcasing component architecture and data visualization.',
    overview:
      'InsightFlow AI is a SaaS analytics dashboard concept focused on clarity, hierarchy, and data density. The interface demonstrates charting, KPI cards, authentication UI, and a scalable component system for product teams.',
    highlights: [
      'Dashboard layout with KPI summaries and trend visualizations',
      'Authentication and onboarding UI patterns for SaaS products',
      'Modular component architecture for charts, tables, and filters',
      'Consistent spacing, typography, and state styling across views',
    ],
    image: '/projects/insightflow-ai.png',
    tech: ['Next.js', 'Charts', 'Authentication UI'],
    liveUrl: 'https://insightflow-ai-mu.vercel.app/',
  },
]
