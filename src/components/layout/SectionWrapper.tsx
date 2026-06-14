import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { sectionBackgroundFromId } from '@/utils/sections'

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
      className={cn(
        'section-tone relative overflow-hidden py-20 md:py-24',
        sectionBackgroundFromId(id),
        className
      )}
    >
      {children}
    </section>
  )
}
