import type { JourneyStep } from '../../../data/journey'
import './JourneyStepCard.css'

interface JourneyStepCardProps {
  stepItem: JourneyStep
}

export default function JourneyStepCard({ stepItem }: JourneyStepCardProps) {
  return (
    <div className={`journey-step-card ${stepItem.isActive ? 'active' : ''}`}>
      <div className="journey-step-circle">
        <span className="journey-step-num">{stepItem.step}</span>
        <span className="journey-step-badge-label">{stepItem.badgeLabel}</span>
      </div>
      <div className="journey-step-content">
        <h3 className="journey-step-title">{stepItem.title}</h3>
        <p className="journey-step-desc">{stepItem.description}</p>
      </div>
    </div>
  )
}
