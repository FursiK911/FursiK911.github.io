import { useState } from 'react'
import { Collapse, Timeline } from '@mantine/core'
import { IconCertificate, IconSchool } from '@tabler/icons-react'
import { useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { education } from '../../data/education'

interface EducationCopy {
  date: string
  title: string
  organization: string
  accountRecord?: string
  details: Array<{ label: string; value: string }>
  topics: string[]
}

export function EducationTimeline() {
  const [openEntries, setOpenEntries] = useState<Set<string>>(new Set())
  const reducedMotion = useReducedMotion() ?? false
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
      className="education-timeline"
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
              <span className="education-timeline-heading">
                <time
                  className="education-timeline-date"
                  dateTime={toIsoDate(copy.date)}
                >
                  {getYear(copy.date)}
                </time>
                <span className="education-timeline-title">{copy.title}</span>
              </span>
            }
            opposite={<span aria-hidden="true" />}
          >
            <div className="education-timeline-organization">
              {copy.organization}
            </div>
            <button
              type="button"
              className="education-timeline-toggle"
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
              <div className="education-timeline-details" id={detailsId}>
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
                    <span className="education-timeline-topics-label">
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
          </Timeline.Item>
        )
      })}
    </Timeline>
  )
}

function getYear(date: string) {
  return date.match(/\d{4}$/)?.[0] ?? date
}

function toIsoDate(date: string) {
  const match = date.match(/^(\d{2})\.(\d{2})\.(\d{4})$/)
  return match ? `${match[3]}-${match[2]}-${match[1]}` : date
}
