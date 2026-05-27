type SectionLabelProps = {
  children: string;
  className?: string;
  light?: boolean;
};

export function SectionLabel({
  children,
  className = "",
  light = false,
}: SectionLabelProps) {
  return (
    <div
      className={`section-label-line ${light ? "text-white/90 [&::before]:bg-white/30 [&::after]:bg-white/30" : ""} ${className}`}
    >
      <span className="section-label-dot" />
      <span>{children}</span>
      <span className="section-label-dot hidden sm:inline" />
    </div>
  );
}
