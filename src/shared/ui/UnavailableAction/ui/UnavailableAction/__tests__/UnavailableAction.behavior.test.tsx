import { screen } from '@testing-library/react'
import { render } from '@testing-library/react'
import { UnavailableAction } from '../UnavailableAction'

it('renders a disabled action with an accessible info overlay and tooltip', () => {
  const reason = 'The project website is closed.'

  render(<UnavailableAction reason={reason}>OPEN WEBSITE</UnavailableAction>)

  expect(screen.getByRole('button', { name: 'OPEN WEBSITE' })).toBeDisabled()
  expect(screen.getByRole('button', { name: reason })).toBeInTheDocument()
  expect(screen.getByRole('tooltip')).toHaveTextContent(reason)
})
