import { screen } from '@testing-library/react'
import { Contact } from './Contact'
import { renderWithProviders } from '../../test/render'
import { changeLanguage } from '../../i18n'

it('renders contact actions', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Contact />)
  expect(screen.getByText(/Open to work|Открыт к задачам/)).toBeVisible()
  expect(
    screen.getByRole('link', { name: /fursik911@yandex.com/ }),
  ).toBeVisible()
  expect(screen.getByRole('link', { name: /@FursiK911/ })).toBeVisible()
  const resumeLink = screen.getByRole('link', { name: 'СКАЧАТЬ РЕЗЮМЕ' })
  expect(resumeLink).toHaveClass('action-control', 'action-control--primary')
  expect(resumeLink).toHaveAttribute('download')
  expect(resumeLink.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
})
