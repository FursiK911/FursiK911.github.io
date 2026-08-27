import { screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'
import { renderWithProviders } from '../../test/render'

it('renders indexed heading', () => {
  renderWithProviders(<SectionHeading index="01" title="Projects" />)
  expect(screen.getByText('01 // Projects')).toBeVisible()
})
