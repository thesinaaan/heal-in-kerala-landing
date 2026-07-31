import { aboutData } from '../../data/about'
import aboutImage from '../../assets/images/about_image.png'
import Container from '../../components/common/Container/Container'
import SectionHeading from '../../components/common/SectionHeading/SectionHeading'
import './About.css'

export default function About() {
  return (
    <section className="about">
      <Container className="about-container">
        <div className="about-image-column">
          <img src={aboutImage} alt="Kerala Backwaters Ayurveda" className="about-img" />
        </div>

        <div className="about-content-column">
          <SectionHeading
            title={aboutData.title}
            titleHighlight={aboutData.titleHighlight}
            align="left"
            className="about-heading"
          />

          <p className="about-description">
            {aboutData.description}
          </p>

          <div className="about-features-grid">
            {aboutData.features.map((feature) => (
              <div key={feature.text} className="feature-card">
                <div className="icon-badge">
                  <span className="check-mark">✓</span>
                </div>
                <span className="feature-text">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
