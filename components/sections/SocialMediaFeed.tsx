"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, UserPlus } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import VideoModal from "@/components/ui/VideoModal";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { galleryImages } from "@/lib/gallery";

const instagramPosts = galleryImages.slice(0, 6);

const youtubeHighlights = [
  "Founder Stories: Building AgroSense",
  "Inside the Ignite Bootcamp",
  "Mentor Spotlight: Building for Bharat",
];

export default function SocialMediaFeed() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Social Media"
            title="Follow our journey"
            description="A glimpse of the community, moments, and milestones we share online."
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <AnimatedSection animation="scale" className="lg:col-span-2">
            <Card>
              <div className="flex items-center gap-2">
                <InstagramIcon className="h-5 w-5 text-brand-700" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Instagram
                </h3>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {instagramPosts.map((post) => (
                  <div
                    key={post.src}
                    className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100"
                  >
                    <Image
                      src={post.src}
                      alt={post.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 opacity-0 transition-all duration-300 group-hover:bg-ink-900/40 group-hover:opacity-100">
                      <InstagramIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={0.08}>
            <Card className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <LinkedinIcon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-ink-900">LinkedIn Feed</h3>
                <p className="mt-1.5 text-sm text-slate-600">
                  Company updates, hiring news, and founder spotlights — follow along on LinkedIn.
                </p>
              </div>
              <Button href="#" variant="outline" size="sm">
                <UserPlus size={16} /> Follow Us
              </Button>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.12} className="mt-6">
          <Card>
            <div className="flex items-center gap-2">
              <YoutubeIcon className="h-5 w-5 text-brand-700" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                YouTube
              </h3>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {youtubeHighlights.map((title) => (
                <button
                  key={title}
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="group flex items-center gap-3 rounded-xl border border-slate-100 p-3 text-left transition-colors hover:border-brand-200 hover:bg-brand-50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-brand-700 to-secondary-600 text-white transition-transform duration-300 group-hover:scale-110">
                    <Play size={14} className="ml-0.5" fill="currentColor" />
                  </span>
                  <span className="text-sm font-medium text-ink-900">{title}</span>
                </button>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      </Container>

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} title="YouTube video" />
    </section>
  );
}
