import userEvent from '@testing-library/user-event'
import { act, screen } from '@testing-library/react'
import { Header } from '@/widgets/site-layout'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
})
it('opens the localized resume chooser from the header', async () => {
  await changeLanguage('ru')
  const { rerender } = renderWithProviders(
    <Header
      active="projects"
      onLanguage={() => undefined}
      typedRole="Unity Developer"
      reducedMotion
    />,
  )
  const resumeLink = screen.getByRole('button', { name: 'СКАЧАТЬ РЕЗЮМЕ' })
  await userEvent.click(resumeLink)
  expect(screen.getByRole('dialog', { name: 'Выберите резюме' })).toBeVisible()
  await userEvent.click(
    screen.getByRole('button', { name: 'Закрыть выбор резюме' }),
  )
  expect(resumeLink).toHaveClass(
    'action-control',
    'action-control--primary',
    'resume-link',
  )
  expect(resumeLink.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  await act(() => changeLanguage('en'))
  rerender(
    <Header
      active="projects"
      onLanguage={() => undefined}
      typedRole="Unity Developer"
      reducedMotion
    />,
  )
  expect(
    screen.getByRole('button', { name: 'DOWNLOAD CV' }),
  ).toBeInTheDocument()
})
