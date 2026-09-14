import { cx, styles } from '@/shared/styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionHeading } from '@/shared/ui/SectionHeading'
import { skillGroups } from './data/skill-groups.data'
import './styles/Skills.module.css'

export function Skills() {
  const { t } = useTranslation()
  const [active, setActive] = useState<string | null>(null)
  return (
    <section
      className={cx(styles.sectionShell, styles.skillsSection)}
      id="stack"
    >
      <SectionHeading index="04" title={t('sections.stack')} />
      <div className={cx(styles.skillsGrid)}>
        {skillGroups.map((group) => (
          <div className={cx(styles.skillGroup)} key={group.titleKey}>
            <h3>{t(`skills.groups.${group.titleKey}`)}</h3>
            <div className={cx(styles.skillList)}>
              {group.skills.map((skill) => (
                <button
                  type="button"
                  className={
                    active === skill ? cx(styles.skillActive) : undefined
                  }
                  onMouseEnter={() => setActive(skill)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(skill)}
                  onBlur={() => setActive(null)}
                  key={skill}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
