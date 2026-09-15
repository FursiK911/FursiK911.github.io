import { cx, styles } from '@/shared/styles'
import '@/shared/styles/Shared.css'
import type { SectionHeadingProps } from './types/SectionHeading.types'

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className={cx(styles.sectionHeading)}>
      <span className={cx(styles.eyebrow)}>
        {index} // {title}
      </span>
      <span className={cx(styles.headingRule)} />
    </div>
  )
}
