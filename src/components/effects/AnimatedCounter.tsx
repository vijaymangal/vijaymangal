import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useMotionValue, useMotionValueEvent } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils/cn'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
  duration?: number
}

export function AnimatedCounter({
  value,
  suffix = '',
  className,
  duration = 1.4,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const reducedMotion = useReducedMotion()
  const motionValue = useMotionValue(reducedMotion ? value : 0)
  const [display, setDisplay] = useState(reducedMotion ? value : 0)

  useMotionValueEvent(motionValue, 'change', (latest) => {
    setDisplay(Math.round(latest))
  })

  useEffect(() => {
    if (reducedMotion || !isInView) return

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    })

    return () => controls.stop()
  }, [isInView, value, motionValue, duration, reducedMotion])

  return (
    <span ref={ref} className={cn(className)}>
      {display}
      {suffix}
    </span>
  )
}
