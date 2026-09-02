import { screen } from '@testing-library/react'
import { ActionLink } from '../ActionLink'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
it('renders link attributes and the requested action variant', () => {
  renderWithProviders(
    <ActionLink
      href="/cv/resume.pdf"
      download
      target="_blank"
      rel="noreferrer"
      variant="primary"
    >
      Download resume
    </ActionLink>,
  )
  const link = screen.getByRole('link', { name: 'Download resume' })
  expect(link).toHaveClass('action-control', 'action-control--primary')
  expect(link).toHaveAttribute('href', '/cv/resume.pdf')
  expect(link).toHaveAttribute('download')
  expect(link).toHaveAttribute('target', '_blank')
  expect(link).toHaveAttribute('rel', 'noreferrer')
})
