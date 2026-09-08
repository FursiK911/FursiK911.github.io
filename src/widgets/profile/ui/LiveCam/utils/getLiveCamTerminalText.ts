import type { LiveCamTerminalEntry } from '../types/LiveCamHud.types'

export function getLiveCamTerminalText(entry: LiveCamTerminalEntry) {
  return entry.tokens.map(({ text }) => text).join('')
}
