export type Direction = {
  id: 'web' | 'game-engines' | 'mobile' | 'xr'
  titleKey: string
  qualifierKey?: string
  metric: number
  metricLabelKey: string
  tools: string[]
}
