import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { getProjectById } from '@/entities/project'
import { ProjectGallery } from '../ProjectGallery'

it('preserves the specified video timestamp and omits navigation for a single video', async () => {
  await changeLanguage('en')
  const user = userEvent.setup()
  const { container } = renderWithProviders(
    <ProjectGallery project={getProjectById('earth-dragons')!} />,
  )
  expect(
    screen.queryByRole('button', { name: 'Next media' }),
  ).not.toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Watch video' }))
  expect(container.querySelector('iframe')).toHaveAttribute(
    'src',
    expect.stringContaining('&start=483'),
  )
})
