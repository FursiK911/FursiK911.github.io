import type { Direction } from '../types/directions.types'

export const directions: Direction[] = [
  {
    id: 'web',
    titleKey: 'web',
    metric: 8,
    metricLabelKey: 'projects',
    tools: ['React', 'TypeScript', 'Vue', 'Next.js'],
  },
  {
    id: 'game-engines',
    titleKey: 'gameEngines',
    metric: 15,
    metricLabelKey: 'projects',
    tools: ['Unity', 'C#', 'Unigine', 'WebGL'],
  },
  {
    id: 'mobile',
    titleKey: 'mobile',
    metric: 5,
    metricLabelKey: 'projects',
    tools: ['Android', 'iOS', 'Unity', 'Vuforia'],
  },
  {
    id: 'xr',
    titleKey: 'xr',
    metric: 10,
    metricLabelKey: 'projects',
    tools: ['OpenXR', 'SteamVR', 'Vuforia', 'OpenCV'],
    qualifierKey: 'xrQualifier',
  },
]
