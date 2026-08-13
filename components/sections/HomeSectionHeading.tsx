interface HomeSectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function HomeSectionHeading({
  title,
  description,
  align = "left",
  className = "",
}: HomeSectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`${alignment} ${className}`}>
      <h2 className="text-balance text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-tight text-ink-900">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-2 max-w-2xl text-[13px] leading-6 text-slate-600 sm:text-[14px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
