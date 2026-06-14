import { ArrowUpRight } from 'lucide-react'
import { socialLinks, contactInfo } from '@/data/social'
import { SocialIcon } from '@/components/layout/SocialIcon'
import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/layout/Logo'
import { SectionPatterns } from '@/components/effects/SectionPatterns'
import { cn } from '@/utils/cn'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={cn('section-dark relative overflow-hidden border-t border-[var(--color-border)]', className)}>
      <SectionPatterns variant="default" />
      <Container className="relative z-[1] py-8 md:py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Logo size="sm" className="text-white" />
            <p className="text-display mt-3 text-xl text-white md:text-2xl">
              Based in Jaipur.
              <span className="text-gradient"> Say hello.</span>
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-accent-soft hover:text-white"
            >
              {contactInfo.email}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex gap-2.5">
              {socialLinks.map((link) => (
                <SocialIcon
                  key={link.id}
                  link={link}
                  size="sm"
                  className="surface-interactive flex h-9 w-9 items-center justify-center rounded-full hover:text-accent-soft"
                />
              ))}
            </div>
            <p className="text-xs text-muted">&copy; {year} Vijay Mangal. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
