import { useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'
const storageKey = 'portfolio-theme'
const themeEvent = 'portfolio-theme-change'

function preferredTheme(): Theme {
  try {
    const saved = localStorage.getItem(storageKey)
    if (saved === 'light' || saved === 'dark') return saved
  } catch { /* Theme switching also works when browser storage is unavailable. */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  window.dispatchEvent(new Event(themeEvent))
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const onSystemChange = () => {
    const nextTheme = preferredTheme()
    if (nextTheme !== getSnapshot()) applyTheme(nextTheme)
  }
  const onStorage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) onSystemChange()
  }
  window.addEventListener(themeEvent, onChange)
  window.addEventListener('storage', onStorage)
  media.addEventListener('change', onSystemChange)
  return () => {
    window.removeEventListener(themeEvent, onChange)
    window.removeEventListener('storage', onStorage)
    media.removeEventListener('change', onSystemChange)
  }
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => 'dark' as Theme)
  const toggleTheme = () => {
    const nextTheme = getSnapshot() === 'dark' ? 'light' : 'dark'
    try { localStorage.setItem(storageKey, nextTheme) } catch { /* Keep the in-memory choice. */ }
    applyTheme(nextTheme)
  }
  return { theme, toggleTheme }
}
