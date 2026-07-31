import type { ReactNode } from 'react'
import './SectionHeading.css'

interface SectionHeadingProps {
  title: string
  titleHighlight?: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export default function SectionHeading({
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  className = '',
  children
}: SectionHeadingProps) {
  return (
    <div className={`section-heading-wrapper align-${align} ${className}`}>
      <h2 className="section-heading-title">
        {title} {titleHighlight && <span className="highlight">{titleHighlight}</span>}
      </h2>
      {subtitle && <p className="section-heading-subtitle">{subtitle}</p>}
      {children}
    </div>
  )
}
