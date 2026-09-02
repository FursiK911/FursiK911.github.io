import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { INTRO_STORAGE_KEY } from '../config/intro.config'

export function useIntro(duration = 1150) {
  const reduceMotion = useReducedMotion()
  const [ready, setReady] = useState(() =>
    Boolean(
      sessionStorage.getItem(INTRO_STORAGE_KEY) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    ),
  )

  useEffect(() => {
    if (ready || reduceMotion) return
    const timer = window.setTimeout(() => {
      sessionStorage.setItem(INTRO_STORAGE_KEY, '1')
      setReady(true)
    }, duration)
    return () => window.clearTimeout(timer)
  }, [duration, ready, reduceMotion])

  return ready
}
