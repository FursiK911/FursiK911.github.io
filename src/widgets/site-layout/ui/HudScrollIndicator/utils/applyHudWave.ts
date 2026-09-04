import {
  HUD_SEGMENT_COUNT,
  HUD_TRACK_HEIGHT,
  HUD_TRACK_PADDING,
} from '../config/HudScrollIndicator.config'
import { getHudWaveAppearance } from './getHudWaveAppearance'

export function applyHudWave(
  root: HTMLElement | null,
  segments: Array<HTMLSpanElement | null>,
  progress: number,
) {
  if (!root) return

  const center = progress * (HUD_SEGMENT_COUNT - 1)
  const offset =
    HUD_TRACK_PADDING + progress * (HUD_TRACK_HEIGHT - HUD_TRACK_PADDING * 2)
  root.style.setProperty('--hud-progress-offset', `${offset}px`)

  segments.forEach((segment, index) => {
    if (!segment) return
    const appearance = getHudWaveAppearance(Math.abs(index - center))
    segment.style.setProperty('--hud-segment-scale', String(appearance.scale))
    segment.style.setProperty(
      '--hud-segment-opacity',
      String(appearance.opacity),
    )
    segment.style.setProperty('--hud-segment-glow', String(appearance.glow))
  })
}
