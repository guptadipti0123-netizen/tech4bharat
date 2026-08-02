"use client";

import { Camera, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import Button from "@/components/ui/Button";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#FFFDF7] via-[#FFF6E4] to-white pb-14 pt-40 sm:pb-20 sm:pt-48">
      <div
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 animate-blob rounded-full"
        style={{ background: "radial-gradient(circle, rgba(212,160,23,0.18), transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-125 w-125 animate-blob rounded-full"
        style={{ background: "radial-gradient(circle, rgba(31,78,61,0.12), transparent 70%)", animationDelay: "3s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full"
        style={{ background: "radial-gradient(circle, rgba(212,160,23,0.14), transparent 70%)", animationDelay: "6s" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="inline-flex animate-float items-center gap-2 rounded-full border border-[#D4A017]/25 bg-white/80 px-4 py-1.5 text-sm font-semibold text-[#1F4E3D] shadow-sm backdrop-blur-md">
            <Sparkles size={16} className="text-[#D4A017]" />
            India&apos;s Innovation Ecosystem, in Pictures
          </span>

          <h1 className="mt-6 text-[36px] font-extrabold leading-[1.12] tracking-tight text-[#1F4E3D] sm:text-[52px]">
            Moments That Define India&apos;s <span className="text-[#D4A017]">Innovation Story</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            From hackathons and incubation centres to women-led AgriTech ventures — real students,
            founders, and mentors building Bharat&apos;s startup future, frame by frame.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="#gallery-masonry"
              size="lg"
              className="bg-[#1F4E3D] text-white shadow-lg shadow-[#1F4E3D]/20 hover:bg-[#173d2f] hover:shadow-xl hover:shadow-[#1F4E3D]/25"
            >
              <Camera size={18} /> Explore the Gallery
            </Button>
          </div>

          <div className="mx-auto mt-12 flex max-w-lg items-center justify-center gap-8 border-t border-[#1F4E3D]/10 pt-8 sm:gap-14">
            <div className="text-center">
              <p className="text-3xl font-extrabold text-[#1F4E3D]">
                <CountUp value={500} suffix="+" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">Photos</p>
            </div>
            <div className="h-10 w-px bg-[#1F4E3D]/10" />
            <div className="text-center">
              <p className="text-3xl font-extrabold text-[#1F4E3D]">
                <CountUp value={120} suffix="+" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">Events</p>
            </div>
            <div className="h-10 w-px bg-[#1F4E3D]/10" />
            <div className="text-center">
              <p className="text-3xl font-extrabold text-[#1F4E3D]">
                <CountUp value={45} suffix="+" />
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">Cities</p>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
