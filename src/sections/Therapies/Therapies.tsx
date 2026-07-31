import Container from '../../components/common/Container/Container'
import SectionHeading from '../../components/common/SectionHeading/SectionHeading'
import ScrollSlider from '../../components/common/ScrollSlider/ScrollSlider'
import TherapyCard from '../../components/common/TherapyCard/TherapyCard'
import { therapiesData } from '../../data/therapies'
import './Therapies.css'

export default function Therapies() {
  return (
    <section className="therapies-section" id="therapies">
      <Container className="therapies-container">
        <SectionHeading
          title={therapiesData.title}
          subtitle={therapiesData.subtitle}
          align="center"
          className="therapies-heading"
        />

        <ScrollSlider>
          {therapiesData.items.map((therapy) => (
            <TherapyCard key={therapy.id} therapy={therapy} />
          ))}
        </ScrollSlider>
      </Container>
    </section>
  )
}
