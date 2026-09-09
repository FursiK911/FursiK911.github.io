import { motion } from 'motion/react'
import { useCaseAtmosphere } from '../../model/useCaseAtmosphere/useCaseAtmosphere'
import styles from './styles/CaseAtmosphere.module.css'
export function CaseAtmosphere() {
  const { x, y, drift, reduced } = useCaseAtmosphere()
  return (
    <div
      className={styles.caseAtmosphereAtmosphere}
      aria-hidden="true"
      data-reduced={Boolean(reduced)}
    >
      <motion.div className={styles.caseAtmosphereOrbit} style={{ y: drift }}>
        <motion.div className={styles.caseAtmosphereGlow} style={{ x, y }} />
        <div className={styles.caseAtmosphereGrid} />
        <div className={styles.caseAtmosphereScan} />
      </motion.div>
    </div>
  )
}
