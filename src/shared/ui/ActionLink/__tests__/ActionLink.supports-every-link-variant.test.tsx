import { screen } from '@testing-library/react'
import { ActionLink } from '../ActionLink'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
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
