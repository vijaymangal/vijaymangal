import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils/cn'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`
  return (
    <button type="button" onClick={toggleTheme} aria-label={label} title={label}
      className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground', className)}>
      {theme === 'dark' ? <Sun className="h-5 w-5" aria-hidden /> : <Moon className="h-5 w-5" aria-hidden />}
    </button>
  )
}
