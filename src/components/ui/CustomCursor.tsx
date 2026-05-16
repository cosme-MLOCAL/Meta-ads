'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCursorPosition, useIsTouch } from '@/hooks/useCursorPosition'
import { cursorSpring, cursorOuterSpring } from '@/lib/animations'

export function CustomCursor() {
  const isTouch = useIsTouch()
  const { x, y } = useCursorPosition()
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [hoverText, setHoverText] = useState('')

  useEffect(() => {
    if (isTouch) return

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor], .project-card')
      if (interactive) {
        setIsHovering(true)
        const cursorText = (interactive as HTMLElement).dataset.cursor || 'Ver →'
        setHoverText(cursorText)
      } else {
        setIsHovering(false)
        setHoverText('')
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          border: '1px solid',
          pointerEvents: 'none',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform',
        }}
        animate={{
          x: x - (isHovering ? 36 : 20),
          y: y - (isHovering ? 36 : 20),
          width: isHovering ? 72 : 40,
          height: isHovering ? 72 : 40,
          scale: isClicking ? 0.85 : 1,
          backgroundColor: isHovering ? 'rgba(196, 168, 130, 0.15)' : 'rgba(0,0,0,0)',
          borderColor: isHovering ? 'rgba(196, 168, 130, 0.8)' : 'rgba(26, 26, 24, 0.4)',
        }}
        transition={cursorOuterSpring}
      >
        <AnimatePresence>
          {isHovering && hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '9px',
                letterSpacing: '0.05em',
                color: 'var(--color-accent)',
                whiteSpace: 'nowrap',
                userSelect: 'none',
              }}
            >
              {hoverText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: isHovering ? 'var(--color-accent)' : 'var(--color-text-primary)',
          pointerEvents: 'none',
          zIndex: 100000,
          willChange: 'transform',
        }}
        animate={{
          x: x - 2,
          y: y - 2,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={cursorSpring}
      />
    </>
  )
}
