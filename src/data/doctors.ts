import doc1 from '../assets/images/doctors/photo-1612349317150-e413f6a5b16d.png'
import doc2 from '../assets/images/doctors/photo-1559839734-2b71ea197ec2.png'
import doc3 from '../assets/images/doctors/photo-1612531385446-f7e6d131e1d0.png'
import doc4 from '../assets/images/doctors/photo-1564564244660-5d73c057f2d2.png'
import doc5 from '../assets/images/doctors/photo-1611695434369-a8f5d76ceb7b.png'
import doc6 from '../assets/images/doctors/photo-1659353885824-1199aeeebfc6.png'
import doc7 from '../assets/images/doctors/photo-1659353888906-adb3e0041693.png'

export interface Doctor {
  id: string
  name: string
  experience: string
  qualification?: string
  role: string
  image: string
}

export const doctorsData = {
  title: "Meet Our",
  titleHighlight: "Expert Doctors",
  ctaText: "View All Doctors",
  items: [
    {
      id: 'dr-shaji',
      name: 'Dr. P. R. Shaji',
      experience: '30+ Years',
      qualification: 'BAMS, MD (Ay)',
      role: 'Chief Medical Officer & Medical Superintendent',
      image: doc1
    },
    {
      id: 'dr-hridhya',
      name: 'Dr. R.S. Hridhya',
      experience: '15+ Years',
      qualification: 'BAMS, MS (Ay)',
      role: "Women's Health & Gynaecology Specialist",
      image: doc2
    },
    {
      id: 'dr-rahul',
      name: 'Dr. Rahul Unnithan R.',
      experience: '13+ Years',
      qualification: 'BAMS, MD (Ay)',
      role: 'HOD – Wellness & Panchakarma',
      image: doc3
    },
    {
      id: 'dr-neena',
      name: 'Dr. Neena Ravindran',
      experience: '9+ Years',
      qualification: 'BAMS, MS (Ay)',
      role: 'HOD – Ayurveda Ophthalmology & ENT',
      image: doc4
    },
    {
      id: 'dr-sreejith',
      name: 'Dr. Sreejith P.C.',
      experience: '7+ Years',
      qualification: 'BAMS, MS (Ay)',
      role: 'HOD – Anorectal & Sports Medicine',
      image: doc5
    },
    {
      id: 'dr-manu',
      name: 'Dr. Manu Das',
      experience: '20+ Years',
      qualification: 'BAMS, MD (Ay)',
      role: 'Co-Founder | Ayurveda Doctor-Scientist & Longevity Researcher',
      image: doc6
    },
    {
      id: 'dr-smitha',
      name: 'Dr. Smitha Manu Das',
      experience: '15+ Years',
      qualification: 'BAMS',
      role: "Women's Health Specialist | Ayurveda Cosmetologist & Author",
      image: doc7
    },
    {
      id: 'dr-rinu',
      name: 'Dr. Rinu Nowfil',
      experience: '10+ Years',
      qualification: 'BAMS',
      role: 'Resident Ayurveda Physician & Wellness Consultant',
      image: doc1
    },
    {
      id: 'shyla',
      name: 'Shyla V. D.',
      experience: '20+ Years',
      role: 'Senior Yoga Instructor & Yoga Therapist',
      image: doc2
    }
  ]
}
