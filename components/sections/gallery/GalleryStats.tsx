import { Calendar, Camera, Handshake, MapPin, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";

interface Stat {
  icon: LucideIcon;
  value: number;
  label: string;
}

const stats: Stat[] = [
  { icon: Camera, value: 500, label: "Photos" },
  { icon: Calendar, value: 120, label: "Events" },
  { icon: MapPin, value: 45, label: "Cities" },
  { icon: Handshake, value: 30, label: "Partners" },
];

export default function GalleryStats() {
  return (
    <section className="bg-[#1F4E3D]/[0.04] py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <AnimatedSection key={label} delay={i * 0.08} animation="scale">
              <div className="flex flex-col items-center rounded-3xl border border-[#1F4E3D]/8 bg-white p-8 text-center shadow-[0_4px_20px_rgba(31,78,61,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(31,78,61,0.12)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A017]/10 text-[#a3780f]">
                  <Icon size={26} />
                </span>
                <p className="mt-5 text-4xl font-extrabold text-[#1F4E3D]">
                  <CountUp value={value} suffix="+" />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">{label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
