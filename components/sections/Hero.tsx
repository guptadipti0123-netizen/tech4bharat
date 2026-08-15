"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const heroSlides = [
  {
    src: "/images/legacy/policy-workshop-1.png",
    alt: "Tech4Bharat Digital & Tech Policy Workshop session at COEP University",
  },
  {
    src: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png",
    alt: "Participants and faculty in the auditorium during Tech4Bharat session",
  },
  {
    src: "/images/legacy/policy-workshop-2.png",
    alt: "Expert speaker addressing the Tech4Bharat workshop cohort",
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

  return (
    <section
      id="top"
      className="relative flex min-h-[580px] items-center overflow-hidden pt-16 sm:min-h-[640px] sm:pt-18 lg:min-h-screen"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Showcase"
    >
      {/* Background Slideshow Images */}
      <div className="absolute inset-0 -z-30 overflow-hidden bg-[#0A1A3A]">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.src}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0 pointer-events-none"
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

      {/* Lightened, soft gradient wash for text legibility without darkening the photos */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-t from-[#050E3D]/75 via-[#050E3D]/40 to-[#050E3D]/15"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-[#050E3D]/70 via-[#050E3D]/30 to-transparent lg:w-4/5"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 -z-10 h-96 w-96 rounded-full bg-[#2F80ED]/15 blur-3xl"
      />

      {/* Content Container */}
      <Container className="relative z-10 py-10 sm:py-16">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <AnimatedSection>
            <h1 className="text-balance text-[25px] font-extrabold leading-[1.18] tracking-[-0.02em] sm:text-[32px] sm:leading-[1.15] lg:text-[42px]">
              <span className="text-white drop-shadow-md">A National Platform for</span>{" "}
              <span className="text-[#FFE08A] drop-shadow-md">
                Social Entrepreneurship and Innovation
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <p className="mx-auto mt-4 max-w-lg text-[14.5px] leading-relaxed text-[#DCE8FF] sm:mt-5 sm:text-[17px] lg:mx-0">
              Tech4Bharat is proposed to be established as a Section 8 Company.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.18}>
            <div className="mt-7 flex flex-row flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
              <Button
                href="/programs"
                size="md"
                className="w-fit justify-center bg-white px-6 py-3 text-[14px] font-semibold text-[#0B2A4A] shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-white/95 hover:text-[#0B2A4A] active:scale-[0.98]"
              >
                Explore Programs <ArrowRight size={16} />
              </Button>
              <Button
                href="/contact"
                size="md"
                variant="outline"
                className="w-fit justify-center border-white/70 bg-white/10 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur-sm hover:border-white hover:bg-white/25 hover:text-white active:scale-[0.98]"
              >
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </Container>

      {/* Slide Navigation Controls */}
      <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-between px-4 sm:bottom-8 sm:px-8">
        {/* Indicators / Progress Dots */}
        <div className="mx-auto flex items-center gap-2 rounded-full border border-white/15 bg-[#050E3D]/50 px-3.5 py-1.5 backdrop-blur-md sm:mx-0">
          {heroSlides.map((_, i) => {
            const isSelected = i === currentSlide;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isSelected
                    ? "w-7 bg-[#FFE08A]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>

        {/* Desktop Prev/Next subtle arrow controls */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
