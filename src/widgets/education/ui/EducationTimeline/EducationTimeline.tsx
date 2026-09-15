import { cx, styles } from '@/shared/styles'
import { useState } from 'react'
import { Collapse, Timeline } from '@mantine/core'
import { IconCertificate, IconSchool } from '@tabler/icons-react'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { education } from '@/entities/education'
import type { EducationCopy } from './types/EducationTimeline.types'
import { getYear } from './utils/getYear'
import { toIsoDate } from './utils/toIsoDate'
import {
  scrollRevealConfig,
  useScrollReveal,
} from '@/shared/lib/useScrollReveal'

export function EducationTimeline() {
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set())
  const reducedMotion = useReducedMotion() ?? false
  const scrollReveal = useScrollReveal()
  const { t } = useTranslation()

  const toggleEntry = (id: string) => {
    setOpenEntries((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <Timeline
      className={cx(styles.educationTimeline)}
      color="cyan"
      active={education.length}
      align="left"
      lineWidth={1}
      bulletSize={26}
    >
      {education.map((entry, index) => {
        const copy = t(entry.translationKey, {
          returnObjects: true,
        }) as EducationCopy
        const detailsId = `education-details-${entry.id}`
        const open = openEntries.has(entry.id)
        const Bullet = entry.kind === 'degree' ? IconSchool : IconCertificate

        return (
          <Timeline.Item
            key={entry.id}
            alternate={index % 2 === 0}
            lineVariant="dotted"
            data-education-kind={entry.kind}
            classNames={{
              item: 'education-timeline-item',
              itemBody: 'education-timeline-body',
              itemBullet: 'education-timeline-bullet',
              itemOpposite: 'education-timeline-opposite',
            }}
            bullet={<Bullet aria-hidden="true" size={15} stroke={1.5} />}
            title={
              <span className={cx(styles.educationTimelineHeading)}>
                <time
                  className={cx(styles.educationTimelineDate)}
                  dateTime={toIsoDate(copy.date)}
                >
                  {getYear(copy.date)}
                </time>
                <span className={cx(styles.educationTimelineTitle)}>
                  {copy.title}
                </span>
              </span>
            }
            opposite={<span aria-hidden="true" />}
          >
            <motion.div
              {...scrollReveal}
              transition={{
                ...scrollReveal.transition,
                delay: index * scrollRevealConfig.staggerDelay,
              }}
            >
              <div className={cx(styles.educationTimelineOrganization)}>
                {copy.organization}
              </div>
              <button
                type="button"
                className={cx(styles.educationTimelineToggle)}
                aria-expanded={open}
                aria-controls={detailsId}
                onClick={() => toggleEntry(entry.id)}
              >
                {open ? t('education.hideDetails') : t('education.showDetails')}
                <span aria-hidden="true">{open ? '↑' : '↓'}</span>
              </button>
              <Collapse
                expanded={open}
                transitionDuration={reducedMotion ? 0 : 220}
                animateOpacity={!reducedMotion}
              >
                <div
                  className={cx(styles.educationTimelineDetails)}
                  id={detailsId}
                >
                  <dl>
                    {copy.details.map(({ label, value }) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  {copy.topics.length > 0 && (
                    <>
                      <span className={cx(styles.educationTimelineTopicsLabel)}>
                        {t('education.topics')}
                      </span>
                      <ul>
                        {copy.topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </Collapse>
            </motion.div>
          </Timeline.Item>
        )
      })}
    </Timeline>
  )
}
