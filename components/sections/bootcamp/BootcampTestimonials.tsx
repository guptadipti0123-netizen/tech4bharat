"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Blob from "@/components/ui/Blob";
import { getInitials } from "@/lib/utils";
import { testimonials } from "@/lib/data";

/** A single-slide testimonial carousel — the same founders and partners quoted elsewhere on
 *  the site, framed here as evidence of what the bootcamp experience is actually like. */
export default function BootcampTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }

  const active = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-brand-50 py-8 sm:py-12">
      <Blob tone="brand" className="-right-24 top-0 h-72 w-72" />
      <Blob tone="secondary" className="-left-20 bottom-0 h-64 w-64" animate={false} />

      <Container className="relative">
        <AnimatedSection>
          <SectionTitle
            eyebrow="Founder Voices"
            title="What past cohorts say"
            description="Feedback from founders and mentors who've been through our programs."
          />
        </AnimatedSection>

        <div className="relative mx-auto mt-10 max-w-2xl">
          <div className="relative min-h-70 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.name}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="glass-surface rounded-3xl border border-white/60 p-8 text-center shadow-[0_16px_40px_rgba(31,78,61,0.1)] sm:p-10"
              >
                <Quote className="mx-auto text-brand-300" size={32} />
                <p className="mt-4 text-lg leading-relaxed text-ink-900 sm:text-xl">
                  &ldquo;{active.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={i < active.rating ? "fill-accent-500 text-accent-500" : "text-slate-300"}
                    />
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
                    {getInitials(active.name)}
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-bold text-ink-900">{active.name}</p>
                    <p className="text-xs text-slate-600">
                      {active.role}, {active.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-700 shadow-md transition-transform hover:scale-105 sm:-translate-x-14"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-3 items-center justify-center rounded-full bg-white text-brand-700 shadow-md transition-transform hover:scale-105 sm:translate-x-14"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-brand-700" : "w-2 bg-brand-200"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
