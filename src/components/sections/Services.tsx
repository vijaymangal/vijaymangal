import { motion } from 'framer-motion'
import {
  LayoutTemplate,
  Code2,
  Shapes,
  PenTool,
  UsersRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'
import { services } from '@/data/services'
import { staggerContainer, fadeUp } from '@/utils/motion'
import { cn } from '@/utils/cn'

const serviceIcons: Record<string, LucideIcon> = {
  'ui-ux': LayoutTemplate,
  'react-lwc': Code2,
  'design-systems': Shapes,
  prototyping: PenTool,
  consulting: UsersRound,
}

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-section-services" ariaLabelledBy="services-heading">
      <Container>
        <SectionHeading
          number="04"
          label="Services"
          headingId="services-heading"
          title="How I can help"
          description="Whether you need a full build or targeted frontend expertise, I've got you covered."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-4 md:grid-cols-6"
        >
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id] ?? LayoutTemplate
            const isTopRow = index < 3

            return (
              <motion.article
                key={service.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className={cn(
                  'surface-interactive group flex h-full flex-col rounded-2xl p-6 md:p-7',
                  isTopRow ? 'md:col-span-2' : 'md:col-span-3'
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-bg/50 text-accent-soft transition-colors group-hover:border-accent/30 group-hover:text-white">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-xs text-accent/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white transition-colors group-hover:text-accent-soft">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
