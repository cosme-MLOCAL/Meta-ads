'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const values = [
  { title: 'Escucha activa', text: 'No diseñamos para ti, diseñamos contigo. El proceso empieza mucho antes del primer boceto.' },
  { title: 'Materialidad honesta', text: 'Cada material que elegimos tiene una razón de ser. Nada es decorativo si no aporta.' },
  { title: 'Luz como materia', text: 'Diseñamos con la luz natural como el elemento más importante de cada espacio.' },
  { title: 'Sostenibilidad real', text: 'No como tendencia, sino como responsabilidad. Construimos para durar generaciones.' },
]

export default function EstudioPage() {
  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      {/* Hero */}
      <section
        style={{
          paddingTop: 'calc(var(--nav-height) + 6vw)',
          paddingBottom: '6vw',
          paddingLeft: 'var(--page-padding)',
          paddingRight: 'var(--page-padding)',
        }}
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
          Quiénes somos
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(3rem, 7vw, 8rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: 'var(--color-text-primary)',
          }}
        >
          Somos Gabriel<br />
          <span style={{ fontStyle: 'italic', fontWeight: 300 }}>Arquitectura</span>
        </motion.h1>
      </section>

      {/* About content */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          paddingLeft: 'var(--page-padding)',
          paddingRight: 'var(--page-padding)',
          paddingBottom: '8vw',
          alignItems: 'start',
        }}
      >
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="project-placeholder blueprint-pattern"
          style={{ height: '70vh', position: 'sticky', top: 'calc(var(--nav-height) + 2rem)' }}
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ paddingTop: '2rem' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
              lineHeight: 1.5,
              color: 'var(--color-text-primary)',
              marginBottom: '2rem',
              fontWeight: 400,
            }}
          >
            &ldquo;Fundado en 2008, Gabriel Arquitectura nació de la convicción de que la arquitectura de calidad no debería ser un privilegio.&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              lineHeight: 1.75,
              color: 'var(--color-text-secondary)',
              marginBottom: '1.5rem',
            }}
          >
            Somos un equipo multidisciplinar con base en Madrid y Barcelona, especializados en proyectos residenciales, comerciales y de rehabilitación. Nuestro enfoque combina rigor técnico con sensibilidad artesanal.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              lineHeight: 1.75,
              color: 'var(--color-text-secondary)',
            }}
          >
            Hemos desarrollado más de 47 proyectos en España y el extranjero, desde viviendas unifamiliares hasta intervenciones urbanas, siempre con el mismo compromiso: espacios que se viven.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section
        style={{
          backgroundColor: 'var(--color-deep)',
          paddingTop: '7vw',
          paddingBottom: '7vw',
          paddingLeft: 'var(--page-padding)',
          paddingRight: 'var(--page-padding)',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 400,
            color: 'var(--color-white)',
            marginBottom: '4rem',
            letterSpacing: '-0.02em',
          }}
        >
          Lo que nos guía
        </motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--color-accent)',
                  marginBottom: '0.75rem',
                }}
              >
                {v.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'rgba(253,252,249,0.65)', lineHeight: 1.7 }}>
                {v.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '8vw var(--page-padding)', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 300, fontStyle: 'italic', marginBottom: '2rem', color: 'var(--color-text-primary)' }}>
            ¿Hablamos sobre tu proyecto?
          </p>
          <Link
            href="/contacto"
            className="link-underline"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}
          >
            Contactar →
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
