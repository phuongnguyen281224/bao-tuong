'use client';

import { useState } from 'react';

export interface TimelineEvent {
  id: string;
  badge: string;
  title: string;
  detail: string;
  actions: string[];
}

interface TimelineTabsProps {
  events: TimelineEvent[];
}

export function TimelineTabs({ events }: TimelineTabsProps) {
  const [activeId, setActiveId] = useState(events[0]?.id ?? null);
  const active = events.find((evt) => evt.id === activeId) ?? events[0];

  return (
    <div className="section-card fun-card gap-6">
      <div className="flex flex-wrap gap-3">
        {events.map((event) => {
          const isActive = event.id === active?.id;
          const baseClasses = 'rounded-2xl border px-4 py-2 text-sm font-semibold transition shadow-sm flex items-center gap-2';
          const activeClasses = 'border-brand-orange/60 bg-brand-orange/10 text-brand-orange';
          const inactiveClasses = 'border-black/10 bg-white/70 text-muted hover:border-brand-orange/30';
          return (
            <button
              key={event.id}
              type="button"
              onClick={() => setActiveId(event.id)}
              className={[baseClasses, isActive ? activeClasses : inactiveClasses].join(' ')}
            >
              <span className="text-xs uppercase tracking-[0.3em]">{event.badge}</span>
              {event.title}
            </button>
          );
        })}
      </div>

      {active ? (
        <div className="rounded-3xl border border-black/5 bg-white/90 p-5 shadow-card space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl" aria-hidden>
              ✨
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Khoảnh khắc</p>
              <h3 className="text-2xl font-semibold text-ink">{active.title}</h3>
            </div>
          </div>
          <p className="text-base leading-relaxed text-ink/90">{active.detail}</p>
          <ul className="list-disc list-inside space-y-2 text-sm text-ink/80">
            {active.actions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
