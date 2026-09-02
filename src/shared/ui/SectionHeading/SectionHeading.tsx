import { cx, styles } from '@/shared/styles'
import '@/shared/styles/Shared.module.css'

export interface SectionHeadingProps {
  index: string
  title: string
}

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
