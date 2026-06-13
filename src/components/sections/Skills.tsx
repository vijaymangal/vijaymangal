import { motion } from 'framer-motion'
import { Code2, Palette, Cloud } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'
import { skillCategories } from '@/data/skills'
import { fadeUp, staggerContainer } from '@/utils/motion'

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Code2,
  design: Palette,
  enterprise: Cloud,
}

export function Skills() {
  return (
    <SectionWrapper id="skills" ariaLabelledBy="skills-heading">
      <Container>
        <SectionHeading
          number="02"
          label="Skills"
          headingId="skills-heading"
          title="Tools I work with"
          description="React, LWC, Figma, and the stack I use most weeks at work."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="divide-y divide-[var(--color-border)]"
        >
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.id] ?? Code2

            return (
              <motion.section
                key={category.id}
                variants={fadeUp}
                className="grid gap-5 py-7 first:pt-0 last:pb-0 md:grid-cols-12 md:items-start md:gap-8 md:py-8"
              >
                <div className="flex gap-3 md:col-span-4 lg:col-span-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-bg/50 text-accent-soft">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold text-white md:text-base">
                        {category.title}
                      </h3>
                      <span className="shrink-0 font-mono text-xs text-accent/40">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted md:text-base">
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="flex flex-wrap gap-2 md:col-span-8 md:content-start lg:col-span-9">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <span className="surface-interactive inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium text-white">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
