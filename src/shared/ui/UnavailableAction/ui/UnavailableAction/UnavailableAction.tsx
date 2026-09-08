import { useId } from 'react'
import { IconInfoCircle } from '@tabler/icons-react'
import { actionClassName } from '@/shared/ui/action/utils/actionClassName'
import styles from './styles/UnavailableAction.module.css'
import type { UnavailableActionProps } from './types/UnavailableAction.types'

export function UnavailableAction({
  children,
  reason,
  variant = 'secondary',
}: UnavailableActionProps) {
  const tooltipId = useId()

  return (
    <span className={styles.wrapper}>
      <button
        className={actionClassName(variant, styles.button)}
        type="button"
        disabled
        aria-describedby={tooltipId}
      >
        {children}
      </button>
      <button
        className={styles.overlay}
        type="button"
        aria-label={reason}
        aria-describedby={tooltipId}
      >
        <IconInfoCircle className={styles.icon} size={16} aria-hidden="true" />
        <span className={styles.tooltip} id={tooltipId} role="tooltip">
          {reason}
        </span>
      </button>
    </span>
  )
}
