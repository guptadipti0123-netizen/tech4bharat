"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function CountUp({ value, suffix = "", duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const node = ref.current;

    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        node.textContent = `${Math.round(latest).toLocaleString("en-IN")}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [isInView, value, duration, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
