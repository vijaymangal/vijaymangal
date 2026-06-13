import { ArrowUpRight } from 'lucide-react'
import { socialLinks, contactInfo } from '@/data/social'
import { SocialIcon } from '@/components/layout/SocialIcon'
import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/layout/Logo'
import { cn } from '@/utils/cn'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className={cn('border-t border-[var(--color-border)] bg-surface/80 backdrop-blur-sm', className)}>
      <Container className="py-14 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo size="md" />
            <p className="text-display mt-6 text-2xl text-white md:text-3xl">
              Based in Jaipur.
              <span className="text-gradient"> Say hello.</span>
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="mt-4 inline-flex items-center gap-1 text-base font-medium text-accent-soft hover:text-white"
            >
              {contactInfo.email}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-col items-start gap-6 md:items-end">
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <SocialIcon
                  key={link.id}
                  link={link}
                  size="sm"
                  className="surface-interactive flex h-10 w-10 items-center justify-center rounded-full hover:text-accent-soft"
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
