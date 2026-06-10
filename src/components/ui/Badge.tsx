import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent-soft',
        className
      )}
    >
      {children}
    </span>
  )
}
