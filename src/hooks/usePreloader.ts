import { useEffect, useState } from 'react'
import { loadBrandFont } from '@/utils/fonts'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const MIN_DURATION_MS = 3000

export function usePreloader() {
  const reducedMotion = useReducedMotion()
  const [isLoading, setIsLoading] = useState(true)
  const [fontsReady, setFontsReady] = useState(false)

  useEffect(() => {
    if (reducedMotion) {
      setFontsReady(true)
      setIsLoading(false)
      return
    }

    let cancelled = false
    const start = Date.now()
    let timeoutId: ReturnType<typeof setTimeout> | undefined
    let fontsDone = false
    let pageDone = document.readyState === 'complete'

    const tryFinish = () => {
      if (cancelled || !fontsDone || !pageDone) return

      const elapsed = Date.now() - start
      const remaining = Math.max(0, MIN_DURATION_MS - elapsed)
      timeoutId = setTimeout(() => {
        if (!cancelled) setIsLoading(false)
      }, remaining)
    }

    loadBrandFont().then((ready) => {
      if (cancelled) return
      setFontsReady(ready)
      fontsDone = true
      tryFinish()
    })

    const onPageLoad = () => {
      pageDone = true
      tryFinish()
    }

    if (pageDone) {
      tryFinish()
    } else {
      window.addEventListener('load', onPageLoad, { once: true })
    }

    return () => {
      cancelled = true
      window.removeEventListener('load', onPageLoad)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [reducedMotion])

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLoading])

  return { isLoading, fontsReady }
}
