import { ArrowRight, MessageCircle } from 'lucide-react'
import Container from '../../components/common/Container/Container'
import SectionHeading from '../../components/common/SectionHeading/SectionHeading'
import Button from '../../components/common/Button/Button'
import { footerData } from '../../data/footer'
import './Cta.css'

export default function Cta() {
  return (
    <section className="cta-section" id="cta">
      <Container className="cta-container">
        <SectionHeading
          title={footerData.ctaTitle}
          titleHighlight={footerData.ctaTitleHighlight}
          align="center"
          className="cta-heading"
        />

        <p className="cta-subtitle">{footerData.ctaSubtitle}</p>

        <div className="cta-actions">
          <Button variant="primary" size="lg" className="cta-book-btn">
            {footerData.bookBtnText} <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </Button>
          <Button variant="secondary" size="lg" className="cta-whatsapp-btn">
            <MessageCircle size={16} style={{ marginRight: 6 }} /> {footerData.whatsappBtnText}
          </Button>
        </div>
      </Container>
    </section>
  )
}
