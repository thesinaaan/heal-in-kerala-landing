import { useState } from 'react'
import Container from '../../components/common/Container/Container'
import SectionHeading from '../../components/common/SectionHeading/SectionHeading'
import Tabs from '../../components/common/Tabs/Tabs'
import type { TabOption } from '../../components/common/Tabs/Tabs'
import { panchakarmaData } from '../../data/panchakarma'
import './Panchakarma.css'

export default function Panchakarma() {
  const [activeId, setActiveId] = useState<string>(panchakarmaData.items[0].id)

  const tabOptions: TabOption[] = panchakarmaData.items.map((item) => ({
    id: item.id,
    label: item.title
  }))

  const activeItem = panchakarmaData.items.find((item) => item.id === activeId) || panchakarmaData.items[0]

  return (
    <section className="panchakarma-section" id="panchakarma">
      <Container className="panchakarma-container">
        <SectionHeading
          title={panchakarmaData.title}
          titleHighlight={panchakarmaData.titleHighlight}
          subtitle={panchakarmaData.subtitle}
          align="center"
          className="panchakarma-heading"
        />

        <Tabs options={tabOptions} activeId={activeId} onChange={setActiveId} />

        <div className="panchakarma-showcase">
          <div className="panchakarma-card">
            <span className="panchakarma-step">{activeItem.step}</span>
            <h3 className="panchakarma-card-title">{activeItem.title}</h3>
            <p className="panchakarma-card-desc">{activeItem.description}</p>
          </div>

          <div className="panchakarma-image-wrapper">
            <img src={activeItem.image} alt={activeItem.title} className="panchakarma-img" />
          </div>
        </div>
      </Container>
    </section>
  )
}
