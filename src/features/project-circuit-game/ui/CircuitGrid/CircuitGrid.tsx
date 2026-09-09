import { useTranslation } from 'react-i18next'
import { CircuitTile } from '../CircuitTile/CircuitTile'
import type { CircuitGridProps } from './types/CircuitGrid.types'
import styles from './styles/CircuitGrid.module.css'

export function CircuitGrid({
  tiles,
  visualRotations,
  poweredTileIndices,
  canRotate,
  onRotate,
  getTileLabel,
}: CircuitGridProps) {
  const { t } = useTranslation()
  return (
    <div className={styles.grid} aria-label={t('projectCircuitGame.board')}>
      {tiles.map((tile, index) => (
        <CircuitTile
          key={index}
          index={index}
          tile={tile}
          visualRotation={visualRotations[index]}
          powered={poweredTileIndices.includes(index)}
          canRotate={canRotate}
          onRotate={onRotate}
          label={getTileLabel(index, tile)}
        />
      ))}
    </div>
  )
}
