import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'
import { Seo } from '@/components/seo/Seo'

const Home = lazy(() => import('@/pages/Home'))
const AllProjects = lazy(() => import('@/pages/AllProjects'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function LoadingFallback() {
  return (
    <div role="status" className="flex min-h-screen items-center justify-center bg-bg">
      <span className="text-muted">Loading page…</span>
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<><Seo /><Home /></>} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </MotionConfig>
  )
}
