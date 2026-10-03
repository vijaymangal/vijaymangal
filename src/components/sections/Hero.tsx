import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Download, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Magnetic } from '@/components/effects/Magnetic'
import { ParallaxPhoto } from '@/components/effects/ParallaxPhoto'
import { resumeUrl } from '@/data/social'
import { sectionClasses } from '@/utils/sections'
import { VmWatermark } from '@/components/effects/VmWatermark'
import { cn } from '@/utils/cn'
import { useScrollTo } from '@/hooks/useScrollTo'
import profilePhoto from '@/assets/profile-photo.JPG'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  const scrollTo = useScrollTo()
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className={sectionClasses('hero', 'relative overflow-hidden pt-20 md:pt-24')}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(194,65,12,0.12),transparent_65%)]" />
        <VmWatermark className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Container className="relative z-[1] flex flex-col items-center justify-center py-10 text-center md:py-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-3xl flex-col items-center"
        >
          <motion.div variants={item} className="relative mb-6 w-full max-w-[8rem] sm:max-w-[9rem]">
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
            className="font-name mt-5 text-[clamp(2.75rem,7vw,4.5rem)] text-foreground"
          >
            Vijay Mangal
          </motion.h1>

          <motion.p
            variants={item}
            className="text-display mt-4 max-w-2xl text-balance text-[clamp(1.35rem,3vw,2.25rem)] leading-snug text-foreground"
          >
            Designing and building intuitive interfaces for{' '}
            <span className="text-gradient">enterprise products</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            14+ years in frontend development and UI/UX. Currently at{' '}
            <span className="font-medium text-foreground/90">Deloitte</span>, building with React,
            Figma, and Salesforce LWC.
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
                  scrollTo('#projects')
                }}
              >
                Explore my work
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Magnetic>
            <Button
              href="#contact"
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#contact')
              }}
            >
              Get in touch
            </Button>
            <a
              href={resumeUrl}
              download="VijayKumarMangal-Resume.pdf"
              className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Download résumé
            </a>
          </motion.div>

        </motion.div>

        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          onClick={() => scrollTo('#projects')}
          className={cn(
            'group mt-8 flex min-h-11 flex-col items-center gap-2 pb-2 text-muted transition-colors hover:text-foreground'
          )}
          aria-label="Scroll to selected projects"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em]">Selected work</span>
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </Container>
    </section>
  )
}
