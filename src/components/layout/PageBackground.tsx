import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function PageBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="glow-accent absolute inset-0"
        style={{ '--glow-x': '20%', '--glow-y': '10%' } as CSSProperties}
        animate={
          reducedMotion
            ? undefined
            : {
                opacity: [0.5, 0.8, 0.5],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'rgba(255, 237, 213, 0.35)' }}
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, -30, 0],
                y: [0, 20, 0],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
        style={{ background: 'rgba(194, 65, 12, 0.12)' }}
        animate={
          reducedMotion
            ? undefined
            : {
                x: [0, 40, 0],
                y: [0, -25, 0],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
