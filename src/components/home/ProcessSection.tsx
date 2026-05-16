'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const phases = [
  {
    number: '01',
    title: 'Escucha',
    description: 'Entendemos antes de proponer. Cada proyecto comienza con una conversación profunda sobre quién eres, cómo vives y qué sueñas.',
  },
  {
    number: '02',
    title: 'Concepto',
    description: 'La idea que lo cambia todo. Buscamos el principio organizador que dará coherencia y carácter único a tu espacio.',
  },
  {
    number: '03',
    title: 'Desarrollo',
    description: 'Del boceto al detalle milimétrico. Traducimos el concepto en planos, materiales y especificaciones con precisión artesanal.',
  },
  {
    number: '04',
    title: 'Entrega',
    description: 'Espacios que superan expectativas. Supervisamos la obra hasta el último detalle para asegurar que la realidad esté a la altura del sueño.',
  },
]

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--color-white)',
        paddingTop: '8vw',
        paddingBottom: '8vw',
        paddingLeft: 'var(--page-padding)',
        paddingRight: 'var(--page-padding)',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '5rem' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            display: 'block',
            marginBottom: '0.5rem',
          }}
        >
          Metodología
        </span>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: 'var(--color-text-primary)',
          }}
        >
          Cómo trabajamos
        </h2>
      </motion.div>

      {/* Phases */}
      <div>
        {phases.map((phase, i) => (
          <motion.div
            key={phase.number}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Separator line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.05 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: '1px',
                backgroundColor: 'rgba(196,168,130,0.25)',
                transformOrigin: 'left',
                marginBottom: '2rem',
              }}
            />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr 2fr',
                gap: '2rem',
                paddingBottom: '2.5rem',
                alignItems: 'start',
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-accent)',
                  lineHeight: 1,
                }}
              >
                {phase.number}
              </span>
              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)',
                  letterSpacing: '-0.01em',
                  paddingTop: '0.2rem',
                }}
              >
                {phase.title}
              </h3>
              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  paddingTop: '0.25rem',
                  maxWidth: '480px',
                }}
              >
                {phase.description}
              </p>
            </div>
          </motion.div>
        ))}
        {/* Final separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: '1px', backgroundColor: 'rgba(196,168,130,0.25)', transformOrigin: 'left' }}
        />
      </div>
    </section>
  )
}
