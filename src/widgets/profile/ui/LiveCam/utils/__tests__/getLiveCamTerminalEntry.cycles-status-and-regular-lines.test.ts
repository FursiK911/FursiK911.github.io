import { getLiveCamTerminalEntry } from '../getLiveCamTerminalEntry'
import {
  liveCamTerminalEntries,
  liveCamTerminalStatusEntries,
} from '../../data/liveCamHud.data'
import { liveCamTerminalConfig } from '../../config/liveCamHud.config'

it('selects periodic status entries and cycles both terminal lists', () => {
  const interval = Math.round(1 / liveCamTerminalConfig.statusFrequency)

  expect(getLiveCamTerminalEntry(interval - 1)).toEqual(
    liveCamTerminalStatusEntries[0],
  )
  expect(getLiveCamTerminalEntry(0)).toEqual(liveCamTerminalEntries[0])
  expect(
    getLiveCamTerminalEntry(
      interval * (liveCamTerminalStatusEntries.length + 1) - 1,
    ),
  ).toEqual(liveCamTerminalStatusEntries[0])
  expect(getLiveCamTerminalEntry(1)).toEqual(liveCamTerminalEntries[1])
})
