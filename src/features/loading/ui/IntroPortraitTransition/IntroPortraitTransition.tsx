import { cx, styles } from '@/shared/styles'
import { motion } from 'motion/react'
import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import portrait from '@/shared/assets/dmitry-fursov.webp'
import { loadingAnimationConfig } from '../../model/config/loading-animation.config'
import { useLoadingAnimationSpeed } from '../../model/useLoadingAnimationSpeed/useLoadingAnimationSpeed'
import type { IntroPortraitTransitionProps } from './types/IntroPortraitTransition.types'
import '../styles/Loading.module.css'

export function IntroPortraitTransition({
  heroPortraitReady,
  handoffComplete,
  onHandoffComplete,
  onTransferComplete,
  phase,
  sourceRef,
  targetRef,
}: IntroPortraitTransitionProps) {
  const animationSpeed = useLoadingAnimationSpeed()
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)
  const active =
    phase === 'fading' ||
    phase === 'transferring' ||
    (phase === 'revealing' && !handoffComplete)
  const measure = useCallback(() => {
    const source = sourceRef.current?.getBoundingClientRect()
    const target = targetRef.current?.getBoundingClientRect()

    setSourceRect(
      source && source.width > 0 && source.height > 0 ? source : null,
    )
    setTargetRect(
      target && target.width > 0 && target.height > 0 ? target : null,
    )
  }, [sourceRef, targetRef])

  useLayoutEffect(() => {
    if (!active) return
    measure()
  }, [active, measure])

  useEffect(() => {
    if (!active) return
    window.addEventListener('resize', measure)
    window.addEventListener('orientationchange', measure)
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('orientationchange', measure)
    }
  }, [active, measure])

  useEffect(() => {
    if (phase === 'transferring' && (!sourceRect || !targetRect)) {
      onTransferComplete()
    }
  }, [onTransferComplete, phase, sourceRect, targetRect])

  useEffect(() => {
    if (
      phase === 'revealing' &&
      (!sourceRect || !targetRect) &&
      heroPortraitReady
    ) {
      onHandoffComplete()
    }
  }, [heroPortraitReady, onHandoffComplete, phase, sourceRect, targetRect])

  if (!active || !sourceRect || (phase === 'revealing' && !targetRect)) {
    return null
  }

  const isTransferring = phase === 'transferring' && targetRect
  // Once the transfer starts, the clone must stay in the Hero slot. Falling
  // back to sourceRect during revealing makes it visibly jump back to the
  // small loader portrait while the handoff opacity animation is running.
  const rect = phase === 'fading' ? sourceRect : targetRect
  if (!rect) return null
  const duration =
    loadingAnimationConfig.portraitTransferDuration /
    Math.max(animationSpeed, 0.01)
  const isHandingOff = phase === 'revealing' && heroPortraitReady

  return (
    <motion.div
      className={cx(styles.introPortraitTransition)}
      initial={false}
      animate={{
        height: rect.height,
        left: rect.left,
        opacity: isHandingOff ? 0 : 1,
        top: rect.top,
        width: rect.width,
      }}
      transition={{
        duration: isTransferring
          ? duration
          : isHandingOff
            ? loadingAnimationConfig.portraitHandoffDuration /
              Math.max(animationSpeed, 0.01)
            : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      onAnimationComplete={() => {
        if (phase === 'transferring' && targetRect) onTransferComplete()
        if (isHandingOff) onHandoffComplete()
      }}
      aria-hidden="true"
    >
      <img src={portrait} alt="" />
    </motion.div>
  )
}
