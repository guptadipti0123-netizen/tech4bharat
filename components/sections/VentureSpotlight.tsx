"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import StartupLogo from "@/components/ui/StartupLogo";

interface SpotlightStartup {
  id: string;
  name: string;
  founder: string;
  domain: string;
  location: string;
  stage: string;
  tagline: string;
  impactMetrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  partnerLab: string;
  accentColor: string;
  image: string;
}

const spotlightStartups: SpotlightStartup[] = [
  {
    id: "agrosense",
    name: "AgroSense",
    founder: "Ritika Deshmukh",
    domain: "AgriTech",
    location: "Nagpur, Maharashtra",
    stage: "Growth Stage",
    tagline: "AI-powered crop health monitoring and soil analytics for smallholder farmers.",
    impactMetrics: [
      { label: "Farmers Empowered", value: "50,000+" },
      { label: "Water Input Saved", value: "28%" },
      { label: "Yield Increase", value: "+18%" },
    ],
    problem: "Smallholders lack real-time soil nutrient telemetry and suffer preventable crop disease outbreaks.",
    solution: "Low-cost IoT soil probes paired with smartphone camera optical disease detection in regional languages.",
    partnerLab: "COEP Precision Agriculture Lab",
    accentColor: "#059669",
    image: "/images/domains/agritech.jpg",
  },
  {
    id: "jalshuddhi",
    name: "JalShuddhi",
    founder: "Deepak Chawla",
    domain: "Water & Sanitation",
    location: "Indore, Madhya Pradesh",
    stage: "Early Stage",
    tagline: "Solar-powered decentralized water purification with real-time IoT contamination telemetry.",
    impactMetrics: [
      { label: "Clean Water Delivered", value: "1.2M+ L" },
      { label: "Villages Covered", value: "42" },
      { label: "Zero Grid Power", value: "100% Solar" },
    ],
    problem: "Arsenic, fluoride, and heavy metal contamination in rural groundwater across central India.",
    solution: "Decentralized nano-filtration pods running completely on solar PV with remote IoT flow tracking.",
    partnerLab: "VJTI Environmental Engineering Center",
    accentColor: "#0284C7",
    image: "/images/domains/water-sanitation.jpg",
  },
  {
    id: "cardiobeat",
    name: "CardioBeat",
    founder: "Dr. Arvind Kulkarni",
    domain: "MedTech",
    location: "Bengaluru, Karnataka",
    stage: "Growth Stage",
    tagline: "Portable AI-assisted 12-lead ECG device for rural and point-of-care cardiac screening.",
    impactMetrics: [
      { label: "Rural Screenings", value: "15,000+" },
      { label: "Critical Cases Flagged", value: "1,450+" },
      { label: "Test Cost", value: "₹50 / test" },
    ],
    problem: "Lack of cardiologists in Tier-3 towns causes delayed diagnosis of myocardial infarction.",
    solution: "Pocket-sized 12-lead ECG transmitting cloud analytics with instant triage alerts to nearest district hospital.",
    partnerLab: "CDTIES IIT Bombay Health R&D",
    accentColor: "#4F46E5",
    image: "/images/domains/medtech.jpg",
  },
  {
    id: "medlink",
    name: "MedLink",
    founder: "Aditya Rao",
    domain: "HealthTech",
    location: "Pune, Maharashtra",
    stage: "Early Stage",
    tagline: "Vernacular telemedicine platform connecting primary health centers with multi-speciality doctors.",
    impactMetrics: [
      { label: "PHCs Connected", value: "28" },
      { label: "Consultations Completed", value: "35,000+" },
      { label: "Avg Wait Time", value: "< 12 Mins" },
    ],
    problem: "Primary Health Centres (PHCs) lack specialist access, forcing rural patients to travel 80+ km.",
    solution: "Low-bandwidth video consultation terminal with automated Hindi/Marathi prescription transcription.",
    partnerLab: "C-DAC Pune High-Performance AI Systems",
    accentColor: "#E11D48",
    image: "/images/domains/healthtech.jpg",
  },
];

export default function VentureSpotlight() {
  const [activeStartup, setActiveStartup] = useState<SpotlightStartup>(spotlightStartups[0]);

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 bg-white">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 border border-brand-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
              <TrendingUp size={14} className="text-brand-600" />
              <span>Venture Impact Showcase</span>
            </div>
            <h2 className="mt-2.5 text-[24px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-tight text-[#0B2A4A]">
              High-Impact Ventures Solving for Bharat
            </h2>
            <p className="mt-2 max-w-2xl text-[14px] sm:text-[15.5px] leading-relaxed text-slate-600">
              Meet a few of the category-defining social enterprises supported through Tech4Bharat’s incubation, academic partnerships, and catalytic ecosystem.
            </p>
          </div>
          <Button href="/portfolio" variant="outline" size="sm" className="hidden md:inline-flex text-xs">
            View All Startups <ArrowRight size={13} />
          </Button>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {spotlightStartups.map((startup) => {
            const isSelected = activeStartup.id === startup.id;
            return (
              <button
                key={startup.id}
                type="button"
                onClick={() => setActiveStartup(startup)}
                className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#0B2A4A] text-white border-[#0B2A4A] shadow-md"
                    : "bg-[#F8FAFC] text-slate-800 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                <StartupLogo
                  name={startup.name}
                  domain={startup.domain}
                  size={36}
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-bold text-sm sm:text-[15px] truncate leading-tight">
                    {startup.name}
                  </div>
                  <div className={`text-[11px] truncate mt-0.5 ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                    {startup.domain}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Startup Detail Card */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-linear-to-b from-[#F5FAFE] via-white to-[#F5FAFE] p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Details & Problem / Solution */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-3 py-1 text-xs font-bold text-white"
                  style={{ backgroundColor: activeStartup.accentColor }}
                >
                  {activeStartup.domain}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200">
                  {activeStartup.stage}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                  <MapPin size={12} /> {activeStartup.location}
                </span>
              </div>

              <h3 className="mt-4 text-[22px] sm:text-[28px] font-extrabold text-[#0B2A4A] leading-snug">
                {activeStartup.name}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">
                Founded by <span className="text-[#0B2A4A] font-bold">{activeStartup.founder}</span>
              </p>

              <p className="mt-3 text-[14px] sm:text-[15.5px] leading-relaxed text-slate-700 font-medium">
                {activeStartup.tagline}
              </p>

              {/* Problem / Solution Grid */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                <div className="rounded-xl bg-white p-3.5 border border-slate-200">
                  <div className="text-[11.5px] font-bold uppercase tracking-wider text-rose-700">
                    The Ground Reality:
                  </div>
                  <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                    {activeStartup.problem}
                  </p>
                </div>
                <div className="rounded-xl bg-white p-3.5 border border-slate-200">
                  <div className="text-[11.5px] font-bold uppercase tracking-wider text-emerald-700">
                    The Innovation:
                  </div>
                  <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-slate-600">
                    {activeStartup.solution}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="font-semibold text-slate-800">Academic R&amp;D Hub:</span>
                <span className="text-brand-700 font-semibold">{activeStartup.partnerLab}</span>
              </div>
            </div>

            {/* Right Col: Verified Impact Metrics & Visual */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="rounded-2xl border border-slate-200 bg-[#0B2A4A] p-6 text-white shadow-md">
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Verified Grassroots Impact
                  </span>
                  <Sparkles size={16} className="text-amber-300" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {activeStartup.impactMetrics.map((metric) => (
                    <div key={metric.label} className="p-2 rounded-xl bg-white/10">
                      <div className="font-heading text-lg sm:text-xl font-extrabold text-white">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-medium text-slate-300 mt-1 leading-tight">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200">
                <div>
                  <div className="text-xs font-bold text-slate-900">Explore Portfolio Venture</div>
                  <div className="text-[11px] text-slate-500">Connect with founders &amp; mentors</div>
                </div>
                <Button href="/portfolio" size="sm" variant="primary" className="text-xs">
                  Portfolio Details <ArrowUpRight size={13} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex md:hidden justify-center">
          <Button href="/portfolio" variant="outline" size="sm" className="w-full text-xs">
            View All Startups <ArrowRight size={13} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
