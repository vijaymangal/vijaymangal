import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export function useScrollTo() {
  const navigate = useNavigate()
  const scrollTo = useCallback((href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      window.history.replaceState(window.history.state, '', href)
      element.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
        block: 'start',
      })
    } else {
      // Let the route scroll handler retry when a lazy page is still mounting.
      navigate(`/${href}`)
    }
  }, [navigate])

  return scrollTo
}
