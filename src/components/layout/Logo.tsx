import { cn } from '@/utils/cn'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'text-[1.35rem] leading-none md:text-[1.5rem]',
  md: 'text-[1.65rem] leading-none md:text-[1.85rem]',
  lg: 'text-3xl leading-none md:text-4xl',
}

export function Logo({ className, size = 'sm' }: LogoProps) {
  return (
    <span
      className={cn(
        'font-name inline-block text-white transition-colors duration-300',
        sizes[size],
        className
      )}
    >
      Vijay Mangal
    </span>
  )
}
