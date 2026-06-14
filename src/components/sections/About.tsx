import { motion } from 'framer-motion'
import { Briefcase, Palette, Users, Award, Cloud, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { timeline } from '@/data/timeline'
import { certificationGroups, awards } from '@/data/certifications'
import { fadeUp, staggerContainer } from '@/utils/motion'

const certificationIcons: Record<string, LucideIcon> = {
  ux: Palette,
  scrum: Users,
  salesforce: Cloud,
}

const highlights = [
  {
    icon: Briefcase,
    title: 'Enterprise work',
    text: 'UI/UX for Deloitte client products, mostly React and Lightning Web Components on long-running programs.',
  },
  {
    icon: Palette,
    title: 'Design to code',
    text: 'I take Figma files through to working UI: states, spacing, and components that match what design signed off.',
  },
  {
    icon: Users,
    title: 'Team collaboration',
    text: 'Regular work with designers, BAs, and QA on reviews, fixes, and keeping UI ready for release.',
  },
]

export function About() {
  return (
    <SectionWrapper
      id="about"
      ariaLabelledBy="about-heading"
    >
      <Container>
        <SectionHeading
          label="About"
          headingId="about-heading"
          title="About me"
          description="14 years in frontend and UI/UX, currently at Deloitte in Jaipur."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="surface rounded-2xl p-6"
            >
              <item.icon className="h-5 w-5 text-accent-soft" strokeWidth={1.5} />
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-muted"
          >
            <p>
              I&apos;m a <span className="font-medium text-white">Senior UI/UX Engineer</span> at
              Deloitte, with a strong background in HTML5, CSS3, JavaScript, ReactJS,
              SFDC Lightning Web Components, and design tools including Figma and Adobe.
            </p>
            <p>
              I manage design handoff through implementation: prototypes, component builds, and
              fixes before release, with an eye on usability and consistent UI across screens.
            </p>
            <p>
              I hold a <span className="font-medium text-white">B.Sc. in Biotechnology</span> from
              the University of Rajasthan. Certifications in UX, Scrum, and Salesforce are listed
              below.
            </p>

            <div className="pt-4">
              <div className="mb-3 flex items-center gap-2">
                <Trophy className="h-4 w-4 text-accent-soft" strokeWidth={1.75} />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-soft">
                  Awards
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {awards.map((award) => (
                  <Badge key={award}>{award}</Badge>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-10 border-t border-[var(--color-border)] pt-10 lg:mt-0 lg:border-t-0 lg:pt-0">
            <div className="mb-6 flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-accent-soft" strokeWidth={1.75} />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-soft">
                Experience
              </h3>
            </div>

            <div className="space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex gap-5 border-b border-[var(--color-border)] py-5 first:pt-0 last:border-0"
              >
                <span className="w-12 shrink-0 font-mono text-sm text-accent">{item.year}</span>
                <div>
                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base text-muted">{item.description}</p>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-16"
        >
          <div className="mb-6 flex items-center gap-2">
            <Award className="h-4 w-4 text-accent-soft" strokeWidth={1.75} />
            <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-soft">
              Certifications
            </h3>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="divide-y divide-[var(--color-border)]"
          >
            {certificationGroups.map((group) => {
              const Icon = certificationIcons[group.id] ?? Award

              return (
                <motion.section
                  key={group.id}
                  variants={fadeUp}
                  className="grid gap-5 py-7 first:pt-0 last:pb-0 md:grid-cols-12 md:items-start md:gap-8 md:py-8"
                >
                  <div className="flex gap-3 md:col-span-4 lg:col-span-3">
                    <span className="icon-chip flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] text-accent-soft">
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-white md:text-base">
                          {group.title}
                        </h4>
                      <p className="mt-1 text-sm text-muted">
                        {group.certifications.length} certification
                        {group.certifications.length === 1 ? '' : 's'}
                      </p>
                    </div>
                  </div>

                  <ul className="flex flex-wrap gap-2 md:col-span-8 md:content-start lg:col-span-9">
                    {group.certifications.map((cert) => (
                      <li key={cert}>
                        <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/[0.06] px-3.5 py-1.5 text-sm font-medium leading-snug text-white/90">
                          {cert}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
