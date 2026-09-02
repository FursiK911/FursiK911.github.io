import { MantineProvider } from '@mantine/core'
import { MotionConfig } from 'motion/react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/shared/config/i18n'
import { theme } from '@/shared/config/theme'
import type { TestProvidersProps } from './types/TestProviders.types'

export function TestProviders({ children }: TestProvidersProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <MantineProvider env="test" theme={theme}>
        <MotionConfig reducedMotion="always">{children}</MotionConfig>
      </MantineProvider>
    </I18nextProvider>
  )
}
