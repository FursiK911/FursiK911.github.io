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
  },
  {
    id: 'game-engines',
    icon: IconDeviceGamepad2,
    qualifierKey: 'gameDescription',
    titleKey: 'gameEngines',
    metric: 15,
    metricLabelKey: 'projects',
  },
  {
    id: 'mobile',
    icon: IconDeviceMobile,
    qualifierKey: 'mobileDescription',
    titleKey: 'mobile',
    metric: 5,
    metricLabelKey: 'projects',
  },
  {
    id: 'xr',
    icon: IconDeviceVisionPro,
    titleKey: 'xr',
    metric: 10,
    metricLabelKey: 'projects',
    qualifierKey: 'xrQualifier',
  },
]
