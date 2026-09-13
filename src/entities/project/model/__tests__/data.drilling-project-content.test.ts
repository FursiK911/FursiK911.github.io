import { projects } from '@/entities/project'

it('defines the drilling training simulator as a 2024 PC Windows project', () => {
  const drilling = projects.find((project) => project.id === 'drilling-vr')

  expect(drilling).toMatchObject({
    titleKey: 'drilling',
    platformKey: 'platformPcWindows',
    period: { from: '2024', to: '2024' },
    tech: expect.arrayContaining([
      'SteamVR',
      'Netcode for GameObjects',
      'Final IK',
    ]),
    descriptionKey: 'drillingDesc',
    pointsKey: 'drillingPoints',
  })
})
