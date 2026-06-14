import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/layout/Logo'
import { VmWatermark } from '@/components/effects/VmWatermark'
import { cn } from '@/utils/cn'

interface PreloaderProps {
  isLoading: boolean
  fontsReady: boolean
}

const exitEase = [0.22, 1, 0.36, 1] as const

export function Preloader({ isLoading, fontsReady }: PreloaderProps) {
  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: exitEase }}
          className="section-bg-hero fixed inset-0 z-[100] flex flex-col items-center justify-center"
          aria-hidden={!isLoading}
          aria-busy={isLoading}
          aria-live="polite"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(194,65,12,0.14),transparent_65%)]"
          />
          <VmWatermark
            className={cn(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500',
              fontsReady ? 'opacity-100' : 'opacity-0'
            )}
          />

          <div className="relative z-[1] flex flex-col items-center px-6 text-center">
            <div className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
              <svg
                aria-hidden
                className="absolute inset-0 h-full w-full -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1.5"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="url(#preloader-ring)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="289"
                  initial={{ strokeDashoffset: 289 }}
                  animate={{ strokeDashoffset: 72, rotate: 360 }}
                  transition={{
                    strokeDashoffset: {
                      duration: 1.35,
                      ease: exitEase,
                    },
                    rotate: {
                      duration: 2.4,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                  style={{ transformOrigin: '50% 50%' }}
                />
                <defs>
                  <linearGradient id="preloader-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c2410c" />
                    <stop offset="100%" stopColor="#ea580c" />
                  </linearGradient>
                </defs>
              </svg>

              {!fontsReady && <span className="sr-only">Loading brand assets</span>}
            </div>

            <motion.div
              initial={false}
              animate={{ opacity: fontsReady ? 1 : 0, y: fontsReady ? 0 : 10 }}
              transition={{ duration: 0.5, ease: exitEase }}
              className={cn('mt-6', !fontsReady && 'pointer-events-none')}
              aria-hidden={!fontsReady}
            >
              <Logo size="lg" className="text-white" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45, ease: exitEase }}
              className="section-label mt-8 justify-center"
            >
              Senior UI/UX Engineer
            </motion.p>

            <div className="mt-10 w-36 sm:w-44">
              <div className="h-px overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full origin-left bg-gradient-to-r from-accent to-accent-soft"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.35, ease: exitEase }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mt-3 text-[10px] font-medium uppercase tracking-[0.22em] text-muted"
              >
                Preparing portfolio
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
