import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

export const INTRO_STORAGE_KEY = 'df-intro-seen'

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
