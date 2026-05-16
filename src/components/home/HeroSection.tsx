'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SplitTextReveal } from '@/components/ui/TextReveal'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Background large number */}
      <motion.div
        className="absolute top-[8vh] right-[3vw] pointer-events-none select-none z-0"
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 1.5 }}
      >
        <span
          className="font-serif text-[clamp(3rem,14vw,18rem)] font-light leading-none text-text-primary"
          style={{
            fontFamily: 'var(--font-serif)',
            opacity: 0.045,
            letterSpacing: '-0.04em',
            userSelect: 'none',
          }}
          aria-hidden="true"
        >
          Est.<br />2008
        </span>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-end page-padding pb-10 md:pb-16"
        style={{ y: textY }}
      >
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 md:mb-12"
          style={{ marginTop: 'var(--nav-height)' }}
        >
          <span
            className="font-mono text-[0.65rem] tracking-[0.2em] text-text-secondary uppercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Estudio de Arquitectura
          </span>
        </motion.div>

        {/* Hero Headline */}
        <div className="mb-4 md:mb-6">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '105%' }}
              animate={mounted ? { y: '0%' } : {}}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-light leading-[0.92] tracking-[-0.03em] text-text-primary"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.5rem, 8.5vw, 10rem)',
              }}
            >
              Arquitectura
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: '105%' }}
              animate={mounted ? { y: '0%' } : {}}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="ml-[2.5em] md:ml-[3em]"
            >
              <span
                className="font-serif font-light italic leading-[0.92] tracking-[-0.03em] text-text-primary"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3.5rem, 8.5vw, 10rem)',
                }}
              >
                con propósito
              </span>
            </motion.div>
          </div>
        </div>

        {/* Location line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[0.7rem] tracking-[0.2em] text-text-secondary uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Madrid&nbsp;&nbsp;·&nbsp;&nbsp;Barcelona&nbsp;&nbsp;·&nbsp;&nbsp;Internacional
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-10 right-8 md:right-12 flex flex-col items-center gap-3"
          aria-hidden="true"
        >
          <span
            className="font-mono text-[0.6rem] tracking-[0.2em] text-text-secondary uppercase"
            style={{
              fontFamily: 'var(--font-mono)',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
            }}
          >
            Scroll
          </span>
          <motion.div
            className="w-px bg-text-secondary origin-top"
            initial={{ scaleY: 0 }}
            animate={mounted ? { scaleY: 1 } : {}}
            transition={{ delay: 1.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ height: '60px' }}
          />
        </motion.div>
      </motion.div>

      {/* Hero Image — below the headline text */}
      <motion.div
        ref={imageRef}
        className="relative z-10 w-full overflow-hidden"
        style={{ height: '60vh', minHeight: '320px' }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={mounted ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: imageY, willChange: 'transform', scale: 1.2 }}
        >
          {/* Placeholder with blueprint overlay */}
          <div
            className="w-full h-full bg-stone-300 blueprint-pattern"
            style={{
              background: 'linear-gradient(160deg, #D4CFC5 0%, #B8B2A7 40%, #8A8678 100%)',
            }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Grain overlay on image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            opacity: 0.06,
          }}
          aria-hidden="true"
        />
      </motion.div>
    </section>
  )
}
