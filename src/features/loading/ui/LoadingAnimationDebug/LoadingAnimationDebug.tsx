import { cx, styles } from '@/shared/styles'
import { useTranslation } from 'react-i18next'
import { setLoadingAnimationSpeed } from '../../model/store/loadingAnimationStore'
import { useLoadingAnimationSpeed } from '../../model/useLoadingAnimationSpeed/useLoadingAnimationSpeed'
import type { LoadingAnimationDebugProps } from './types/LoadingAnimationDebug.types'

export function LoadingAnimationDebug({ visible }: LoadingAnimationDebugProps) {
  const { t } = useTranslation()
  const speed = useLoadingAnimationSpeed()

  if (!visible) return null

  return (
    <aside
      className={cx(styles.loadingAnimationDebug)}
      aria-label={t('loader.debug.title')}
    >
      <span>{t('loader.debug.title')}</span>
      <button
        type="button"
        aria-label={
          speed === 0 ? t('loader.debug.resume') : t('loader.debug.pause')
        }
        onClick={() => setLoadingAnimationSpeed(speed === 0 ? 1 : 0)}
      >
        {speed === 0
          ? t('loader.debug.resumeShort')
          : t('loader.debug.pauseShort')}
      </button>
      {[0.5, 1, 2].map((value) => (
        <button
          type="button"
          key={value}
          className={speed === value ? cx(styles.isActive) : undefined}
          aria-pressed={speed === value}
          onClick={() => setLoadingAnimationSpeed(value)}
        >
          {value}×
        </button>
      ))}
    </aside>
  )
}
