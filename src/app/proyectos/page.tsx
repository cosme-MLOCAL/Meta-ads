'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, Project } from '@/lib/projects'
import { ProjectListRow } from '@/components/projects/ProjectCard'

const categories = ['Todos', 'Residencial', 'Comercial', 'Rehabilitación', 'Interiorismo'] as const

export default function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos')

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <div
      style={{
        paddingTop: 'calc(var(--nav-height) + 5vw)',
        paddingBottom: '8vw',
        paddingLeft: 'var(--page-padding)',
        paddingRight: 'var(--page-padding)',
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '4rem' }}>
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
          Portafolio
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            fontWeight: 400,
            letterSpacing: '-0.03em',
            lineHeight: 0.95,
            color: 'var(--color-text-primary)',
            marginBottom: '3rem',
          }}
        >
          Proyectos
        </motion.h1>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: '2rem', position: 'relative' }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: activeCategory === cat ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.25rem 0',
                position: 'relative',
                transition: 'color 0.3s ease',
              }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="categoryUnderline"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    backgroundColor: 'var(--color-accent)',
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects list */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Top border */}
          <div style={{ height: '1px', backgroundColor: 'rgba(196,168,130,0.3)', marginBottom: 0 }} />
          {filtered.map((project, i) => (
            <ProjectListRow key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
