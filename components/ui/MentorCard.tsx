import Image from "next/image";
import Card from "@/components/ui/Card";
import { LinkedinIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";

type BadgeStyle = "solid" | "outline" | "gradient" | "dot";

interface MentorCardProps {
  photo: string;
  name: string;
  designation: string;
  institution: string;
  expertise: string;
  bio: string;
  linkedinUrl?: string;
  /** Cycles across the grid so no two adjacent cards share the same expertise-badge treatment. */
  badgeStyle?: BadgeStyle;
}

const ringByStyle: Record<BadgeStyle, string> = {
  solid: "border-brand-50 group-hover:border-brand-200",
  outline: "border-secondary-50 group-hover:border-secondary-200",
  gradient: "border-accent-50 group-hover:border-accent-200",
  dot: "border-slate-100 group-hover:border-slate-200",
};

function ExpertiseBadge({ style, expertise }: { style: BadgeStyle; expertise: string }) {
  if (style === "outline") {
    return (
      <span className="mt-4 inline-flex items-center rounded-full border border-secondary-300 bg-white px-3 py-1 text-xs font-semibold text-secondary-700">
        {expertise}
      </span>
    );
  }
  if (style === "gradient") {
    return (
      <span className="mt-4 inline-flex items-center rounded-full bg-linear-to-r from-accent-100 to-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
        {expertise}
      </span>
    );
  }
  if (style === "dot") {
    return (
      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        {expertise}
      </span>
    );
  }
  return (
    <span className="mt-4 inline-flex items-center rounded-full bg-secondary-50 px-3 py-1 text-xs font-semibold text-secondary-700">
      {expertise}
    </span>
  );
}

export default function MentorCard({
  photo,
  name,
  designation,
  institution,
  expertise,
  bio,
  linkedinUrl,
  badgeStyle = "solid",
}: MentorCardProps) {
  return (
    <Card className="group flex h-full flex-col items-center p-6 text-center hover:-translate-y-2">
      <div
        className={cn(
          "relative h-24 w-24 overflow-hidden rounded-full border-4 shadow-md transition-colors duration-300",
          ringByStyle[badgeStyle]
        )}
      >
        <Image
          src={photo}
          alt={name}
          fill
          sizes="96px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="mt-5 text-lg font-bold text-ink-900">{name}</h3>
      <p className="text-sm font-semibold text-brand-700">{designation}</p>
      <p className="text-sm text-slate-600">{institution}</p>

      <ExpertiseBadge style={badgeStyle} expertise={expertise} />

      <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{bio}</p>

      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="mt-5 flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors hover:bg-brand-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>
      )}
    </Card>
  );
}
