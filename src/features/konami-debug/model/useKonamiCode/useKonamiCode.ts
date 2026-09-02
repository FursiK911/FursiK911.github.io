import { useEffect, useRef, useState } from 'react'

import { KONAMI_CODE } from './config/konamiCode.config'

export function useKonamiCode() {
  const [active, setActive] = useState(false)
  const keys = useRef<string[]>([])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      keys.current = [...keys.current, event.key].slice(-KONAMI_CODE.length)
      if (keys.current.join() === KONAMI_CODE.join()) {
        setActive((value) => !value)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return { active, setActive }
}
