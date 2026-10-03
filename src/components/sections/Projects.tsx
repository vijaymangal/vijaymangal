import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'
import { ProjectArticle } from '@/components/ui/ProjectArticle'
import { projects } from '@/data/projects'
import { staggerContainer } from '@/utils/motion'

const featuredIds = ['sky-route', 'ecommerce-storefront', 'saas-dashboard']
const featuredProjects = projects.filter(project => featuredIds.includes(project.id))

export function Projects() {
  return (
    <SectionWrapper id="projects" ariaLabelledBy="projects-heading">
      <Container>
        <SectionHeading label="Selected work" headingId="projects-heading" title="Ideas brought to life"
          description="Personal projects exploring travel, commerce, and SaaS interfaces. Browse the builds and try the live demos."
          action={<Link to="/projects" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-accent-soft">
            All {projects.length} projects <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>} />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="divide-y divide-border">
          {featuredProjects.map((project, index) => <ProjectArticle key={project.id} project={project} index={index} />)}
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
