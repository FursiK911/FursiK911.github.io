import type { ActionVariant } from '../types/action.types'

export function actionClassName(variant: ActionVariant, className?: string) {
  return ['action-control', `action-control--${variant}`, className]
    .filter(Boolean)
    .join(' ')
}
