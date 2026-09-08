import type { LiveCamTerminalToken } from '../types/LiveCamHud.types'

export function sliceLiveCamTerminalTokens(
  tokens: LiveCamTerminalToken[],
  typedLength: number,
) {
  let remaining = typedLength

  return tokens.flatMap((token) => {
    if (remaining <= 0) return []

    const text = token.text.slice(0, remaining)
    remaining -= text.length

    return text ? [{ ...token, text }] : []
  })
}
