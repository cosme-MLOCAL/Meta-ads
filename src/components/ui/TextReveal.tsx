'use client'

import React, { useRef, useEffect, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { wordReveal } from '@/lib/animations'

interface TextRevealProps {
  children: ReactNode
  delay?: number
  stagger?: number
  once?: boolean
  wordByWord?: boolean
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

export function TextReveal({
  children,
  delay = 0,
  stagger = 0.05,
  once = true,
  wordByWord = false,
  className = '',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  if (wordByWord && typeof children === 'string') {
    const words = children.split(' ')
    return (
      <div ref={ref} className={className} aria-label={children}>
        <span style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em' }}>
          {words.map((word, i) => (
            <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
              <motion.span
                style={{ display: 'inline-block' }}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                variants={wordReveal}
                transition={{
                  delay: delay + i * stagger,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      </div>
    )
  }

  return (
    <div ref={ref} style={{ overflow: 'hidden' }} className={className}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isVisible ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{
          delay,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface SplitTextRevealProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}

export function SplitTextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.04,
  once = true,
}: SplitTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const words = text.split(' ')

  return (
    <div
      ref={ref}
      className={className}
      aria-label={text}
      style={{ display: 'flex', flexWrap: 'wrap', columnGap: '0.35em' }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '105%' }}
            animate={isVisible ? { y: '0%' } : { y: '105%' }}
            transition={{
              delay: delay + i * stagger,
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}
