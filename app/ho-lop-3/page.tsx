import { chantExchanges } from '../../lib/content';
import { PageHeading } from '../../components/PageHeading';

const prepChecklist = [
  {
    title: 'Chuẩn bị không gian',
    description: 'Xếp hai hàng đôi đối diện để tạo hiệu ứng gọi-đáp rõ nét.',
    cue: 'Bạn MC đứng giữa làm mốc gọi.',
  },
  {
    title: 'Khởi động 30 giây',
    description: 'Cả lớp hít thở, gõ nhẹ trên vai bạn cùng lúc để tạo nhiệt.',
    cue: 'Đếm 1-2-3 và kéo cao âm "Hò ơi".',
  },
  {
    title: 'Chia nhóm vai',
    description: 'Tách lớp thành nhóm Dẫn Gọi, Dẫn Đáp và nhóm gõ tay để giữ nhịp.',
    cue: 'Ghi chú tên nhóm trên bảng phụ.',
  },
  {
    title: 'Thống nhất ký hiệu',
    description: 'Dùng cú chạm tay lên vai là tín hiệu đổi giọng, vạch tay lên cao là kết thúc.',
    cue: 'Tập mẫu trước 1 lượt cho cả lớp nhìn thấy.',
  },
];

const beatPatterns = [
  {
    name: 'Sóng biển 4 nhịp',
    count: 'Bùm - chát / Bùm - chát',
    tip: 'Gõ vào đầu mỗi phách lớn, tiếp bằng cách đập ngực tay trái để giữ âm tròn.',
  },
  {
    name: 'Sợi dây 3-3-2',
    count: '1-2-3 / 1-2-3 / 1-2',
    tip: 'Phù hợp cho câu hỏi kéo dài, đối đáp sẽ bật cười do 2 phách cuối ngắn.',
  },
  {
    name: 'Nhanh chân 2-2-1',
    count: 'Ta-ta / ta-ta / ta',
    tip: 'Dùng khi muốn chuyển sang câu khẩu hiệu có nhiệt độ cao.',
  },
];

const roleIdeas = [
  {
    role: 'Nhóm gõ tay',
    responsibility: 'Đứng ở hai cánh sân khấu, tạo nhạc nền như những người phụ trợ dân ca.',
    line: 'Hiệu ứng: gõ 2 lần trước khi cả lớp đáp.',
  },
  {
    role: 'Nhóm nhập vai',
    responsibility: 'Dẫn nhập từng câu hỏi, có thể cầm nón lá hét để tăng vui.',
    line: 'Hiệu ứng: thêm câu giới thiệu ngắn trước mỗi lượt.',
  },
  {
    role: 'Bạn đọc lời chốt',
    responsibility: 'Cuối mỗi lượt, bạn này nhắc lại thông điệp tri ân bằng giọng rõ ràng.',
    line: 'Hiệu ứng: giữ đều nhịp bấm, không lên giọng to hơn MC.',
  },
];

const closingChants = [
  {
    title: 'Lời cảm ơn nhanh',
    lyric: '"Cảm ơn thầy cô đã dẫn bước chúng con"',
    action: 'Cả lớp nối tay tạo vòng cung.',
  },
  {
    title: 'Nhận lời hứa',
    lyric: '"Chúng con hứa giữ nhịp học chăm ngoan"',
    action: 'Tất cả đưa tay lên vai bạn bên cạnh.',
  },
  {
    title: 'Khẩu hiệu kết',
    lyric: '"20/11 rạng rỡ, lớp 3 sẵn sàng!"',
    action: 'Dàn đập 3 lần và cười tươi để kết thúc.',
  },
];

export default function HoLopBaPage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 05"
        title="Hò lớp 3"
        subtitle="Gọi - đáp theo nhịp dân ca"
        description="MC đọc phần gọi, cả lớp đáp lại hoặc chia thành hai nhóm đối đáp. Có thể gõ nhịp trên bàn tay để tạo không khí."
        icon="🥁"
      />

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Khởi động</p>
        <h2 className="text-2xl font-semibold text-ink">Lên khung hò từ những bước đơn giản</h2>
        <p className="text-ink/80 leading-relaxed">
          Các bạn chỉ cần 4 bước ngắn gọn để buổi hò có chiều sâu cảm xúc. Đọc theo danh sách, dán màu ghi chú
          và đánh dấu ai phụ trách từng công việc.
        </p>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          {prepChecklist.map((item) => (
            <div key={item.title} className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-card">
              <h3 className="font-semibold text-lg text-ink">{item.title}</h3>
              <p className="text-sm text-ink/80 leading-relaxed">{item.description}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted mt-3">Hiệu lệnh: {item.cue}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card bg-gradient-to-br from-brand-sky/5 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Nhịp gõ tay</p>
        <h2 className="text-2xl font-semibold text-ink">Công thức bấm nhịp để cả lớp bắt sóng</h2>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {beatPatterns.map((pattern) => (
            <div key={pattern.name} className="rounded-2xl border border-dashed border-brand-sky/40 p-4 bg-white/80">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-sky">{pattern.name}</p>
              <p className="text-lg font-semibold text-ink mt-1">{pattern.count}</p>
              <p className="text-sm text-ink/80 leading-relaxed mt-2">{pattern.tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Nội dung chính</p>
        <h2 className="text-2xl font-semibold text-ink">3 lượt hò chủ đạo của lớp 3</h2>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
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
      </section>

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Phân việc</p>
        <h2 className="text-2xl font-semibold text-ink">Mỗi nhóm một vai trò</h2>
        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {roleIdeas.map((role) => (
            <div key={role.role} className="rounded-2xl border border-black/5 bg-white/80 p-4 shadow-card">
              <h3 className="text-lg font-semibold text-ink">{role.role}</h3>
              <p className="text-sm text-ink/80 leading-relaxed">{role.responsibility}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted mt-3">{role.line}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card fun-card bg-gradient-to-br from-brand-sun/15 to-white">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Kết trang hò</p>
        <h2 className="text-2xl font-semibold text-ink">Chốt lại bằng lời cảm ơn ngắn</h2>
        <div className="space-y-4 mt-4">
          {closingChants.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-sun/30 bg-white/80 p-4">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-sun">{item.title}</p>
              <p className="text-lg font-semibold text-ink mt-1">{item.lyric}</p>
              <p className="text-sm text-ink/80 leading-relaxed mt-2">Động tác gợi ý: {item.action}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
