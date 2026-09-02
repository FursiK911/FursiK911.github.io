import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import type { ActionVariant } from '../../action/types/action.types'

export interface ActionLinkProps extends PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
> {
  variant?: ActionVariant
}
