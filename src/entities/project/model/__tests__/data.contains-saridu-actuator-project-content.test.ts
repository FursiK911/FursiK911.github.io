import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('defines the SARiDU actuator VR trainer with its verified technical stack', () => {
  const project = projects.find((item) => item.id === 'saridu-actuator')

  expect(project).toMatchObject({
    titleKey: 'sariduActuator',
    category: ['unigine', 'xr-ar', 'multiplayer'],
    platformKey: 'platformVive',
    company: 'IT Tab',
    period: { from: '04.2023', to: '09.2023' },
    tech: expect.arrayContaining([
      'Unigine',
      'C#',
      '.NET 6',
      'UnigineSharp',
      'Newtonsoft.Json',
      'NAudio',
      'Custom UDP networking',
      'Custom VOIP',
      'HTC VIVE',
    ]),
  })
  expect(project?.pointsKey).toBe('sariduActuatorPoints')
})
