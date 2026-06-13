import type { ReactNode } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PageBackground } from '@/components/layout/PageBackground'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { CursorGlow } from '@/components/effects/CursorGlow'
import { ScrollToTop } from '@/components/layout/ScrollToTop'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <ScrollToTop />
      <PageBackground />
      <ScrollProgress />
      <CursorGlow />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 min-h-full bg-grid opacity-70"
        />
        <div className="relative">{children}</div>
      </main>
      <Footer className="relative z-10" />
    </>
  )
}
