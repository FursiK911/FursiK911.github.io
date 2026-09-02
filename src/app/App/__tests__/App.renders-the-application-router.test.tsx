import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import App from '../App'
vi.mock('@/app/AppRouter', () => ({
  AppRouter: () => <div>Application router</div>,
}))
it('renders the application router', () => {
  render(<App />)
  expect(screen.getByText('Application router')).toBeInTheDocument()
})
