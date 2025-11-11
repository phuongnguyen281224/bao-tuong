'use client';

import { useEffect, useState } from 'react';
import { PageHeading } from '../../components/PageHeading';

const chantSequences = [
  {
    title: 'Trống mở màn',
    call: 'Hò ơ! Ai đánh thức bình minh bằng tiếng trống đầu tiên?',
    response: 'Là thầy Tổng phụ trách gọi lớp 3 xếp hàng ngay ngắn, nâng cao cờ tri ân.',
  },
  {
    title: 'Khúc phấn trắng',
    call: 'Hò ơ! Ai vẽ nụ cười lên bảng đen buổi sớm?',
    response: 'Là cô chủ nhiệm nắn nót từng nét chữ, gửi yêu thương vào từng trang vở.',
  },
  {
    title: 'Lời ru sân trường',
    call: 'Hò ơ! Ai đưa giấc mơ tuổi nhỏ trôi trên dòng đồng dao?',
    response: 'Là cả tập thể thầy cô Nam Hồng, nâng chúng con qua mỗi giờ tập đọc.',
  },
  {
    title: 'Điệu hò đồng hành',
    call: 'Hò ơ! Ai ghép bàn tay bé vào bản nhạc toán học?',
    response: 'Là cô Toán dịu dàng, biến phép chia thành bài múa vui tươi.',
  },
  {
    title: 'Khúc hò sân cỏ',
    call: 'Hò ơ! Ai chở gió heo may đến buổi thể dục?',
    response: 'Thầy thể dục reo trống, nhắc lớp mình khỏe mạnh để tri ân thầy cô.',
  },
  {
    title: 'Lời hứa cuối',
    call: 'Hò ơ! Ai gom những điều ước vào bó hoa giấy?',
    response: 'Chính chúng con, hứa học giỏi ngoan hiền để đáp lại công ơn dưỡng dạy.',
  },
];

const riverStories = [
  {
    title: 'Dòng sông phấn trắng',
    details: [
      'Mỗi đường phấn là một con thuyền chở kí ức về những bài học đầu đời.',
      'Cứ 20/11, dòng sông sáng hơn bởi bao lời chúc viết bằng nét chữ tròn trịa.',
    ],
  },
  {
    title: 'Cơn gió nhịp trống',
    details: [
      'Tiếng trống trường được ví như nhịp tim đồng điệu, thúc giục ta tiến lên.',
      'Những cú chạm “tùng… tùng” hóa thành nhịp nền cho câu hò thêm khỏe.',
    ],
  },
  {
    title: 'Ánh đèn sân khấu nhỏ',
    details: [
      'Thầy cô là đạo diễn kiên nhẫn, giúp mỗi bạn học sinh tự tin khi đứng đọc hò.',
      'Đèn led học trò tự làm lung linh hơn khi câu chuyện tri ân được ngân lên.',
    ],
  },
];

const teacherEchoes = [
  {
    name: 'Tiếng phấn của cô Hạnh',
    echo: '“Hò ơ… nét phấn trắng thành dòng sông kiến thức.”',
    meaning: 'Cô bảo rằng mỗi bài hò cũng cần nhấn nhá như lúc luyện chữ đẹp.',
    icon: '🧑‍🏫',
  },
  {
    name: 'Nhịp trống thầy Phúc',
    echo: '“Hò ơ… trống vang – lòng càng quyết tâm.”',
    meaning: 'Thầy nhắc lớp giữ nhịp 2/4 để tiếng hò chắc và rộn ràng.',
    icon: '🥁',
  },
  {
    name: 'Nụ cười cô Lan',
    echo: '“Hò ơ… cười lên cho câu hò thêm ấm.”',
    meaning: 'Cô chia sẻ rằng nụ cười chính là hoạt ảnh đẹp nhất trên sân khấu.',
    icon: '😊',
  },
  {
    name: 'Lời nhắn thầy Minh',
    echo: '“Hò ơ… nhớ lắng nghe nhau như nghe tiếng gió.”',
    meaning: 'Thầy muốn các nhóm gọi – đáp thật hài hòa, nhường nhau trong từng nhịp.',
    icon: '🌬️',
  },
];

const gratitudeRefrain = [
  'Hò ơ… kính chúc thầy cô bình an như sông dài vỗ nhịp.',
  'Hò ơ… mong thầy cô rạng rỡ như nắng mai phủ đầy sân.',
  'Hò ơ… lớp 3 hứa học chăm, giữ trọn câu hò hôm nay sáng mãi.',
];

const sparklingBadges = ['🌊', '🎶', '🌺', '📯', '🎇', '🌈'];

export default function HoLopBaPage() {
  const [activeChantIndex, setActiveChantIndex] = useState(0);
  const [activeEcho, setActiveEcho] = useState(teacherEchoes[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChantIndex((prev) => (prev + 1) % chantSequences.length);
    }, 4800);
    return () => clearInterval(timer);
  }, []);

  const activeChant = chantSequences[activeChantIndex];

  return (
    <div className="page-shell space-y-8">
      <PageHeading
        badge="Trang 05"
        title="Hò lớp 3"
        subtitle="Điệu hò tri ân 20/11"
        description="Kho tàng câu hò và lời hứa lung linh của lớp 3 Nam Hồng dành tặng thầy cô."
        icon="🥁"
      />

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Sân khấu hò sống động</p>
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="rounded-3xl border border-brand-sky/30 bg-white/80 p-6 shadow-card transition-all duration-500">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-sky">{activeChant.title}</p>
            <p className="text-2xl font-semibold text-ink mt-4 animate-pulse">{activeChant.call}</p>
            <p className="text-lg text-ink/80 leading-relaxed mt-3">{activeChant.response}</p>
          </div>
          <div className="flex flex-col gap-3">
            {chantSequences.map((chant, index) => {
              const isActive = index === activeChantIndex;
              return (
                <button
                  key={chant.title}
                  type="button"
                  onClick={() => setActiveChantIndex(index)}
                  aria-pressed={isActive}
                  className={`rounded-2xl border px-4 py-3 text-left transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-sky/70 ${
                    isActive
                      ? 'border-brand-sky bg-white shadow-brand-sky/30 shadow-lg -translate-y-0.5'
                      : 'border-brand-sky/30 bg-white/70 hover:-translate-y-0.5'
                  }`}
                >
                  <p className="font-semibold text-ink">{chant.title}</p>
                  <p className="text-sm text-ink/70 line-clamp-2">{chant.call}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-card fun-card bg-gradient-to-br from-brand-sun/10 via-white to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Bộ sưu tập câu hò</p>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {chantSequences.map((chant, index) => (
            <div key={`${chant.title}-${index}`} className="rounded-2xl border border-brand-sun/30 bg-white/85 p-4 shadow-card">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-sun">Lượt {index + 1}</p>
              <p className="text-base font-semibold text-ink mt-2">{chant.call}</p>
              <p className="text-sm text-ink/80 mt-2">{chant.response}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Điệu hò kể chuyện</p>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {riverStories.map((story) => (
            <div key={story.title} className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-card">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-forest">{story.title}</p>
              <ul className="mt-3 space-y-2 text-sm text-ink/85">
                {story.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <span className="text-brand-forest">✦</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card bg-gradient-to-br from-brand-violet/10 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Tiếng vọng thầy cô</p>
        <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] mt-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {teacherEchoes.map((echo) => {
              const isActive = activeEcho.name === echo.name;
              return (
                <button
                  key={echo.name}
                  type="button"
                  onClick={() => setActiveEcho(echo)}
                  aria-pressed={isActive}
                  className={`rounded-2xl border p-4 text-left transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-violet/60 ${
                    isActive
                      ? 'border-brand-violet bg-white shadow-brand-violet/30 shadow-lg -translate-y-1'
                      : 'border-brand-violet/30 bg-white/70 hover:-translate-y-1'
                  }`}
                >
                  <p className="text-xl">{echo.icon}</p>
                  <p className="font-semibold text-ink mt-2">{echo.name}</p>
                  <p className="text-sm text-ink/80 mt-1">{echo.echo}</p>
                </button>
              );
            })}
          </div>
          <div className="rounded-3xl border border-brand-violet/30 bg-white/80 p-6 shadow-inner" aria-live="polite">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-violet/80">Thông điệp đang phát</p>
            <p className="text-lg text-ink/90 leading-relaxed mt-3">{activeEcho.meaning}</p>
            <p className="text-4xl mt-4 animate-bounce">{activeEcho.icon}</p>
          </div>
        </div>
      </section>

      <section className="section-card fun-card text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Điệp khúc tri ân</p>
        <div className="space-y-3 text-lg text-ink/85 mt-4">
          {gratitudeRefrain.map((line, index) => (
            <p key={line} className="flex items-center justify-center gap-2">
              <span className="text-2xl animate-spin">{sparklingBadges[index % sparklingBadges.length]}</span>
              {line}
            </p>
          ))}
        </div>
        <p className="text-3xl mt-6">🎶🌺🎶</p>
      </section>
    </div>
  );
}
