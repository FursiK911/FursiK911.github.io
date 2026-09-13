import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectPage } from '../ProjectPage'

it('renders Frieze marketing content, downloads metric and a single project year', async () => {
  await changeLanguage('ru')
  renderWithProviders(<ProjectPage projectId="frieze-viewing-room" />)

  expect(
    screen.getByText(/международную арт-ярмарку в персональную галерею/i),
  ).toBeInTheDocument()
  expect(screen.getByText('10K+')).toBeInTheDocument()
  expect(screen.queryByText('проект в составе FGP')).not.toBeInTheDocument()
  expect(screen.queryByText('мобильные платформы')).not.toBeInTheDocument()
  expect(screen.queryByText('мобильный стек')).not.toBeInTheDocument()
  expect(screen.queryByText('AR-платформы')).not.toBeInTheDocument()
  expect(
    screen.queryByText('галерей на старте проекта'),
  ).not.toBeInTheDocument()
  expect(screen.getAllByText('2021').length).toBeGreaterThan(0)
  expect(screen.queryByText('2021 — 2021')).not.toBeInTheDocument()
  expect(
    screen.getByText(/кроссплатформенные мобильные интерфейсы/i),
  ).toBeInTheDocument()
})
