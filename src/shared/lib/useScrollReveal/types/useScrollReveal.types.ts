import type { MotionProps } from 'motion/react'

export type ScrollRevealAmount = NonNullable<MotionProps['viewport']>['amount']

export type UseScrollRevealOptions = {
  amount?: ScrollRevealAmount
  delay?: number
}

export type ScrollRevealMotionProps = Pick<
  MotionProps,
  'initial' | 'transition' | 'viewport' | 'whileInView'
>
