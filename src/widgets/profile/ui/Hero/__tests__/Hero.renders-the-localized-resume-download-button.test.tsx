import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { Hero } from '@/widgets/profile'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { changeLanguage } from '@/shared/config/i18n'
it('renders the localized hero actions with swapped variants and icons', async () => {
  await changeLanguage('ru')
  renderWithProviders(<Hero typedRole="Unity Developer" reducedMotion />)
  const actions = screen.getByRole('button', {
    name: 'СКАЧАТЬ РЕЗЮМЕ',
  }).parentElement
  const links = Array.from(actions?.querySelectorAll('a, button') ?? [])

  expect(links.map((link) => link.textContent?.trim())).toEqual([
    'СКАЧАТЬ РЕЗЮМЕ',
    'СМОТРЕТЬ ПРОЕКТЫ',
    'СВЯЗАТЬСЯ',
  ])
  expect(links[0]).toHaveClass('action-control', 'action-control--primary')
  expect(links[1]).toHaveClass('action-control', 'action-control--secondary')
  expect(links[2]).toHaveClass('action-control', 'action-control--text')

  const resumeLink = screen.getByRole('button', { name: 'СКАЧАТЬ РЕЗЮМЕ' })
  expect(resumeLink).toHaveAttribute('aria-haspopup', 'dialog')
  expect(resumeLink.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  const projectsIcon = screen
    .getByRole('link', { name: 'СМОТРЕТЬ ПРОЕКТЫ' })
    .querySelector('svg')
  const contactIcon = screen
    .getByRole('link', { name: 'СВЯЗАТЬСЯ' })
    .querySelector('svg')
  expect(projectsIcon).toHaveClass('tabler-icon-briefcase')
  expect(projectsIcon).toHaveAttribute('aria-hidden', 'true')
  expect(contactIcon).toHaveClass('tabler-icon-message-circle')
  expect(contactIcon).toHaveAttribute('aria-hidden', 'true')
  await userEvent.click(resumeLink)
  expect(screen.getByRole('dialog', { name: 'Выберите резюме' })).toBeVisible()
})
