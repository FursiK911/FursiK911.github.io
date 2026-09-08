import { liveCamTerminalConfig } from '../config/liveCamHud.config'
import {
  liveCamTerminalEntries,
  liveCamTerminalStatusEntries,
} from '../data/liveCamHud.data'

export function getLiveCamTerminalEntry(index: number) {
  const statusInterval = Math.round(1 / liveCamTerminalConfig.statusFrequency)

  if ((index + 1) % statusInterval === 0) {
    return liveCamTerminalStatusEntries[
      Math.floor(index / statusInterval) % liveCamTerminalStatusEntries.length
    ]
  }

  return liveCamTerminalEntries[index % liveCamTerminalEntries.length]
}
