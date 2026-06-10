import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'outline' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-soft shadow-[0_0_24px_-4px_rgba(201,165,92,0.45)]',
  outline:
    'border border-[var(--color-border)] bg-white/[0.02] text-white hover:border-accent/40 hover:bg-accent/5',
  ghost: 'text-muted hover:text-white',
}

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: 'sm' | 'md'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300',
        size === 'sm' ? 'px-4 py-2 text-sm' : 'px-5 py-2.5 text-base',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
