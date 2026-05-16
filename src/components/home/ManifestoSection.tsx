'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { SplitTextReveal } from '@/components/ui/TextReveal'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  isActive: boolean
}

function Counter({ end, duration = 2000, suffix = '', isActive }: CounterProps) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    if (!isActive) return

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      startRef.current = 0
    }
  }, [isActive, end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function ManifestoSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const countersRef = useRef<HTMLDivElement>(null)
  const countersInView = useInView(countersRef, { once: true, amount: 0.5 })

  return (
    <section
      ref={ref}
      className="bg-deep relative overflow-hidden texture-concrete"
      aria-label="Manifiesto"
    >
      {/* Concrete noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='concrete'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.85' numOctaves='4' result='noise'/%3E%3CfeColorMatrix type='saturate' values='0' in='noise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23concrete)' opacity='0.1'/%3E%3C/svg%3E\")",
          mixBlendMode: 'overlay',
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 page-padding py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Main manifesto text */}
          <div className="md:col-span-10 lg:col-span-9">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="font-mono text-[0.6rem] tracking-[0.2em] text-[rgba(196,168,130,0.6)] uppercase mb-10"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Manifiesto
            </motion.p>

            <blockquote>
              <div
                className="font-serif font-light text-background leading-[1.15] mb-4"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.6rem, 3.5vw, 3.5rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                <SplitTextReveal
                  text="Creemos que el espacio define quiénes somos."
                  delay={0.1}
                  stagger={0.04}
                />
              </div>
              <div
                className="font-serif font-light italic text-[rgba(245,242,237,0.75)] leading-[1.15]"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.6rem, 3.5vw, 3.5rem)',
                  letterSpacing: '-0.02em',
                }}
              >
                <SplitTextReveal
                  text="Cada proyecto es una conversación entre la luz, la materia y quien lo habita."
                  delay={0.2}
                  stagger={0.035}
                />
              </div>
            </blockquote>
          </div>

          {/* Vertical typographic detail */}
          <div
            className="hidden md:flex md:col-span-2 lg:col-span-3 justify-end items-start"
            aria-hidden="true"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <p
                className="font-mono text-[0.5rem] tracking-[0.2em] text-[rgba(196,168,130,0.35)] uppercase"
                style={{
                  fontFamily: 'var(--font-mono)',
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  letterSpacing: '0.25em',
                }}
              >
                Gabriel Arquitectura / MMVIII
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={countersRef}
          className="mt-20 md:mt-28 pt-8 border-t border-[rgba(196,168,130,0.2)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {[
              { value: 12, suffix: ' años', label: 'de experiencia' },
              { value: 47, suffix: ' proyectos', label: 'completados' },
              { value: 3, suffix: ' países', label: 'de presencia' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={countersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2"
              >
                <div
                  className="font-serif text-background font-light"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  <Counter
                    end={stat.value}
                    suffix=""
                    isActive={countersInView}
                    duration={1800}
                  />
                  <span className="font-sans text-base md:text-xl text-[rgba(245,242,237,0.6)] font-light ml-1">
                    {stat.suffix}
                  </span>
                </div>
                <p
                  className="font-mono text-[0.6rem] tracking-[0.15em] text-[rgba(196,168,130,0.5)] uppercase"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
