'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Pagination } from 'swiper/modules';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ArtSlide {
  title: string;
  description: string;
  callouts: string[];
}

interface ArtCarouselProps {
  slides: ArtSlide[];
}

export function ArtCarousel({ slides }: ArtCarouselProps) {
  useEffect(() => {
    gsap.from('.slide-shell', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <Swiper
      modules={[EffectCards, Navigation, Pagination]}
      effect="cards"
      grabCursor
      pagination={{ clickable: true }}
      navigation
      className="w-full max-w-3xl mx-auto"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.title}>
          <div className="slide-shell">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Slide {index + 1}</p>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-ink/80">
              {slide.callouts.map((callout) => (
                <li key={callout}>{callout}</li>
              ))}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
