import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { skillGroups } from '../../data/portfolio'
import { SectionHeading } from '../layout/SectionHeading'

export function Skills() {
  const { t } = useTranslation()
  const [active, setActive] = useState<string | null>(null)
  return (
    <section className="section-shell skills-section" id="stack">
      <SectionHeading index="04" title={t('sections.stack')} />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <button
                  type="button"
                  className={active === skill ? 'skill-active' : ''}
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
