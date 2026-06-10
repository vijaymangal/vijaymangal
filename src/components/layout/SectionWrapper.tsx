import type { ReactNode } from 'react'
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
      className={cn('relative py-24 md:py-32', className)}
    >
      {children}
    </section>
  )
}
