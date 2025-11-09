import Image from "next/image";
import { artSlides } from "../../lib/content";
import { PageHeading } from "../../components/PageHeading";
import { ArtCarousel } from "../../components/ArtCarousel";

const galleryImages = [
  "/images/anh-1.jpg",
  "/images/anh-2.jpg",
  "/images/z7206694195934_7283fca79e94b531c3a6c288604a67f5.jpg",
  "/images/z7206694195935_8eace772f355e67a324be430b11fafac.jpg",
];

export default function TranhAnhPage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 07"
        title="Tranh ảnh"
        subtitle="Album ảnh & mini game"
        description="Ngắm lại những bức ảnh kỷ niệm của lớp 3 và cùng tham gia các trò chơi nhỏ từ Art Carousel."
        icon="📷"
      />

      <ArtCarousel slides={artSlides} />

      <section className="section-card fun-card">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">Album ảnh lớp 3</p>
        <h2 className="text-2xl font-semibold text-ink">Ảnh ngày 20/11</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {galleryImages.map((src) => (
            <div key={src} className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-card">
              <Image src={src} alt="Ảnh ngày 20/11" width={600} height={360} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
