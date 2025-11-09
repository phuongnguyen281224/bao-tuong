import { poems } from '../../lib/content';
import { PageHeading } from '../../components/PageHeading';
import { PoemBoard } from '../../components/PoemBoard';

export default function ThoPage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 04"
        title="Thơ ca lớp 3"
        subtitle="Bàn tay phấn trắng · Hoa điểm mười"
        description="Sử dụng phím mũi tên hoặc click chuột để chuyển giữa các slide. Tổ văn nghệ có thể đọc diễn cảm hoặc hát nhẹ cùng nền nhạc."
        icon="🎤"
      />

      <PoemBoard initialPoems={poems} />
    </div>
  );
}
