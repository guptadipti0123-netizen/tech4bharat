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
  { src: "/images/gallery/gallery-3.jpg", alt: "Founders collaborating at a Tech4Bharat program" },
  { src: "/images/gallery/hackathons-1.jpg", alt: "Founders building during a Tech4Bharat hackathon session" },
];

/** A single curated past-event spotlight — a magazine-style split instead of one dominant
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
            titleClassName="text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-[#163B2D] sm:text-[38px] lg:text-[44px]"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-9">
          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl lg:grid-cols-[45fr_55fr]">
            <div className="grid h-full grid-cols-2 grid-rows-2 gap-3 bg-slate-50 p-3">
              {collagePhotos.map((photo) => (
                <div key={photo.src} className="relative min-h-40 overflow-hidden rounded-xl shadow-sm">
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

            <div className="p-6 sm:p-8">
              <Badge variant="neutral">Workshop • Past</Badge>
              <h3 className="mt-4 text-2xl font-bold text-ink-900 sm:text-[28px]">AI Workshop by BharatGen</h3>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                {metaCards.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      <Icon size={12} /> {label}
                    </span>
                    <p className="mt-1 text-sm font-semibold text-ink-900">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-brand-50 p-3">
                <Target size={16} className="mt-0.5 shrink-0 text-brand-600" />
                <p className="text-sm text-ink-900">
                  <span className="font-semibold">Goal:</span> &ldquo;GenAI for Everyone, by Everyone&rdquo; —
                  hands-on generative AI development.
                </p>
              </div>

              <h4 className="mt-6 text-sm font-bold uppercase tracking-wide text-slate-500">Agenda</h4>
              <div className="mt-3 flex flex-col">
                {agendaTopics.map((topic, i) => {
                  const Icon = topic.icon;
                  return (
                    <div
                      key={topic.title}
                      className={cn(
                        "group flex items-start gap-3.5 border-l-2 border-[#1F4E3D] py-4 pl-4 transition-all duration-200 hover:border-l-[3px] hover:bg-[#F7FBF9]",
                        i < agendaTopics.length - 1 && "border-b border-slate-100"
                      )}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1F4E3D] text-white">
                        <Icon size={16} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                          <h5 className="text-[20px] font-semibold leading-snug text-ink-900">{topic.title}</h5>
                          <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-500">
                            {topic.duration}
                          </span>
                        </div>
                        <p className="mt-1 text-[15px] leading-relaxed text-slate-500">{topic.description}</p>
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
