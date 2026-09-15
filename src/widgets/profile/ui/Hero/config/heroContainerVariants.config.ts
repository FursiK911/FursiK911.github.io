import type { Variants } from 'motion/react'

export const heroContainerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: 'easeOut',
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
} satisfies Variants
