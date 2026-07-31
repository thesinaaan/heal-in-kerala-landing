export interface JourneyStep {
  id: string
  step: string
  title: string
  badgeLabel: string
  description: string
  isActive?: boolean
}

export const journeyData = {
  title: "Your Healing Journey",
  ctaText: "Begin Your Journey",
  steps: [
    {
      id: 'consultation',
      step: '01',
      badgeLabel: 'Consultation',
      title: 'Consultation',
      description: 'Initial consultation with our physicians'
    },
    {
      id: 'diagnosis',
      step: '02',
      badgeLabel: 'Diagnosis',
      title: 'Diagnosis',
      description: 'Assessment based on Ayurvedic principles'
    },
    {
      id: 'treatment',
      step: '03',
      badgeLabel: 'Treatment',
      title: 'Treatment',
      description: 'Personalised therapies and treatment plans',
      isActive: true
    },
    {
      id: 'recovery',
      step: '04',
      badgeLabel: 'Recovery',
      title: 'Recovery',
      description: 'Rest, rejuvenation, and supportive care'
    },
    {
      id: 'follow-up',
      step: '05',
      badgeLabel: 'Follow-up',
      title: 'Follow-up',
      description: 'Continued guidance after treatment'
    }
  ]
}
