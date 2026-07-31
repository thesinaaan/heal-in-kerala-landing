import { ArrowRight } from 'lucide-react'
import Container from '../../components/common/Container/Container'
import SectionHeading from '../../components/common/SectionHeading/SectionHeading'
import JourneyStepCard from '../../components/common/JourneyStepCard/JourneyStepCard'
import Button from '../../components/common/Button/Button'
import { journeyData } from '../../data/journey'
import './Journey.css'

export default function Journey() {
  return (
    <section className="journey-section" id="journey">
      <Container className="journey-container">
        <SectionHeading title={journeyData.title} align="center" className="journey-heading" />

        <div className="journey-stepper-wrapper">
          <div className="journey-line" />
          {journeyData.steps.map((stepItem) => (
            <JourneyStepCard key={stepItem.id} stepItem={stepItem} />
          ))}
        </div>

        <div className="journey-actions">
          <Button variant="primary" size="lg" className="journey-cta-btn">
            {journeyData.ctaText} <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Button>
        </div>
      </Container>
    </section>
  )
}
