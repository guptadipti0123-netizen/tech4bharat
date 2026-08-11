import Image from "next/image";
import { LinkedinIcon } from "@/components/ui/SocialIcons";

interface MentorCardProps {
  photo: string;
  name: string;
  designation: string;
  institution: string;
  expertise: string;
  bio: string;
  linkedinUrl?: string;
}

export default function MentorCard({
  photo,
  name,
  designation,
  institution,
  expertise,
  bio,
  linkedinUrl,
}: MentorCardProps) {
  return (
    <div
      style={
        {
          background: "linear-gradient(135deg, #F4FBF8 0%, #ECF8F3 100%)",
          borderColor: "#D6ECE2",
          boxShadow: "0 10px 30px rgba(31,78,61,0.08)",
          "--hover-border": "#A8D5C2",
          "--shadow-hover": "0 20px 45px rgba(31,78,61,0.16)",
        } as React.CSSProperties
      }
      className="group flex h-full flex-col items-center rounded-2xl border p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-(--hover-border) hover:shadow-(--shadow-hover) sm:rounded-[20px] sm:p-6"
    >
      <div
        className="relative h-18 w-18 shrink-0 overflow-hidden rounded-full border-4 border-white sm:h-26 sm:w-26"
        style={{ boxShadow: "0 0 24px rgba(31,78,61,0.18), 0 4px 14px rgba(0,0,0,0.08)" }}
      >
        <Image
          src={photo}
          alt={name}
          fill
          sizes="104px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="mt-3 text-[19px] font-bold leading-tight text-[#163B2D] sm:mt-5 sm:text-[30px]">{name}</h3>
      <p className="mt-1 text-xs font-medium text-brand-700 sm:text-sm">{designation}</p>
      <p className="text-[11px] text-slate-500 sm:text-xs">{institution}</p>

      <span
        className="mt-2.5 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-[0_4px_12px_rgba(31,78,61,0.25)] sm:mt-4 sm:px-3.5 sm:py-1.5 sm:text-xs"
        style={{ background: "linear-gradient(135deg, #2E8B57 0%, #1F5E4B 100%)" }}
      >
        {expertise}
      </span>

      <p className="mx-auto mt-2.5 line-clamp-3 max-w-65 flex-1 text-[13px] leading-relaxed text-slate-600 sm:mt-4 sm:text-sm sm:leading-[1.7]">{bio}</p>

      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white transition-all duration-300 hover:scale-110 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 sm:mt-5 sm:h-9 sm:w-9"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
