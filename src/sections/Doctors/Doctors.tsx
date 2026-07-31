import { ChevronRight } from 'lucide-react'
import Container from '../../components/common/Container/Container'
import SectionHeading from '../../components/common/SectionHeading/SectionHeading'
import ScrollSlider from '../../components/common/ScrollSlider/ScrollSlider'
import DoctorCard from '../../components/common/DoctorCard/DoctorCard'
import Button from '../../components/common/Button/Button'
import { doctorsData } from '../../data/doctors'
import './Doctors.css'

export default function Doctors() {
  return (
    <section className="doctors-section" id="doctors">
      <Container className="doctors-container">
        <SectionHeading
          title={doctorsData.title}
          titleHighlight={doctorsData.titleHighlight}
          align="center"
          className="doctors-heading"
        />

        <ScrollSlider>
          {doctorsData.items.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </ScrollSlider>

        <div className="doctors-actions">
          <Button variant="secondary" size="md" className="doctors-cta-btn">
            {doctorsData.ctaText} <ChevronRight size={16} style={{ marginLeft: 4 }} />
          </Button>
        </div>
      </Container>
    </section>
  )
}
