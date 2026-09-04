export interface HudScrollIndicatorProps {
  sectionLabel: string
  enabled?: boolean
}

export interface HudScrollState {
  isInteractionDisabled: boolean
  isScrollable: boolean
  percentage: number
}

export interface HudWaveAppearance {
  glow: number
  opacity: number
  scale: number
}
