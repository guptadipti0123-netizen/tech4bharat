"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

/** A background image that drifts slower than scroll for a subtle parallax hero effect. */
export default function ParallaxImage({ src, alt, priority }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] h-[120%] w-full">
        <Image src={src} alt={alt} fill priority={priority} sizes="100vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
