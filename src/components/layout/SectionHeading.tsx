export interface SectionHeadingProps {
  index: string
  title: string
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="eyebrow">
        {index} // {title}
      </span>
      <span className="heading-rule" />
    </div>
  )
}
