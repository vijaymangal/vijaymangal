import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { projects } from '@/data/projects'
import { fadeUp, staggerContainer } from '@/utils/motion'
import { cn } from '@/utils/cn'
import { publicAsset } from '@/utils/assets'

const viewAllProjectsClassName =
  'inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white/[0.02] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-accent/40 hover:bg-accent/5'

const homeProjects = projects.slice(0, 3)

export function Projects() {
  return (
    <SectionWrapper id="projects" ariaLabelledBy="projects-heading">
      <Container>
        <SectionHeading
          number="03"
          label="Work"
          headingId="projects-heading"
          title="Side projects"
          description="Personal UI builds and layout experiments, deployed so you can click through them."
          action={
            <Link to="/projects" className={viewAllProjectsClassName}>
              View all projects
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          }
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="divide-y divide-[var(--color-border)]"
        >
          {homeProjects.map((project, index) => {
            const reversed = index % 2 === 1
            const hasLiveUrl = project.liveUrl !== '#'

            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                className="grid gap-8 py-12 first:pt-0 last:pb-0 md:grid-cols-12 md:items-center md:gap-10 md:py-14"
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

                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

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

                  <h3 className="text-display mt-4 text-2xl text-white md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
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
                        View project
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  )}
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex justify-center md:mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-base font-semibold text-white shadow-[0_0_24px_-4px_rgba(201,165,92,0.45)] transition-all duration-300 hover:bg-accent-soft"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
