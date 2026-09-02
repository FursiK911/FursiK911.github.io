import { cx, styles } from '@/shared/styles'
import type { TypingTextProps } from './types/TypingText.types'

export function TypingText({
  text,
  reducedMotion = false,
  className = '',
}: TypingTextProps) {
  return (
    <span className={cx(styles.typingText, className)} aria-label={text}>
      <span aria-hidden="true">{text}</span>
      {!reducedMotion && (
        <span className={cx(styles.typingCursor)} aria-hidden="true">
          |
        </span>
      )}
    </span>
  )
}
