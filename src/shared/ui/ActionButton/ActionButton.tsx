import { actionClassName } from '../action/utils/actionClassName'
import type { ActionButtonProps } from './types/ActionButton.types'

export function ActionButton({
  children,
  className,
  variant = 'action',
  ...props
}: ActionButtonProps) {
  return (
    <button {...props} className={actionClassName(variant, className)}>
      {children}
    </button>
  )
}
