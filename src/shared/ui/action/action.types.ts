export type ActionVariant =
  'primary' | 'secondary' | 'text' | 'action' | 'inline'

export function actionClassName(variant: ActionVariant, className?: string) {
  return ['action-control', `action-control--${variant}`, className]
    .filter(Boolean)
    .join(' ')
}
