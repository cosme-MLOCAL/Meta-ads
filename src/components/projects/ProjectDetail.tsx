'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/lib/projects'
import { SplitTextReveal } from '@/components/ui/TextReveal'
import { fadeUp, slideInLeft, slideInRight } from '@/lib/animations'

interface ProjectDetailProps {
  project: Project
  nextProject: Project
}

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  const gradients = [
    'linear-gradient(160deg, #D4CFC5, #B8B2A7)',
    'linear-gradient(160deg, #B8B2A7, #8A8678)',
    'linear-gradient(160deg, #8A8678, #6B6760)',
  ]

  return (
    <article>
      {/* Hero image — 100vh */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: '100vh' }}
      >
        <div
          className="absolute inset-0 scale-[1.04]"
          style={{ background: gradients[0] }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 blueprint-pattern opacity-30" />
        </div>

        {/* Hero text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end page-padding pb-16 md:pb-24 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span
              className="font-mono text-[0.6rem] tracking-[0.2em] text-[rgba(253,252,249,0.6)] uppercase block mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {project.category} · {project.location} · {project.year}
            </span>
            <h1
              className="font-serif font-light text-off-white"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 6vw, 7rem)',
                letterSpacing: '-0.03em',
                lineHeight: 0.95,
              }}
            >
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-background">
        <div className="page-padding py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Sidebar metadata */}
            <motion.aside
              className="md:col-span-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <div className="space-y-6">
                {[
                  { label: 'Categoría', value: project.category },
                  { label: 'Ubicación', value: project.location },
                  { label: 'Año', value: String(project.year) },
                  { label: 'Superficie', value: project.area },
                ].map((item) => (
                  <div key={item.label}>
                    <dt
                      className="font-mono text-[0.58rem] tracking-[0.18em] text-text-secondary uppercase mb-1"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {item.label}
                    </dt>
                    <dd
                      className="font-sans text-sm text-text-primary"
                    >
                      {item.value}
                    </dd>
                  </div>
                ))}
              </div>
            </motion.aside>

            {/* Main description */}
            <div className="md:col-span-9">
              <motion.blockquote
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="font-serif font-light italic text-text-primary mb-10"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.3,
                  borderLeft: '2px solid var(--color-accent)',
                  paddingLeft: '1.5rem',
                }}
              >
                {project.tagline}
              </motion.blockquote>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="font-sans text-base text-text-secondary leading-relaxed"
                style={{ maxWidth: '640px' }}
              >
                {project.description}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="space-y-3 md:space-y-4">
          {/* Full-width image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full overflow-hidden"
            style={{ height: '65vh' }}
          >
            <div
              className="w-full h-full blueprint-pattern"
              style={{ background: gradients[1] }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Two-column */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 page-padding">
            {[gradients[0], gradients[2]].map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
                style={{ height: '45vh' }}
              >
                <div
                  className="w-full h-full blueprint-pattern"
                  style={{ background: g }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>

          {/* Contained image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="page-padding"
          >
            <div
              className="overflow-hidden"
              style={{ height: '50vh' }}
            >
              <div
                className="w-full h-full blueprint-pattern"
                style={{ background: gradients[2] }}
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>

        {/* Next project */}
        <div className="page-padding py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="border-t border-[rgba(26,26,24,0.12)] pt-12"
          >
            <p
              className="font-mono text-[0.6rem] tracking-[0.2em] text-text-secondary uppercase mb-6"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Siguiente proyecto
            </p>
            <Link
              href={`/proyectos/${nextProject.slug}`}
              className="group flex items-center justify-between"
              data-cursor="Ver →"
            >
              <h3
                className="font-serif font-light text-text-primary group-hover:text-text-secondary transition-colors duration-400"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.8rem, 4vw, 4rem)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                {nextProject.title}
              </h3>
              <span
                className="font-sans text-2xl text-text-secondary group-hover:text-accent transition-all duration-400 group-hover:translate-x-3 inline-block"
              >
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </article>
  )
}
