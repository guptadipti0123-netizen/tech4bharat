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
      className="group flex h-full flex-col items-center rounded-[20px] border p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-(--hover-border) hover:shadow-(--shadow-hover)"
    >
      <div
        className="relative h-26 w-26 shrink-0 overflow-hidden rounded-full border-4 border-white"
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
      <h3 className="mt-5 text-[28px] font-bold leading-tight text-[#163B2D] sm:text-[30px]">{name}</h3>
      <p className="mt-1 text-sm font-medium text-brand-700">{designation}</p>
      <p className="text-xs text-slate-500">{institution}</p>

      <span
        className="mt-4 inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_4px_12px_rgba(31,78,61,0.25)]"
        style={{ background: "linear-gradient(135deg, #2E8B57 0%, #1F5E4B 100%)" }}
      >
        {expertise}
      </span>

      <p className="mx-auto mt-4 line-clamp-3 max-w-65 flex-1 text-sm leading-[1.7] text-slate-600">{bio}</p>

      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} on LinkedIn`}
          className="mt-5 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white transition-all duration-300 hover:scale-110 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
