import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function CursorGlow() {
  const reducedMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 150, damping: 25 })
  const springY = useSpring(y, { stiffness: 150, damping: 25 })

  useEffect(() => {
    if (reducedMotion) return

    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const isWide = window.matchMedia('(min-width: 1024px)').matches
    if (!hasFinePointer || !isWide) return

    setEnabled(true)

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reducedMotion, x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[5] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[80px]"
      style={{
        x: springX,
        y: springY,
        background:
          'radial-gradient(circle, rgba(201, 165, 92, 0.3) 0%, rgba(232, 220, 200, 0.08) 45%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  )
}
