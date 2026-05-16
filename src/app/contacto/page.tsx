'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const projectTypes = ['Vivienda unifamiliar', 'Reforma / Rehabilitación', 'Interiorismo', 'Local comercial', 'Otro']
const budgetRanges = ['< 50.000€', '50.000€ – 150.000€', '150.000€ – 500.000€', '> 500.000€']

export default function ContactoPage() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ backgroundColor: 'var(--color-background)', minHeight: '100vh' }}>
      <section
        style={{
          paddingTop: 'calc(var(--nav-height) + 5vw)',
          paddingBottom: '8vw',
          paddingLeft: 'var(--page-padding)',
          paddingRight: 'var(--page-padding)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }}
      >
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
            Contacto
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 0.95,
              color: 'var(--color-text-primary)',
              marginBottom: '3rem',
            }}
          >
            Cuéntanos tu<br />
            <span style={{ fontStyle: 'italic', fontWeight: 300 }}>proyecto</span>
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {[
              { label: 'Estudio', lines: ['Calle Serrano, 41', '28001 Madrid'] },
              { label: 'Email', lines: ['hola@gabrielarquitectura.es'] },
              { label: 'Teléfono', lines: ['+34 910 000 000'] },
              { label: 'Coordenadas', lines: ['40.4168° N, 3.7038° W'] },
            ].map((item) => (
              <div key={item.label}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-secondary)',
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  {item.label}
                </span>
                {item.lines.map((line) => (
                  <p
                    key={line}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9375rem',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div
            className="blueprint-pattern"
            style={{
              marginTop: '3rem',
              height: '220px',
              backgroundColor: 'rgba(196,168,130,0.08)',
              border: '1px solid rgba(196,168,130,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>
              Madrid · Calle Serrano
            </span>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ paddingTop: '4rem' }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 400,
                  color: 'var(--color-text-primary)',
                  marginBottom: '1rem',
                }}
              >
                Gracias por escribirnos
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                Nos pondremos en contacto contigo en menos de 48 horas. Mientras tanto, puedes ver nuestros proyectos en Instagram.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.6rem' }}
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(196,168,130,0.4)',
                    padding: '0.5rem 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: 'var(--color-text-primary)',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-accent)' }}
                  onBlur={(e) => { e.currentTarget.style.borderBottomColor = 'rgba(196,168,130,0.4)' }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.6rem' }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(196,168,130,0.4)',
                    padding: '0.5rem 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: 'var(--color-text-primary)',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-accent)' }}
                  onBlur={(e) => { e.currentTarget.style.borderBottomColor = 'rgba(196,168,130,0.4)' }}
                />
              </div>

              {/* Project type */}
              <div>
                <label
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.75rem' }}
                >
                  Tipo de proyecto
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, projectType: type })}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.08em',
                        padding: '0.4rem 1rem',
                        border: '1px solid',
                        borderColor: form.projectType === type ? 'var(--color-accent)' : 'rgba(196,168,130,0.3)',
                        backgroundColor: form.projectType === type ? 'var(--color-accent)' : 'transparent',
                        color: form.projectType === type ? 'var(--color-white)' : 'var(--color-text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div>
                <label
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.75rem' }}
                >
                  Presupuesto aproximado
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {budgetRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setForm({ ...form, budget: range })}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.6rem',
                        letterSpacing: '0.08em',
                        padding: '0.4rem 1rem',
                        border: '1px solid',
                        borderColor: form.budget === range ? 'var(--color-accent)' : 'rgba(196,168,130,0.3)',
                        backgroundColor: form.budget === range ? 'var(--color-accent)' : 'transparent',
                        color: form.budget === range ? 'var(--color-white)' : 'var(--color-text-secondary)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', display: 'block', marginBottom: '0.6rem' }}
                >
                  Cuéntanos tu proyecto
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(196,168,130,0.4)',
                    padding: '0.5rem 0',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    color: 'var(--color-text-primary)',
                    outline: 'none',
                    resize: 'none',
                    lineHeight: 1.6,
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderBottomColor = 'var(--color-accent)' }}
                  onBlur={(e) => { e.currentTarget.style.borderBottomColor = 'rgba(196,168,130,0.4)' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  alignSelf: 'flex-start',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-primary)',
                  border: '1px solid var(--color-accent)',
                  background: 'none',
                  padding: '1rem 3rem',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
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
                Enviar mensaje
              </button>
            </form>
          )}
        </motion.div>
      </section>
    </div>
  )
}
