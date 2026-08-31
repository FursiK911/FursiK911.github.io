import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { actionClassName, type ActionVariant } from './action.types'

export interface ActionButtonProps extends PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> {
  variant?: ActionVariant
}

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
