import { Link } from 'react-router-dom'
import { Container } from '@/components/layout/Container'
import { Seo } from '@/components/seo/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | Vijay Mangal" noIndex />
      <section className="section-tone section-bg-hero flex min-h-[75svh] items-center py-32">
        <Container>
          <p className="section-label">404</p>
          <h1 className="text-display mt-4 text-4xl md:text-6xl">Page not found</h1>
          <p className="mt-5 text-lg text-muted">This link may have changed. Explore my work or return to the homepage.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/" className="rounded-full bg-accent px-5 py-3 font-semibold text-white hover:bg-accent-hover">Back to home</Link>
            <Link to="/projects" className="rounded-full border border-border px-5 py-3 font-semibold hover:border-accent-soft">Explore projects</Link>
          </div>
        </Container>
      </section>
    </>
  )
}
