import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { renderWithProviders } from './test/render'

describe('App', () => {
  it('renders the Vite starter demo and increments its counter', async () => {
    const user = userEvent.setup()

    renderWithProviders(<App />)

    const counter = screen.getByRole('button', { name: 'Count is 0' })
    await user.click(counter)

    expect(counter).toHaveTextContent('Count is 1')
    expect(screen.getByRole('heading', { name: 'Get started' })).toBeVisible()
  })
})
