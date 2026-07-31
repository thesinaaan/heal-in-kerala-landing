import type { ElementType } from 'react'
import { Droplets, Activity, Brain, Shield, Heart, Leaf, Sun } from 'lucide-react'

export interface Treatment {
  id: string
  title: string
  subtitle: string
  icon: ElementType
}

export const treatmentsData = {
  title: "Ayurvedic Treatments We Offer",
  items: [
    {
      id: 'panchakarma',
      title: 'Panchakarma',
      subtitle: 'Detox & Rejuvenation',
      icon: Droplets
    },
    {
      id: 'joint-arthritis',
      title: 'Joint & Arthritis',
      subtitle: 'Pain Management',
      icon: Activity
    },
    {
      id: 'back-pain-spine',
      title: 'Back Pain & Spine',
      subtitle: 'Spine Care',
      icon: Droplets
    },
    {
      id: 'stress-anxiety',
      title: 'Stress & Anxiety',
      subtitle: 'Mind-Body Wellness',
      icon: Brain
    },
    {
      id: 'skin-disorders',
      title: 'Skin Disorders',
      subtitle: 'Psoriasis & Eczema',
      icon: Shield
    },
    {
      id: 'diabetes',
      title: 'Diabetes',
      subtitle: 'Lifestyle Management',
      icon: Heart
    },
    {
      id: 'womens-health',
      title: "Women's Health",
      subtitle: 'Holistic Care',
      icon: Leaf
    },
    {
      id: 'rejuvenation',
      title: 'Rejuvenation',
      subtitle: 'Vitality & Wellness',
      icon: Sun
    }
  ]
}
