import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import { actionClassName, type ActionVariant } from '../action/action.types'

export interface ActionLinkProps extends PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement>
> {
  variant?: ActionVariant
}

export function ActionLink({
  children,
  className,
  variant = 'secondary',
  ...props
}: ActionLinkProps) {
  return (
    <a {...props} className={actionClassName(variant, className)}>
      {children}
    </a>
  )
}
