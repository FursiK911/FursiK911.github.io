import { motion } from 'motion/react'
import { getTilePorts } from '../../model/utils/getTilePorts'
import type { CircuitTileProps } from './types/CircuitTile.types'
import styles from './styles/CircuitTile.module.css'

export function CircuitTile({
  index,
  tile,
  visualRotation,
  powered,
  canRotate,
  onRotate,
  label,
}: CircuitTileProps) {
  const ports = getTilePorts(tile)
  if (tile.type === 'empty')
    return <div className={styles.emptyTile} aria-hidden="true" />

  return (
    <motion.button
      type="button"
      className={`${styles.tile} ${powered ? styles.powered : ''}`}
      aria-label={label}
      aria-disabled={!canRotate}
      onClick={() => {
        if (canRotate) onRotate(index)
      }}
      whileTap={canRotate ? { scale: 0.94 } : undefined}
    >
      <span
        className={styles.wire}
        data-powered={powered || undefined}
        style={{ transform: `rotate(${visualRotation}deg)` }}
        aria-hidden="true"
      >
        <span
          className={`${styles.segment} ${ports.includes('top') ? styles.top : ''}`}
        />
        <span
          className={`${styles.segment} ${ports.includes('right') ? styles.right : ''}`}
        />
        <span
          className={`${styles.segment} ${ports.includes('bottom') ? styles.bottom : ''}`}
        />
        <span
          className={`${styles.segment} ${ports.includes('left') ? styles.left : ''}`}
        />
        <span className={styles.node} />
      </span>
    </motion.button>
  )
}
