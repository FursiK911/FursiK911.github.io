import { render, screen } from '@testing-library/react'
import { TypingText } from '@/shared/ui/TypingText'
it('hides the cursor for reduced motion', () => {
  render(<TypingText text="Unity Developer" reducedMotion />)
  expect(screen.queryByText('|')).not.toBeInTheDocument()
})
