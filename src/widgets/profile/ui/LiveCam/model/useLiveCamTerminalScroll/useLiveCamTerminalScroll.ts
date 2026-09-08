import { useLayoutEffect } from 'react'
import type { UseLiveCamTerminalScrollArgs } from '../../types/LiveCamTerminal.types'

export function useLiveCamTerminalScroll({
  lineRef,
  typedLength,
}: UseLiveCamTerminalScrollArgs) {
  useLayoutEffect(() => {
    const line = lineRef.current
    if (!line || typedLength === 0) return

    if (typeof line.scrollTo !== 'function') {
      line.scrollLeft = line.scrollWidth
      return
    }

    line.scrollTo({ behavior: 'smooth', left: line.scrollWidth })
  }, [lineRef, typedLength])
}
