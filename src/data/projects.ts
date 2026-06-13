import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ecommerce-storefront',
    title: 'Summit Supply',
    description:
      'Practice build: outdoor gear shop with filters, cart, and product pages.',
    overview:
      'A personal UI exercise built around a fictional outdoor brand. I focused on catalog browsing, filter states, and keeping the cart usable on smaller screens.',
    highlights: [
      'Category filters and search across the product list',
      'Cart and product detail flows in React',
      'Dark layout with photography-led product pages',
      'Built and deployed as a standalone demo',
    ],
    image: '/projects/summit-supply.png',
    tech: ['React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://summit-supply.vercel.app/',
  },
  {
    id: 'business-website',
    title: 'Elevate Digital',
    description:
      'Practice build: agency-style marketing site with services and contact sections.',
    overview:
      'A layout study for a made-up digital agency. The goal was a clear services story, readable type hierarchy, and a homepage that still works on mobile.',
    highlights: [
      'Homepage with services, stats, and contact paths',
      'Dashboard mockup block to break up long scroll sections',
      'Responsive nav and section spacing',
      'Deployed live for review',
    ],
    image: '/projects/elevate-digital.png',
    tech: ['React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://elevate-digital-red.vercel.app/',
  },
  {
    id: 'saas-dashboard',
    title: 'InsightFlow AI',
    description:
      'Practice build: analytics dashboard with charts and sign-in screens.',
    overview:
      'A UI concept for a SaaS analytics tool. I used it to test chart placement, KPI rows, and how dense a dashboard can get before it feels cluttered.',
    highlights: [
      'KPI row and chart layout on a single dashboard view',
      'Sign-in and onboarding screen patterns',
      'Reusable card and table components',
      'Next.js app deployed for demo',
    ],
    image: '/projects/insightflow-ai.png',
    tech: ['Next.js', 'Charts', 'Tailwind'],
    liveUrl: 'https://insightflow-ai-mu.vercel.app/',
  },
]
