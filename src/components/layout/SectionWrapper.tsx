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
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(201,165,92,0.04),transparent_70%)]"
      />
      <div className="relative">{children}</div>
    </section>
  )
}
