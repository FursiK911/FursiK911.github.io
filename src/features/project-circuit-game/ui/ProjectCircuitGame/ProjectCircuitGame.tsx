import { useInViewport } from '@mantine/hooks'
import { useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { getTilePorts } from '../../model/utils/getTilePorts'
import { useProjectCircuitGame } from '../../model/useProjectCircuitGame/useProjectCircuitGame'
import { CircuitGrid } from '../CircuitGrid/CircuitGrid'
import { PowerFlowMeter } from '../PowerFlowMeter/PowerFlowMeter'
import { PowerSource } from '../PowerSource/PowerSource'
import { ProjectCore } from '../ProjectCore/ProjectCore'
import styles from './styles/ProjectCircuitGame.module.css'

export function ProjectCircuitGame() {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion() ?? false
  const { ref, inViewport } = useInViewport<HTMLDivElement>()
  const game = useProjectCircuitGame()
  const expandedClass = game.phase !== 'playing' ? styles.solved : ''
  const getTileLabel = (index: number, tile: (typeof game.tiles)[number]) =>
    t('projectCircuitGame.rotateTile', {
      index: index + 1,
      type: t(`projectCircuitGame.types.${tile.type}`),
      directions: getTilePorts(tile)
        .map((direction) => t(`projectCircuitGame.directions.${direction}`))
        .join(', '),
    })

  return (
    <div
      ref={ref}
      className={`${styles.game} ${expandedClass}`}
      data-reduced-motion={reducedMotion || undefined}
      data-in-viewport={inViewport || undefined}
    >
      <div className={styles.heading}>
        <div>
          <span className={styles.kicker}>{t('projectCircuitGame.title')}</span>
          <p className={styles.instruction}>
            {t('projectCircuitGame.instruction')}
          </p>
        </div>
        <PowerFlowMeter value={game.evaluation.flowPercent} />
      </div>
      <button
        type="button"
        className={styles.mobileToggle}
        aria-expanded={game.expanded}
        aria-controls="project-circuit-board"
        onClick={game.toggleExpanded}
      >
        {game.expanded
          ? t('projectCircuitGame.collapse')
          : t('projectCircuitGame.expand')}
      </button>
      <div
        id="project-circuit-board"
        className={styles.board}
        data-expanded={game.expanded}
      >
        <PowerSource />
        <CircuitGrid
          tiles={game.tiles}
          visualRotations={game.visualRotations}
          poweredTileIndices={game.evaluation.poweredTileIndices}
          canRotate={game.canRotate}
          onRotate={game.rotateTile}
          getTileLabel={getTileLabel}
        />
        <ProjectCore powered={game.evaluation.isSolved} />
      </div>
      <div className={styles.footer}>
        <span role="status">
          {game.evaluation.isSolved
            ? t('projectCircuitGame.connected')
            : t('projectCircuitGame.routing')}
        </span>
        <div className={styles.actions}>
          {game.showNewRoute && (
            <button type="button" onClick={game.nextPuzzle}>
              {t('projectCircuitGame.newRoute')}
            </button>
          )}
          <button type="button" onClick={game.resetPuzzle}>
            {t('projectCircuitGame.reset')}
          </button>
        </div>
      </div>
    </div>
  )
}
