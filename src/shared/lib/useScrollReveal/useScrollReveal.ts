import { useReducedMotion, useReducedMotionConfig } from 'motion/react'
import { scrollRevealConfig } from './config/useScrollReveal.config'
import type {
  ScrollRevealMotionProps,
  UseScrollRevealOptions,
} from './types/useScrollReveal.types'

export function useScrollReveal({
  amount = scrollRevealConfig.amount,
  delay = 0,
}: UseScrollRevealOptions = {}): ScrollRevealMotionProps {
  const reducedMotion = useReducedMotion()
  const reducedMotionConfig = useReducedMotionConfig()

  if (reducedMotion || reducedMotionConfig) {
    return { initial: false }
  }

  return {
    initial: { opacity: 0, y: scrollRevealConfig.distance },
    whileInView: { opacity: 1, y: 0 },
    viewport: { amount, once: true },
    transition: {
      delay,
      duration: scrollRevealConfig.duration,
      ease: scrollRevealConfig.ease,
    },
  }
}
