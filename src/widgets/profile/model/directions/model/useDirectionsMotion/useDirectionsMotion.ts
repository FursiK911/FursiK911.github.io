import { useEffect, useRef, useState } from 'react'
import {
  DIRECTIONS_ENTRANCE_DURATION_MS,
  DIRECTION_SCAN_DURATION_MS,
  DIRECTION_SCAN_INTERVAL_MS,
} from '../../config/directionsMotion.config'
import type {
  UseDirectionsMotionParams,
  UseDirectionsMotionResult,
} from './types/useDirectionsMotion.types'

export function useDirectionsMotion({
  cardCount,
  entered,
  reducedMotion,
}: UseDirectionsMotionParams): UseDirectionsMotionResult {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [hasEntered, setHasEntered] = useState(reducedMotion)
  const [scanningCardIndex, setScanningCardIndex] = useState<number | null>(
    null,
  )

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    if (typeof IntersectionObserver === 'undefined') {
      const frame = window.requestAnimationFrame(() => setIsInView(true))
      return () => window.cancelAnimationFrame(frame)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.25)
      },
      { threshold: 0.25 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!reducedMotion && (!entered || !isInView)) return

    const frame = window.requestAnimationFrame(() => setHasEntered(true))
    return () => window.cancelAnimationFrame(frame)
  }, [entered, isInView, reducedMotion])

  useEffect(() => {
    if (reducedMotion || !hasEntered || !isInView || cardCount === 0) {
      return
    }

    let currentIndex = 0
    let scanTimeout: ReturnType<typeof setTimeout> | undefined
    let clearTimeout: ReturnType<typeof setTimeout> | undefined

    const runScan = () => {
      setScanningCardIndex(currentIndex)
      currentIndex = (currentIndex + 1) % cardCount
      clearTimeout = window.setTimeout(
        () => setScanningCardIndex(null),
        DIRECTION_SCAN_DURATION_MS,
      )
      scanTimeout = window.setTimeout(runScan, DIRECTION_SCAN_INTERVAL_MS)
    }

    scanTimeout = window.setTimeout(runScan, DIRECTIONS_ENTRANCE_DURATION_MS)

    return () => {
      window.clearTimeout(scanTimeout)
      window.clearTimeout(clearTimeout)
      setScanningCardIndex(null)
    }
  }, [cardCount, hasEntered, isInView, reducedMotion])

  return { hasEntered, scanningCardIndex, sectionRef }
}
