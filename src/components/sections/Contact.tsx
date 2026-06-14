import { motion } from 'framer-motion'
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Download,
  ArrowUpRight,
} from 'lucide-react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/effects/Magnetic'
import { contactChannels, resumeUrl } from '@/data/social'
import type { ContactChannel } from '@/types'
import { fadeUp, staggerContainer } from '@/utils/motion'

const channelIcons: Record<ContactChannel['icon'], typeof Mail> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
}

export function Contact() {
  return (
    <SectionWrapper id="contact" ariaLabelledBy="contact-heading">
      <Container>
        <SectionHeading
          number="05"
          label="Contact"
          headingId="contact-heading"
          title="Get in touch"
          description="Open to full-time roles and select contract or consulting work. Email or LinkedIn is best."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="w-full"
        >
          <motion.div variants={fadeUp} className="surface relative w-full overflow-hidden rounded-3xl">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(194, 65, 12,0.08),transparent_55%)]"
            />

            <div className="relative p-6 md:p-8 lg:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-soft" />
                </span>
                <span className="text-xs font-medium text-accent-soft">Open to new roles</span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {contactChannels.map((channel) => {
                  const Icon = channelIcons[channel.icon]

                  return (
                    <a
                      key={channel.id}
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noopener noreferrer' : undefined}
                      className="surface-interactive group flex h-full items-center gap-4 rounded-2xl p-4"
                    >
                      <span className="icon-chip flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] text-accent-soft">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                          {channel.label}
                        </span>
                        <span className="mt-0.5 block truncate text-base font-medium text-white">
                          {channel.display}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
                    </a>
                  )
                })}
              </div>

              <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center">
                <Magnetic strength={0.15}>
                  <Button href={resumeUrl} download variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Resume
                  </Button>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
