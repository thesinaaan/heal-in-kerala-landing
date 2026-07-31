import panchakarmaImg from '../assets/images/panchakarma.png'

export interface PanchakarmaItem {
  id: string
  step: string
  title: string
  description: string
  image: string
}

export const panchakarmaData = {
  title: "Panchakarma Treatment",
  titleHighlight: "in Kerala",
  subtitle: "Panchakarma comprises five cleansing therapies, traditionally known as Pancha Shodana, performed under a physician's guidance and tailored to individual needs.",
  items: [
    {
      id: 'vamana',
      step: '01 / 05',
      title: 'Vamana',
      description: 'Vamana is a specialised Panchakarma therapy involving controlled therapeutic emesis. Traditionally recommended for selected Kapha-related imbalances, the procedure is performed after preparatory treatments and under the supervision of qualified Ayurvedic physicians.',
      image: panchakarmaImg
    },
    {
      id: 'virechana',
      step: '02 / 05',
      title: 'Virechana',
      description: "Virechana is a therapeutic purgation procedure used in Ayurveda to help balance excess Pitta dosha. After appropriate preparation, herbal formulations are administered to support cleansing. The therapy is personalised based on the individual's constitution, health condition, and Ayurvedic assessment.",
      image: panchakarmaImg
    },
    {
      id: 'basti',
      step: '03 / 05',
      title: 'Basti',
      description: 'Basti is regarded as one of the principal therapies of Panchakarma for addressing Vata-related imbalances. It involves the administration of medicated oils or herbal decoctions under physician guidance and forms an important part of many Ayurvedic treatment programmes.',
      image: panchakarmaImg
    },
    {
      id: 'nasya',
      step: '04 / 05',
      title: 'Nasya',
      description: "Nasya involves the administration of medicated oils or herbal preparations through the nasal passages. Traditionally used to support the health of the head and neck region, the therapy is recommended based on an individual's Ayurvedic evaluation and treatment goals.",
      image: panchakarmaImg
    },
    {
      id: 'raktamokshana',
      step: '05 / 05',
      title: 'Raktamokshana',
      description: 'Raktamokshana is a classical Ayurvedic purification therapy described in traditional texts. It is practised selectively under the guidance of qualified Ayurvedic physicians and in accordance with established treatment principles.',
      image: panchakarmaImg
    }
  ]
}
