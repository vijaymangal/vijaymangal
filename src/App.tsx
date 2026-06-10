import { lazy, Suspense } from 'react'
import { MainLayout } from '@/layouts/MainLayout'
import { Preloader } from '@/components/layout/Preloader'
import { Seo } from '@/components/seo/Seo'
import { usePreloader } from '@/hooks/usePreloader'

const Home = lazy(() => import('@/pages/Home'))

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

      <Seo />

      <div className={isLoading ? 'invisible' : 'visible'}>
        <MainLayout>
          <Suspense fallback={<LoadingFallback />}>
            <Home />
          </Suspense>
        </MainLayout>
      </div>
    </>
  )
}
