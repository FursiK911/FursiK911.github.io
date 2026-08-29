import { render, screen } from '@testing-library/react'
import { TypingText } from './TypingText'

it('renders text and a decorative cursor', () => {
  render(<TypingText text="Unity Developer" />)
  expect(screen.getByLabelText('Unity Developer')).toBeVisible()
  expect(screen.getByText('|')).toHaveAttribute('aria-hidden', 'true')
})

it('hides the cursor for reduced motion', () => {
  render(<TypingText text="Unity Developer" reducedMotion />)
  expect(screen.queryByText('|')).not.toBeInTheDocument()
})
