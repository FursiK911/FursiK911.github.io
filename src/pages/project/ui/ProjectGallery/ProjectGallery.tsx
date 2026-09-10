import {
  IconChevronLeft,
  IconChevronRight,
  IconPlayerPlay,
} from '@tabler/icons-react'
import { motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { orderProjectMedia } from '@/entities/project'
import { useProjectGallery } from '../../model/useProjectGallery/useProjectGallery'
import type { ProjectContentProps } from '../../model/types/projectCase.types'
import { GallerySlide } from '../GallerySlide/GallerySlide'
import { GalleryImage } from '../GalleryImage/GalleryImage'
import { ProjectGalleryFullscreen } from '../ProjectGalleryFullscreen/ProjectGalleryFullscreen'
import styles from './styles/ProjectGallery.module.css'
export function ProjectGallery({ project }: ProjectContentProps) {
  const { t } = useTranslation()
  const reduced = useReducedMotion()
  const media = orderProjectMedia(project.media ?? [])
  const gallery = useProjectGallery(media.length)
  const galleryRootRef = useRef<HTMLDivElement>(null)
  const expandTriggerRef = useRef<HTMLButtonElement | null>(null)
  const current = media[gallery.active]
  const title = t(`projects.${project.titleKey}`)
  const handleExpand = () => {
    expandTriggerRef.current = document.activeElement as HTMLButtonElement
    gallery.setExpanded(true)
  }
  const handleClose = () => {
    gallery.setPlaying(false)
    gallery.setExpanded(false)
    requestAnimationFrame(() => {
      if (expandTriggerRef.current?.isConnected) {
        expandTriggerRef.current.focus()
        return
      }
      galleryRootRef.current
        ?.querySelector<HTMLButtonElement>('button[aria-current="true"]')
        ?.focus()
    })
  }
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
    <div ref={galleryRootRef} className={styles.projectGalleryGallery}>
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
            playing={gallery.playing && !gallery.expanded}
            onPlay={() => gallery.setPlaying(true)}
            onExpand={handleExpand}
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
      <ProjectGalleryFullscreen
        opened={gallery.expanded}
        media={current}
        title={title}
        index={gallery.active}
        total={media.length}
        playing={gallery.playing}
        reducedMotion={reduced}
        onClose={handleClose}
        onPlay={() => gallery.setPlaying(true)}
        onPrevious={() => gallery.select(gallery.active - 1)}
        onNext={() => gallery.select(gallery.active + 1)}
        onTouchStart={gallery.onTouchStart}
        onTouchEnd={gallery.onTouchEnd}
      />
    </div>
  )
}
