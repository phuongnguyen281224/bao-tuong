import Link from 'next/link';
import { tableOfContents } from '../../lib/content';
import { PageHeading } from '../../components/PageHeading';

const emojiMap: Record<string, string> = {
  'Bìa': '🌈',
  'Mục lục': '📚',
  'Xã luận': '📰',
  'Thơ': '🎵',
  'Hò lớp 3': '🥁',
  'Vè lớp em': '🧡',
  'Tranh vui': '🎨',
  'Góc tri ân': '💐',
};

export default function MucLucPage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 02"
        title="Mục lục trình chiếu"
        subtitle="Lộ trình 8 phần cho buổi báo tường"
        description="MC có thể đọc nhanh từng mục, giới thiệu nội dung và mời đại diện tổ phụ trách. Nhấp vào từng thẻ để chuyển trang khi trình chiếu."
        icon="📖"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {tableOfContents.map((entry, index) => (
          <Link
            key={entry.title}
            href={entry.link}
            className="rounded-3xl border border-black/5 bg-white/90 p-5 shadow-card hover:border-brand-orange/50 transition flex items-start gap-4"
          >
            <div className="text-3xl animate-bounce-slow" aria-hidden>
              {emojiMap[entry.title] ?? '✨'}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Phần {index + 1}</p>
              <h2 className="text-2xl font-semibold text-ink">{entry.title}</h2>
              <p className="text-base text-ink/80 leading-relaxed">{entry.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
