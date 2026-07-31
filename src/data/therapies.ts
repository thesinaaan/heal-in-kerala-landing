import abhyangamImg from '../assets/images/Therapies/Abhyangam.png'
import shirodharaImg from '../assets/images/Therapies/Shirodhara.png'
import pizhichilImg from '../assets/images/Therapies/Pizhichil.png'
import njavarakizhiImg from '../assets/images/Therapies/Njavarakizhi.png'
import elakkizhiImg from '../assets/images/Therapies/Elakkizhi.png'
import katiVasthiImg from '../assets/images/Therapies/Kati-Vasthi.png'
import nasyamImg from '../assets/images/Therapies/Nasyam.png'

export interface Therapy {
  id: string
  title: string
  image: string
}

export const therapiesData = {
  title: "Ayurvedic Therapies",
  subtitle: "Traditional Ayurvedic therapies prescribed by qualified physicians and tailored to your individual health needs.",
  items: [
    {
      id: 'abhyangam',
      title: 'Abhyangam',
      image: abhyangamImg
    },
    {
      id: 'shirodhara',
      title: 'Shirodhara',
      image: shirodharaImg
    },
    {
      id: 'pizhichil',
      title: 'Pizhichil',
      image: pizhichilImg
    },
    {
      id: 'njavarakizhi',
      title: 'Njavarakizhi',
      image: njavarakizhiImg
    },
    {
      id: 'elakkizhi',
      title: 'Elakkizhi',
      image: elakkizhiImg
    },
    {
      id: 'kati-vasthi',
      title: 'Kati Vasthi',
      image: katiVasthiImg
    },
    {
      id: 'nasyam',
      title: 'Nasyam',
      image: nasyamImg
    }
  ]
}
