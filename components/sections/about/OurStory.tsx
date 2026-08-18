import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";

const sectors = [
  { name: "Healthcare", angle: -60 },
  { name: "Agriculture", angle: 0 },
  { name: "FinTech", angle: 60 },
  { name: "Education", angle: 120 },
  { name: "Sustainability", angle: 180 },
  { name: "Partners", angle: 240 },
];

function getSectorPath(centerAngleDeg: number, R = 140, r = 62, gapDeg = 2) {
  const rad = Math.PI / 180;
  const a1 = (centerAngleDeg - 30 + gapDeg) * rad;
  const a2 = (centerAngleDeg + 30 - gapDeg) * rad;
  const cx = 160;
  const cy = 160;

  const x1 = (cx + R * Math.cos(a1)).toFixed(1);
  const y1 = (cy + R * Math.sin(a1)).toFixed(1);
  const x2 = (cx + R * Math.cos(a2)).toFixed(1);
  const y2 = (cy + R * Math.sin(a2)).toFixed(1);

  const x3 = (cx + r * Math.cos(a2)).toFixed(1);
  const y3 = (cy + r * Math.sin(a2)).toFixed(1);
  const x4 = (cx + r * Math.cos(a1)).toFixed(1);
  const y4 = (cy + r * Math.sin(a1)).toFixed(1);

  return `M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${r} ${r} 0 0 0 ${x4} ${y4} Z`;
}

function getTextPos(centerAngleDeg: number, rText = 101) {
  const rad = Math.PI / 180;
  const a = centerAngleDeg * rad;
  return {
    x: +(160 + rText * Math.cos(a)).toFixed(1),
    y: +(160 + rText * Math.sin(a)).toFixed(1),
  };
}

export default function OurStory() {
  return (
    <section id="about-overview" className="bg-white py-6 sm:py-10">
      <Container>
        <div className="mx-auto max-w-5xl rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-[#F5FAFE] p-4.5 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
            {/* Left Column (Desktop) / Top (Mobile): Who We Are Text */}
            <AnimatedSection className="text-center lg:text-left">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 border border-blue-100/90 px-2.5 py-0.5 text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#155E9A]">
                Our Foundation
              </span>
              <h2 className="mt-2 text-[20px] sm:text-[26px] lg:text-[30px] font-extrabold tracking-tight text-[#0B2A4A]">
                Who We Are
              </h2>
              <p className="mt-3 text-base sm:text-[17px] leading-relaxed text-slate-600">
                Tech4Bharat is a national initiative dedicated to empowering India&apos;s youth
                with cutting-edge skills in the rapidly evolving technology landscape.
              </p>
              <p className="mt-2.5 text-base sm:text-[17px] leading-relaxed text-slate-600">
                We believe the nation&apos;s progress rests on empowering young minds with the
                right knowledge, tools, and opportunities.
              </p>
            </AnimatedSection>

            {/* Right Column (Desktop) / Bottom (Mobile): Circular What We Do Wheel */}
            <AnimatedSection delay={0.1} className="flex justify-center border-t border-slate-200/80 pt-5 lg:border-t-0 lg:pt-0">
              <div className="relative w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[310px] aspect-square">
                <svg viewBox="0 0 320 320" className="w-full h-full drop-shadow-sm select-none">
                  {/* Outer double halo rings */}
                  <circle cx="160" cy="160" r="158" fill="none" stroke="#EBF1FE" strokeWidth="4" />
                  <circle cx="160" cy="160" r="151" fill="none" stroke="#D3E2FD" strokeWidth="6" />

                  {/* 6 Wheel Sectors */}
                  {sectors.map((s) => {
                    const path = getSectorPath(s.angle);
                    const pos = getTextPos(s.angle);
                    return (
                      <g key={s.name} className="group/sector cursor-pointer">
                        <path
                          d={path}
                          fill="#0B2A4A"
                          className="transition-colors duration-300 group-hover/sector:fill-[#155E9A]"
                        />
                        <text
                          x={pos.x}
                          y={pos.y}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="#FFFFFF"
                          className="text-[9.5px] sm:text-[11px] font-bold pointer-events-none"
                        >
                          {s.name}
                        </text>
                      </g>
                    );
                  })}

                  {/* Center Circle & "What We Do" Labels */}
                  <circle cx="160" cy="160" r="60" fill="#FFFFFF" stroke="#0B2A4A" strokeWidth="3" />
                  <circle cx="160" cy="160" r="54" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />
                  <text
                    x="160"
                    y="151"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#0B2A4A"
                    className="text-[13px] sm:text-[14.5px] font-extrabold tracking-tight"
                  >
                    What
                  </text>
                  <text
                    x="160"
                    y="169"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#0B2A4A"
                    className="text-[13px] sm:text-[14.5px] font-extrabold tracking-tight"
                  >
                    We Do
                  </text>
                </svg>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
