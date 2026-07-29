"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { getHeadshot } from "@/lib/images";
import Card from "@/components/ui/Card";
import StarRating from "@/components/ui/StarRating";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

interface TestimonialCarouselProps {
  items: TestimonialItem[];
  intervalMs?: number;
}

export default function TestimonialCarousel({ items, intervalMs = 6000 }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex((next + items.length) % items.length);
    },
    [index, items.length]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, intervalMs]);

  const current = items[index];

  return (
    <div className="mx-auto max-w-3xl">
      <Card variant="gradient-border">
        <Quote size={36} className="text-accent-500" />
        <div className="relative mt-6 min-h-44 sm:min-h-36">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <StarRating rating={current.rating} />
              <p className="mt-4 text-lg leading-relaxed text-slate-700 sm:text-xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-50">
                  <Image
                    src={getHeadshot(index + 4)}
                    alt={current.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{current.name}</p>
                  <p className="text-xs text-slate-500">
                    {current.role}, {current.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Card>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand-200 hover:text-brand-700"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-brand-700" : "w-2 bg-slate-300"
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand-200 hover:text-brand-700"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
