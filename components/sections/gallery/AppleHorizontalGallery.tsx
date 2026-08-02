"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";
import type { GalleryPhoto } from "@/lib/gallery/service";

interface AppleHorizontalGalleryProps {
  photos: GalleryPhoto[];
}

const AUTOPLAY_INTERVAL_MS = 3400;

/** Apple-style horizontal gallery — large draggable, snap-scrolling cards where the card
 *  nearest centre scales up to full focus while its neighbours shrink and blur. Auto-advances
 *  on a timer, and yields instantly to the user the moment they touch, drag, or hover it. */
export default function AppleHorizontalGallery({ photos }: AppleHorizontalGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isInteracting = useRef(false);
  const isDragging = useRef(false);
  const isVisible = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }
    });
    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateActiveIndex();
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => track.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  // Only ever animate while the section is actually on screen — off-screen auto-scrolling
  // is wasted work, and resuming it mid-scroll is exactly what reads as a "jump" to the user.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible.current = entry.isIntersecting;
    }, { threshold: 0.4 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Auto-advance, paused the instant a user touches the track or it scrolls out of view.
  useEffect(() => {
    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track || isInteracting.current || !isVisible.current) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 8) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const next = cardRefs.current[Math.min(activeIndex + 1, photos.length - 1)];
        if (next) next.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [activeIndex, photos.length]);

  function onPointerDown(e: React.PointerEvent) {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    isInteracting.current = true;
    dragStart.current = { x: e.clientX, scrollLeft: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!isDragging.current || !trackRef.current) return;
    const dx = e.clientX - dragStart.current.x;
    trackRef.current.scrollLeft = dragStart.current.scrollLeft - dx;
  }

  function endDrag() {
    isDragging.current = false;
    window.setTimeout(() => {
      isInteracting.current = false;
    }, 1200);
  }

  return (
    <section ref={sectionRef} className="overflow-hidden bg-white py-14 sm:py-20">
      <Container>
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a3780f]">
            The Full Frame
          </span>
          <h2 className="mt-4 text-[32px] font-extrabold tracking-tight text-[#1F4E3D] sm:text-[44px]">
            Drag Through the Journey
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Drag, scroll, or just watch — every frame takes centre stage in turn.
          </p>
        </AnimatedSection>
      </Container>

      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onMouseEnter={() => (isInteracting.current = true)}
        onMouseLeave={() => {
          if (!isDragging.current) isInteracting.current = false;
        }}
        className="mt-10 flex touch-pan-y snap-x snap-mandatory gap-5 overflow-x-auto px-[8vw] pb-6 [scrollbar-width:none] active:cursor-grabbing sm:px-[12vw] [&::-webkit-scrollbar]:hidden"
        style={{ cursor: "grab" }}
      >
        {photos.map((photo, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={photo.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={cn(
                "relative shrink-0 snap-center overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(31,78,61,0.16)] transition-all duration-500 ease-out select-none",
                isActive
                  ? "h-75 w-58 opacity-100 blur-none sm:h-90 sm:w-70"
                  : "h-64 w-48 opacity-60 blur-[2px] sm:h-75 sm:w-58"
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                draggable={false}
                sizes="(max-width: 640px) 232px, 280px"
                className="pointer-events-none object-cover"
              />
              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 bg-linear-to-t from-[#1F4E3D]/80 via-[#1F4E3D]/10 to-transparent p-6 transition-opacity duration-500",
                  isActive ? "opacity-100" : "opacity-0"
                )}
              >
                <p className="text-sm font-medium text-white">{photo.alt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
