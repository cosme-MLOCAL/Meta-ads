'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

const navLinks = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/estudio', label: 'Estudio' },
  { href: '/contacto', label: 'Contacto' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState<'ES' | 'EN'>('ES')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-[1000] transition-all duration-600',
          scrolled
            ? 'bg-[rgba(245,242,237,0.92)] backdrop-blur-md border-b border-[rgba(196,168,130,0.2)]'
            : 'bg-transparent'
        )}
        style={{ height: 'var(--nav-height)' }}
      >
        <nav
          className="flex items-center justify-between h-full page-padding"
          aria-label="Navegación principal"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-baseline gap-[0.3em] group"
            aria-label="Gabriel Arquitectura — Inicio"
          >
            <span
              className="font-serif text-[1.35rem] font-light leading-none tracking-[-0.01em] text-text-primary transition-colors duration-300"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Gabriel
            </span>
            <span
              className="font-sans text-[0.7rem] font-light tracking-[0.12em] uppercase text-text-secondary transition-colors duration-300"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Arquitectura
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'font-sans text-[0.8rem] tracking-[0.08em] uppercase transition-colors duration-300 link-underline',
                  pathname === link.href
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-1 ml-4 border-l border-[rgba(196,168,130,0.3)] pl-4">
              {(['ES', 'EN'] as const).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={clsx(
                    'font-mono text-[0.65rem] tracking-[0.1em] px-1.5 py-0.5 transition-all duration-300',
                    lang === l
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                  aria-label={`Cambiar idioma a ${l}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <motion.span
              className="block h-px bg-text-primary origin-right"
              animate={{
                width: menuOpen ? '100%' : '100%',
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '100%' }}
            />
            <motion.span
              className="block h-px bg-text-primary"
              animate={{
                opacity: menuOpen ? 0 : 1,
                width: menuOpen ? '0%' : '70%',
              }}
              transition={{ duration: 0.2 }}
              style={{ width: '70%' }}
            />
            <motion.span
              className="block h-px bg-text-primary origin-right"
              animate={{
                width: menuOpen ? '100%' : '50%',
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '50%' }}
            />
          </button>
        </nav>

        {/* Scroll-in border line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-[rgba(196,168,130,0.3)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          style={{ transformOrigin: 'left' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </header>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[999] bg-deep flex flex-col justify-center page-padding md:hidden"
          >
            <nav aria-label="Menú móvil">
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      className="font-serif text-[clamp(2.5rem,8vw,5rem)] text-off-white leading-[1.1] hover:text-accent transition-colors duration-300 block"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-16 pt-8 border-t border-[rgba(196,168,130,0.2)]"
              >
                <p className="font-mono text-[0.65rem] tracking-[0.15em] text-text-secondary uppercase">
                  Madrid · Barcelona · Internacional
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
