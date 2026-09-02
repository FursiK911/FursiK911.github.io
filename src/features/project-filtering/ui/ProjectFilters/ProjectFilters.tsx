import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { filters } from '@/features/project-filtering'
import type { ProjectFiltersProps } from './types/ProjectFilters.types'

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  const { t } = useTranslation()
  return (
    <div
      className={cx(styles.filterRow)}
      role="group"
      aria-label="Project filters"
    >
      {filters.map((item) => (
        <button
          type="button"
          aria-pressed={active === item}
          className={active === item ? cx(styles.selected) : undefined}
          onClick={() => onChange(item)}
          key={item}
        >
          {t(`projects.${item}`)}
        </button>
      ))}
    </div>
  )
}
