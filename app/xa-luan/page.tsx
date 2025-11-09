import Image from 'next/image';
import { editorialSections } from '../../lib/content';
import { PageHeading } from '../../components/PageHeading';
import { Card } from '../../components/Card';

const emojis = ['🌅', '🏫', '⚓', '🌟', '🎨'];

export default function XaLuanPage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 03"
        title="Xã luận lớp 3"
        subtitle="Lời tri ân thầy cô bằng những trang văn dài"
        description="Năm bài xã luận được trích từ tuyển tập Điện Thoại Vui, được lớp 3 biên soạn lại với đầy đủ nội dung và hình ảnh minh họa cho ngày 20/11."
        icon="📰"
      />

      {editorialSections.map((section, index) => (
        <Card key={section.heading} title={section.heading} kicker={section.detail} emoji={emojis[index] ?? '🖋️'}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-card h-full">
              <Image
                src={section.image}
                alt={`Minh họa cho ${section.heading}`}
                width={600}
                height={360}
                className="w-full h-full object-cover"
              />
              <p className="px-4 py-2 text-sm text-muted">Ảnh minh họa ngày 20/11</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
