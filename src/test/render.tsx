import { MantineProvider } from '@mantine/core'
import { render, type RenderOptions } from '@testing-library/react'
import { MotionConfig } from 'motion/react'
import type { ReactElement, ReactNode } from 'react'
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'
import { theme } from '../theme'

function TestProviders({ children }: { children: ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <MantineProvider env="test" theme={theme}>
        <MotionConfig reducedMotion="always">{children}</MotionConfig>
      </MantineProvider>
    </I18nextProvider>
  )
}

export function renderWithProviders(ui: ReactElement, options?: RenderOptions) {
  return render(ui, { wrapper: TestProviders, ...options })
}
