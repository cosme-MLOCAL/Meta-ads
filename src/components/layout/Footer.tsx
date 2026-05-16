'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const navLinks = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/estudio', label: 'Estudio' },
  { href: '/contacto', label: 'Contacto' },
]

const legalLinks = [
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/legal', label: 'Aviso Legal' },
  { href: '/cookies', label: 'Cookies' },
]

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M7 10v7M7 7v.5M12 17v-4a2 2 0 014 0v4M12 10v7" />
    </svg>
  )
}

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const currentYear = new Date().getFullYear()

  return (
    <footer
      ref={ref}
      className="bg-deep text-off-white"
      role="contentinfo"
    >
      {/* Animated top separator */}
      <motion.div
        className="h-px bg-[rgba(196,168,130,0.3)]"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        style={{ transformOrigin: 'left' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="page-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-6" aria-label="Gabriel Arquitectura — Inicio">
              <div
                className="font-serif text-2xl font-light text-off-white leading-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Gabriel
              </div>
              <div
                className="font-sans text-[0.65rem] font-light tracking-[0.15em] uppercase text-text-secondary mt-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Arquitectura
              </div>
            </Link>
            <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-[200px]">
              Estudio de arquitectura con sede en Madrid y Barcelona.
            </p>
            <p
              className="font-mono text-[0.6rem] tracking-[0.1em] text-[rgba(138,134,120,0.6)] mt-4 uppercase"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Est. 2008
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="font-mono text-[0.6rem] tracking-[0.18em] text-text-secondary uppercase mb-6"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-[rgba(253,252,249,0.7)] hover:text-off-white hover:text-accent transition-colors duration-300 link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3
              className="font-mono text-[0.6rem] tracking-[0.18em] text-text-secondary uppercase mb-6"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Síguenos
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="#"
                aria-label="Instagram de Gabriel Arquitectura"
                className="flex items-center gap-3 text-[rgba(253,252,249,0.7)] hover:text-accent transition-colors duration-300 group"
              >
                <InstagramIcon />
                <span className="font-sans text-sm">Instagram</span>
              </a>
              <a
                href="#"
                aria-label="LinkedIn de Gabriel Arquitectura"
                className="flex items-center gap-3 text-[rgba(253,252,249,0.7)] hover:text-accent transition-colors duration-300 group"
              >
                <LinkedInIcon />
                <span className="font-sans text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-mono text-[0.6rem] tracking-[0.18em] text-text-secondary uppercase mb-6"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Contacto
            </h3>
            <address className="not-italic space-y-2">
              <p className="font-sans text-sm text-[rgba(253,252,249,0.7)]">
                Calle Serrano, 41<br />
                28001 Madrid
              </p>
              <a
                href="mailto:hola@gabrielarquitectura.es"
                className="font-sans text-sm text-[rgba(253,252,249,0.7)] hover:text-accent transition-colors duration-300 block"
              >
                hola@gabrielarquitectura.es
              </a>
              <a
                href="tel:+34910000000"
                className="font-sans text-sm text-[rgba(253,252,249,0.7)] hover:text-accent transition-colors duration-300 block"
              >
                +34 910 000 000
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(196,168,130,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p
            className="font-mono text-[0.6rem] tracking-[0.1em] text-[rgba(138,134,120,0.5)] uppercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            © {currentYear} Gabriel Arquitectura S.L. — Todos los derechos reservados
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono text-[0.6rem] tracking-[0.08em] text-[rgba(138,134,120,0.5)] hover:text-text-secondary transition-colors duration-300 uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
