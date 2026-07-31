import { Play, Star } from 'lucide-react'
import type { Testimonial } from '../../../data/testimonials'
import './TestimonialCard.css'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-video-wrapper">
        <img src={testimonial.thumbnail} alt={testimonial.name} className="testimonial-thumb-img" />
        <div className="testimonial-video-overlay" />
        <button type="button" className="testimonial-play-btn" aria-label={`Play video testimonial from ${testimonial.name}`}>
          <Play size={18} className="play-icon" fill="currentColor" />
        </button>
      </div>

      <div className="testimonial-card-body">
        <div className="testimonial-rating">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>

        <p className="testimonial-quote">{testimonial.quote}</p>

        <div className="testimonial-author">
          <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
          <div className="testimonial-author-info">
            <span className="testimonial-author-name">{testimonial.name}</span>
            <span className="testimonial-author-country">{testimonial.country}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
