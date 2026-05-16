'use client'

import { use } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { getProjectBySlug, getNextProject } from '@/lib/projects'

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const nextProject = getNextProject(slug)

  return (
    <article style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Hero */}
      <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <div
          className="project-placeholder blueprint-pattern"
          style={{ position: 'absolute', inset: 0 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(26,26,24,0.3) 0%, transparent 40%, rgba(26,26,24,0.5) 100%)',
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: 'absolute',
            bottom: '4vw',
            left: 'var(--page-padding)',
            right: 'var(--page-padding)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(253,252,249,0.6)',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              {project.category} · {project.location} · {project.year}
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(3rem, 7vw, 8rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
                color: 'var(--color-white)',
                marginBottom: '1rem',
              }}
            >
              {project.title}
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1rem, 1.8vw, 1.5rem)',
                fontStyle: 'italic',
                color: 'rgba(253,252,249,0.7)',
                fontWeight: 300,
              }}
            >
              {project.tagline}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Project info */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
          padding: '6vw var(--page-padding)',
          alignItems: 'start',
        }}
      >
        {/* Metadata sidebar */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { label: 'Tipología', value: project.category },
              { label: 'Ubicación', value: project.location },
              { label: 'Año', value: String(project.year) },
              { label: 'Superficie', value: project.area },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: '2rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-text-primary)',
                    fontWeight: 400,
                  }}
                >
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.5vw, 1.1875rem)',
              lineHeight: 1.75,
              color: 'var(--color-text-secondary)',
              maxWidth: '580px',
            }}
          >
            {project.description}
          </p>
        </motion.div>
      </div>

      {/* Image gallery */}
      <div style={{ paddingLeft: 'var(--page-padding)', paddingRight: 'var(--page-padding)', paddingBottom: '6vw' }}>
        {/* Full-width image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="project-placeholder blueprint-pattern"
          style={{ height: '65vh', marginBottom: '1.5rem' }}
        />

        {/* Two-column images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="project-placeholder blueprint-pattern"
              style={{ height: '50vh' }}
            />
          ))}
        </div>

        {/* Full-width image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="project-placeholder blueprint-pattern"
          style={{ height: '70vh' }}
        />
      </div>

      {/* Next project */}
      <div
        style={{
          borderTop: '1px solid rgba(196,168,130,0.25)',
          padding: '4vw var(--page-padding)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          href="/proyectos"
          className="link-underline"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
          }}
        >
          ← Todos los proyectos
        </Link>

        <Link
          href={`/proyectos/${nextProject.slug}`}
          style={{ textAlign: 'right' }}
          data-cursor="→"
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
            Siguiente proyecto
          </span>
          <span
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 400,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            {nextProject.title} →
          </span>
        </Link>
      </div>
    </article>
  )
}
