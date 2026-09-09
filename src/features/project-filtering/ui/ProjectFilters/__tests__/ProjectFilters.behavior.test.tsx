import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProjectFilters } from '../ProjectFilters'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('emits selected project filter', async () => {
  const user = userEvent.setup()
  let selected = 'all'
  renderWithProviders(
    <ProjectFilters
      direction="all"
      directionCounts={{ all: 24, web: 7, 'games-apps': 14, 'vr-training': 3 }}
      technologies={['React']}
      technology={null}
      onDirectionChange={(value) => {
        selected = value
      }}
      onTechnologyChange={() => undefined}
    />,
  )
  await user.click(screen.getByRole('button', { name: /Web platforms\s*7/ }))
  expect(selected).toBe('web')
})
