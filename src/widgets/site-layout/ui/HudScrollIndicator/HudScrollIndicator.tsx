import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import {
  HUD_KEYBOARD_STEP,
  HUD_SEGMENT_COUNT,
} from './config/HudScrollIndicator.config'
import { useHudScroll } from './model/useHudScroll/useHudScroll'
import './styles/HudScrollIndicator.module.css'
import type { HudScrollIndicatorProps } from './types/HudScrollIndicator.types'
import { getPointerProgress } from './utils/getPointerProgress'

export function HudScrollIndicator({
  enabled = true,
  sectionLabel,
}: HudScrollIndicatorProps) {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)
  const controlRef = useRef<HTMLButtonElement>(null)
  const segmentsRef = useRef<Array<HTMLSpanElement | null>>([])
  const pointerBoundsRef = useRef<DOMRect | null>(null)
  const pointerGrabOffsetRef = useRef(0)
  const pointerIdRef = useRef<number | null>(null)
  const suppressClickRef = useRef(false)
  const {
    isInteractionDisabled,
    isScrollable,
    percentage,
    getTargetProgress,
    scrollBy,
    setDragging,
    setProgress,
  } = useHudScroll({ enabled, rootRef, segmentsRef })
  const disabled = !isScrollable || isInteractionDisabled

  useEffect(
    () => () => {
      const pointerId = pointerIdRef.current
      if (
        pointerId !== null &&
        controlRef.current?.hasPointerCapture(pointerId)
      ) {
        controlRef.current.releasePointerCapture(pointerId)
      }
    },
    [],
  )

  const updateFromPointer = (clientY: number) => {
    const bounds = pointerBoundsRef.current
    if (!bounds) return
    setProgress(
      getPointerProgress(clientY, bounds) - pointerGrabOffsetRef.current,
    )
  }

  return (
    <aside
      className="hud-scroll-indicator"
      ref={rootRef}
      aria-hidden={!isScrollable}
      data-disabled={disabled}
      data-hidden={!isScrollable}
    >
      <span className="hud-scroll-indicator__label">SYS_SCROLL</span>
      <button
        ref={controlRef}
        className="hud-scroll-indicator__control"
        type="button"
        role="scrollbar"
        aria-controls="page-content"
        aria-label={t('hud.ariaLabel')}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
        aria-valuetext={t('hud.valueText', {
          percentage,
          section: sectionLabel,
        })}
        aria-disabled={disabled}
        disabled={disabled}
        onClick={(event) => {
          if (suppressClickRef.current) {
            suppressClickRef.current = false
            return
          }
          pointerBoundsRef.current = event.currentTarget.getBoundingClientRect()
          pointerGrabOffsetRef.current = 0
          updateFromPointer(event.clientY)
          pointerBoundsRef.current = null
        }}
        onPointerDown={(event) => {
          pointerBoundsRef.current = event.currentTarget.getBoundingClientRect()
          pointerGrabOffsetRef.current =
            getPointerProgress(event.clientY, pointerBoundsRef.current) -
            getTargetProgress()
          pointerIdRef.current = event.pointerId
          suppressClickRef.current = true
          setDragging(true)
          event.currentTarget.setPointerCapture(event.pointerId)
          updateFromPointer(event.clientY)
        }}
        onPointerMove={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            updateFromPointer(event.clientY)
          }
        }}
        onPointerUp={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId)
          }
          pointerBoundsRef.current = null
          pointerIdRef.current = null
          pointerGrabOffsetRef.current = 0
          setDragging(false)
        }}
        onPointerCancel={(event) => {
          if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId)
          }
          pointerBoundsRef.current = null
          pointerIdRef.current = null
          pointerGrabOffsetRef.current = 0
          setDragging(false)
        }}
        onKeyDown={(event) => {
          const pageStep = window.innerHeight
          const direction =
            event.key === 'ArrowUp' ? -1 : event.key === 'ArrowDown' ? 1 : 0
          const amount =
            direction * HUD_KEYBOARD_STEP ||
            (event.key === 'PageUp'
              ? -pageStep
              : event.key === 'PageDown'
                ? pageStep
                : 0)

          if (event.key === 'Home') setProgress(0)
          else if (event.key === 'End') setProgress(1)
          else if (amount) scrollBy(amount)
          else return
          event.preventDefault()
        }}
      >
        <span className="hud-scroll-indicator__segments" aria-hidden="true">
          {Array.from({ length: HUD_SEGMENT_COUNT }, (_, index) => (
            <span
              key={index}
              className="hud-scroll-indicator__segment"
              ref={(node) => {
                segmentsRef.current[index] = node
              }}
            />
          ))}
        </span>
        <span className="hud-scroll-indicator__percentage">
          {String(percentage).padStart(3, '0')}%
        </span>
      </button>
      <span className="hud-scroll-indicator__section" key={sectionLabel}>
        {sectionLabel}
      </span>
    </aside>
  )
}
