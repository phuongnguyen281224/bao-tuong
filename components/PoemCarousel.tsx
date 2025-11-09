"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type PoemData = {
  title: string;
  verses: string[];
  note?: string;
};

interface PoemCarouselProps {
  poems: PoemData[];
}

export function PoemCarousel({ poems }: PoemCarouselProps) {
  useEffect(() => {
    gsap.from(".slide-shell", {
      opacity: 0,
      y: 16,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, [poems.length]);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={16}
      grabCursor
      pagination={{ clickable: true }}
      navigation
      className="poem-swiper w-full max-w-4xl mx-auto"
    >
      {poems.map((poem, index) => (
        <SwiperSlide key={poem.title} className="!h-auto">
          <div className="slide-shell">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Slide {index + 1}</p>
            <h3>{poem.title}</h3>
            <div className="flex-1 space-y-1 italic">
              {poem.verses.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            {poem.note ? <p className="text-sm italic text-muted">{poem.note}</p> : null}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
