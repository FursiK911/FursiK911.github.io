import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useKonamiCode } from '../../hooks/useKonamiCode'

export function KonamiDebug() {
  const { t } = useTranslation()
  const { active, setActive } = useKonamiCode()
  const [fps, setFps] = useState(60)
  useEffect(() => {
    if (!active) return
    let frame = 0
    let last = performance.now()
    let count = 0
    const tick = (now: number) => {
      count++
      if (now - last > 500) {
        setFps(Math.round((count * 1000) / (now - last)))
        count = 0
        last = now
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active])
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="debug-banner"
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          exit={{ y: -40 }}
        >
          <b>{t('debug.active')}</b>
          <span>{t('debug.message')}</span>
          <span>{fps} FPS</span>
          <button type="button" onClick={() => setActive(false)}>
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
