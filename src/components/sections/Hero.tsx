import { motion } from 'framer-motion'
import { ArrowRight, Download, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { SocialIcon } from '@/components/layout/SocialIcon'
import { Magnetic } from '@/components/effects/Magnetic'
import { ParallaxPhoto } from '@/components/effects/ParallaxPhoto'
import { AnimatedCounter } from '@/components/effects/AnimatedCounter'
import { socialLinks, resumeUrl } from '@/data/social'
import profilePhoto from '@/assets/profile-photo.JPG'

const stats = [
  { label: 'Years experience', value: 'counter' as const },
  { label: 'Current employer', value: 'Deloitte' },
  { label: 'Based in', value: 'Jaipur' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen overflow-hidden bg-section-hero pt-20 md:pt-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-15%,rgba(201,165,92,0.16),transparent_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-section-about md:h-32" />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-16 md:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-accent-soft">Senior UI/UX Engineer</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-name text-5xl text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              Vijay Mangal
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-lg text-lg text-muted md:text-xl">
              Senior UI/UX Engineer with 14+ years building responsive web applications, leading
              UI/UX for <span className="font-medium text-white">enterprise products at Deloitte</span>{' '}
              with a focus on usability and design quality.
            </motion.p>

            <motion.div variants={item} className="mt-4 flex items-center gap-2 text-base text-muted">
              <MapPin className="h-4 w-4 text-accent-soft" />
              Jaipur, India · UI/UX · Frontend Development
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <Button
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  View Projects
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Magnetic>
              <Magnetic strength={0.18}>
                <Button
                  href="#contact"
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Contact Me
                </Button>
              </Magnetic>
              <Magnetic strength={0.15}>
                <Button href={resumeUrl} variant="ghost" download="VijayKumarMangal-Resume.pdf">
                  <Download className="mr-1.5 h-4 w-4" />
                  Resume
                </Button>
              </Magnetic>
            </motion.div>

            <motion.div variants={item} className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-display text-xl text-white md:text-2xl">
                    {stat.value === 'counter' ? (
                      <AnimatedCounter value={14} suffix="+" />
                    ) : (
                      stat.value
                    )}
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-8 flex gap-4">
              {socialLinks.map((link) => (
                <Magnetic key={link.id} strength={0.35}>
                  <SocialIcon link={link} size="sm" />
                </Magnetic>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex w-full max-w-sm flex-col items-center lg:max-w-md"
          >
            <ParallaxPhoto className="w-full">
              <motion.div
                className="relative w-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute -inset-px rounded-full bg-gradient-to-br from-accent/40 via-transparent to-cyan/30 opacity-60" />
                <div className="surface relative aspect-square w-full overflow-hidden rounded-full p-1">
                  <img
                    src={profilePhoto}
                    alt="Portrait of Vijay Mangal, Senior UI/UX Engineer"
                    className="h-full w-full rounded-full object-cover object-top"
                    loading="eager"
                    fetchPriority="high"
                    width={640}
                    height={640}
                  />
                </div>
              </motion.div>
            </ParallaxPhoto>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
