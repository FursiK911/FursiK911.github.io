import { IconPhotoOff } from '@tabler/icons-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useProjectCardPreview } from '../../model/useProjectCardPreview/useProjectCardPreview'
import styles from './styles/ProjectCardPreview.module.css'
import type { ProjectCardPreviewProps } from './types/ProjectCardPreview.types'

export function ProjectCardPreview({
  active,
  images,
}: ProjectCardPreviewProps) {
  const { t } = useTranslation()
  const reducedMotion = useReducedMotion()
  const { currentImage, reportImageError, reportImageLoad } =
    useProjectCardPreview({
      active,
      images,
      reducedMotion,
    })
  return (
    <div className={styles.preview}>
      {currentImage ? (
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={currentImage.src}
            alt={t(`projects.${currentImage.altKey}`)}
            className={styles.image}
            src={currentImage.src}
            loading="lazy"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
            onLoad={() => reportImageLoad(currentImage.src)}
            onError={() => reportImageError(currentImage.src)}
          />
        </AnimatePresence>
      ) : (
        <div
          className={styles.missing}
          role="img"
          aria-label={t('projects.photoUnavailable')}
        >
          <IconPhotoOff aria-hidden />
          <span>{t('projects.photoUnavailable')}</span>
        </div>
      )}
    </div>
  )
}
