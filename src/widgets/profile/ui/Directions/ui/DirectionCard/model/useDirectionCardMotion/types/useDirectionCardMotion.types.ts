import type { CSSProperties, PointerEvent } from 'react'
import type { MotionValue } from 'motion/react'

export type UseDirectionCardMotionParams = {
  hasEntered: boolean
  index: number
  reducedMotion: boolean
  scanning: boolean
}

export type UseDirectionCardMotionResult = {
  cardStyle: {
    rotateX: MotionValue<number>
    rotateY: MotionValue<number>
  }
  iconPointerStyle: {
    rotate: MotionValue<number>
    x: MotionValue<number>
    y: MotionValue<number>
  }
  isHovering: boolean
  isIconAnimating: boolean
  isMetricActive: boolean
  isMetricLabelVisible: boolean
  onPointerLeave: () => void
  onPointerMove: (event: PointerEvent<HTMLElement>) => void
  pointerStyle: CSSProperties & {
    '--directions-pointer-x': string
    '--directions-pointer-y': string
  }
}
