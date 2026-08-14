import { Briefcase, ChevronRight, FlaskConical, GraduationCap, Handshake, Landmark, Rocket, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { partnerCategories } from "@/lib/partners";

// Icons paired to lib/partners.ts's categories by array position — that file's `badge` and
// `tagline` fields are the existing, already-established copy for each category (no new
// content invented here).
const icons: LucideIcon[] = [GraduationCap, Rocket, FlaskConical, Briefcase, Landmark, Handshake];

const [featured, ...rest] = partnerCategories.map((c, i) => ({ ...c, icon: icons[i] }));
const gridItems = rest.slice(0, 4);
const ngo = rest[4];
const FeaturedIcon = featured.icon;
const NgoIcon = ngo.icon;

/** Partners — an editorial layout: one large featured category card, a 2×2 grid of the next
 *  four categories, and NGOs as a bordered highlight row at the bottom. All in the site's
 *  blue palette (no dark/green treatment), no decorative underline beneath the heading. */
export default function PartnersPreview() {
  return (
    <section id="partners" className="bg-white py-8 sm:py-12">
      <Container>
        <div
          className="rounded-[28px] px-3 py-5 sm:px-8 sm:py-8"
          style={{ background: "linear-gradient(135deg, #EEF6FF 0%, #E2F0FF 50%, #F4F8FF 100%)" }}
        >
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-[22px] font-semibold leading-tight text-[#082F63] sm:text-[28px]">Partners</h2>
            <p className="mx-auto mt-2 mb-5 max-w-2xl text-[12px] leading-[1.4] text-[#52708F] sm:mb-7 sm:text-[14px]">
              Categories Tech4Bharat will partner with, beginning August 2026.
            </p>
          </AnimatedSection>

          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <div
                className="relative overflow-hidden rounded-3xl p-6 sm:p-8"
                style={{ background: "linear-gradient(135deg, #0B2A4A 0%, #155E9A 100%)" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white/85">
                    {featured.badge}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                    <FeaturedIcon size={20} strokeWidth={1.75} className="text-white" />
                  </span>
                </div>
                <h3 className="mt-4 text-[19px] font-bold text-white sm:text-[22px]">{featured.category}</h3>
                <p className="mt-2 max-w-md text-[13px] leading-relaxed text-white/70 sm:text-[14px]">{featured.tagline}</p>
              </div>
            </AnimatedSection>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
              {gridItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.category} delay={0.05 + i * 0.05}>
                    <div className="flex h-full flex-col rounded-2xl border border-[#D7E6F0] bg-white p-4 shadow-[0_3px_10px_rgba(20,70,120,0.05)] sm:p-5">
                      <div className="flex items-start justify-between gap-2">
                        <span className="inline-flex items-center rounded-full bg-[#EAF4FB] px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.08em] text-[#155E9A] sm:text-[10px]">
                          {item.badge}
                        </span>
                        <span className="flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FB] sm:h-9 sm:w-9">
                          <Icon size={16} strokeWidth={1.75} className="text-[#155E9A]" />
                        </span>
                      </div>
                      <span className="mt-3 text-[13px] font-bold leading-tight text-[#0B2A4A] sm:text-[15px]">
                        {item.category}
                      </span>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>

            <AnimatedSection delay={0.25} className="mt-3 sm:mt-4">
              <div className="flex items-center gap-3 rounded-2xl border-2 border-[#2F80ED] bg-[#F5FAFE] p-3.5 sm:gap-4 sm:p-4.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FB] sm:h-11 sm:w-11">
                  <NgoIcon size={18} strokeWidth={1.75} className="text-[#2F80ED]" />
                </span>
                <span className="min-w-0 flex-1 text-[13px] font-bold text-[#0B2A4A] sm:text-[15px]">
                  <span className="mr-2 inline-flex items-center rounded-full bg-[#2F80ED]/10 px-2.5 py-0.5 align-middle text-[9.5px] font-bold uppercase tracking-[0.08em] text-[#2F80ED] sm:text-[10px]">
                    {ngo.badge}
                  </span>
                  NGOs
                </span>
                <ChevronRight size={18} className="shrink-0 text-[#2F80ED]" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
