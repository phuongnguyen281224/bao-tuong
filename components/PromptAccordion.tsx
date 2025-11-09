'use client';

import { useState } from 'react';

export interface PromptItem {
  question: string;
  answer: string;
}

interface PromptAccordionProps {
  items: PromptItem[];
}

export function PromptAccordion({ items }: PromptAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="section-card fun-card gap-4">
      <p className="text-xs uppercase tracking-[0.3em] text-muted">Hộp câu hỏi nhanh</p>
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="rounded-2xl border border-brand-lilac/20 bg-white/80">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold text-ink"
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className="text-lg" aria-hidden>
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen ? (
                <div className="px-4 pb-4 text-sm text-ink/80">
                  {item.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
