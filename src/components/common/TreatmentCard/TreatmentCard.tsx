import type { Treatment } from '../../../data/treatments'
import './TreatmentCard.css'

interface TreatmentCardProps {
  treatment: Treatment
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  const IconComponent = treatment.icon
  return (
    <div className="treatment-card">
      <div className="treatment-icon-wrapper">
        <IconComponent size={20} className="treatment-icon" />
      </div>
      <h3 className="treatment-card-title">{treatment.title}</h3>
      <p className="treatment-card-subtitle">{treatment.subtitle}</p>
    </div>
  )
}
