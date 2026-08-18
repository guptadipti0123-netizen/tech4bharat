import Image from "next/image";
import { Bot, BrainCircuit, Briefcase, Building2, Calendar, MapPin, Target, Workflow, type LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { getEventImage } from "@/lib/images";
import { cn } from "@/lib/utils";

const metaCards = [
  { icon: Calendar, label: "Date", value: "March 21, 2025" },
  { icon: MapPin, label: "Venue", value: "Cognizant Lab, COEP, Pune" },
  { icon: Building2, label: "Organizer", value: "BharatGen" },
];

interface AgendaTopic {
  title: string;
  description: string;
  duration: string;
  icon: LucideIcon;
}

const agendaTopics: AgendaTopic[] = [
  {
    title: "LangChain",
    description: "Building AI applications with the LangChain framework.",
    duration: "45 mins",
    icon: Workflow,
  },
  {
    title: "Hugging Face Transformers",
    description: "Hands-on with pretrained transformer models.",
    duration: "60 mins",
    icon: Bot,
  },
  {
    title: "Neural Networks & LLMs",
    description: "Core concepts behind modern language models.",
    duration: "45 mins",
    icon: BrainCircuit,
  },
  {
    title: "AI Career Pathways",
    description: "Careers, startups, and industry opportunities.",
    duration: "30 mins",
    icon: Briefcase,
  },
];

// Only one real photo is mapped specifically to the BharatGen workshop in this project's
// data (getEventImage), so it anchors the collage as the large image; the remaining three
// cells use other real, honestly-captioned Tech4Bharat program photos rather than invented
// or misattributed BharatGen-specific shots.
const collagePhotos = [
  { src: getEventImage("ai-workshop-bharatgen-2025"), alt: "AI Workshop by BharatGen session at Cognizant Lab, COEP" },
  { src: "/images/gallery/mentorship-2.jpg", alt: "Mentors and founders at a Tech4Bharat program" },
  { src: "/images/gallery/gallery-7.jpg", alt: "Founders collaborating at a Tech4Bharat program" },
  { src: "/images/gallery/hackathons-2.jpg", alt: "Founders building during a Tech4Bharat hackathon session" },
];

/** A single curated past-event spotlight â€” a magazine-style split instead of one dominant
 *  photo: a uniform 2x2 image collage (45% width) beside the event's content (55% width),
 *  so the agenda and details stay the primary focus. The AI Workshop by BharatGen is the
 *  one past event with rich enough real content (a named agenda's worth of topics) to
 *  support this treatment. */
export default function PastEventSpotlight() {
  return (
    <section className="bg-sand-50 py-6 sm:py-9">
      <Container>
        <AnimatedSection>
          <SectionTitle
            title="Past Event"
            align="left"
            titleClassName="text-[22px] font-bold leading-[1.1] tracking-[-0.02em] text-[#0B2A4A] sm:text-[26px] lg:text-[30px]"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-9">
          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl lg:grid-cols-[45fr_55fr]">
            <div className="grid h-full grid-cols-2 grid-rows-2 gap-1.5 bg-slate-50 p-1.5 sm:gap-3 sm:p-3">
              {collagePhotos.map((photo) => (
                <div key={photo.src} className="relative min-h-20 overflow-hidden rounded-lg shadow-sm sm:min-h-40 sm:rounded-xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 22vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="p-3 sm:p-8">
              <Badge variant="neutral">Workshop • Past</Badge>
              <h3 className="mt-2.5 text-[14px] font-bold text-ink-900 sm:mt-4 sm:text-[21px]">AI Workshop by BharatGen</h3>

              <div className="mt-3 grid gap-1.5 sm:mt-5 sm:grid-cols-3 sm:gap-2.5">
                {metaCards.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-lg border border-slate-100 bg-slate-50 p-2 sm:rounded-xl sm:p-3">
                    <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wide text-slate-500 sm:gap-1.5 sm:text-[11px]">
                      <Icon size={10} className="sm:hidden" />
                      <Icon size={12} className="hidden sm:block" />
                      {label}
                    </span>
                    <p className="mt-0.5 text-[11px] font-semibold text-ink-900 sm:mt-1 sm:text-sm">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-start gap-1.5 rounded-lg bg-brand-50 p-2 sm:mt-5 sm:gap-2.5 sm:rounded-xl sm:p-3">
                <Target size={12} className="mt-0.5 shrink-0 text-brand-600 sm:hidden" />
                <Target size={16} className="mt-0.5 hidden shrink-0 text-brand-600 sm:block" />
                <p className="text-[11px] text-ink-900 sm:text-sm">
                  <span className="font-semibold">Goal:</span> &ldquo;GenAI for Everyone, by Everyone&rdquo; —
                  hands-on generative AI development.
                </p>
              </div>

              <h4 className="mt-4 text-[10px] font-bold uppercase tracking-wide text-slate-500 sm:mt-6 sm:text-sm">Agenda</h4>
              <div className="mt-1.5 flex flex-col sm:mt-3">
                {agendaTopics.map((topic, i) => {
                  const Icon = topic.icon;
                  return (
                    <div
                      key={topic.title}
                      className={cn(
                        "group flex items-start gap-2 border-l-2 border-[#155E9A] py-2 pl-2 transition-all duration-200 hover:border-l-[3px] hover:bg-[#F5FAFE] sm:gap-3.5 sm:py-4 sm:pl-4",
                        i < agendaTopics.length - 1 && "border-b border-slate-100"
                      )}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#155E9A] text-white sm:h-9 sm:w-9">
                        <Icon size={12} className="sm:hidden" />
                        <Icon size={16} className="hidden sm:block" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 sm:gap-x-3">
                          <h5 className="min-w-0 text-[12.5px] font-semibold leading-snug text-ink-900 sm:text-[19px]">{topic.title}</h5>
                          <span className="shrink-0 rounded-full bg-slate-100 px-1.5 py-0.5 text-[8.5px] font-semibold text-slate-500 sm:px-2.5 sm:text-xs">
                            {topic.duration}
                          </span>
                        </div>
                        <p className="mt-0.5 text-[10px] leading-relaxed text-slate-500 sm:mt-1 sm:text-[15px]">{topic.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
