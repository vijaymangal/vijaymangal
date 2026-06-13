import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'flight-search',
    title: 'SkyRoute',
    description:
      'Flight search and tracking UI with route cards, destination grids, and saved trips.',
    overview:
      'A travel UI concept for comparing fares and tracking trips. The build covers the hero search form, popular destination cards, frequently searched routes, and separate Search, Track, and Saved flows.',
    highlights: [
      'Round-trip and one-way search with airport, date, and traveler inputs',
      'Popular destinations grid with sample fares by city',
      'Frequently searched routes with typical economy pricing',
      'Track and Saved sections for status checks and saved fares',
    ],
    image: '/projects/sky-route.png',
    tech: ['React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://sky-route-tawny.vercel.app/',
  },
  {
    id: 'ecommerce-storefront',
    title: 'Summit Supply',
    description:
      'Outdoor gear storefront with category browsing, best sellers, and cart flows.',
    overview:
      'A fictional outdoor brand demo focused on photography-led merchandising. The site includes category collections, best sellers, trust signals, testimonials, and a community gallery section.',
    highlights: [
      'Hero with featured product card and brand stats',
      'Shop by Category, Best Sellers, and Why Summit Supply sections',
      'Verified customer testimonials and #SummitSupply community gallery',
      'Newsletter signup and responsive nav with search, wishlist, and cart',
    ],
    image: '/projects/summit-supply.png',
    tech: ['React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://summit-supply.vercel.app/',
  },
  {
    id: 'business-website',
    title: 'Elevate Digital',
    description:
      'Agency marketing site with services, portfolio, testimonials, and contact CTAs.',
    overview:
      'A layout study for a made-up digital agency. The homepage combines a performance dashboard mockup, services grid, featured work cards, client testimonials, and a final consultation CTA.',
    highlights: [
      'Hero with animated stats and performance overview mockup',
      'Services and Why Choose Us sections with icon-led cards',
      'Featured Work portfolio cards for fintech, healthcare, and e-commerce',
      'Client testimonials and responsive Get Started / View Our Work CTAs',
    ],
    image: '/projects/elevate-digital.png',
    tech: ['React', 'Tailwind', 'Vercel'],
    liveUrl: 'https://elevate-digital-red.vercel.app/',
  },
  {
    id: 'saas-dashboard',
    title: 'InsightFlow AI',
    description:
      'B2B analytics landing page with sign-in flow and revenue metrics positioning.',
    overview:
      'A SaaS UI concept for a revenue and customer metrics workspace. The public site focuses on the value proposition, integrations, and a polished sign-in experience with social auth options.',
    highlights: [
      'Landing page for MRR, retention, and pipeline tracking',
      'Stripe and HubSpot sync, weekly digest, and role-based access messaging',
      'Sign-in form with remember-device and Google/GitHub options',
      'Next.js app deployed on Vercel with a protected dashboard route',
    ],
    image: '/projects/insightflow-ai.png',
    tech: ['Next.js', 'Tailwind', 'Vercel'],
    liveUrl: 'https://insightflow-ai-mu.vercel.app/',
  },
]
