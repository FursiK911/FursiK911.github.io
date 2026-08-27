import { AnimatePresence, motion } from 'motion/react'

export interface LoadingScreenProps {
  done: boolean
  lines: string[]
}

export function LoadingScreen({ done, lines }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="loading-inner">
            <span className="eyebrow">DF_OS // BOOT_SEQUENCE</span>
            {lines.map((line, index) => (
              <div
                className="loading-line"
                key={line}
                style={{ opacity: 0.35 + index / lines.length }}
              >
                {line}
                <span className="ok">{index > 1 ? ' OK' : ''}</span>
              </div>
            ))}
            <span className="cursor-block" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
