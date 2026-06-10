import { useCallback } from 'react'

export function useScrollTo() {
  const scrollTo = useCallback((href: string) => {
    const id = href.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return scrollTo
}
