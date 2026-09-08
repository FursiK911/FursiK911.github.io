import { useMotionValue, useSpring, useTransform } from 'motion/react'
import { useEffect, useState } from 'react'
import type { PointerEvent } from 'react'
import {
  DIRECTION_CARD_STAGGER_MS,
  DIRECTION_METRIC_DELAY_MS,
  DIRECTION_METRIC_LABEL_DELAY_MS,
  DIRECTION_TILT_LIMIT,
} from '../../../../../../model/directions/config/directionsMotion.config'
import type {
  UseDirectionCardMotionParams,
  UseDirectionCardMotionResult,
} from './types/useDirectionCardMotion.types'

export function useDirectionCardMotion({
  hasEntered,
  index,
  reducedMotion,
}: UseDirectionCardMotionParams): UseDirectionCardMotionResult {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(
    useTransform(
      pointerY,
      [-1, 1],
      [DIRECTION_TILT_LIMIT, -DIRECTION_TILT_LIMIT],
    ),
    { damping: 18, mass: 0.4, stiffness: 150 },
  )
  const rotateY = useSpring(
    useTransform(
      pointerX,
      [-1, 1],
      [-DIRECTION_TILT_LIMIT, DIRECTION_TILT_LIMIT],
    ),
    { damping: 18, mass: 0.4, stiffness: 150 },
  )
  const gamepadX = useSpring(useTransform(pointerX, [-1, 1], [-1.5, 1.5]), {
    damping: 18,
    mass: 0.4,
    stiffness: 160,
  })
  const gamepadY = useSpring(useTransform(pointerY, [-1, 1], [-1.5, 1.5]), {
    damping: 18,
    mass: 0.4,
    stiffness: 160,
  })
  const gamepadRotate = useSpring(
    useTransform(pointerX, [-1, 1], [-0.75, 0.75]),
    {
      damping: 18,
      mass: 0.4,
      stiffness: 160,
    },
  )
  const [isHovering, setIsHovering] = useState(false)
  const [hasMetricStarted, setHasMetricStarted] = useState(false)
  const [hasMetricLabelAppeared, setHasMetricLabelAppeared] = useState(false)
  const [pointerStyle, setPointerStyle] = useState({
    '--directions-pointer-x': '50%',
    '--directions-pointer-y': '50%',
  })

  useEffect(() => {
    if (reducedMotion || !hasEntered) return

    const delay = index * DIRECTION_CARD_STAGGER_MS
    const metricTimer = window.setTimeout(
      () => setHasMetricStarted(true),
      delay + DIRECTION_METRIC_DELAY_MS,
    )
    const labelTimer = window.setTimeout(
      () => setHasMetricLabelAppeared(true),
      delay + DIRECTION_METRIC_LABEL_DELAY_MS,
    )

    return () => {
      window.clearTimeout(metricTimer)
      window.clearTimeout(labelTimer)
    }
  }, [hasEntered, index, reducedMotion])

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType !== 'mouse') return

    const bounds = event.currentTarget.getBoundingClientRect()
    const horizontalProgress = (event.clientX - bounds.left) / bounds.width
    const verticalProgress = (event.clientY - bounds.top) / bounds.height

    pointerX.set(horizontalProgress * 2 - 1)
    pointerY.set(verticalProgress * 2 - 1)
    setPointerStyle({
      '--directions-pointer-x': `${horizontalProgress * 100}%`,
      '--directions-pointer-y': `${verticalProgress * 100}%`,
    })
    setIsHovering(true)
  }

  function onPointerLeave() {
    pointerX.set(0)
    pointerY.set(0)
    setPointerStyle({
      '--directions-pointer-x': '50%',
      '--directions-pointer-y': '50%',
    })
    setIsHovering(false)
  }

  return {
    cardStyle: { rotateX, rotateY },
    gamepadStyle: { rotate: gamepadRotate, x: gamepadX, y: gamepadY },
    isHovering,
    isMetricActive: reducedMotion || hasMetricStarted,
    isMetricLabelVisible: reducedMotion || hasMetricLabelAppeared,
    onPointerLeave,
    onPointerMove,
    pointerStyle,
  }
}
