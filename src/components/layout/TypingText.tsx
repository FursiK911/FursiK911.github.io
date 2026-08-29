interface TypingTextProps {
  text: string
  reducedMotion?: boolean
  className?: string
}

export function TypingText({
  text,
  reducedMotion = false,
  className = '',
}: TypingTextProps) {
  return (
    <span className={`typing-text ${className}`.trim()} aria-label={text}>
      <span aria-hidden="true">{text}</span>
      {!reducedMotion && (
        <span className="typing-cursor" aria-hidden="true">
          |
        </span>
      )}
    </span>
  )
}
