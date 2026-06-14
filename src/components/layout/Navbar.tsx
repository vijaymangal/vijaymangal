import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollTo } from '@/hooks/useScrollTo'
import { sectionIds } from '@/data/navigation'
import { cn } from '@/utils/cn'
import { Logo } from '@/components/layout/Logo'

const navShell =
  'rounded-full border border-white/10 bg-[rgba(17,17,17,0.88)] shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const activeSection = useActiveSection(sectionIds)
  const scrollTo = useScrollTo()
  const isHome = location.pathname === '/'

  const handleNavClick = (href: string) => {
    scrollTo(href)
    setIsOpen(false)
  }

  const navLinks = navigation.filter((item) => item.id !== 'hero')

  const renderNavLink = (item: (typeof navigation)[number], mobile = false) => {
    const baseClass = mobile
      ? 'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors'
      : 'relative z-10 block rounded-full px-3.5 py-2 text-sm font-medium transition-colors'

    if (isHome) {
      const isActive = activeSection === item.id

      return (
        <a
          href={item.href}
          onClick={(e) => {
            e.preventDefault()
            handleNavClick(item.href)
          }}
          className={cn(
            baseClass,
            mobile
              ? isActive
                ? 'text-accent-soft'
                : 'text-muted'
              : isActive
                ? 'text-white'
                : 'text-muted hover:text-white'
          )}
        >
          {!mobile && isActive && (
            <motion.span
              layoutId="nav-indicator"
              className="absolute inset-x-0 top-1/2 -z-10 h-[27px] -translate-y-1/2 rounded-full bg-accent"
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 28,
                mass: 0.85,
              }}
            />
          )}
          {item.label}
        </a>
      )
    }

    return (
      <Link
        to={item.href === '#hero' ? '/' : `/${item.href}`}
        onClick={() => mobile && setIsOpen(false)}
        className={cn(baseClass, 'text-muted hover:text-white')}
      >
        {item.label}
      </Link>
    )
  }

  const contactCta = isHome ? (
    <a
      href="#contact"
      onClick={(e) => {
        e.preventDefault()
        handleNavClick('#contact')
      }}
      className="rounded-full bg-accent px-4 py-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-accent-soft"
    >
      Let&apos;s talk
    </a>
  ) : (
    <Link
      to="/#contact"
      className="rounded-full bg-accent px-4 py-2 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-accent-soft"
    >
      Let&apos;s talk
    </Link>
  )

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 hidden justify-center px-4 pt-5 md:flex">
        <nav
          aria-label="Main navigation"
          className={cn(
            'pointer-events-auto flex max-w-[calc(100vw-2rem)] items-center gap-3.5 py-px pl-[18px] pr-1.5',
            navShell
          )}
        >
          <Link
            to="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault()
                handleNavClick('#hero')
              }
            }}
            aria-label="Vijay Mangal home"
            className="shrink-0 border-r border-white/12 pr-3.5 hover:opacity-90"
          >
            <Logo size="sm" className="text-white" />
          </Link>

          <ul className="relative flex min-w-0 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navLinks.map((item) => (
              <li key={item.id} className="shrink-0">
                {renderNavLink(item)}
              </li>
            ))}
          </ul>

          <div className="shrink-0">{contactCta}</div>
        </nav>
      </header>

      <header className="fixed inset-x-0 top-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            to="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault()
                handleNavClick('#hero')
              }
            }}
            aria-label="Vijay Mangal home"
            className={cn('px-3.5 py-2 hover:opacity-90', navShell)}
          >
            <Logo size="sm" className="text-white" />
          </Link>

          <button
            type="button"
            className={cn('p-2.5 text-white/80', navShell)}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[rgba(17,17,17,0.95)] backdrop-blur-xl"
            >
              <ul className="flex flex-col gap-1 px-4 py-4">
                {navigation.map((item) => (
                  <li key={item.id}>{renderNavLink(item, true)}</li>
                ))}
                <li className="pt-2">{contactCta}</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
