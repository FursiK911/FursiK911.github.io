import { expect, it } from 'vitest'
import { heroContainerVariants } from '../config/heroContainerVariants.config'

it('reveals the hero after the loader while preserving the child stagger', () => {
  expect(heroContainerVariants).toEqual({
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
  })
})
