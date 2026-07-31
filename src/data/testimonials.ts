export interface Testimonial {
  id: string
  name: string
  country: string
  quote: string
  rating: number
  thumbnail: string
  avatar: string
}

export const testimonialsData = {
  title: "What Our",
  titleHighlight: "Patients Say",
  items: [
    {
      id: 'sarah-mitchell',
      name: 'Sarah Mitchell',
      country: 'United Kingdom',
      rating: 5,
      quote: '"I came to Kerala for Panchakarma after years of chronic fatigue. The physicians took time to truly understand my condition before recommending any therapy. The personalised care I received was unlike anything I had experienced before."',
      thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=350&fit=crop&auto=format',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&auto=format'
    },
    {
      id: 'ravi-nair',
      name: 'Ravi Nair',
      country: 'Singapore',
      rating: 5,
      quote: '"After a back injury that conventional treatment couldn\'t fully resolve, I explored Ayurvedic care in Kerala. The Kati Vasthi and Basti therapies were administered with great care and precision."',
      thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=350&fit=crop&auto=format',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format'
    },
    {
      id: 'amelia-torres',
      name: 'Amelia Torres',
      country: 'Australia',
      rating: 5,
      quote: '"The consultation process was thorough and the doctors were very knowledgeable. Every therapy was explained before it began, and I always felt safe and well cared for."',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=350&fit=crop&auto=format',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&auto=format'
    },
    {
      id: 'thomas-weber',
      name: 'Thomas Weber',
      country: 'Germany',
      rating: 5,
      quote: '"I visited for a stress and anxiety programme. The combination of Shirodhara and personalised herbal treatments made a noticeable difference to my sleep and overall sense of calm."',
      thumbnail: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=500&h=350&fit=crop&auto=format',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format'
    }
  ]
}
