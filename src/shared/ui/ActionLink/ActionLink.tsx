import { actionClassName } from '../action/utils/actionClassName'
import type { ActionLinkProps } from './types/ActionLink.types'

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
