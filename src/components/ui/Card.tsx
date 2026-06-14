import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6',
        interactive ? 'surface-interactive' : 'surface',
        className
      )}
    >
      {children}
    </div>
  )
}
