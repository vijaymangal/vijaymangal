import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import { MainLayout } from '@/layouts/MainLayout'
import { Preloader } from '@/components/layout/Preloader'
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

      <Helmet>
        <title>Vijay Mangal | Senior UI/UX Engineer</title>
        <meta
          name="description"
          content="Senior UI/UX Engineer at Deloitte with 14+ years of experience. Leading UI/UX for enterprise products. Based in Jaipur, India."
        />
        <meta property="og:title" content="Vijay Mangal — Senior UI/UX Engineer" />
        <meta
          property="og:description"
          content="14+ years in frontend development and UI/UX design. Deloitte · ReactJS · Figma."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>

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
