"use client";

import { useState } from "react";
import ParallaxImage from "@/components/ui/ParallaxImage";

interface HeroMediaProps {
  imageSrc: string;
  imageAlt?: string;
  /** Optional background video; falls back to the parallax image if omitted or if playback fails. */
  videoSrc?: string;
}

export default function HeroMedia({ imageSrc, imageAlt = "", videoSrc }: HeroMediaProps) {
  const [videoFailed, setVideoFailed] = useState(false);

  if (!videoSrc || videoFailed) {
    return <ParallaxImage src={imageSrc} alt={imageAlt} priority />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={imageSrc}
        onError={() => setVideoFailed(true)}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
