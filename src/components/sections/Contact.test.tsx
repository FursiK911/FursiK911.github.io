import { screen } from '@testing-library/react'
import { Contact } from './Contact'
import { renderWithProviders } from '../../test/render'

it('renders contact actions', () => {
  renderWithProviders(<Contact />)
  expect(screen.getByText(/Open to Unity|Открыт к Unity/)).toBeVisible()
  expect(
    screen.getByRole('link', { name: /fursik911@yandex.com/ }),
  ).toBeVisible()
  expect(screen.getByRole('link', { name: /@FursiK911/ })).toBeVisible()
})
