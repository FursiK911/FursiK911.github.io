import {
  IconWorld,
  IconDeviceGamepad2,
  IconDeviceMobile,
  IconDeviceVisionPro,
} from '@tabler/icons-react'
import type { Direction } from '../types/directions.types'

export const directions: Direction[] = [
  {
    id: 'web',
    icon: IconWorld,
    qualifierKey: 'webDescription',
    titleKey: 'web',
    metric: 8,
    metricLabelKey: 'projects',
    tools: ['React', 'TypeScript', 'Vue', 'Next.js'],
  },
  {
    id: 'game-engines',
    icon: IconDeviceGamepad2,
    qualifierKey: 'gameDescription',
    titleKey: 'gameEngines',
    metric: 15,
    metricLabelKey: 'projects',
    tools: ['Unity', 'C#', 'Unigine', 'WebGL'],
  },
  {
    id: 'mobile',
    icon: IconDeviceMobile,
    qualifierKey: 'mobileDescription',
    titleKey: 'mobile',
    metric: 5,
    metricLabelKey: 'projects',
    tools: ['Android', 'iOS', 'Unity', 'Vuforia'],
  },
  {
    id: 'xr',
    icon: IconDeviceVisionPro,
    titleKey: 'xr',
    metric: 10,
    metricLabelKey: 'projects',
    tools: ['OpenXR', 'SteamVR', 'Vuforia', 'OpenCV'],
    qualifierKey: 'xrQualifier',
  },
]
