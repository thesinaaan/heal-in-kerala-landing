import { useState, Children } from 'react'
import type { ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperClass } from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import './ScrollSlider.css'

interface ScrollSliderProps {
  children: ReactNode
  className?: string
  slidesPerView?: number | 'auto'
  spaceBetween?: number
  showSideButtons?: boolean
  centeredSlides?: boolean
}

export default function ScrollSlider({
  children,
  className = '',
  slidesPerView = 'auto',
  spaceBetween = 20,
  showSideButtons = true,
  centeredSlides = false
}: ScrollSliderProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null)
  const childArray = Children.toArray(children)

  return (
    <div className={`ui-scroll-slider ${className}`}>
      <div className="ui-swiper-wrapper-relative">
        {showSideButtons && (
          <>
            <button
              type="button"
              className="ui-slider-side-btn prev"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Swipe left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="ui-slider-side-btn next"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Swipe right"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <Swiper
          modules={[Navigation]}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          centeredSlides={centeredSlides}
          onSwiper={setSwiperInstance}
          breakpoints={{
            0: {
              centeredSlides: true,
              spaceBetween: 16
            },
            640: {
              centeredSlides: centeredSlides,
              spaceBetween: spaceBetween
            }
          }}
          className="ui-swiper-container"
        >
          {childArray.map((child, idx) => (
            <SwiperSlide key={idx} className="ui-swiper-slide">
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
