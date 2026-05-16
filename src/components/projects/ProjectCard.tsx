'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectListRow({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/proyectos/${project.slug}`}
        className="group"
        style={{ display: 'block' }}
        data-cursor="Ver →"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '60px 1fr auto auto',
            alignItems: 'center',
            gap: '2rem',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid rgba(196,168,130,0.2)',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(196,168,130,0.04)' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              color: 'var(--color-text-secondary)',
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
              fontWeight: 400,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.01em',
              transition: 'color 0.3s ease',
            }}
          >
            {project.title}
          </h3>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              color: 'var(--color-text-secondary)',
              textTransform: 'uppercase',
            }}
          >
            {project.category}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.08em',
              color: 'var(--color-text-secondary)',
            }}
          >
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
