import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Seo } from '@/components/seo/Seo'
import { projects } from '@/data/projects'
import { fadeUp, staggerContainer } from '@/utils/motion'
import { cn } from '@/utils/cn'
import { publicAsset } from '@/utils/assets'

export default function AllProjects() {
  return (
    <>
      <Seo
        title="All Projects | Vijay Mangal"
        description="Personal UI builds and frontend experiments by Vijay Mangal, with live demos."
        path="/projects"
      />

      <section className="relative pb-24 pt-28 md:pb-32 md:pt-32">
        <Container>
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <SectionHeading
            number="03"
            label="Work"
            headingId="all-projects-heading"
            title="Side projects"
            description="Notes on each build: what I tried, what shipped, and links to the live demos."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="divide-y divide-[var(--color-border)]"
          >
            {projects.map((project, index) => {
              const reversed = index % 2 === 1
              const hasLiveUrl = project.liveUrl !== '#'

              return (
                <motion.article
                  key={project.id}
                  id={project.id}
                  variants={fadeUp}
                  className="grid gap-8 py-12 first:pt-0 last:pb-0 md:grid-cols-12 md:items-start md:gap-10 md:py-16"
                >
                  <div className={cn('md:col-span-7', reversed && 'md:order-2')}>
                    <a
                      href={hasLiveUrl ? project.liveUrl : undefined}
                      target={hasLiveUrl ? '_blank' : undefined}
                      rel={hasLiveUrl ? 'noopener noreferrer' : undefined}
                      className={cn(
                        'surface group relative block overflow-hidden rounded-2xl',
                        !hasLiveUrl && 'pointer-events-none'
                      )}
                      aria-label={hasLiveUrl ? `View ${project.title} live demo` : undefined}
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-[#0b1120]">
                        <img
                          src={publicAsset(project.image)}
                          alt={`${project.title} website preview`}
                          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>

                      {hasLiveUrl && (
                        <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-bg/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                          View live site
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </a>
                  </div>

                  <div className={cn('md:col-span-5', reversed && 'md:order-1')}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs font-medium text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {hasLiveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-accent-soft"
                        >
                          Live demo
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                    <h2 className="text-display mt-4 text-2xl text-white md:text-3xl">
                      {project.title}
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                      {project.overview}
                    </p>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-accent-soft">
                        Highlights
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-muted md:text-base"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <li key={tech}>
                          <span className="inline-flex items-center rounded-full bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-white/90">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {hasLiveUrl && (
                      <div className="mt-8">
                        <Button
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outline"
                          size="sm"
                          className="gap-1.5"
                        >
                          View live project
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </Container>
      </section>
    </>
  )
}
