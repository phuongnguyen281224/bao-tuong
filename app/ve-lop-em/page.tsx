import { veLines } from '../../lib/content';
import { PageHeading } from '../../components/PageHeading';

export default function VePage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 06"
        title="Vè lớp em"
        subtitle="Nhịp vè gửi thầy cô"
        description="Chia 4 câu cho 4 bạn đọc nối tiếp. Có thể gõ phách nhịp 2 để tăng nhộn nhịp."
        icon="🧡"
      />

      <div className="section-card fun-card">
        <ol className="space-y-3 text-lg font-semibold text-ink list-decimal list-inside">
          {veLines.map((line, index) => (
            <li key={line} className="flex items-start gap-3">
              <span className="text-2xl" aria-hidden>
                {['🌞', '🌱', '🌟', '🌈'][index] ?? '✨'}
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
