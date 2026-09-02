import { render, screen } from '@testing-library/react'
import { TypingText } from '@/shared/ui/TypingText'
it('renders text and a decorative cursor', () => {
  render(<TypingText text="Unity Developer" />)
  expect(screen.getByLabelText('Unity Developer')).toBeVisible()
  expect(screen.getByText('|')).toHaveAttribute('aria-hidden', 'true')
})
