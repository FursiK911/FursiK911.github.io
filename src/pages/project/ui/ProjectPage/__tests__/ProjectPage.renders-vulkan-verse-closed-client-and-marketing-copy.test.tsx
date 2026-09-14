import { screen } from '@testing-library/react'
import { changeLanguage } from '@/shared/config/i18n'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'
import { ProjectPage } from '../ProjectPage'

it('renders Vulcan Verse as a closed PC MMORPG product case', async () => {
  await changeLanguage('en')
  renderWithProviders(<ProjectPage projectId="vulkan-verse" />)

  expect(screen.getByText('PC / Windows')).toBeInTheDocument()
  expect(screen.getByText('2025')).toBeInTheDocument()
  expect(screen.getAllByText(/100K\+/i).length).toBeGreaterThan(0)
  expect(screen.getByText(/open-world MMORPG/i)).toBeInTheDocument()
  expect(screen.getByText(/NFT assets/i)).toBeInTheDocument()
  expect(
    screen.getByText(
      'Developed and integrated gameplay mechanics for the Tartarus location into the main VulcanVerse client',
    ),
  ).toBeInTheDocument()
  expect(
    screen.getByText(
      'Implemented client-server interaction and multiplayer flows with Photon',
    ),
  ).toBeInTheDocument()
  expect(
    screen.queryByText(
      'Integrated Addressables, Zenject and UniTask into the production codebase',
    ),
  ).not.toBeInTheDocument()

  expect(
    screen.getByRole('button', { name: /DOWNLOAD · Client/i }),
  ).toBeDisabled()
  expect(
    screen.getByRole('button', {
      name: /official website has been removed/i,
    }),
  ).toBeInTheDocument()
  expect(
    screen.queryByRole('link', { name: /Habr Career/i }),
  ).not.toBeInTheDocument()
  expect(screen.getByRole('link', { name: /Gameplay video/i })).toHaveAttribute(
    'href',
    'https://www.youtube.com/watch?v=VYT8kBTMOf0',
  )
})
