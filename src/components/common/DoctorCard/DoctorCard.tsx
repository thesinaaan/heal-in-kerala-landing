import type { Doctor } from '../../../data/doctors'
import './DoctorCard.css'

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="doctor-card">
      <div className="doctor-avatar-wrapper">
        <img src={doctor.image} alt={doctor.name} className="doctor-avatar-img" />
        <span className="doctor-exp-pill">{doctor.experience}</span>
      </div>

      <h3 className="doctor-name">{doctor.name}</h3>
      {doctor.qualification && (
        <span className="doctor-qualification">{doctor.qualification}</span>
      )}
      <p className="doctor-role">{doctor.role}</p>
    </div>
  )
}
