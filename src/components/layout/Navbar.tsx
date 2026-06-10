import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollTo } from '@/hooks/useScrollTo'
import { useScrolled } from '@/hooks/useScrolled'
import { sectionIds } from '@/data/navigation'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/layout/Logo'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)
  const scrollTo = useScrollTo()
  const scrolled = useScrolled()

  const handleNavClick = (href: string) => {
    scrollTo(href)
    setIsOpen(false)
  }

  const navLinks = navigation.filter((item) => item.id !== 'hero')

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-[var(--color-border)] bg-bg/80 backdrop-blur-xl' : 'bg-transparent'
      )}
    >
      <Container>
        <nav aria-label="Main navigation" className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            aria-label="Vijay Mangal — Home"
            className="hover:opacity-90"
          >
            <Logo size="sm" />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={cn(
                    'relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors',
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-muted hover:text-white'
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button
              href="#contact"
              size="sm"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
            >
              Let&apos;s talk
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-muted hover:text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-main flex flex-col gap-1 py-4">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={cn(
                      'block rounded-lg px-3 py-2.5 text-sm font-medium',
                      activeSection === item.id ? 'text-accent-soft' : 'text-muted'
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
