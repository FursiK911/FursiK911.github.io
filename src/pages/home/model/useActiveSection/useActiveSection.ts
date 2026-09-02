import { useEffect, useState } from 'react'

export function useActiveSection(
  sectionIds: string[],
  initial = sectionIds[0] ?? '',
) {
  const [active, setActive] = useState(initial)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: '-25% 0px -60% 0px' },
    )
    sectionIds.forEach((id) => {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    })
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
