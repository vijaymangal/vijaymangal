import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (hash) {
      let timeoutId: ReturnType<typeof setTimeout>
      let attempt = 0
      const scrollToTarget = () => {
        const element = document.getElementById(hash.slice(1))
        if (element) {
          element.scrollIntoView({ behavior: 'instant', block: 'start' })
        } else if (attempt++ < 100) {
          // Lazy routes may take a moment to mount on a cold visit.
          timeoutId = setTimeout(scrollToTarget, 50)
        }
      }
      scrollToTarget()
      return () => clearTimeout(timeoutId)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
