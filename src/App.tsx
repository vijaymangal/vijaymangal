import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { Preloader } from '@/components/layout/Preloader'
import { Seo } from '@/components/seo/Seo'
import { usePreloader } from '@/hooks/usePreloader'

const Home = lazy(() => import('@/pages/Home'))
const AllProjects = lazy(() => import('@/pages/AllProjects'))

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  )
}

export default function App() {
  const isLoading = usePreloader()

  return (
    <>
      <Preloader isLoading={isLoading} />

      <div className={isLoading ? 'invisible' : 'visible'}>
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
      </div>
    </>
  )
}
