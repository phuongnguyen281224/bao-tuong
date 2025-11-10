import { veLines } from '../../lib/content';
import { PageHeading } from '../../components/PageHeading';

const warmupSteps = [
  {
    title: 'Khởi động giọng đọc',
    description: 'Hít sâu 4 nhịp, giữ lưng thẳng và đọc thử 1 câu vè nhỏ để làm nóng khẩu hình.',
    cue: '60 giây lấy hơi',
  },
  {
    title: 'Tìm nhịp chung',
    description: 'Cả lớp gõ 2/4 bằng cách chạm tay vào bàn – đùi – bàn – đùi để quen cảm giác nhịp.',
    cue: 'Nhịp 2/4 đều',
  },
  {
    title: 'Chọn cảm xúc',
    description: 'Mỗi nhóm nói nhanh từ khóa thể hiện tinh thần (tự hào, vui tươi, đáng yêu) và ghi lên bảng.',
    cue: 'Ghi chú màu',
  },
  {
    title: 'Duyệt đội hình',
    description: 'Sắp xếp 4 bạn đọc chính đứng zíc zắc, các bạn phụ họa đứng vòng cung phía sau.',
    cue: '1 phút chỉnh đội hình',
  },
];

const expressionIdeas = [
  {
    title: 'Song ca vè – họa',
    detail: 'Một bạn đọc, một bạn “vẽ” động tác theo từng câu để minh họa nội dung.',
    action: 'Kết thúc bằng động tác tạo hình trái tim lớn.',
  },
  {
    title: 'Tăng tốc theo nhịp trống',
    detail: 'Sau mỗi câu, cả lớp gõ tay vào mặt bàn 2 lần để tạo điểm nhấn dồn dập.',
    action: 'Giữ nhịp ổn định bằng tiếng đếm nhỏ 1-2.',
  },
  {
    title: 'Góc kể chuyện',
    detail: 'Biến mỗi câu vè thành một mẩu chuyện mini về kỉ niệm cùng thầy cô.',
    action: 'Dùng bảng flip nhỏ để đổi hình minh họa.',
  },
];

const pledgeCards = [
  {
    title: 'Thi đua học giỏi',
    statement: 'Mỗi tuần hoàn thành bài tập về nhà đúng hạn và trình bày sạch đẹp.',
    reminder: 'Dán sticker ngôi sao khi cả nhóm thực hiện đủ.',
  },
  {
    title: 'Lan tỏa yêu thương',
    statement: 'Luôn nói lời cảm ơn, xin phép và giúp đỡ bạn bè trong lớp.',
    reminder: 'Cuối ngày ghi lại 1 việc tốt vào sổ chung.',
  },
  {
    title: 'Giữ nề nếp',
    statement: 'Xếp hàng ngay ngắn, trực nhật đúng ca và giữ lớp học thơm tho.',
    reminder: 'Treo bảng “Lớp 3 điểm 10 kỉ luật” ở cửa.',
  },
];

const miniChallenges = [
  {
    name: 'Vè tốc độ',
    goal: 'Đọc liền mạch 4 câu mà vẫn rõ từng vần “em/om/ong”.',
    reward: 'Nhận huy hiệu “Miệng vàng lớp 3”.',
  },
  {
    name: 'Đổi vai chớp mắt',
    goal: 'Mỗi câu vè đổi người đọc nhưng vẫn giữ đúng nhịp 2/4.',
    reward: 'Cả nhóm được cộng 10 điểm thi đua.',
  },
  {
    name: 'Hát hóa vè',
    goal: 'Phổ nhạc câu cuối theo giai điệu quen thuộc rồi mời cả lớp hát lại.',
    reward: 'Thêm 1 lượt chơi mini-game ở tiết sinh hoạt.',
  },
];

const lineBadges = ['🌱', '📚', '🎨', '🌟'];

export default function VePage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 06"
        title="Vè lớp em"
        subtitle="Nhịp vè gọi thầy cô"
        description="Chia 4 câu cho 4 bạn đọc nối tiếp. Có thể gõ phách nhịp 2 để tăng nhịp nhàng và tạo không khí lễ hội."
        icon="🪘"
      />

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Chuẩn bị nhanh</p>
        <h2 className="text-2xl font-semibold text-ink">4 bước để cả lớp sẵn sàng đọc vè</h2>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          {warmupSteps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-card">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-sun">{step.cue}</p>
              <h3 className="text-lg font-semibold text-ink mt-1">{step.title}</h3>
              <p className="text-sm text-ink/80 leading-relaxed mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Bài vè chính</p>
        <h2 className="text-2xl font-semibold text-ink">Lớp đọc đều – ý tình gửi thầy cô</h2>
        <p className="text-ink/80 leading-relaxed mt-2">
          Mỗi biểu tượng đại diện cho một bạn đọc. Khi đọc xong, bạn lùi nhẹ nửa bước để nhường sân khấu cho bạn kế tiếp.
        </p>
        <ol className="space-y-3 text-lg font-semibold text-ink list-decimal list-inside mt-4">
          {veLines.map((line, index) => (
            <li key={line} className="flex items-start gap-3">
              <span className="text-2xl" aria-hidden>
                {lineBadges[index % lineBadges.length]}
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-card fun-card bg-gradient-to-br from-brand-sky/5 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Cách thể hiện</p>
        <h2 className="text-2xl font-semibold text-ink">Biến tấu vè để giờ đọc thêm sinh động</h2>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {expressionIdeas.map((idea) => (
            <div key={idea.title} className="rounded-2xl border border-dashed border-brand-sky/40 bg-white/80 p-4">
              <h3 className="text-lg font-semibold text-ink">{idea.title}</h3>
              <p className="text-sm text-ink/80 leading-relaxed mt-2">{idea.detail}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-sky mt-3">{idea.action}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Bảng cam kết</p>
        <h2 className="text-2xl font-semibold text-ink">Vè hay hơn khi mỗi bạn giữ lời hứa nhỏ</h2>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {pledgeCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-card">
              <h3 className="text-lg font-semibold text-ink">{card.title}</h3>
              <p className="text-sm text-ink/80 leading-relaxed mt-2">{card.statement}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted mt-3">{card.reminder}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card bg-gradient-to-br from-brand-sun/15 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Mini challenge</p>
        <h2 className="text-2xl font-semibold text-ink">Chơi nhanh sau khi đọc vè</h2>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {miniChallenges.map((challenge) => (
            <div key={challenge.name} className="rounded-2xl border border-brand-sun/30 bg-white/80 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-sun">{challenge.name}</p>
              <p className="text-sm text-ink/80 leading-relaxed mt-2">Mục tiêu: {challenge.goal}</p>
              <p className="text-sm text-ink/80 leading-relaxed mt-1">Phần thưởng: {challenge.reward}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
