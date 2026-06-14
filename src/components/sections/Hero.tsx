import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { SocialIcon } from '@/components/layout/SocialIcon'
import { Magnetic } from '@/components/effects/Magnetic'
import { ParallaxPhoto } from '@/components/effects/ParallaxPhoto'
import { AnimatedCounter } from '@/components/effects/AnimatedCounter'
import { socialLinks, resumeUrl } from '@/data/social'
import { sectionClasses } from '@/utils/sections'
import { VmWatermark } from '@/components/effects/VmWatermark'
import { cn } from '@/utils/cn'
import profilePhoto from '@/assets/profile-photo.JPG'

const stats = [
  { label: 'Years experience', value: 'counter' as const },
  { label: 'Current employer', value: 'Deloitte' },
  { label: 'Based in', value: 'Jaipur' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className={sectionClasses('hero', 'relative min-h-screen overflow-hidden pt-20 md:pt-24')}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(194,65,12,0.12),transparent_65%)]" />
        <VmWatermark className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Container className="relative z-[1] flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-12 text-center md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-3xl flex-col items-center"
        >
          <motion.div variants={item} className="relative mb-8 w-full max-w-[11rem] sm:max-w-[12.5rem]">
            <ParallaxPhoto className="relative w-full">
              <div className="relative aspect-square w-full">
                <div className="absolute -inset-px rounded-full bg-gradient-to-br from-accent/40 to-white/10" />
                <div className="relative m-[2px] aspect-square overflow-hidden rounded-full">
                  <img
                    src={profilePhoto}
                    alt="Portrait of Vijay Mangal, Senior UI/UX Engineer"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                    fetchPriority="high"
                    width={640}
                    height={640}
                  />
                </div>
              </div>
            </ParallaxPhoto>
          </motion.div>

          <motion.div variants={item} className="section-label justify-center">
            <span>Senior UI/UX Engineer</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-name mt-5 text-[clamp(2.75rem,8vw,4.75rem)] leading-[0.95] text-white"
          >
            Vijay Mangal
          </motion.h1>

          <motion.p
            variants={item}
            className="text-display mt-4 max-w-2xl text-balance text-[clamp(1.35rem,3vw,2.25rem)] leading-snug text-white"
          >
            Crafting refined digital experiences for{' '}
            <span className="text-gradient">enterprise products</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            14 years in frontend and UI/UX at{' '}
            <span className="font-medium text-white/90">Deloitte</span> — React, Figma, and
            Lightning Web Components from concept to production.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted"
          >
            <MapPin className="h-4 w-4 text-accent-soft" />
            Jaipur, India
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <Button
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo('projects')
                }}
              >
                View Projects
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Magnetic>
            <Button
              href="#contact"
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('contact')
              }}
            >
              Contact Me
            </Button>
            <a
              href={resumeUrl}
              download="VijayKumarMangal-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-muted transition-colors hover:text-white"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-6">
                <div>
                  <p className="text-display text-lg text-white">
                    {stat.value === 'counter' ? (
                      <AnimatedCounter value={14} suffix="+" />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-muted">
                    {stat.label}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <span aria-hidden className="hidden h-8 w-px bg-white/10 sm:block" />
                )}
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex justify-center gap-2.5">
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.id}
                link={link}
                size="sm"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] hover:border-accent/30 hover:text-accent-soft"
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          onClick={() => scrollTo('about')}
          className={cn(
            'group mt-14 flex flex-col items-center gap-2 pb-4 text-muted transition-colors hover:text-white'
          )}
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.button>
      </Container>
    </section>
  )
}
