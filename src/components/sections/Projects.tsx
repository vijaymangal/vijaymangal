import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { TiltCard } from '@/components/effects/TiltCard'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-section-projects" ariaLabelledBy="projects-heading">
      <Container>
        <SectionHeading
          number="03"
          label="Work"
          headingId="projects-heading"
          title="Selected projects"
          description="A snapshot of the kind of products I build, from dashboards to marketing sites."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <TiltCard key={project.id}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="surface-interactive group flex h-full flex-col overflow-hidden rounded-2xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-semibold text-white">{project.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex gap-4 text-sm font-medium">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1 text-accent-soft hover:text-white"
                    >
                      Demo <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-1 text-muted hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </TiltCard>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
