import { screen } from '@testing-library/react'
import { Hero } from './Hero'
import { renderWithProviders } from '../../test/render'
import { changeLanguage } from '../../i18n'

it('renders hero portrait and role', () => {
  renderWithProviders(<Hero typedRole="Unity Developer" reducedMotion />)
  expect(screen.getByRole('img')).toHaveAttribute('alt')
  expect(screen.getByText('Unity Developer')).toBeVisible()
})

it('renders the localized resume download button', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Hero typedRole="Unity Developer" reducedMotion />)
  const resumeLink = screen.getByRole('link', { name: 'СКАЧАТЬ РЕЗЮМЕ' })
  expect(resumeLink).toHaveClass('action-control', 'action-control--secondary')
  expect(resumeLink).toHaveAttribute('download')
  expect(resumeLink.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
})
