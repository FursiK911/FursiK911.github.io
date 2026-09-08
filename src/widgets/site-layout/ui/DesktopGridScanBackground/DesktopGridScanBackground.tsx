import { useEffect, useState } from 'react'
import { GridScan } from '@/shared/ui/GridScan'
import styles from './styles/DesktopGridScanBackground.module.css'

const desktopQuery = '(min-width: 901px)'

export function DesktopGridScanBackground() {
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
  )
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia?.(desktopQuery).matches ?? false,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia?.(desktopQuery)
    if (!mediaQuery) return
    const update = () => setIsDesktop(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mediaQuery) return
    const update = () => setReducedMotion(mediaQuery.matches)
    update()
    mediaQuery.addEventListener('change', update)
    return () => mediaQuery.removeEventListener('change', update)
  }, [])

  if (!isDesktop) return null

  return (
    <div
      className={styles.background}
      data-testid="desktop-grid-scan-background"
      data-static={reducedMotion || undefined}
      aria-hidden="true"
    >
      {reducedMotion ? (
        <div className={styles.staticGrid} />
      ) : (
        <GridScan
          sensitivity={0.42}
          lineThickness={1}
          linesColor="#2F293A"
          gridScale={0.14}
          scanColor="#a7f3f6"
          scanOpacity={0.28}
          enablePost
          bloomIntensity={0.42}
          chromaticAberration={0.001}
          noiseIntensity={0.008}
          enableWebcam={false}
          className={styles.gridScan}
        />
      )}
    </div>
  )
}
