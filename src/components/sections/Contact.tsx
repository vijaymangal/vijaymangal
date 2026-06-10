import type { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  CheckCircle,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Download,
  ArrowUpRight,
  Clock,
  Sparkles,
} from 'lucide-react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'
import { Magnetic } from '@/components/effects/Magnetic'
import { useContactForm } from '@/hooks/useContactForm'
import { contactChannels, resumeUrl } from '@/data/social'
import type { ContactChannel } from '@/types'
import { cn } from '@/utils/cn'

const channelIcons: Record<ContactChannel['icon'], typeof Mail> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
}

const inputBase =
  'w-full rounded-xl border border-[var(--color-border)] bg-bg/80 px-4 py-3.5 text-sm text-white placeholder:text-muted/40 transition-all duration-300 focus:border-accent/50 focus:bg-bg focus:outline-none focus:ring-2 focus:ring-accent/15'

interface FormFieldProps {
  id: string
  label: string
  error?: string
  className?: string
  children: ReactNode
}

function FormField({ id, label, error, className, children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="mt-1.5 text-xs text-red-400"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Contact() {
  const {
    form,
    errors,
    isSubmitting,
    isSuccess,
    updateField,
    handleSubmit,
    resetSuccess,
  } = useContactForm()

  return (
    <SectionWrapper id="contact" ariaLabelledBy="contact-heading">
      <Container>
        <SectionHeading
          number="06"
          label="Contact"
          title="Let's work together"
          description="Open to full-time roles, contract work, and UI/UX consulting. Share a bit about your project and I'll get back within 48 hours."
        />

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full min-h-0"
          >
            <div className="surface relative w-full overflow-hidden rounded-3xl">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(201,165,92,0.08),transparent_55%)]"
              />

              <div className="relative p-6 md:p-8 lg:p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-accent-soft">
                    <Mail className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Contact details</span>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Reach out directly — I typically respond within 48 hours.
                  </p>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-medium text-emerald-300">Available for new opportunities</span>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  {contactChannels.map((channel, index) => {
                    const Icon = channelIcons[channel.icon]

                    return (
                      <motion.div
                        key={channel.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="min-h-0"
                      >
                        <a
                          href={channel.href}
                          target={channel.external ? '_blank' : undefined}
                          rel={channel.external ? 'noopener noreferrer' : undefined}
                          className="surface-interactive group flex h-full items-center gap-4 rounded-2xl p-4"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-bg/50 text-accent-soft">
                            <Icon className="h-4 w-4" strokeWidth={1.75} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-xs font-medium uppercase tracking-wider text-muted">
                              {channel.label}
                            </span>
                            <span className="mt-0.5 block truncate text-sm font-medium text-white">
                              {channel.display}
                            </span>
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft" />
                        </a>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-[var(--color-border)] pt-6">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Clock className="h-3.5 w-3.5 shrink-0 text-accent-soft" />
                    <span>Response within 48 hours</span>
                  </div>
                  <Magnetic strength={0.15}>
                    <Button href={resumeUrl} download variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Resume
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full min-h-0"
          >
            <div className="surface relative w-full overflow-hidden rounded-3xl">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,165,92,0.08),transparent_55%)]"
              />

              <div className="relative p-6 md:p-8 lg:p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-accent-soft">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Send a message</span>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Fill in the form and I&apos;ll reply to your inbox directly.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10"
                      >
                        <CheckCircle className="h-7 w-7 text-emerald-400" />
                      </motion.div>
                      <h3 className="text-display mt-5 text-2xl text-white">Message sent</h3>
                      <p className="mt-2 max-w-sm text-sm text-muted">
                        Thanks for reaching out. I&apos;ll review your message and respond within 48 hours.
                      </p>
                      <button
                        type="button"
                        onClick={resetSuccess}
                        className="mt-8 text-sm font-semibold text-accent-soft transition-colors hover:text-white"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      noValidate
                    >
                      <FormField id="name" label="Name" error={errors.name}>
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          className={cn(inputBase, errors.name && 'border-red-500/70 focus:border-red-500/70 focus:ring-red-500/15')}
                          placeholder="Your name"
                          autoComplete="name"
                        />
                      </FormField>

                      <FormField id="email" label="Email" error={errors.email}>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          className={cn(inputBase, errors.email && 'border-red-500/70 focus:border-red-500/70 focus:ring-red-500/15')}
                          placeholder="you@email.com"
                          autoComplete="email"
                        />
                      </FormField>

                      <FormField id="message" label="Message" error={errors.message}>
                        <textarea
                          id="message"
                          rows={5}
                          value={form.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          className={cn(
                            inputBase,
                            'resize-none leading-relaxed',
                            errors.message && 'border-red-500/70 focus:border-red-500/70 focus:ring-red-500/15'
                          )}
                          placeholder="Tell me about the role, project timeline, or what you're looking to build..."
                        />
                      </FormField>

                      <div className="border-t border-[var(--color-border)] pt-5">
                        <Magnetic strength={0.12}>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_-8px_rgba(201,165,92,0.45)] transition-all hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                Sending...
                              </>
                            ) : (
                              <>
                                Send message
                                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                              </>
                            )}
                          </button>
                        </Magnetic>
                        <p className="mt-4 text-center text-xs text-muted">
                          Your details are only used to reply to your inquiry.
                        </p>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
