import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectArticle } from '@/components/ui/ProjectArticle'
import { Seo } from '@/components/seo/Seo'
import { projects } from '@/data/projects'
import { staggerContainer } from '@/utils/motion'
import { sectionClasses } from '@/utils/sections'

export default function AllProjects() {
  return (
    <>
      <Seo title="Projects | Vijay Mangal" description="Personal UI builds and frontend experiments by Vijay Mangal. Explore travel, commerce, SaaS, and agency concepts with live demos." path="/projects" />
      <section aria-labelledby="all-projects-heading" className={sectionClasses('projectsPage', 'relative overflow-hidden pb-20 pt-28 md:pb-24 md:pt-32')}>
        <Container>
          <Link to="/" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-muted hover:text-foreground">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to home
          </Link>
          <SectionHeading as="h1" label="Project collection" headingId="all-projects-heading" title="Personal projects" description="Independent UI concepts and frontend builds. Each explores a different product experience using sample content and data." />
          <nav aria-label="Jump to a project" className="mb-12 flex flex-wrap gap-2">
            {projects.map(project => <a key={project.id} href={`#${project.id}`} className="inline-flex min-h-11 items-center rounded-full border border-border px-4 py-2 text-sm text-muted hover:border-accent-soft hover:text-foreground">{project.title}</a>)}
          </nav>
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="divide-y divide-border">
            {projects.map((project, index) => <ProjectArticle key={project.id} project={project} index={index} detailed />)}
          </motion.div>
          <div className="mt-16 border-t border-border pt-10">
            <h2 className="text-display text-2xl">Have a project or role in mind?</h2>
            <Link to="/#contact" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-accent-soft hover:text-foreground">Let’s talk <ArrowRight className="h-4 w-4" aria-hidden /></Link>
          </div>
        </Container>
      </section>
    </>
  )
}
