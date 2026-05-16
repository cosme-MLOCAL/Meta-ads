'use client'

import { useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'

export function useScrollProgress(): { scrollProgress: MotionValue<number> } {
  const { scrollYProgress } = useScroll()
  return { scrollProgress: scrollYProgress }
}

export function useElementScrollProgress(ref: React.RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  return scrollYProgress
}

export function useParallax(
  scrollYProgress: MotionValue<number>,
  factor: number = 0.15
): MotionValue<number> {
  return useTransform(
    scrollYProgress,
    [0, 1],
    [`${-factor * 100}%`, `${factor * 100}%`]
  ) as unknown as MotionValue<number>
}
