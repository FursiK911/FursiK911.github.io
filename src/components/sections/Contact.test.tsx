import { screen } from '@testing-library/react'
import { Contact } from './Contact'
import { renderWithProviders } from '../../test/render'

it('renders contact actions', () => {
  renderWithProviders(<Contact />)
  expect(
    screen.getByRole('link', { name: /fursik911@yandex.com/ }),
  ).toBeVisible()
})
