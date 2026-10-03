import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import type { Project } from '@/types'
import { Button } from '@/components/ui/Button'
import { publicAsset } from '@/utils/assets'
import { fadeUp } from '@/utils/motion'
import { cn } from '@/utils/cn'

interface ProjectArticleProps {
  project: Project
  index: number
  detailed?: boolean
}

export function ProjectArticle({ project, index, detailed = false }: ProjectArticleProps) {
  const Heading = detailed ? 'h2' : 'h3'
  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl !== '#')
  const previewUrl = detailed ? (hasLiveUrl ? project.liveUrl : undefined) : `/projects#${project.id}`
  const image = (
    <div className="aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-elevated">
      <img src={publicAsset(project.image)} alt={`${project.title} interface preview`} width={1440} height={900}
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
        loading="lazy" decoding="async" />
    </div>
  )
  return (
    <motion.article id={detailed ? project.id : undefined} aria-labelledby={`${detailed ? 'detail' : 'featured'}-${project.id}`} variants={fadeUp}
      className="grid gap-6 py-10 first:pt-0 last:pb-0 md:grid-cols-12 md:items-center md:gap-10 md:py-14">
      <div className={cn('min-w-0 md:col-span-7', index % 2 === 1 && 'md:order-2')}>
        {detailed ? (
          hasLiveUrl ? <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl" aria-label={`Open ${project.title} live demo in a new tab`}>{image}</a> : image
        ) : <Link to={previewUrl!} className="group block rounded-2xl" aria-label={`Read about ${project.title}`}>{image}</Link>}
      </div>
      <div className={cn('min-w-0 md:col-span-5', index % 2 === 1 && 'md:order-1')}>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-soft">Personal UI concept</p>
        <Heading id={`${detailed ? 'detail' : 'featured'}-${project.id}`} className="text-display mt-3 text-2xl text-foreground md:text-3xl">{project.title}</Heading>
        <p className="mt-4 text-base leading-relaxed text-muted">{detailed ? project.overview : project.description}</p>
        {detailed && <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground">What’s in the build</h3>
          <ul className="mt-3 space-y-2.5">{project.highlights.map(highlight => (
            <li key={highlight} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent-soft" aria-hidden /><span>{highlight}</span>
            </li>
          ))}</ul>
        </div>}
        <ul aria-label="Technology stack" className="mt-5 flex flex-wrap gap-2">{project.tech.map(tech => (
          <li key={tech} className="rounded-full border border-border bg-foreground/[0.04] px-3 py-1 text-xs font-medium text-foreground/90">{tech}</li>
        ))}</ul>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          {!detailed && <Link to={`/projects#${project.id}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-accent-soft">
            View build details <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>}
          {hasLiveUrl && <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant={detailed ? 'outline' : 'ghost'} size="sm" className="gap-1.5" aria-label={`Open ${project.title} live demo in a new tab`}>
            Live demo <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Button>}
        </div>
      </div>
    </motion.article>
  )
}
