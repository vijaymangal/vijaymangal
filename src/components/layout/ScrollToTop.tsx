import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToHashTarget(hash: string, attempt = 0) {
  const id = hash.replace('#', '')
  if (!id) return

  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'auto', block: 'start' })
    return
  }

  if (attempt < 20) {
    window.setTimeout(() => scrollToHashTarget(hash, attempt + 1), 50)
  }
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (hash) {
      scrollToHashTarget(hash)
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
