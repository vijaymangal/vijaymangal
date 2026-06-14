import type { ReactNode } from 'react'
import { SectionPatterns, sectionPatternVariant } from '@/components/effects/SectionPatterns'
import { cn } from '@/utils/cn'

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  ariaLabelledBy?: string
}

export function SectionWrapper({
  id,
  children,
  className,
  ariaLabelledBy,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn('section-dark relative overflow-hidden py-24 md:py-32', className)}
    >
      <SectionPatterns variant={sectionPatternVariant(id)} />
      <div className="relative z-[1]">{children}</div>
    </section>
  )
}
