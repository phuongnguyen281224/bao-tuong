import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  kicker?: string;
  emoji?: string;
  children: ReactNode;
}

export function Card({ title, kicker, emoji, children }: CardProps) {
  return (
    <section className="section-card fun-card gap-5">
      {(kicker || title) && (
        <div className="flex items-center gap-3">
          {emoji ? (
            <span className="text-3xl animate-wiggle-slow" aria-hidden>
              {emoji}
            </span>
          ) : null}
          <div>
            {kicker ? <p className="text-xs uppercase tracking-[0.3em] text-muted">{kicker}</p> : null}
            {title ? <h2 className="text-2xl font-semibold text-ink">{title}</h2> : null}
          </div>
        </div>
      )}
      <div className="text-base text-ink/90 leading-relaxed flex flex-col gap-3">
        {children}
      </div>
    </section>
  );
}
