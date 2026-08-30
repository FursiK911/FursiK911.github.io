import { useEffect, type MutableRefObject } from 'react'
import { portraitGlitchConfig, randomBetween } from '../config/portraitGlitch'
import {
  generatePortraitGlitchFrame,
  type PortraitGlitchFrame,
} from '../config/portraitGlitchFrame'

type LayerRef = { current: HTMLDivElement | null }

interface PortraitGlitchRefs {
  frameRef: LayerRef
  cellRefs: MutableRefObject<Array<HTMLDivElement | null>>
  gridSize: number
}

const hideCell = (cell: HTMLDivElement | null) => {
  if (!cell) return
  cell.style.opacity = '0'
  cell.style.transform = 'translate3d(0, 0, 0)'
}

function clearCells(refs: PortraitGlitchRefs) {
  refs.frameRef.current?.classList.remove('is-glitching')
  refs.cellRefs.current.forEach(hideCell)
}

function applyFrame(frame: PortraitGlitchFrame, refs: PortraitGlitchRefs) {
  refs.frameRef.current?.classList.add('is-glitching')
  const cellSize = 100 / refs.gridSize
  const sourceWidth = refs.frameRef.current?.clientWidth ?? 0
  const sourceHeight = refs.frameRef.current?.clientHeight ?? 0
  const active = new Set(frame.cells.map((cell) => cell.index))
  refs.cellRefs.current.forEach((cell, index) => {
    const data = frame.cells.find((item) => item.index === index)
    if (!data || !active.has(index)) return hideCell(cell)
    cell?.style.setProperty('left', `${data.column * cellSize}%`)
    cell?.style.setProperty('top', `${data.row * cellSize}%`)
    cell?.style.setProperty('width', `${cellSize}%`)
    cell?.style.setProperty('height', `${cellSize}%`)
    cell?.style.setProperty('opacity', `${data.opacity}`)
    cell?.style.setProperty(
      'transform',
      `translate3d(${data.offsetX}px, ${data.offsetY}px, 0) scale(${data.scale})`,
    )
    cell?.style.setProperty(
      '--cell-source-x',
      `${-(data.sourceX / refs.gridSize) * sourceWidth}px`,
    )
    cell?.style.setProperty(
      '--cell-source-y',
      `${-(data.sourceY / refs.gridSize) * sourceHeight}px`,
    )
    cell?.style.setProperty('--cell-source-width', `${sourceWidth}px`)
    cell?.style.setProperty('--cell-source-height', `${sourceHeight}px`)
  })
}

export function usePortraitGlitch(
  active: boolean,
  reducedMotion: boolean,
  src: string,
  refs: PortraitGlitchRefs,
) {
  useEffect(() => {
    if (!active || reducedMotion) return
    let schedulerTimeout = 0
    let burstTimeout = 0
    let tickTimeout = 0
    let cancelled = false
    let firstBurst = true
    const frameCache = Array.from({ length: 50 }, () =>
      generatePortraitGlitchFrame(refs.gridSize),
    )
    const schedule = () => {
      const pause = firstBurst
        ? randomBetween(
            portraitGlitchConfig.firstMinInterval,
            portraitGlitchConfig.firstMaxInterval,
          )
        : randomBetween(
            portraitGlitchConfig.minInterval,
            portraitGlitchConfig.maxInterval,
          )
      firstBurst = false
      schedulerTimeout = window.setTimeout(() => {
        if (cancelled) return
        const burstDuration = randomBetween(
          portraitGlitchConfig.burstMinDuration,
          portraitGlitchConfig.burstMaxDuration,
        )
        let burstEnded = false
        const tick = () => {
          if (cancelled || burstEnded) return
          const frame =
            frameCache[Math.floor(Math.random() * frameCache.length)]
          applyFrame(frame, refs)
          tickTimeout = window.setTimeout(
            tick,
            randomBetween(
              portraitGlitchConfig.cellMinInterval,
              portraitGlitchConfig.cellMaxInterval,
            ),
          )
        }
        tick()
        burstTimeout = window.setTimeout(() => {
          if (!cancelled) {
            burstEnded = true
            clearCells(refs)
            schedule()
          }
        }, burstDuration)
      }, pause)
    }
    schedule()
    return () => {
      cancelled = true
      window.clearTimeout(schedulerTimeout)
      window.clearTimeout(burstTimeout)
      window.clearTimeout(tickTimeout)
      clearCells(refs)
    }
  }, [active, reducedMotion, refs, src])
}
