import { resources } from '@/shared/config/i18n'

it('localizes the solo Unity project roles and end-to-end achievements', () => {
  const russian = resources.ru.translation
  const english = resources.en.translation

  expect(russian.roles.soloUnity).toBe('Unity Developer')
  expect(english.roles.soloUnity).toBe('Unity Developer')
  expect(russian.projects.mychessvrPoints).toContain(
    'Полный цикл разработки приложения — от нуля до релиза — выполнен самостоятельно',
  )
  expect(russian.projects.drillingPoints).toContain(
    'Полный цикл разработки приложения — от архитектуры и реализации до подготовки релизной версии — выполнен самостоятельно',
  )
  expect(english.projects.mychessvrPoints).toContain(
    'Owned the complete application lifecycle from scratch to release',
  )
  expect(english.projects.drillingPoints).toContain(
    'Owned the complete application lifecycle independently, from architecture and implementation to release preparation',
  )
})
