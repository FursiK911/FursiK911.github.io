import { act, screen } from '@testing-library/react'
import { Header } from '@/widgets/site-layout'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
})
it('renders the localized Unity resume link from the header', async () => {
  await changeLanguage('ru')
  const { rerender } = renderWithProviders(
    <Header
      active="projects"
      onLanguage={() => undefined}
      typedRole="Unity Developer"
      reducedMotion
    />,
  )
  const resumeLink = screen.getByRole('link', {
    name: 'Скачать Unity Developer в PDF',
  })
  expect(resumeLink).toHaveClass(
    'action-control',
    'action-control--primary',
    'resume-link',
  )
  expect(resumeLink).toHaveAttribute(
    'href',
    '/cv/Dmitry-Fursov-Unity-Developer-RU.pdf',
  )
  expect(resumeLink).toHaveAttribute('download')
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
    screen.getByRole('link', { name: 'Download Unity Developer PDF' }),
  ).toBeInTheDocument()
})
