import { screen } from '@testing-library/react'
import { ActionLink } from './ActionLink'
import { renderWithProviders } from '../../test/render'

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

it('supports every link variant', () => {
  const variants = ['secondary', 'text', 'inline'] as const
  renderWithProviders(
    <>
      {variants.map((variant) => (
        <ActionLink href="#" key={variant} variant={variant}>
          {variant}
        </ActionLink>
      ))}
    </>,
  )

  variants.forEach((variant) => {
    expect(screen.getByRole('link', { name: variant })).toHaveClass(
      'action-control--' + variant,
    )
  })
})
