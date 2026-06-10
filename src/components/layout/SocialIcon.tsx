import { Github, Linkedin, Instagram, Twitter, Mail } from 'lucide-react'
import type { SocialLink } from '@/types'
import { cn } from '@/utils/cn'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  email: Mail,
}

interface SocialIconProps {
  link: SocialLink
  size?: 'sm' | 'md'
  className?: string
}

export function SocialIcon({ link, size = 'md', className }: SocialIconProps) {
  const Icon = iconMap[link.icon]
  const sizeClass = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'

  return (
    <a
      href={link.href}
      target={link.icon === 'email' ? undefined : '_blank'}
      rel={link.icon === 'email' ? undefined : 'noopener noreferrer'}
      aria-label={link.label}
      className={cn(
        'text-muted transition-colors duration-300 hover:text-accent',
        className
      )}
    >
      <Icon className={sizeClass} />
    </a>
  )
}
