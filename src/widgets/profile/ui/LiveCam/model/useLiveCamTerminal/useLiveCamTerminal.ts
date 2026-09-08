import { useEffect, useRef, useState } from 'react'
import { liveCamTerminalConfig } from '../../config/liveCamHud.config'
import type {
  LiveCamTerminalEntry,
  LiveCamTerminalLine,
} from '../../types/LiveCamHud.types'
import type { UseLiveCamTerminalArgs } from '../../types/LiveCamTerminal.types'
import { getLiveCamTerminalEntry } from '../../utils/getLiveCamTerminalEntry'
import { getLiveCamTerminalText } from '../../utils/getLiveCamTerminalText'

export function useLiveCamTerminal({
  isInViewport,
  isLive,
  reducedMotion,
}: UseLiveCamTerminalArgs) {
  const [activeEntry, setActiveEntry] = useState<LiveCamTerminalEntry>(() =>
    getLiveCamTerminalEntry(0),
  )
  const [completedEntries, setCompletedEntries] = useState<
    LiveCamTerminalEntry[]
  >([])
  const [typedLength, setTypedLength] = useState(0)
  const activeEntryRef = useRef(activeEntry)
  const entryIndexRef = useRef(0)
  const typedLengthRef = useRef(typedLength)
  const shouldType = isInViewport && isLive && !reducedMotion

  useEffect(() => {
    if (!shouldType) return

    let timer: number | undefined

    function getTypingDelay() {
      return (
        liveCamTerminalConfig.typingMinimumMs +
        Math.round(
          Math.random() *
            (liveCamTerminalConfig.typingMaximumMs -
              liveCamTerminalConfig.typingMinimumMs),
        )
      )
    }
    function getPauseDelay() {
      return (
        liveCamTerminalConfig.pauseMinimumMs +
        Math.round(
          Math.random() *
            (liveCamTerminalConfig.pauseMaximumMs -
              liveCamTerminalConfig.pauseMinimumMs),
        )
      )
    }
    function scheduleTyping() {
      timer = window.setTimeout(typeNext, getTypingDelay())
    }
    function schedulePause() {
      timer = window.setTimeout(() => {
        const completedEntry = activeEntryRef.current
        setCompletedEntries((current) => [
          ...current.slice(-(liveCamTerminalConfig.completedLineLimit - 1)),
          completedEntry,
        ])
        entryIndexRef.current += 1
        const nextEntry = getLiveCamTerminalEntry(entryIndexRef.current)
        activeEntryRef.current = nextEntry
        typedLengthRef.current = 0
        setActiveEntry(nextEntry)
        setTypedLength(0)
        scheduleTyping()
      }, getPauseDelay())
    }
    function typeNext() {
      const activeText = getLiveCamTerminalText(activeEntryRef.current)
      typedLengthRef.current += 1
      setTypedLength(typedLengthRef.current)

      if (typedLengthRef.current >= activeText.length) {
        schedulePause()
        return
      }

      scheduleTyping()
    }

    scheduleTyping()

    return () => {
      if (timer !== undefined) window.clearTimeout(timer)
    }
  }, [shouldType])

  const completedLines: LiveCamTerminalLine[] = completedEntries.map(
    (entry) => ({ entry, typedLength: getLiveCamTerminalText(entry).length }),
  )

  return {
    activeLine: { entry: activeEntry, typedLength },
    completedLines,
  }
}
