'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/lib/projects'
import { slideInLeft, slideInRight, fadeUp } from '@/lib/animations'

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
  variant?: 'large' | 'medium' | 'small'
}

function ProjectCard({ project, index, variant = 'medium' }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const isEven = index % 2 === 0
  const delay = index * 0.08

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={isEven ? slideInLeft : slideInRight}
      transition={{ delay }}
      className="project-card"
      data-cursor="Ver →"
      style={{ position: 'relative', overflow: 'hidden', cursor: 'none' }}
    >
      <Link href={`/proyectos/${project.slug}`} style={{ display: 'block', height: '100%' }}>
        {/* Image placeholder */}
        <div
          className="project-placeholder blueprint-pattern"
          style={{ height: variant === 'large' ? '70vh' : variant === 'medium' ? '45vh' : '35vh', position: 'relative', overflow: 'hidden' }}
        >
          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(26,26,24,0.75) 0%, transparent 60%)',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '1.5rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                color: 'var(--color-accent)',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              {project.category}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                fontWeight: 400,
                color: 'var(--color-white)',
                lineHeight: 1.1,
              }}
            >
              {project.title}
            </span>
          </motion.div>

          {/* Project number */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              color: 'rgba(253,252,249,0.5)',
              zIndex: 3,
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Category top right */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              letterSpacing: '0.18em',
              color: 'rgba(253,252,249,0.5)',
              textTransform: 'uppercase',
              zIndex: 3,
            }}
          >
            {project.location}
          </div>
        </div>

        {/* Card footer */}
        <div style={{ paddingTop: '0.875rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <h3
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                fontWeight: 400,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.01em',
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--color-text-secondary)',
                letterSpacing: '0.08em',
              }}
            >
              {project.year}
            </span>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              color: 'var(--color-text-secondary)',
              marginTop: '0.25rem',
              letterSpacing: '0.04em',
            }}
          >
            {project.category} · {project.area}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export function ProjectsGrid() {
  const ref = useRef<HTMLElement>(null)
  const titleInView = useInView(ref, { once: true, amount: 0.3 })

  const [featured, ...rest] = projects
  const topRight = rest.slice(0, 2)
  const bottomRow = rest.slice(2, 5)

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: 'var(--color-background)',
        paddingTop: '8vw',
        paddingBottom: '8vw',
        paddingLeft: 'var(--page-padding)',
        paddingRight: 'var(--page-padding)',
      }}
    >
      {/* Section header */}
      <motion.div
        initial="hidden"
        animate={titleInView ? 'visible' : 'hidden'}
        variants={fadeUp}
        style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}
      >
        <div>
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
            Selección
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
            Proyectos
          </h2>
        </div>
        <Link
          href="/proyectos"
          className="link-underline"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8125rem',
            letterSpacing: '0.06em',
            color: 'var(--color-text-secondary)',
          }}
        >
          Ver todos →
        </Link>
      </motion.div>

      {/* Asymmetric grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {/* Featured left */}
        <ProjectCard project={featured} index={0} variant="large" />
        {/* Two stacked right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {topRight.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + 1} variant="medium" />
          ))}
        </div>
      </div>

      {/* Bottom 3-col row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {bottomRow.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i + 3} variant="small" />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        animate={titleInView ? 'visible' : 'hidden'}
        variants={fadeUp}
        transition={{ delay: 0.4 }}
        style={{ marginTop: '4rem', textAlign: 'right' }}
      >
        <Link
          href="/proyectos"
          className="link-underline"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontStyle: 'italic',
            color: 'var(--color-text-primary)',
          }}
        >
          Ver todos los proyectos →
        </Link>
      </motion.div>
    </section>
  )
}
