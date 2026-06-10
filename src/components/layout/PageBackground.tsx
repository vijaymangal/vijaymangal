import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function PageBackground() {
  const reducedMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <motion.div
        className="glow-accent absolute inset-0"
        style={{ '--glow-x': '20%', '--glow-y': '10%' } as CSSProperties}
        animate={
          reducedMotion
            ? undefined
            : {
                opacity: [0.7, 1, 0.7],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'rgba(232, 220, 200, 0.08)' }}
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
        className="absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'rgba(201, 165, 92, 0.12)' }}
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
