import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import Container from '../../components/common/Container/Container'
import SectionHeading from '../../components/common/SectionHeading/SectionHeading'
import { faqData } from '../../data/faq'
import './Faq.css'

export default function Faq() {
  return (
    <section className="faq-section" id="faq">
      <Container className="faq-container">
        <SectionHeading
          title={faqData.title}
          titleHighlight={faqData.titleHighlight}
          align="center"
          className="faq-heading"
        />

        <Accordion.Root
          type="single"
          defaultValue="faq-1"
          collapsible
          className="faq-accordion-root"
        >
          {faqData.items.map((item) => (
            <Accordion.Item key={item.id} value={item.id} className="faq-accordion-item">
              <Accordion.Header className="faq-accordion-header">
                <Accordion.Trigger className="faq-accordion-trigger">
                  <span>{item.question}</span>
                  <ChevronDown className="faq-chevron-icon" size={18} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq-accordion-content">
                <p className="faq-answer-text">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </section>
  )
}
