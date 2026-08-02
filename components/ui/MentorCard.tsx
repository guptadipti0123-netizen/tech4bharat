import Image from "next/image";
import Card from "@/components/ui/Card";
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
    <Card className="flex h-full flex-col items-center p-8 text-center">
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-brand-50 shadow-md">
        <Image src={photo} alt={name} fill sizes="96px" className="object-cover object-top" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-ink-900">{name}</h3>
      <p className="text-sm font-semibold text-brand-700">{designation}</p>
      <p className="text-sm text-slate-600">{institution}</p>

      <span className="mt-4 inline-flex items-center rounded-full bg-secondary-50 px-3 py-1 text-xs font-semibold text-secondary-700">
        {expertise}
      </span>

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
