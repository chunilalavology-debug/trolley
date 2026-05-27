type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === "center" ? "text-center mx-auto" : ""} max-w-4xl ${className}`}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        className={`display-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
