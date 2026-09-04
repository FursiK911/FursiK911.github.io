import { HUD_SEGMENT_WIDTHS } from '../config/HudScrollIndicator.config'
import type { HudWaveAppearance } from '../types/HudScrollIndicator.types'
import { smoothstep } from './smoothstep'

export function getHudWaveAppearance(distance: number): HudWaveAppearance {
  const index = Math.min(Math.floor(distance), HUD_SEGMENT_WIDTHS.length - 1)
  const nextIndex = Math.min(index + 1, HUD_SEGMENT_WIDTHS.length - 1)
  const startWidth = HUD_SEGMENT_WIDTHS[index]
  const endWidth = HUD_SEGMENT_WIDTHS[nextIndex]
  const width =
    startWidth + (endWidth - startWidth) * smoothstep(distance - index)
  const minimumWidth = HUD_SEGMENT_WIDTHS.at(-1) ?? 8
  const maximumWidth = HUD_SEGMENT_WIDTHS[0]
  const emphasis = (width - minimumWidth) / (maximumWidth - minimumWidth)

  return {
    glow: emphasis,
    opacity: 0.2 + emphasis * 0.8,
    scale: width / maximumWidth,
  }
}
