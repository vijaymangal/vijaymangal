import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  number: string
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  number,
  label,
  title,
  description,
  align = 'left',
  className,
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
      <div className={cn('flex items-center gap-3', align === 'center' && 'justify-center')}>
        <span className="font-mono text-xs font-medium text-accent">{number}</span>
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-soft">
          {label}
        </span>
      </div>
      <h2 className="text-display mt-4 text-3xl text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted md:text-lg">{description}</p>
      )}
    </motion.header>
  )
}
