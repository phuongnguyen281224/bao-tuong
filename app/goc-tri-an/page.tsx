import { gratitudeIdeas } from '../../lib/content';
import { PageHeading } from '../../components/PageHeading';

export default function GocTriAnPage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 08"
        title="Góc tri ân"
        subtitle="Checklist & lời nhắn"
        description="Hoàn thiện phần cuối bằng lời cảm ơn chân thành và lời mời thầy cô ghé góc chụp ảnh, ký tên."
        icon="💐"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <section className="section-card fun-card">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Checklist chuẩn bị</p>
          <ul className="space-y-3 text-base text-ink/90">
            {gratitudeIdeas.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden>✔️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="section-card fun-card">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Lời nhắn</p>
          <div className="space-y-4">
            {gratitudeIdeas.notes.map((note) => (
              <div key={note.title} className="rounded-2xl bg-white/80 border border-brand-orange/20 p-4">
                <h3 className="text-xl font-semibold text-ink">{note.title}</h3>
                <p className="text-base text-ink/85 leading-relaxed">{note.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="section-card fun-card text-center">
        <h3 className="text-2xl font-semibold text-ink">Lời kết</h3>
        <p className="text-lg text-ink/85">
          Cảm ơn thầy cô đã đồng hành cùng lớp 3 Nam Hồng. Chúng em xin kính chúc thầy cô thật nhiều sức khỏe để tiếp tục
          gieo chữ, thắp sáng những ước mơ của bao thế hệ học trò.
        </p>
        <p className="text-3xl mt-4">🌟💖🌟</p>
      </section>
    </div>
  );
}
