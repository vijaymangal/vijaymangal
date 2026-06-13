import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  number: string
  label: string
  title: string
  headingId?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  action?: ReactNode
}

export function SectionHeading({
  number,
  label,
  title,
  headingId,
  description,
  align = 'left',
  className,
  action,
}: SectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        className
      )}
    >
      <div
        className={cn(
          'flex flex-col gap-6',
          action ? 'md:flex-row md:items-end md:justify-between' : undefined,
          align === 'center' && action ? 'md:flex-col md:items-center' : undefined
        )}
      >
        <div className={cn(align === 'center' && 'w-full')}>
          <div className={cn('flex items-center gap-3', align === 'center' && 'justify-center')}>
            <span className="font-mono text-xs font-medium text-accent">{number}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-soft">
              {label}
            </span>
          </div>
          <h2
            id={headingId}
            className="text-display mt-4 text-3xl text-white md:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-muted md:text-xl">{description}</p>
          )}
        </div>

        {action}
      </div>
    </motion.header>
  )
}
