import { chantExchanges } from '../../lib/content';
import { PageHeading } from '../../components/PageHeading';

export default function HoLopBaPage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 05"
        title="Hò lớp 3"
        subtitle="Gọi – đáp theo nhịp dân ca"
        description="MC đọc phần gọi, cả lớp đáp lại hoặc chia thành hai nhóm đối đáp. Có thể gõ nhịp trên bàn tay để tạo không khí."
        icon="🥁"
      />

      <div className="grid gap-4 md:grid-cols-2">
        {chantExchanges.map((item, index) => (
          <div
            key={item.call}
            className="section-card fun-card bg-gradient-to-br from-brand-sky/10 to-white flex flex-col gap-3"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted">Lượt {index + 1}</p>
            <p className="font-semibold text-brand-sky text-lg">{item.call}</p>
            <p className="text-ink/90 leading-relaxed">{item.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
