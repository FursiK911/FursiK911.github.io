import { expect, it } from 'vitest'
import { resources } from '@/shared/config/i18n'

it('contains the SARiDU platform, action labels and product metrics in both locales', () => {
  expect(resources.ru.translation.platforms.platformPcAstraLinux).toBe(
    'ПК / Astra Linux',
  )
  expect(resources.en.translation.platforms.platformPcAstraLinux).toBe(
    'PC / Astra Linux',
  )
  expect(resources.ru.translation.projects.actionLabels).toEqual({
    sariduVkPost1: 'VK · публикация 1',
    sariduVkPost2: 'VK · публикация 2',
    vulkanVerseClient: 'Клиент',
  })
  expect(resources.en.translation.projects.actionLabels).toEqual({
    sariduVkPost1: 'VK · post 1',
    sariduVkPost2: 'VK · post 2',
    vulkanVerseClient: 'Client',
  })
  expect(resources.ru.translation.projects.sariduActuatorMetrics).toEqual([
    { value: '15+', label: 'сценариев неисправностей' },
    { value: '3', label: 'варианта оборудования' },
    { value: 'Single + Co-op', label: 'режимы взаимодействия' },
    {
      value: 'Training + Exam + Observer',
      label: 'режимы обучения, экзамена и наблюдения',
    },
  ])
  expect(resources.en.translation.projects.sariduActuatorMetrics).toEqual([
    { value: '15+', label: 'fault scenarios' },
    { value: '3', label: 'equipment variants' },
    { value: 'Single + Co-op', label: 'interaction modes' },
    {
      value: 'Training + Exam + Observer',
      label: 'training, examination and observer modes',
    },
  ])
})
