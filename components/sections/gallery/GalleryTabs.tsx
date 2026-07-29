"use client";

import { useState } from "react";
import FilterTabs from "@/components/ui/FilterTabs";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GalleryGrid from "@/components/sections/gallery/GalleryGrid";
import VideoGallery from "@/components/sections/gallery/VideoGallery";

const tabs = ["Images", "Videos"];

export default function GalleryTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <AnimatedSection className="flex justify-center">
        <FilterTabs options={tabs} active={activeTab} onChange={setActiveTab} />
      </AnimatedSection>

      <div className="mt-10">{activeTab === "Images" ? <GalleryGrid /> : <VideoGallery />}</div>
    </div>
  );
}
