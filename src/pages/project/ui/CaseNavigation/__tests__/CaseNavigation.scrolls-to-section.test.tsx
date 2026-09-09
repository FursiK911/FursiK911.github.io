import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { CaseNavigation } from '../CaseNavigation'
it('scrolls to the selected project section without changing the route', async () => {
  await changeLanguage('en')
  const scroll = vi.fn()
  const target = document.createElement('section')
  target.id = 'contribution'
  target.scrollIntoView = scroll
  document.body.append(target)
  const { unmount } = renderWithProviders(
    <CaseNavigation
      sections={[
        { id: 'overview', label: 'Overview' },
        { id: 'contribution', label: 'My contribution' },
      ]}
    />,
  )
  await userEvent.click(screen.getByRole('link', { name: 'My contribution' }))
  expect(scroll).toHaveBeenCalledWith(
    expect.objectContaining({ block: 'start' }),
  )
  unmount()
  target.remove()
})
