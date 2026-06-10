import { useEffect, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const MIN_DURATION_MS = 1400

export function usePreloader() {
  const reducedMotion = useReducedMotion()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (reducedMotion) {
      setIsLoading(false)
      return
    }

    const start = Date.now()
    let timeoutId: ReturnType<typeof setTimeout>

    const finish = () => {
      const elapsed = Date.now() - start
      const remaining = Math.max(0, MIN_DURATION_MS - elapsed)
      timeoutId = setTimeout(() => setIsLoading(false), remaining)
    }

    if (document.readyState === 'complete') {
      finish()
    } else {
      window.addEventListener('load', finish, { once: true })
    }

    return () => {
      window.removeEventListener('load', finish)
      clearTimeout(timeoutId)
    }
  }, [reducedMotion])

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading])

  return isLoading
}
