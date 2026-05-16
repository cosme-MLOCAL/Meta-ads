'use client'

import { useState, useEffect, useRef } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export function useCursorPosition(): CursorPosition {
  const [position, setPosition] = useState<CursorPosition>({ x: -100, y: -100 })
  const rafRef = useRef<number>(0)
  const pendingRef = useRef<CursorPosition>({ x: -100, y: -100 })

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      pendingRef.current = { x: e.clientX, y: e.clientY }

      if (rafRef.current) return

      rafRef.current = requestAnimationFrame(() => {
        setPosition({ ...pendingRef.current })
        rafRef.current = 0
      })
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return position
}

export function useIsTouch(): boolean {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const check = () => {
      setIsTouch(window.matchMedia('(hover: none)').matches)
    }
    check()
    const mq = window.matchMedia('(hover: none)')
    mq.addEventListener('change', check)
    return () => mq.removeEventListener('change', check)
  }, [])

  return isTouch
}
