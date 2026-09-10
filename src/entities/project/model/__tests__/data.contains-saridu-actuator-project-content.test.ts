import { expect, it } from 'vitest'
import { projects } from '@/entities/project'

it('defines the SARiDU actuator VR trainer with its verified technical stack', () => {
  const project = projects.find((item) => item.id === 'saridu-actuator')

  expect(project).toMatchObject({
    titleKey: 'sariduActuator',
    category: ['unigine', 'xr-ar', 'multiplayer'],
    platformKey: 'platformPcAstraLinux',
    company: 'IT Tab',
    period: { from: '04.2023', to: '09.2023' },
    card: { tags: ['Unigine', 'VR'] },
    tech: expect.arrayContaining([
      'Unigine',
      'C#',
      'NAudio',
      'Custom UDP networking',
      'Custom VOIP',
      'SteamVR',
      'Astra Linux',
    ]),
  })
  expect(project?.tech).not.toEqual(
    expect.arrayContaining([
      '.NET 6',
      'UnigineSharp',
      'Newtonsoft.Json',
      'HTC VIVE',
    ]),
  )
  expect(project?.actions).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        href: 'https://vk.ru/wall-217441512_342',
        labelKey: 'projects.actionLabels.sariduVkPost1',
      }),
      expect.objectContaining({
        href: 'https://vk.ru/wall-217441512_1118',
        labelKey: 'projects.actionLabels.sariduVkPost2',
      }),
    ]),
  )
  expect(project?.actions).not.toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        href: expect.stringContaining('report.rosatom.ru'),
      }),
    ]),
  )
  expect(project?.pointsKey).toBe('sariduActuatorPoints')
})
