"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Gift,
  HeartHandshake,
  Landmark,
  Rocket,
  School,
  Users,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface EcosystemNode {
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
}

// Positions plotted on a 500x500 viewBox, evenly spaced around the center (250, 250) at radius 180.
const nodes: EcosystemNode[] = [
  { label: "Startups", icon: Rocket, x: 250, y: 70 },
  { label: "Investors", icon: Landmark, x: 377, y: 123 },
  { label: "Mentors", icon: Users, x: 430, y: 250 },
  { label: "Universities", icon: School, x: 377, y: 377 },
  { label: "NGOs", icon: HeartHandshake, x: 250, y: 430 },
  { label: "Government", icon: Building2, x: 123, y: 377 },
  { label: "Industry", icon: Factory, x: 70, y: 250 },
  { label: "CSR Partners", icon: Gift, x: 123, y: 123 },
];

export default function EcosystemOverview() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <AnimatedSection>
          <SectionTitle
            eyebrow="Ecosystem Overview"
            title="One connected startup ecosystem"
            description="Tech4Bharat sits at the center of a network built to move founders forward — from first idea to national impact."
          />
        </AnimatedSection>

        <div className="relative mx-auto mt-16 aspect-square w-full max-w-xl">
          <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" aria-hidden="true">
            {nodes.map((node, i) => (
              <motion.line
                key={node.label}
                x1={250}
                y1={250}
                x2={node.x}
                y2={node.y}
                stroke="url(#ecosystem-line)"
                strokeWidth={2}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: "easeInOut" }}
              />
            ))}
            <defs>
              <linearGradient id="ecosystem-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2a6bae" />
                <stop offset="100%" stopColor="#00a99d" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-linear-to-br from-brand-700 to-secondary-600 text-center shadow-xl shadow-brand-900/20 sm:h-28 sm:w-28"
          >
            <span className="text-xs font-bold leading-tight text-white sm:text-sm">
              Tech
              <br />
              4Bharat
            </span>
          </motion.div>

          {/* Satellite nodes */}
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                whileHover={{ scale: 1.08, y: -2 }}
                style={{ left: `${(node.x / 500) * 100}%`, top: `${(node.y / 500) * 100}%` }}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-brand-700 shadow-md transition-shadow duration-300 hover:shadow-lg sm:h-14 sm:w-14">
                  <Icon size={20} />
                </span>
                <span className="whitespace-nowrap text-[11px] font-semibold text-slate-600 sm:text-xs">
                  {node.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
