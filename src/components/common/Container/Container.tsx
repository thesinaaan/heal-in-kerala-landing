import type { ReactNode, HTMLAttributes } from 'react'
import './Container.css'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export default function Container({ children, className = '', ...props }: ContainerProps) {
  return (
    <div className={`ui-container ${className}`} {...props}>
      {children}
    </div>
  )
}
