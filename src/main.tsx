import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { MotionConfig } from 'motion/react'
import './i18n.ts'
import '@mantine/core/styles.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </MantineProvider>
  </StrictMode>,
)
