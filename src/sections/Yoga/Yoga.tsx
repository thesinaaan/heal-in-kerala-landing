import { ArrowRight } from 'lucide-react'
import Container from '../../components/common/Container/Container'
import SectionHeading from '../../components/common/SectionHeading/SectionHeading'
import { yogaData } from '../../data/yoga'
import './Yoga.css'

export default function Yoga() {
  return (
    <section className="yoga-section" id="yoga">
      <Container className="yoga-container">
        <div className="yoga-content-column">
          <SectionHeading
            title={yogaData.title}
            titleHighlight={yogaData.titleHighlight}
            align="left"
            className="yoga-heading"
          />

          <p className="yoga-description">{yogaData.paragraph1}</p>
          <p className="yoga-description yoga-description-sm">{yogaData.paragraph2}</p>

          <div className="yoga-features-grid">
            {yogaData.features.map((featureText) => (
              <div key={featureText} className="yoga-feature-item">
                <span className="yoga-dot" />
                <span className="yoga-feature-text">{featureText}</span>
              </div>
            ))}
          </div>

          <a href={yogaData.linkHref} className="yoga-link">
            {yogaData.linkText} <ArrowRight size={16} />
          </a>
        </div>

        <div className="yoga-image-column">
          <img src={yogaData.image} alt="Yoga meditation" className="yoga-img" />
        </div>
      </Container>
    </section>
  )
}
