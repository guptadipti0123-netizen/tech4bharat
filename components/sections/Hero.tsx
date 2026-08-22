"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const heroSlides = [
  {
    src: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png",
    alt: "Participants and faculty in the auditorium during Tech4Bharat session",
  },
  {
    src: "/images/legacy/policy-workshop-2.png",
    alt: "Expert speaker addressing the Tech4Bharat workshop cohort",
  },
  {
    src: "/images/legacy/workshops/day5-i1-earth-observation-strategic-tech.png",
    alt: "Tech4Bharat cohort field visit and advanced computing session at C-DAC",
  },
  {
    src: "/images/legacy/workshops/day5-i2-field-visit-advanced-computing.png",
    alt: "Tech4Bharat cohort field visit and advanced computing session at C-DAC",
  },
  {
    src: "/images/legacy/workshops/day3-i2-strategic-innovation-frameworks.png",
    alt: "Founders and students collaborating during Strategic Innovation session",
  },
];

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds per slide

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 40;
    if (deltaX > SWIPE_THRESHOLD) {
      prevSlide();
    } else if (deltaX < -SWIPE_THRESHOLD) {
      nextSlide();
    }
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <section
      id="top"
      aria-label="Hero Showcase"
      className="relative min-h-135 w-full overflow-hidden rounded-b-[48px] bg-[#0B2A4A] sm:min-h-160 lg:min-h-screen"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background slideshow — same treatment (gradient wash, rounded-b corners) as the
          About page hero, so the two pages read as one visual language. Stacking is by
          plain DOM order (image, then gradients, then content) — no z-index — matching
          AboutHero's pattern exactly. */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.src}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive ? "scale-100 opacity-100" : "scale-105 opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center brightness-105 contrast-105"
              />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-transparent" />

      <div className="relative flex h-full min-h-135 items-end pb-8 pt-20 sm:min-h-160 sm:items-center sm:pb-0 sm:pt-0 lg:min-h-screen">
        <Container>
          <AnimatedSection className="max-w-xl">
            <h1 className="text-balance text-[1.45rem] font-semibold leading-tight tracking-[-0.01em] text-white sm:text-[1.9rem] lg:text-[2.15rem]">
              A National Platform for{" "}
              <span className="text-[#FFE08A]">Social Entrepreneurship and Innovation</span>
            </h1>
            <p className="mt-3 max-w-lg text-balance text-[13px] leading-6 text-white/85 sm:mt-4 sm:text-[14px]">
              Tech4Bharat is proposed to be established as a Section 8 Company — a national platform for social entrepreneurship and innovation.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-6 sm:gap-3">
              <Button href="/programs" size="sm">
                Explore Programs <ArrowRight size={18} />
              </Button>
              <Button href="/contact" size="sm" variant="outline">
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </div>

      {/* Prev/Next slide controls — Home is the one hero with a carousel, so it keeps a
          light-touch nav the single-image About hero doesn't need. */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-1.5 sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </section>
  );
}
/*  */