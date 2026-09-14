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
    tools: ['React', 'Vue', 'TypeScript', 'Next.js', 'Nuxt.js', 'Mantine'],
  },
  {
    id: 'game-engines',
    icon: IconDeviceGamepad2,
    qualifierKey: 'gameDescription',
    titleKey: 'gameEngines',
    metric: 15,
    metricLabelKey: 'projects',
    tools: ['Unity', 'Unreal Engine', 'Godot'],
  },
  {
    id: 'mobile',
    icon: IconDeviceMobile,
    qualifierKey: 'mobileDescription',
    titleKey: 'mobile',
    metric: 5,
    metricLabelKey: 'projects',
    tools: ['React Native', 'Flutter'],
  },
  {
    id: 'xr',
    icon: IconDeviceVisionPro,
    titleKey: 'xr',
    metric: 10,
    metricLabelKey: 'projects',
    tools: [
      'OpenXR',
      'SteamVR',
      'XR Interaction Toolkit',
      'Meta XR SDK',
      'Vuforia',
    ],
    qualifierKey: 'xrQualifier',
  },
]
