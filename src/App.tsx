import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { Preloader } from '@/components/layout/Preloader'
import { Seo } from '@/components/seo/Seo'
import { usePreloader } from '@/hooks/usePreloader'
import { cn } from '@/utils/cn'

const Home = lazy(() => import('@/pages/Home'))
const AllProjects = lazy(() => import('@/pages/AllProjects'))

const revealEase = [0.22, 1, 0.36, 1] as const

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  )
}

export default function App() {
  const { isLoading, fontsReady } = usePreloader()

  return (
    <>
      <Preloader isLoading={isLoading} fontsReady={fontsReady} />

      <motion.div
        initial={false}
        animate={{
          opacity: isLoading ? 0 : 1,
          y: isLoading ? 12 : 0,
        }}
        transition={{
          duration: 0.75,
          delay: isLoading ? 0 : 0.12,
          ease: revealEase,
        }}
        className={cn(isLoading && 'pointer-events-none')}
      >
        <MainLayout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Seo />
                    <Home />
                  </>
                }
              />
              <Route path="/projects" element={<AllProjects />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </motion.div>
    </>
  )
}
