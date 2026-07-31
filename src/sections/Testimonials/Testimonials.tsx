import Container from '../../components/common/Container/Container'
import SectionHeading from '../../components/common/SectionHeading/SectionHeading'
import ScrollSlider from '../../components/common/ScrollSlider/ScrollSlider'
import TestimonialCard from '../../components/common/TestimonialCard/TestimonialCard'
import { testimonialsData } from '../../data/testimonials'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <Container className="testimonials-container">
        <SectionHeading
          title={testimonialsData.title}
          titleHighlight={testimonialsData.titleHighlight}
          align="center"
          className="testimonials-heading"
        />

        <ScrollSlider>
          {testimonialsData.items.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </ScrollSlider>
      </Container>
    </section>
  )
}
