import { useCallback, useState } from 'react'

export function useClipboard(resetAfter = 1800) {
  const [copied, setCopied] = useState(false)
  const copy = useCallback(
    async (value: string) => {
      await navigator.clipboard?.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), resetAfter)
    },
    [resetAfter],
  )
  return { copied, copy }
}
