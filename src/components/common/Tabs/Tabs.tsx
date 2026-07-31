import type { ReactNode } from 'react'
import './Tabs.css'

export interface TabOption {
  id: string
  label: string
}

interface TabsProps {
  options: TabOption[]
  activeId: string
  onChange: (id: string) => void
  className?: string
  children?: ReactNode
}

export default function Tabs({ options, activeId, onChange, className = '' }: TabsProps) {
  return (
    <ul className={`ui-tabs-list ${className}`}>
      {options.map((option) => (
        <li key={option.id}>
          <button
            type="button"
            className={`ui-tab-pill ${option.id === activeId ? 'active' : ''}`}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        </li>
      ))}
    </ul>
  )
}
