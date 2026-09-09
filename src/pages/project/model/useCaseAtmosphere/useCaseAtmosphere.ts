import { useEffect } from 'react'
import {
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
export function useCaseAtmosphere() {
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const { scrollY } = useScroll()
  const drift = useTransform(scrollY, (value) => (reduced ? 0 : value * 0.12))
  useEffect(() => {
    if (reduced) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const move = (event: PointerEvent) => {
      if (!fine.matches || event.pointerType === 'touch') return
      x.set((event.clientX / window.innerWidth - 0.5) * 120)
      y.set((event.clientY / window.innerHeight - 0.5) * 80)
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [reduced, x, y])
  return { x, y, drift, reduced }
}
