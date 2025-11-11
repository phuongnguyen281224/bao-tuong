'use client';

import { useEffect, useState } from 'react';
import { PageHeading } from '../../components/PageHeading';

const vePrelude = [
  'Gió mùa hiền như bàn tay thầy gỡ rối cho từng phép tính.',
  'Sân trường reo tiếng lá như trống nhỏ mở hội tri ân.',
  'Chúng con xếp hàng đọc vè, mời thầy cô dừng bước lắng nghe.',
  'Mỗi vần thơ là một bó hoa giấy vừa gấp xong trong giờ thủ công.',
];

const veChapters = [
  {
    title: 'Khổ vè tri ân',
    lines: [
      'Vè kể lớp em rực rỡ cờ hoa,',
      'Bảng đen tím thẫm, phấn sa như mưa.',
      'Thầy cô đứng đó dịu vừa,',
      'Nâng từng tiếng đọc cho mùa 20.',
    ],
    color: 'sun',
  },
  {
    title: 'Khổ vè lời hứa',
    lines: [
      'Vè dặn chúng em chăm chỉ,',
      'Viết chữ tròn như chiếc trống đồng.',
      'Mai lớn chớ quên cội nguồn,',
      'Đem điều tốt đẹp về dâng thầy.',
    ],
    color: 'forest',
  },
  {
    title: 'Khổ vè niềm vui',
    lines: [
      'Vè cười giòn như kẹo lạc,',
      'Tiết sinh hoạt rộn nhạc bạn bè.',
      'Lấp lánh mắt trông cô về,',
      'Nắm tay múa vè bên khóm cúc.',
    ],
    color: 'violet',
  },
  {
    title: 'Khổ vè ước mơ',
    lines: [
      'Vè bay qua thềm cửa lớp,',
      'Ươm hạt giống thành những giấc mơ xanh.',
      'Nguyện theo bước chân hiền lành,',
      'Cho bài vè hóa thành chuyến tàu tri thức.',
    ],
    color: 'sky',
  },
];

const veDialogues = [
  {
    speaker: 'Bạn MC',
    quote: '“Chúng ta đọc vè bằng cả trái tim nhé!”',
    mood: '🎤',
    detail: 'Bạn MC hướng dẫn nhịp 2/4 và gợi ý mỉm cười suốt bài.',
  },
  {
    speaker: 'Bạn Thu',
    quote: '“Cho tớ làm tiếng trống phụ họa nha!”',
    mood: '🥁',
    detail: 'Thu dùng hộp bút tạo âm “tích tắc”, giúp bài vè thêm sinh động.',
  },
  {
    speaker: 'Cô giáo',
    quote: '“Mỗi câu vè là một món quà nhỏ.”',
    mood: '💖',
    detail: 'Cô động viên cả lớp giữ giọng rõ, gửi thông điệp thật thà.',
  },
  {
    speaker: 'Bạn Nam',
    quote: '“Đọc vè xong mình kể chuyện vui nhé!”',
    mood: '📚',
    detail: 'Nam gợi ý nối tiếp bằng việc tặng sách handmade cho thầy cô.',
  },
];

const veMiniScenes = [
  {
    title: 'Nhịp vỗ tay cầu vồng',
    description: 'Cả lớp vỗ tay theo nhịp nhanh-dừng-nhanh, tạo hiệu ứng như ánh đèn.',
    emoji: '🌈',
  },
  {
    title: 'Hoa giấy chuyển động',
    description: 'Ba bạn xoay bó hoa giấy theo vòng tròn khi câu vè nhắc đến ước mơ.',
    emoji: '🌸',
  },
  {
    title: 'Màn hình sao đêm',
    description: 'Chiếu đèn pin lên trần tạo chùm sao khi câu vè nói về tương lai.',
    emoji: '🌌',
  },
];

const closingChimes = [
  'Vè đọc xong mà lòng còn luyến nhớ, kính chúc thầy cô luôn an yên.',
  'Xin gửi lời hẹn gặp lại trong những mùa 20/11 tiếp theo.',
  'Lớp 3 Nam Hồng hứa giữ mãi tiếng vè này trong ngăn bàn kí ức.',
];

export default function VePage() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeDialogue, setActiveDialogue] = useState(veDialogues[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveChapter((prev) => (prev + 1) % veChapters.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  const currentChapter = veChapters[activeChapter];

  return (
    <div className="page-shell space-y-8">
      <PageHeading
        badge="Trang 06"
        title="Vè lớp em"
        subtitle="Tiếng vè tri ân thầy cô"
        description="Bài vè dài hơi với nhiều hoạt cảnh – món quà rộn ràng của lớp 3 Nam Hồng gửi tặng ngày 20/11."
        icon="🪘"
      />

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Mở đầu bài vè</p>
        <div className="rounded-3xl border border-brand-sun/30 bg-white/80 p-6 shadow-card transition-all duration-500">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-sun">Khúc dạo</p>
          <ul className="mt-4 space-y-2 text-lg text-ink/85">
            {vePrelude.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <span className="text-brand-sun">✿</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-card fun-card bg-gradient-to-br from-brand-sky/5 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Khổ vè đang tỏa sáng</p>
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="rounded-3xl border border-brand-sky/30 bg-white/85 p-6 shadow-card">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-sky">{currentChapter.title}</p>
            <ul className="mt-3 space-y-2 text-ink/90">
              {currentChapter.lines.map((line) => (
                <li key={line} className="animate-pulse">{line}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            {veChapters.map((chapter, index) => {
              const isActive = index === activeChapter;
              return (
                <button
                  key={chapter.title}
                  type="button"
                  onClick={() => setActiveChapter(index)}
                  aria-pressed={isActive}
                  className={`rounded-2xl border px-4 py-3 text-left transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-sky/70 ${
                    isActive
                      ? 'border-brand-sky bg-white shadow-brand-sky/30 shadow-lg -translate-y-0.5'
                      : 'border-brand-sky/30 bg-white/70 hover:-translate-y-0.5'
                  }`}
                >
                  <p className="font-semibold text-ink">{chapter.title}</p>
                  <p className="text-sm text-ink/70 line-clamp-2">{chapter.lines[0]}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Sân khấu đối thoại</p>
        <div className="grid gap-6 md:grid-cols-[1.2fr,1fr] mt-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {veDialogues.map((dialogue) => {
              const isActive = activeDialogue.speaker === dialogue.speaker;
              return (
                <button
                  key={dialogue.speaker}
                  type="button"
                  onClick={() => setActiveDialogue(dialogue)}
                  aria-pressed={isActive}
                  className={`rounded-2xl border p-4 text-left transition-all duration-300 focus-visible:ring-2 focus-visible:ring-brand-forest/60 ${
                    isActive
                      ? 'border-brand-forest bg-white shadow-brand-forest/30 shadow-lg -translate-y-1'
                      : 'border-brand-forest/30 bg-white/70 hover:-translate-y-1'
                  }`}
                >
                  <p className="text-xl">{dialogue.mood}</p>
                  <p className="font-semibold text-ink mt-2">{dialogue.speaker}</p>
                  <p className="text-sm text-ink/80 mt-1">{dialogue.quote}</p>
                </button>
              );
            })}
          </div>
          <div className="rounded-3xl border border-brand-forest/30 bg-white/80 p-6 shadow-inner" aria-live="polite">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-forest/80">Lời thì thầm</p>
            <p className="text-lg text-ink/90 leading-relaxed mt-3">{activeDialogue.detail}</p>
            <p className="text-4xl mt-4 animate-bounce">{activeDialogue.mood}</p>
          </div>
        </div>
      </section>

      <section className="section-card fun-card bg-gradient-to-br from-brand-violet/10 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Hoạt ảnh sân khấu</p>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {veMiniScenes.map((scene) => (
            <div key={scene.title} className="rounded-2xl border border-brand-violet/30 bg-white/80 p-4 shadow-card">
              <p className="text-2xl">{scene.emoji}</p>
              <p className="font-semibold text-ink mt-2">{scene.title}</p>
              <p className="text-sm text-ink/80 mt-1">{scene.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card text-center bg-gradient-to-br from-brand-sun/15 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Vè kết</p>
        <div className="space-y-3 text-lg text-ink/85 mt-4">
          {closingChimes.map((line) => (
            <p key={line} className="animate-pulse">{line}</p>
          ))}
        </div>
        <p className="text-3xl mt-6">🌸📜🌸</p>
      </section>
    </div>
  );
}
