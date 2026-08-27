import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../test/render'
import { LoadingScreen } from './LoadingScreen'

it('renders boot lines while loading', () => {
  renderWithProviders(<LoadingScreen done={false} lines={['BOOT', 'READY']} />)
  expect(screen.getByText('BOOT')).toBeVisible()
})
