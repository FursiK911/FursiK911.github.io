import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import type { ActionVariant } from '../../action/types/action.types'

export interface ActionButtonProps extends PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> {
  variant?: ActionVariant
}
