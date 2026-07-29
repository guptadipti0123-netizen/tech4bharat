"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import Card from "@/components/ui/Card";
import AnimatedSection from "@/components/ui/AnimatedSection";
import VideoModal from "@/components/ui/VideoModal";
import { featuredVideos } from "@/lib/media";

export default function VideoGallery() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredVideos.map((video, i) => (
          <AnimatedSection key={video.title} delay={i * 0.06} animation="scale">
            <button type="button" onClick={() => setVideoOpen(true)} className="group block w-full text-left">
              <Card className="flex h-full flex-col overflow-hidden p-0">
                <div className="relative flex h-44 w-full items-center justify-center overflow-hidden bg-linear-to-br from-brand-800 via-brand-700 to-secondary-700">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play size={20} className="ml-0.5 text-brand-700" fill="currentColor" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-ink-900">{video.title}</h3>
                  <p className="mt-1.5 text-xs text-slate-500">{video.description}</p>
                </div>
              </Card>
            </button>
          </AnimatedSection>
        ))}
      </div>

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} title="Gallery video" />
    </div>
  );
}
