interface PageHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
}

export function PageHeading({ badge, title, subtitle, description, icon }: PageHeadingProps) {
  return (
    <div className="section-card fun-card gap-5">
      <div className="flex items-center gap-4">
        {icon ? (
          <span className="text-4xl floating-bubble" aria-hidden>
            {icon}
          </span>
        ) : null}
        <div className="space-y-2">
          {badge ? <p className="badge sparkle-chip">{badge}</p> : null}
          <h1 className="text-3xl lg:text-4xl font-semibold text-ink">{title}</h1>
          {subtitle ? <p className="text-xl font-semibold text-brand-orange">{subtitle}</p> : null}
        </div>
      </div>
      {description ? <p className="text-base text-muted leading-relaxed">{description}</p> : null}
      <div className="sparkle-divider" aria-hidden></div>
    </div>
  );
}
