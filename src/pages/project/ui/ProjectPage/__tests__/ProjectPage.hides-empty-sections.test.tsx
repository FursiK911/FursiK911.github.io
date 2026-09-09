import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectPage } from '../ProjectPage'
it('omits empty media and achievement sections while retaining a project cover and contribution', async () => {
  await changeLanguage('en')
  const { container } = renderWithProviders(<ProjectPage projectId="korobka" />)
  expect(container.querySelector('#media')).toBeNull()
  expect(container.querySelector('#achievements')).toBeNull()
  expect(container.querySelector('#contribution')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Back/ })).toHaveAttribute(
    'href',
    '/#projects',
  )
})
