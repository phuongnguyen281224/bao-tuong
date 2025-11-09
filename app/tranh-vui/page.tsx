import { artSlides } from '../../lib/content';
import { PageHeading } from '../../components/PageHeading';
import { ArtCarousel } from '../../components/ArtCarousel';

export default function TranhVuiPage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 07"
        title="Tranh vui"
        subtitle="Mini game & đố nhanh"
        description="Dùng chuột hoặc phím mũi tên để chuyển giữa hai slide mini-game. Mỗi slide có thể dừng lại 30 giây để khán giả tham gia."
        icon="🎨"
      />

      <ArtCarousel slides={artSlides} />
    </div>
  );
}
