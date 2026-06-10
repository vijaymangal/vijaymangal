import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'
import { fadeUp, scaleIn } from '@/utils/motion'
import { cn } from '@/utils/cn'

type RevealVariant = 'fade-up' | 'scale-in'

const variants: Record<RevealVariant, Variants> = {
  'fade-up': fadeUp,
  'scale-in': scaleIn,
}

interface RevealProps {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
  once?: boolean
}

export function Reveal({
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={variants[variant]}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
