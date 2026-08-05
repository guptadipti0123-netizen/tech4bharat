"use client";

import { useEffect, useRef } from "react";

interface DragMarqueeOptions {
  /** Number of distinct items before duplication — auto-scroll is disabled entirely when 0. */
  itemCount: number;
  /** px/second auto-scroll pace. */
  speed?: number;
}

const INTERACTION_COOLDOWN = 700; // ms to wait after a manual scroll before auto-scroll resumes

/** Drives a continuously auto-scrolling, infinitely looping, fully draggable horizontal
 *  track. Built on native horizontal scroll (not a CSS transform) so it stays genuinely
 *  draggable/swipeable; a requestAnimationFrame loop nudges `scrollLeft` forward at a
 *  steady pace and resets seamlessly once the (caller-duplicated) content has scrolled past
 *  its first copy. Auto-scroll pauses on hover, during drag, and briefly after any wheel/
 *  touch interaction so it never fights the user.
 *
 *  Callers must render their items twice (`[...items, ...items]`) for the loop to be
 *  seamless, and spread the returned `trackProps` onto the scrollable container. */
export function useDragMarquee({ itemCount, speed = 44 }: DragMarqueeOptions) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const isPointerDownRef = useRef(false);
  const lastInteractionRef = useRef(0);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || itemCount === 0) return;

    let raf: number;
    let lastTime = performance.now();

    function step(time: number) {
      const dt = time - lastTime;
      lastTime = time;

      if (
        track &&
        !isHoveringRef.current &&
        !isPointerDownRef.current &&
        time - lastInteractionRef.current > INTERACTION_COOLDOWN
      ) {
        track.scrollLeft += (speed * dt) / 1000;
        const halfWidth = track.scrollWidth / 2;
        if (track.scrollLeft >= halfWidth) {
          track.scrollLeft -= halfWidth;
        }
      }
      raf = requestAnimationFrame(step);
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [itemCount, speed]);

  function markInteraction() {
    lastInteractionRef.current = performance.now();
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const track = trackRef.current;
    if (!track) return;
    isPointerDownRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isPointerDownRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    track.scrollLeft = dragStartScrollRef.current - (e.clientX - dragStartXRef.current);
  }

  function endDrag(e: React.PointerEvent<HTMLDivElement>) {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    markInteraction();
    trackRef.current?.releasePointerCapture(e.pointerId);
  }

  function endDragOnLeave() {
    if (isPointerDownRef.current) {
      isPointerDownRef.current = false;
      markInteraction();
    }
  }

  const trackProps = {
    ref: trackRef,
    style: { touchAction: "pan-x" as const },
    onMouseEnter: () => {
      isHoveringRef.current = true;
    },
    onMouseLeave: () => {
      isHoveringRef.current = false;
      endDragOnLeave();
    },
    onWheel: markInteraction,
    onTouchStart: markInteraction,
    onPointerDown: handlePointerDown,
    onPointerMove: handlePointerMove,
    onPointerUp: endDrag,
    onPointerLeave: endDrag,
  };

  return { trackProps };
}
