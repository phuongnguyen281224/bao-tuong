import Link from 'next/link';
import { heroContent, tableOfContents } from '../lib/content';

const highlightIcons = ['🌟', '🎨', '🧠', '🎯'];

export default function CoverPage() {
  return (
    <div className="page-shell">
      <section className="hero-card text-ink">
        <div className="hero-bubbles" aria-hidden>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="badge">{heroContent.badge}</p>
        <h1 className="text-4xl lg:text-5xl font-semibold mb-3 text-ink">
          {heroContent.title}
        </h1>
        <p className="text-2xl font-semibold text-brand-orange mb-4">{heroContent.subtitle}</p>
        <p className="text-lg leading-relaxed max-w-3xl text-ink/85">{heroContent.message}</p>
        <ul className="mt-6 sparkle-list">
          {heroContent.highlights.map((item, index) => (
            <li key={item}>
              <span className="icon" aria-hidden>
                {highlightIcons[index] ?? '✨'}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/muc-luc"
            className="pulse-button pulse-button--primary"
          >
            🚀 Đi tới Mục lục
          </Link>
          <Link href="/goc-tri-an" className="pulse-button">
            💖 Xem Góc tri ân
          </Link>
        </div>
      </section>

      <section className="section-card fun-card">
        <p className="badge">Lộ trình nhanh</p>
        <h2 className="text-2xl font-semibold text-ink">Các trang sẽ trình chiếu</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tableOfContents.map((entry) => (
            <Link
              key={entry.title}
              href={entry.link}
              className="rounded-3xl border border-black/5 p-5 bg-white/80 hover:border-brand-orange/40 transition shadow-sm flex flex-col gap-2"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-muted">{entry.title}</span>
              <p className="text-lg font-semibold text-ink">{entry.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
