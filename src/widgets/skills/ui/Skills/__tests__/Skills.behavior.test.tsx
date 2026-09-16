import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { changeLanguage } from '@/shared/config/i18n'
import { Skills } from '../Skills'
import { renderWithProviders } from '@/shared/test/utils/renderWithProviders'

it('renders the curated grouped technology stack and keeps its tags keyboard-accessible', async () => {
  const user = userEvent.setup()
  await changeLanguage('en')
  renderWithProviders(<Skills />)

  expect(
    screen
      .getAllByRole('heading', { level: 3 })
      .map(({ textContent }) => textContent),
  ).toEqual(['Web', 'Game Development', 'Mobile', 'XR'])

  const expectedSkills = [
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'Nuxt.js',
    'Vue.js',
    'Redux Toolkit',
    'TanStack Query',
    'GraphQL',
    'Mantine',
    'Tailwind CSS',
    'Vite',
    'Zod',
    'WebRTC',
    'Socket.IO',
    'Unity',
    'C#',
    'Unreal Engine',
    'Godot',
    'Unigine',
    'Addressables',
    'DOTween',
    'Zenject',
    'UniTask',
    'Photon',
    'Mirror',
    'Netcode for GameObjects',
    'PlayFab',
    'WebGL',
    'React Native',
    'Flutter',
    'Dart',
    'Firebase',
    'ARKit',
    'ARCore',
    'OpenXR',
    'SteamVR',
    'Meta XR SDK',
    'XR Interaction Toolkit',
    'Vuforia',
    'OpenCV',
    'Final IK',
    'Meta Quest',
  ]
  const skillButtons = screen.getAllByRole('button')

  expect(skillButtons.map(({ textContent }) => textContent)).toEqual(
    expectedSkills,
  )
  expect(new Set(skillButtons.map(({ textContent }) => textContent)).size).toBe(
    43,
  )

  await user.tab()
  expect(screen.getByRole('button', { name: 'React' })).toHaveFocus()
  expect(screen.getByRole('button', { name: 'React' }).className).toContain(
    'skillActive',
  )
})
