import type { PropsWithChildren } from 'react'
import type { ActionVariant } from '@/shared/ui/action/types/action.types'

export interface UnavailableActionProps extends PropsWithChildren {
  reason: string
  variant?: ActionVariant
}
