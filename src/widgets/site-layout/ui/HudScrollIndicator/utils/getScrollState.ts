import type { HudScrollState } from '../types/HudScrollIndicator.types'
import { clamp } from './clamp'

export function getScrollState(
  range: number,
  isInteractionDisabled: boolean,
): HudScrollState {
  const progress = range === 0 ? 0 : clamp(window.scrollY / range, 0, 1)
  const percentage = Math.round(progress * 100)

  return {
    isInteractionDisabled,
    isScrollable: range > 0,
    percentage,
  }
}
