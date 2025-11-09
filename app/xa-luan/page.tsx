import { editorialSections, editorialMoments, reflectionPrompts } from '../../lib/content';
import { PageHeading } from '../../components/PageHeading';
import { Card } from '../../components/Card';
import { TimelineTabs } from '../../components/TimelineTabs';
import { PromptAccordion } from '../../components/PromptAccordion';

export default function XaLuanPage() {
  return (
    <div className="page-shell">
      <PageHeading
        badge="Trang 03"
        title="Xã luận lớp 3"
        subtitle="Lời tri ân gửi thầy cô"
        description="Bài viết được biên soạn bởi nhóm phóng viên nhí. Có thể chia cho ba bạn lần lượt đọc từng phần trong buổi báo tường."
        icon="📰"
      />

      {editorialSections.map((section, index) => (
        <Card key={section.heading} title={section.heading} kicker={section.detail} emoji={['🌅', '🎒', '💌'][index]}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Card>
      ))}

      <TimelineTabs events={editorialMoments} />

      <PromptAccordion items={reflectionPrompts} />
    </div>
  );
}
