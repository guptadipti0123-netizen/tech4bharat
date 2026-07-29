"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mic, Newspaper, Play } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FilterTabs from "@/components/ui/FilterTabs";
import Card from "@/components/ui/Card";
import VideoModal from "@/components/ui/VideoModal";
import { blogArticles } from "@/lib/blog";
import { pressReleases, mediaCoverage, interviews, featuredVideos } from "@/lib/media";
import { getBlogImage, getHeadshot } from "@/lib/images";

const tabs = ["Latest News", "Press Releases", "Media Coverage", "Interviews", "Featured Videos"];

export default function MediaNews() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Media & News"
            title="What's happening at Tech4Bharat"
            description="Announcements, press coverage, and stories from across our ecosystem."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10 flex justify-center">
          <FilterTabs options={tabs} active={activeTab} onChange={setActiveTab} />
        </AnimatedSection>

        <div className="mt-12">
          {activeTab === "Latest News" && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogArticles.slice(0, 3).map((article, i) => (
                <AnimatedSection key={article.id} delay={i * 0.06} animation="scale">
                  <Link href={`/blog/${article.slug}`} className="group block">
                    <Card className="flex h-full flex-col overflow-hidden p-0">
                      <div className="relative h-44 w-full overflow-hidden">
                        <Image
                          src={getBlogImage(article.category)}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                          {article.date}
                        </p>
                        <h3 className="mt-2 text-base font-semibold leading-snug text-ink-900">
                          {article.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-slate-600">{article.excerpt}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                          Read More <ArrowRight size={14} />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          )}

          {activeTab === "Press Releases" && (
            <div className="mx-auto max-w-3xl space-y-4">
              {pressReleases.map((release, i) => (
                <AnimatedSection key={release.title} delay={i * 0.06}>
                  <Card className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Newspaper size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        {release.date}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-ink-900">{release.title}</h3>
                      <p className="mt-1.5 text-sm text-slate-600">{release.excerpt}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}

          {activeTab === "Media Coverage" && (
            <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
              {mediaCoverage.map((mention, i) => (
                <AnimatedSection key={mention.title} delay={i * 0.06} animation="scale">
                  <Card>
                    <span className="text-xs font-semibold uppercase tracking-wider text-secondary-600">
                      {mention.outlet}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-ink-900">{mention.title}</h3>
                    <p className="mt-2 text-xs text-slate-500">{mention.date}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}

          {activeTab === "Interviews" && (
            <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
              {interviews.map((interview, i) => (
                <AnimatedSection key={interview.title} delay={i * 0.06} animation="scale">
                  <Card className="flex items-start gap-4">
                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                      <Image src={getHeadshot(i)} alt={interview.name} fill sizes="44px" className="object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-600">
                        <Mic size={12} /> {interview.outlet}
                      </div>
                      <h3 className="mt-1.5 text-base font-semibold text-ink-900">{interview.title}</h3>
                      <p className="mt-1.5 text-xs text-slate-500">
                        {interview.name} · {interview.role}
                      </p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}

          {activeTab === "Featured Videos" && (
            <div className="grid gap-6 sm:grid-cols-3">
              {featuredVideos.map((video, i) => (
                <AnimatedSection key={video.title} delay={i * 0.06} animation="scale">
                  <button
                    type="button"
                    onClick={() => setVideoOpen(true)}
                    className="group block w-full text-left"
                  >
                    <Card className="flex h-full flex-col overflow-hidden p-0">
                      <div className="relative flex h-36 w-full items-center justify-center overflow-hidden bg-linear-to-br from-brand-800 via-brand-700 to-secondary-700">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <Play size={18} className="ml-0.5 text-brand-700" fill="currentColor" />
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
          )}
        </div>
      </Container>

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} title="Featured video" />
    </section>
  );
}
