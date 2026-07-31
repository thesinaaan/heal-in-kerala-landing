import type { Therapy } from '../../../data/therapies'
import './TherapyCard.css'

interface TherapyCardProps {
  therapy: Therapy
}

export default function TherapyCard({ therapy }: TherapyCardProps) {
  return (
    <div className="therapy-card">
      <img src={therapy.image} alt={therapy.title} className="therapy-card-img" />
      <div className="therapy-card-overlay" />
      <h3 className="therapy-card-title">{therapy.title}</h3>
    </div>
  )
}
