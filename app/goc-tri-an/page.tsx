'use client';

import { useState } from 'react';
import { PageHeading } from '../../components/PageHeading';

const prepItems = [
  {
    title: 'Bàn tri ân',
    detail: 'Phủ khăn trắng, đặt bình hoa và khung ảnh thầy cô để tạo tâm điểm trang trọng.',
    note: 'Chuẩn bị thêm đèn led nhỏ nếu muốn ánh sáng ấm.',
  },
  {
    title: 'Hộp lời nhắn',
    detail: 'Gấp 30 tấm thiệp mini, buộc ruy băng để các bạn viết lời cảm ơn.',
    note: 'Đặt thêm bút màu và sticker trái tim.',
  },
  {
    title: 'Bảng điểm tốt',
    detail: 'Treo bảng nỉ và kẹp các ảnh hoạt động nổi bật của lớp.',
    note: 'Ghi chú ngắn dưới mỗi ảnh để nhắc kỉ niệm.',
  },
  {
    title: 'Góc nghe tâm sự',
    detail: 'Chuẩn bị ghế đôi để mời thầy cô nghỉ và nghe lời chúc.',
    note: 'Có thể bật nhẹ nhạc không lời.',
  },
];

const gratitudeBursts = [
  {
    id: 'chung',
    title: 'Thông điệp chung',
    preview: 'Thầy cô ơi, lớp 3 xin cúi đầu cảm ơn.',
    full: 'Thầy cô ơi, lớp 3 Nam Hồng xin gửi lời tri ân vì thầy cô luôn dạy bảo bằng cả trái tim và nụ cười hiền.',
    emoji: '💌',
  },
  {
    id: 'hua',
    title: 'Tụi con hứa',
    preview: 'Chúng con sẽ ngoan và chăm.',
    full: 'Chúng con hứa giữ vở sạch, học bài đầy đủ, giúp đỡ bạn bè để xứng đáng với tình thương của thầy cô.',
    emoji: '🤝',
  },
  {
    id: 'moi',
    title: 'Lời mời thân thương',
    preview: 'Xin mời thầy cô ghé chơi.',
    full: 'Chúng con kính mời thầy cô ghé góc tri ân, nhận bó hoa bé nhỏ và chụp hình lưu niệm cùng tập thể lớp 3.',
    emoji: '🌸',
  },
  {
    id: 'niem',
    title: 'Kỉ niệm đẹp',
    preview: 'Nhắc lại khoảnh khắc vui.',
    full: 'Mỗi câu chuyện nhỏ tại góc tri ân sẽ nhắc lại bao tiết học rộn ràng, để thầy cô thấy mình luôn trong trái tim học trò.',
    emoji: '📚',
  },
];

const gratitudeStations = [
  {
    name: 'Trạm ký tên',
    description: 'Dùng bút nhũ vàng để thầy cô ký vào cuốn sổ “Lưu bút lớp 3”.',
    tip: 'Nhắc các bạn giữ sổ trang trọng, tránh đổ mực.',
  },
  {
    name: 'Trạm kể chuyện',
    description: 'Mỗi nhóm kể nhanh một kỉ niệm dễ thương về tiết học mình yêu thích.',
    tip: 'Giới hạn 1 phút để ai cũng được chia sẻ.',
  },
  {
    name: 'Trạm trao hoa',
    description: 'Phân công 3 bạn trao hoa giấy và đọc câu cảm ơn đã tập trước.',
    tip: 'Đứng hình trái tim khi kết thúc để chụp ảnh.',
  },
];

const funWindows = [
  {
    id: 'rainbow',
    title: 'Cửa sổ cầu vồng',
    caption: 'Nhấn để thấy hoa giấy tung bay.',
    scene: 'Hoa giấy màu cam – vàng xoay vòng quanh thầy cô, cả lớp reo “Tri ân – Tri ân!”.',
    emoji: '🌈✨',
  },
  {
    id: 'drum',
    title: 'Cửa sổ nhịp trống',
    caption: 'Gõ nhẹ để bật âm vang vui nhộn.',
    scene: 'Bạn trống nhỏ gõ “tum tum” rồi cả lớp giơ tay làm động tác trái tim.',
    emoji: '🥁💓',
  },
  {
    id: 'star',
    title: 'Cửa sổ sao sáng',
    caption: 'Click để thắp đèn lung linh.',
    scene: 'Dãy đèn led chạy quanh bảng tri ân, chiếu sáng nét chữ “Cảm ơn thầy cô”.',
    emoji: '🌟🎇',
  },
];

const closingBlessings = [
  'Chúng em kính chúc thầy cô luôn mạnh khỏe và rạng rỡ như nụ cười đầu giờ sáng.',
  'Mong thầy cô mãi là ngọn đèn soi lối để chúng em tự tin tiến bước.',
  'Tập thể lớp 3 hứa ngoan ngoãn, cố gắng học tốt để đáp lại tấm lòng của thầy cô.',
];

export default function GocTriAnPage() {
  const [activeMessage, setActiveMessage] = useState(gratitudeBursts[0]);
  const [activeWindow, setActiveWindow] = useState(funWindows[0]);

  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 08"
        title="Góc tri ân"
        subtitle="Không gian gửi lời cảm ơn"
        description="Hoàn thiện phần cuối bằng góc tri ân nhỏ xinh: chuẩn bị bàn lễ, hộp lời nhắn và những tương tác vui nhộn để thầy cô thấy trọn tình cảm lớp 3."
        icon="💝"
      />

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Khâu chuẩn bị</p>
        <h2 className="text-2xl font-semibold text-ink">4 hạng mục giúp góc tri ân nổi bật</h2>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          {prepItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-card">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-sun">{item.title}</p>
              <p className="text-sm text-ink/80 leading-relaxed mt-2">{item.detail}</p>
              <p className="text-xs text-muted mt-3">Ghi nhớ: {item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card bg-gradient-to-br from-brand-sky/5 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Bảng lời nhắn sống động</p>
        <h2 className="text-2xl font-semibold text-ink">Chạm vào câu tri ân để xem hiệu ứng</h2>
        <div className="grid gap-6 md:grid-cols-3 mt-4">
          <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
            {gratitudeBursts.map((card) => {
              const isActive = activeMessage.id === card.id;
              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setActiveMessage(card)}
                  aria-pressed={isActive}
                  className={`text-left rounded-2xl border p-4 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky/70 ${
                    isActive
                      ? 'border-brand-sky bg-white shadow-card shadow-brand-sky/30 scale-[1.02]'
                      : 'border-brand-sky/30 bg-white/80 hover:-translate-y-1 hover:border-brand-sky'
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-sky">{card.title}</p>
                  <p className="text-base text-ink/90 leading-relaxed mt-2">{card.preview}</p>
                </button>
              );
            })}
          </div>
          <div
            className="rounded-3xl border border-brand-sky/40 bg-white/80 p-5 shadow-inner"
            role="status"
            aria-live="polite"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-brand-sky/80">Hiệu ứng đang chiếu</p>
            <p className="text-2xl font-semibold text-ink mt-3">{activeMessage.full}</p>
            <p className="text-5xl mt-4 animate-bounce">{activeMessage.emoji}</p>
          </div>
        </div>
      </section>

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Hoạt động tại góc</p>
        <h2 className="text-2xl font-semibold text-ink">3 trạm tri ân luân phiên</h2>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {gratitudeStations.map((station) => (
            <div key={station.name} className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-card">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-forest">{station.name}</p>
              <p className="text-sm text-ink/80 leading-relaxed mt-2">{station.description}</p>
              <p className="text-xs text-muted mt-3">Mẹo: {station.tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card bg-gradient-to-br from-brand-violet/10 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Cửa sổ hoạt hình vui nhộn</p>
        <h2 className="text-2xl font-semibold text-ink">Nhấn để bật pop-up cảm xúc</h2>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {funWindows.map((window) => {
            const isActive = activeWindow.id === window.id;
            return (
              <button
                key={window.id}
                type="button"
                onClick={() => setActiveWindow(window)}
                aria-pressed={isActive}
                className={`rounded-2xl border p-4 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet/70 ${
                  isActive
                    ? 'border-brand-violet bg-white shadow-brand-violet/30 shadow-lg scale-[1.02]'
                    : 'border-brand-violet/30 bg-white/80 hover:-translate-y-1 hover:border-brand-violet'
                }`}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-brand-violet">{window.title}</p>
                <p className="text-sm text-ink/80 leading-relaxed mt-2">{window.caption}</p>
              </button>
            );
          })}
        </div>
        <div className="mt-6 relative">
          <div className="rounded-3xl border border-brand-violet/40 bg-white/90 p-6 shadow-card">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-violet/80">Cửa sổ đang mở</p>
            <p className="text-xl font-semibold text-ink mt-2">{activeWindow.scene}</p>
            <p className="text-5xl mt-4 animate-pulse">{activeWindow.emoji}</p>
            <p className="text-xs text-muted mt-3">Nhấn cửa sổ khác để đổi hiệu ứng.</p>
          </div>
        </div>
      </section>

      <section className="section-card fun-card text-center bg-gradient-to-br from-brand-sun/15 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Lời kết</p>
        <h3 className="text-2xl font-semibold text-ink">Gửi trọn tình cảm lớp 3</h3>
        <div className="space-y-3 text-lg text-ink/85 mt-4">
          {closingBlessings.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="text-3xl mt-6">💐💌🌈</p>
      </section>
    </div>
  );
}
