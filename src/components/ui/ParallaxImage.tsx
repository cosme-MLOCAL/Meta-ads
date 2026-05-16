'use client'

import { useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxImageProps {
  children: ReactNode
  factor?: number
  className?: string
}

export function ParallaxImage({ children, factor = 0.15, className = '' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${-factor * 100}%`, `${factor * 100}%`]
  )

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={{ position: 'relative' }}>
      <motion.div
        style={{
          y,
          willChange: 'transform',
          height: `${100 + factor * 200}%`,
          width: '100%',
          position: 'absolute',
          top: `${-factor * 100}%`,
          left: 0,
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
