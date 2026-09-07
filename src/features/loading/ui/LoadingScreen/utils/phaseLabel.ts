import type { LoadingPhase } from '../../../model/useLoadingSequence/types/useLoadingSequence.types'

export function phaseLabel(
  phase: LoadingPhase,
  translate: (key: string) => string,
) {
  if (phase === 'result') return translate('loader.status.match')
  if (phase === 'searching') return translate('loader.status.scanning')
  if (
    phase === 'fading' ||
    phase === 'transferring' ||
    phase === 'revealing' ||
    phase === 'skipping' ||
    phase === 'complete'
  )
    return translate('loader.status.loaded')
  if (phase === 'typing') return translate('loader.status.query')
  return translate('loader.status.initializing')
}
