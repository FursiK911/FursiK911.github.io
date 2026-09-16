import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { projects } from '@/entities/project'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectDetails } from '../ProjectDetails'

it('renders an available non-external action and restores focus on unmount', async () => {
  await changeLanguage('en')
  const returnFocus = document.createElement('button')
  const focus = vi.spyOn(returnFocus, 'focus')
  const project = {
    ...projects[0],
    roleKey: undefined,
    actions: [
      {
        type: 'live' as const,
        label: 'Live demo',
        href: 'https://example.com',
      },
    ],
  }
  const { unmount } = renderWithProviders(
    <ProjectDetails
      project={project}
      returnFocus={returnFocus}
      onClose={() => undefined}
    />,
  )

  expect(screen.getByRole('link', { name: /open live demo/i })).toHaveAttribute(
    'href',
    'https://example.com',
  )
  expect(screen.getByText('—')).toBeInTheDocument()
  unmount()
  expect(focus).toHaveBeenCalledOnce()
})
