import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollTo } from '@/hooks/useScrollTo'
import { sectionIds } from '@/data/navigation'
import { cn } from '@/utils/cn'
import { Logo } from '@/components/layout/Logo'
import { ThemeToggle } from '@/components/layout/ThemeToggle'

const navShell =
  'nav-shell rounded-full border border-border backdrop-blur-xl backdrop-saturate-150'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const mobileHeader = useRef<HTMLElement>(null)
  const location = useLocation()
  const activeSection = useActiveSection(sectionIds)
  const scrollTo = useScrollTo()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButton.current?.focus()
      }
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!mobileHeader.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const onFocus = (event: FocusEvent) => {
      if (!mobileHeader.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const media = window.matchMedia('(min-width: 768px)')
    const onResize = () => { if (media.matches) setIsOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('focusin', onFocus)
    media.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('focusin', onFocus)
      media.removeEventListener('change', onResize)
    }
  }, [isOpen])

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
          aria-current={isActive ? 'location' : undefined}
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
                : 'text-muted hover:text-foreground'
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
        to={item.id === 'projects' ? '/projects' : item.href === '#hero' ? '/' : `/${item.href}`}
        onClick={() => mobile && setIsOpen(false)}
        aria-current={item.id === 'projects' && location.pathname === '/projects' ? 'page' : undefined}
        className={cn(baseClass, item.id === 'projects' && location.pathname === '/projects' ? 'text-accent-soft' : 'text-muted hover:text-foreground')}
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
      className="inline-flex min-h-11 items-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-hover md:min-h-0 md:py-1.5"
    >
      Let&apos;s talk
    </a>
  ) : (
    <Link
      to="/#contact"
      onClick={() => setIsOpen(false)}
      className="inline-flex min-h-11 items-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-hover md:min-h-0 md:py-1.5"
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
              setIsOpen(false)
              if (isHome) {
                e.preventDefault()
                handleNavClick('#hero')
              }
            }}
            aria-label="Vijay Mangal home"
            className="shrink-0 border-r border-border pr-3.5 hover:opacity-90"
          >
            <Logo size="sm" className="text-foreground" />
          </Link>

          <ul className="relative flex min-w-0 items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navLinks.map((item) => (
              <li key={item.id} className="shrink-0">
                {renderNavLink(item)}
              </li>
            ))}
          </ul>

          <ThemeToggle />
          <div className="shrink-0">{contactCta}</div>
        </nav>
      </header>

      <header ref={mobileHeader} className="fixed inset-x-0 top-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            to="/"
            onClick={(e) => {
              setIsOpen(false)
              if (isHome) {
                e.preventDefault()
                handleNavClick('#hero')
              }
            }}
            aria-label="Vijay Mangal home"
            className={cn('px-3.5 py-2 hover:opacity-90', navShell)}
          >
            <Logo size="sm" className="text-foreground" />
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle className={navShell} />
            <button
              ref={menuButton}
              type="button"
              className={cn('flex h-11 w-11 items-center justify-center text-foreground/80', navShell)}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-border bg-bg/95 backdrop-blur-xl"
            >
              <ul className="flex flex-col gap-1 px-4 py-4">
                {navigation.map((item) => (
                  <li key={item.id}>{renderNavLink(item, true)}</li>
                ))}
                <li className="pt-2">{contactCta}</li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
