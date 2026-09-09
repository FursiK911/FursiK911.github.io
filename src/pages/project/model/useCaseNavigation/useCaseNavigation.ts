import { useEffect, useState } from 'react'
import type { CaseNavigationProps } from '../types/projectCase.types'
export function useCaseNavigation(sections: CaseNavigationProps['sections']) {
  const [active, setActive] = useState('overview')
  const sectionKey = sections.map((section) => section.id).join(',')
  useEffect(() => {
    const ids = sectionKey.split(',')
    let frame = 0
    const update = () => {
      frame = 0
      let current = ids[0]
      for (const id of ids) {
        if (
          (document.getElementById(id)?.getBoundingClientRect().top ??
            Infinity) <= 190
        )
          current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionKey])
  return active
}
