import { useEffect, useMemo, useState } from 'react'

const TYPE_DELAY = 90
const DELETE_DELAY = 45
const HOLD_DELAY = 800

function getReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useTypingText(texts: readonly string[], language: string) {
  const textKey = texts.join('\u0000')
  // textKey keeps the role list stable when callers create a new array per render.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const roles = useMemo(() => texts.filter(Boolean), [textKey])
  const [reducedMotion, setReducedMotion] = useState(getReducedMotion)
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState(roles[0] ?? '')
  const [phase, setPhase] = useState<'typing' | 'holding' | 'deleting'>(
    'typing',
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    // Locale and motion changes intentionally restart the animation cycle.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setRoleIndex(0)
    setDisplayText(reducedMotion ? (roles[0] ?? '') : '')
    setPhase(reducedMotion ? 'holding' : 'typing')
  }, [language, reducedMotion, roles])

  useEffect(() => {
    if (reducedMotion || roles.length === 0) return
    const target = roles[roleIndex % roles.length]
    const timer = window.setTimeout(
      () => {
        if (phase === 'typing') {
          if (displayText.length < target.length) {
            setDisplayText(target.slice(0, displayText.length + 1))
          } else {
            setPhase('holding')
          }
        } else if (phase === 'holding') {
          setPhase('deleting')
        } else if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setRoleIndex((index) => (index + 1) % roles.length)
          setPhase('typing')
        }
      },
      phase === 'holding'
        ? HOLD_DELAY
        : phase === 'deleting'
          ? DELETE_DELAY
          : TYPE_DELAY,
    )
    return () => window.clearTimeout(timer)
  }, [displayText, phase, reducedMotion, roleIndex, roles])

  return {
    displayText: reducedMotion ? (roles[0] ?? '') : displayText,
    reducedMotion,
  }
}
