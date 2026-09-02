import { screen } from '@testing-library/react'
import { Hero } from '@/widgets/profile'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('renders the localized resume download button', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Hero typedRole="Unity Developer" reducedMotion />)
  const resumeLink = screen.getByRole('link', { name: 'СКАЧАТЬ РЕЗЮМЕ' })
  expect(resumeLink).toHaveClass('action-control', 'action-control--secondary')
  expect(resumeLink).toHaveAttribute('download')
  expect(resumeLink.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
})
