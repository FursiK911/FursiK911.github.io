import { Modal } from '@mantine/core'
import {
  IconChevronLeft,
  IconChevronRight,
  IconPlayerPlay,
} from '@tabler/icons-react'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { useProjectGallery } from '../../model/useProjectGallery/useProjectGallery'
import type { ProjectContentProps } from '../../model/types/projectCase.types'
import { GallerySlide } from '../GallerySlide/GallerySlide'
import { GalleryImage } from '../GalleryImage/GalleryImage'
import styles from './styles/ProjectGallery.module.css'
export function ProjectGallery({ project }: ProjectContentProps) {
  const { t } = useTranslation()
  const reduced = useReducedMotion()
  const media = project.media ?? []
  const gallery = useProjectGallery(media.length)
  const current = media[gallery.active]
  const title = t(`projects.${project.titleKey}`)
  if (!current)
    return (
      <div className={styles.projectGalleryCover}>
        <span>
          {project.category
            .map((category) => t(`projects.${category}`))
            .join(' / ')}
        </span>
        <strong>{title}</strong>
        <span>{project.id}</span>
      </div>
    )
  return (
    <div className={styles.projectGalleryGallery}>
      <div className={styles.projectGalleryBar}>
        <span>
          {t(
            current.kind === 'youtube'
              ? 'projectCase.video'
              : 'projectCase.image',
          )}
        </span>
        <span aria-live="polite">
          {t('projectCase.position', {
            current: gallery.active + 1,
            total: media.length,
          })}
        </span>
      </div>
      <div
        role="group"
        aria-label={t('projectCase.gallery')}
        onKeyDownCapture={gallery.onKeyDown}
        onTouchStart={gallery.onTouchStart}
        onTouchEnd={gallery.onTouchEnd}
      >
        <motion.div
          key={gallery.active}
          initial={reduced ? false : { opacity: 0.35 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <GallerySlide
            media={current}
            title={title}
            playing={gallery.playing}
            onPlay={() => gallery.setPlaying(true)}
            onExpand={() => gallery.setExpanded(true)}
          />
        </motion.div>
        {media.length > 1 && (
          <div className={styles.projectGalleryControls}>
            <button
              className={styles.projectGalleryArrow}
              type="button"
              aria-label={t('projectCase.previous')}
              onClick={() => gallery.select(gallery.active - 1)}
            >
              <IconChevronLeft aria-hidden="true" />
            </button>
            <div className={styles.projectGalleryThumbnails}>
              {media.map((item, index) => (
                <button
                  type="button"
                  key={index}
                  aria-label={t('projectCase.select', { index: index + 1 })}
                  aria-current={gallery.active === index ? 'true' : undefined}
                  onClick={() => gallery.select(index)}
                >
                  <GalleryImage
                    src={
                      item.kind === 'image'
                        ? item.src
                        : `https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`
                    }
                    alt=""
                    youtube={item.kind === 'youtube'}
                  />
                  {item.kind === 'youtube' && (
                    <IconPlayerPlay aria-hidden="true" />
                  )}
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </button>
              ))}
            </div>
            <button
              className={styles.projectGalleryArrow}
              type="button"
              aria-label={t('projectCase.next')}
              onClick={() => gallery.select(gallery.active + 1)}
            >
              <IconChevronRight aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <Modal
        opened={gallery.expanded}
        onClose={() => gallery.setExpanded(false)}
        fullScreen
        title={t('projectCase.fullscreen')}
        closeButtonProps={{ 'aria-label': t('projectCase.close') }}
        trapFocus
        returnFocus
        closeOnEscape
        transitionProps={{ duration: reduced ? 0 : 180 }}
        classNames={{
          content: styles.projectGalleryModal,
          header: styles.projectGalleryModalHeader,
          body: styles.projectGalleryModalBody,
        }}
      >
        {current.kind === 'image' && (
          <GalleryImage
            key={current.src}
            src={current.src}
            alt={t(`projects.${current.altKey}`)}
          />
        )}
      </Modal>
    </div>
  )
}
