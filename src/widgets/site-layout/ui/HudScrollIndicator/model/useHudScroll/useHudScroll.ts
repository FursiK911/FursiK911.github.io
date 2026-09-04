import { useCallback, useEffect, useRef, useState } from 'react'
import type { MutableRefObject, RefObject } from 'react'
import { useReducedMotion } from 'motion/react'
import {
  HUD_WAVE_SETTLE_THRESHOLD,
  HUD_WAVE_SMOOTHING_MS,
} from '../../config/HudScrollIndicator.config'
import type { HudScrollState } from '../../types/HudScrollIndicator.types'
import { applyHudWave } from '../../utils/applyHudWave'
import { clamp } from '../../utils/clamp'
import { getDocumentScrollRange } from '../../utils/getDocumentScrollRange'
import { getScrollState } from '../../utils/getScrollState'
import { scrollToProgress } from '../../utils/scrollToProgress'

interface UseHudScrollOptions {
  enabled: boolean
  rootRef: RefObject<HTMLElement | null>
  segmentsRef: MutableRefObject<Array<HTMLSpanElement | null>>
}

export function useHudScroll({
  enabled,
  rootRef,
  segmentsRef,
}: UseHudScrollOptions) {
  const reducedMotion = useReducedMotion() ?? false
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia?.('(min-width: 901px)').matches ?? false,
  )
  const [state, setState] = useState<HudScrollState>({
    isInteractionDisabled: false,
    isScrollable: false,
    percentage: 0,
  })
  const rangeRef = useRef(0)
  const targetProgressRef = useRef(0)
  const visualProgressRef = useRef(0)
  const interactionDisabledRef = useRef(false)
  const isDraggingRef = useRef(false)

  useEffect(() => {
    document.documentElement.classList.add('has-hud-scroll-indicator')
    return () =>
      document.documentElement.classList.remove('has-hud-scroll-indicator')
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia?.('(min-width: 901px)')
    if (!mediaQuery) return
    const updateDesktopState = () => setIsDesktop(mediaQuery.matches)

    updateDesktopState()
    mediaQuery.addEventListener('change', updateDesktopState)
    return () => mediaQuery.removeEventListener('change', updateDesktopState)
  }, [])

  useEffect(() => {
    if (!enabled || !isDesktop) return

    let animationFrame = 0
    let lastFrameTime: number | undefined
    let isPageVisible = !document.hidden

    const updateState = () => {
      const next = getScrollState(
        rangeRef.current,
        interactionDisabledRef.current,
      )
      setState((previous) =>
        previous.isInteractionDisabled === next.isInteractionDisabled &&
        previous.isScrollable === next.isScrollable &&
        previous.percentage === next.percentage
          ? previous
          : next,
      )
    }

    const apply = (progress: number) =>
      applyHudWave(rootRef.current, segmentsRef.current, progress)

    const updateTarget = () => {
      const range = rangeRef.current
      targetProgressRef.current =
        range === 0 ? 0 : clamp(window.scrollY / range, 0, 1)
      updateState()
    }

    const measure = () => {
      rangeRef.current = getDocumentScrollRange()
      updateTarget()
    }

    const runFrame = (time: number) => {
      animationFrame = 0
      if (!isPageVisible) return

      const target = targetProgressRef.current
      const previousTime = lastFrameTime ?? time
      const delta = time - previousTime
      lastFrameTime = time
      const next =
        isDraggingRef.current || reducedMotion
          ? target
          : target +
            (visualProgressRef.current - target) *
              Math.exp(-delta / HUD_WAVE_SMOOTHING_MS)

      visualProgressRef.current = next
      apply(next)

      if (
        !isDraggingRef.current &&
        !reducedMotion &&
        Math.abs(target - next) > HUD_WAVE_SETTLE_THRESHOLD
      ) {
        animationFrame = requestAnimationFrame(runFrame)
      } else {
        visualProgressRef.current = target
        apply(target)
        lastFrameTime = undefined
      }
    }

    const scheduleFrame = () => {
      if (!animationFrame && isPageVisible) {
        animationFrame = requestAnimationFrame(runFrame)
      }
    }

    const handleScroll = () => {
      updateTarget()
      scheduleFrame()
    }
    const handleResize = () => {
      measure()
      scheduleFrame()
    }
    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden
      if (!isPageVisible) {
        if (animationFrame) cancelAnimationFrame(animationFrame)
        animationFrame = 0
        return
      }
      measure()
      visualProgressRef.current = targetProgressRef.current
      apply(visualProgressRef.current)
    }
    const handleMutations = () => {
      const isInteractionDisabled =
        document.querySelector('.project-dialog') !== null
      if (interactionDisabledRef.current === isInteractionDisabled) return
      interactionDisabledRef.current = isInteractionDisabled
      updateState()
    }
    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? undefined
        : new ResizeObserver(handleResize)
    const mutationObserver =
      typeof MutationObserver === 'undefined'
        ? undefined
        : new MutationObserver(handleMutations)

    handleMutations()
    measure()
    visualProgressRef.current = targetProgressRef.current
    apply(visualProgressRef.current)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    resizeObserver?.observe(document.documentElement)
    mutationObserver?.observe(document.body, { childList: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      resizeObserver?.disconnect()
      mutationObserver?.disconnect()
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [enabled, isDesktop, reducedMotion, rootRef, segmentsRef])

  const setDragging = useCallback((isDragging: boolean) => {
    isDraggingRef.current = isDragging
  }, [])
  const setProgress = useCallback((progress: number) => {
    scrollToProgress(progress, rangeRef.current)
  }, [])
  const scrollBy = useCallback((amount: number) => {
    window.scrollTo({
      top: clamp(window.scrollY + amount, 0, rangeRef.current),
      behavior: 'instant',
    })
  }, [])
  const getTargetProgress = useCallback(() => targetProgressRef.current, [])

  return {
    ...state,
    isScrollable: enabled && isDesktop && state.isScrollable,
    getTargetProgress,
    scrollBy,
    setDragging,
    setProgress,
  }
}
