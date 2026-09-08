import type { Icon } from '@tabler/icons-react'

export type Direction = {
  id: 'web' | 'game-engines' | 'mobile' | 'xr'
  icon: Icon
  titleKey: string
  qualifierKey?: string
  metric: number
  metricLabelKey: string
  tools: string[]
}
