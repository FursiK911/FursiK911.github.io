import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProjectFilters } from './ProjectFilters'
import { filters } from './project-filter-options'
import { renderWithProviders } from '../../test/render'

it('emits selected project filter', async () => {
  const user = userEvent.setup()
  let selected: (typeof filters)[number] = 'all'
  renderWithProviders(
    <ProjectFilters
      active="all"
      onChange={(value) => {
        selected = value
      }}
    />,
  )
  await user.click(screen.getByRole('tab', { name: 'WEB' }))
  expect(selected).toBe('web')
})
