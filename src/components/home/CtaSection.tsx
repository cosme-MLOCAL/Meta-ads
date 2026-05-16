'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

export function CtaSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      ref={ref}
      className="texture-paper blueprint-pattern"
      style={{
        backgroundColor: 'var(--color-background)',
        paddingTop: '10vw',
        paddingBottom: '10vw',
        paddingLeft: 'var(--page-padding)',
        paddingRight: 'var(--page-padding)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large decorative char */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(20rem, 40vw, 50rem)',
          fontWeight: 300,
          color: 'rgba(196,168,130,0.04)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.1em',
        }}
      >
        G
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            display: 'block',
            marginBottom: '1.5rem',
          }}
        >
          Contacto
        </span>

        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            lineHeight: 1,
            marginBottom: '0.15em',
          }}
        >
          ¿Tienes un proyecto
        </h2>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 6vw, 6rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            lineHeight: 1,
            marginBottom: '3rem',
          }}
        >
          en mente?
        </h2>

        <Link
          href="/contacto"
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8125rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text-primary)',
            border: '1px solid var(--color-accent)',
            padding: '1rem 3rem',
            transition: 'all 0.4s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.backgroundColor = 'var(--color-accent)'
            el.style.color = 'var(--color-white)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.backgroundColor = 'transparent'
            el.style.color = 'var(--color-text-primary)'
          }}
        >
          Cuéntanoslo
        </Link>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            color: 'var(--color-text-secondary)',
            marginTop: '3rem',
          }}
        >
          40.4168° N, 3.7038° W — Madrid
        </p>
      </motion.div>
    </section>
  )
}
