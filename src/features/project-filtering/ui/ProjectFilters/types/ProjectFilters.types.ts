import type { filters } from '../../../model/data/project-filter-options.data'

export interface ProjectFiltersProps {
  active: (typeof filters)[number]
  onChange: (filter: (typeof filters)[number]) => void
}
