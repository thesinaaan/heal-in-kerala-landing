import TreatmentCard from '../../components/common/TreatmentCard/TreatmentCard'
import Container from '../../components/common/Container/Container'
import SectionHeading from '../../components/common/SectionHeading/SectionHeading'
import { treatmentsData } from '../../data/treatments'
import './Treatments.css'

export default function Treatments() {
  return (
    <section className="treatments-section" id="treatments">
      <Container className="treatments-container">
        <SectionHeading title={treatmentsData.title} align="center" className="treatments-heading" />
        <div className="treatments-grid">
          {treatmentsData.items.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </div>
      </Container>
    </section>
  )
}
