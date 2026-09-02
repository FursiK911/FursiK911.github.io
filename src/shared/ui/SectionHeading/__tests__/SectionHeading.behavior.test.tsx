import { screen } from '@testing-library/react'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders indexed heading', () => {
  renderWithProviders(<SectionHeading index="01" title="Projects" />)
  expect(screen.getByText('01 // Projects')).toBeVisible()
})
