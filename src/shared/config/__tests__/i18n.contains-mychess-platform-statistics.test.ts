import { expect, it } from 'vitest'
import { resources } from '@/shared/config/i18n'

it('contains the shared MyChess platform statistics in both locales', () => {
  expect(resources.ru.translation.projects.mychessMetrics).toEqual([
    { value: '121 577', label: 'зарегистрированных пользователей' },
    { value: '665 880', label: 'сыгранных партий' },
    { value: '459', label: 'созданных сообществ' },
  ])
  expect(resources.ru.translation.projects.mychessMobileMetrics).toEqual(
    resources.ru.translation.projects.mychessMetrics,
  )
  expect(resources.en.translation.projects.mychessMetrics).toEqual([
    { value: '121,577', label: 'registered users' },
    { value: '665,880', label: 'games played' },
    { value: '459', label: 'communities created' },
  ])
  expect(resources.en.translation.projects.mychessMobileMetrics).toEqual(
    resources.en.translation.projects.mychessMetrics,
  )
})
