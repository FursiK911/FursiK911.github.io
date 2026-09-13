import { resources } from '../i18n'

it('contains the approved promotional MyChessVR copy in both locales', () => {
  expect(resources.ru.translation.projects.cardTeasers.mychessvr).toContain(
    'десятки шахматных головоломок',
  )
  expect(resources.ru.translation.projects.mychessvrDesc).toContain(
    'Classic, Rapid и Blitz',
  )
  expect(resources.ru.translation.projects.mychessvrDesc).toContain(
    'локально запущенный Stockfish',
  )
  expect(resources.en.translation.projects.cardTeasers.mychessvr).toContain(
    'dozens of chess puzzles',
  )
  expect(resources.en.translation.projects.mychessvrDesc).toContain(
    'Classic, Rapid and Blitz',
  )
  expect(resources.en.translation.projects.mychessvrDesc).toContain(
    'Stockfish running locally',
  )
})
