"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Building, Landmark, Compass, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

const heroSlides = [
  {
    src: "/images/legacy/workshops/day2-i1-digital-narratives-blockchain.png",
    alt: "Tech4Bharat cohort session on Digital Narratives and Blockchain at COEP",
    tag: "COEP Tech University",
    topic: "Digital Narratives & Deep-Tech Innovation",
  },
  {
    src: "/images/legacy/policy-workshop-2.png",
    alt: "Expert speaker addressing the Tech4Bharat workshop cohort",
    tag: "Policy & Governance",
    topic: "National Technology Policy Frameworks",
  },
  {
    src: "/images/legacy/workshops/day5-i1-earth-observation-strategic-tech.png",
    alt: "Tech4Bharat cohort field visit and advanced computing session at C-DAC",
    tag: "C-DAC Pune",
    topic: "High-Performance Computing & Earth Observation",
  },
  {
    src: "/images/legacy/workshops/day5-i2-field-visit-advanced-computing.png",
    alt: "Tech4Bharat cohort advanced computing session",
    tag: "Advanced Computing",
    topic: "Institutional Lab R&D & Supercomputing Access",
  },
  {
    src: "/images/legacy/workshops/day3-i2-strategic-innovation-frameworks.png",
    alt: "Founders collaborating during Strategic Innovation session",
    tag: "IIT Bombay & COEP",
    topic: "Strategic Innovation & Venture Translation",
  },
];

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds per slide

const ecosystemStats = [
  { label: "Academic & Tech Hubs", value: "4+", sub: "IIT-B, COEP, VJTI, C-DAC", icon: Landmark },
  { label: "Social Impact Domains", value: "13", sub: "AgriTech to DeepTech", icon: Compass },
  { label: "Founders & Innovators", value: "100+", sub: "Incubated & Mentored", icon: Users },
  { label: "Non-Profit Charter", value: "Sec 8", sub: "National Innovation Hub", icon: Building },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  }, []);

  // Slide progress timer
  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // update progress every 50ms
    const step = (interval / AUTO_PLAY_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, interval);

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
      aria-label="Tech4Bharat Showcase"
      className="relative w-full overflow-hidden bg-[#071A2C]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main hero showcase container */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] w-full">
        {/* Background slideshow */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.src}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  isActive ? "scale-100 opacity-100" : "scale-105 opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover object-center brightness-[0.95] contrast-[1.05]"
                />
              </div>
            );
          })}
        </div>

        {/* Sophisticated dual gradients for premium depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061828] via-[#081F36]/75 to-[#061828]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061828]/95 via-[#081F36]/65 to-transparent" />

        {/* Floating live slide info badge on desktop */}
        <div className="absolute top-20 right-4 sm:top-24 sm:right-8 z-10 hidden sm:flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[12px] font-medium text-white/90">
            {heroSlides[currentSlide].tag} • <span className="text-white/70">{heroSlides[currentSlide].topic}</span>
          </span>
        </div>

        {/* Hero Content */}
        <div className="relative flex min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] items-center pt-24 pb-16 sm:pt-28 sm:pb-20">
          <Container>
            <AnimatedSection className="max-w-2xl">
              {/* National Platform Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-400/10 px-3.5 py-1 text-[11.5px] sm:text-[13px] font-semibold text-amber-200 backdrop-blur-md shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                <span>National Platform for Social Entrepreneurship &amp; Innovation</span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-4 text-balance text-[28px] font-extrabold leading-[1.18] tracking-[-0.02em] text-white sm:text-[40px] lg:text-[46px]">
                Empowering India&apos;s Next-Gen Founders Building for{" "}
                <span className="bg-gradient-to-r from-[#70B4FF] via-[#A5D0FF] to-[#FFE08A] bg-clip-text text-transparent">
                  Bharat
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-3.5 max-w-xl text-balance text-[14px] sm:text-[16px] leading-relaxed text-slate-200">
                Tech4Bharat connects grassroots founders with premier academic institutions, deep-tech infrastructure, policy support, and catalytic funding across 13 critical impact sectors.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                <Button
                  href="/programs"
                  size="md"
                  className="bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25 border border-white/20"
                >
                  Explore Support Programs <ArrowRight size={16} />
                </Button>
                <Button
                  href="/startup-bootcamp"
                  variant="outline"
                  size="md"
                  className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-brand-900 backdrop-blur-md"
                >
                  Startup Bootcamp 2026
                </Button>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-[13px] sm:text-[14px] font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <span>View 13+ Domain Portfolio</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          </Container>
        </div>

        {/* Slide navigation controls & progress bar */}
        <div className="absolute bottom-6 inset-x-0 z-20">
          <Container className="flex items-center justify-between">
            {/* Slide progress bars */}
            <div className="flex items-center gap-2 sm:gap-3">
              {heroSlides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => {
                      setCurrentSlide(index);
                      setProgress(0);
                    }}
                    aria-label={`Jump to slide ${index + 1}: ${slide.tag}`}
                    className="group relative h-1.5 sm:h-2 rounded-full overflow-hidden transition-all duration-300 bg-white/25 hover:bg-white/40 focus:outline-none"
                    style={{ width: isActive ? "48px" : "18px" }}
                  >
                    {isActive && (
                      <span
                        className="absolute inset-y-0 left-0 bg-amber-400 rounded-full transition-all ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </Container>
        </div>
      </div>

      {/* Integrated Live Ecosystem Stats Ribbon */}
      <div className="relative z-20 border-t border-white/10 bg-[#061828]/95 backdrop-blur-md py-4 sm:py-5">
        <Container>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
            {ecosystemStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 sm:p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/20 text-brand-300 border border-brand-400/20">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-heading text-lg sm:text-2xl font-extrabold text-white tracking-tight leading-none">
                      {stat.value}
                    </div>
                    <div className="truncate text-[11.5px] sm:text-xs font-semibold text-slate-200 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="truncate text-[10px] sm:text-[11px] text-slate-400 font-medium">
                      {stat.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}