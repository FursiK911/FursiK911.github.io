import { useTranslation } from 'react-i18next'
import { filters } from './project-filter-options'

export interface ProjectFiltersProps {
  active: (typeof filters)[number]
  onChange: (filter: (typeof filters)[number]) => void
}

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  const { t } = useTranslation()
  return (
    <div className="filter-row" role="tablist" aria-label="Project filters">
      {filters.map((item) => (
        <button
          type="button"
          role="tab"
          aria-selected={active === item}
          className={active === item ? 'selected' : ''}
          onClick={() => onChange(item)}
          key={item}
        >
          {t(`projects.${item}`)}
        </button>
      ))}
    </div>
  )
}
