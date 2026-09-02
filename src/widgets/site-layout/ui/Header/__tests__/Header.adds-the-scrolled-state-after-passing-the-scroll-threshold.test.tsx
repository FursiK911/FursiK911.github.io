import { act, screen } from '@testing-library/react'
import { Header } from '@/widgets/site-layout'
import { renderWithProviders } from '@/shared/test/render'
import { changeLanguage } from '@/shared/config/i18n'
beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
})
it('adds the scrolled state after passing the scroll threshold', async () => {
  await changeLanguage('ru')
  renderWithProviders(
    <Header
      active="projects"
      onLanguage={() => undefined}
      typedRole="Unity Developer"
      reducedMotion
    />,
  )
  const header = screen.getByRole('banner')
  expect(header).not.toHaveClass('is-scrolled')
  act(() => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 9 })
    window.dispatchEvent(new Event('scroll'))
  })
  expect(header).toHaveClass('is-scrolled')
  act(() => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    window.dispatchEvent(new Event('scroll'))
  })
  expect(header).not.toHaveClass('is-scrolled')
})
