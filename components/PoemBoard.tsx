'use client';

import { useState } from 'react';
import { PoemCarousel, PoemData } from './PoemCarousel';

interface PoemBoardProps {
  initialPoems: PoemData[];
}

const defaultForm = {
  title: '',
  verses: '',
  note: '',
};

export function PoemBoard({ initialPoems }: PoemBoardProps) {
  const [poems, setPoems] = useState<PoemData[]>(initialPoems);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(defaultForm);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const trimmedVerses = form.verses
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    if (!form.title.trim()) {
      setError('Hãy đặt tên cho bài thơ nhé.');
      return;
    }
    if (trimmedVerses.length < 2) {
      setError('Nhập ít nhất 2 câu thơ để chia sẻ cùng lớp.');
      return;
    }

    setPoems((prev) => [
      ...prev,
      {
        title: form.title.trim(),
        verses: trimmedVerses,
        note: form.note.trim() || undefined,
      },
    ]);
    setForm(defaultForm);
    setError(null);
    setFormOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      <PoemCarousel poems={poems} />
      <section className="section-card fun-card gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">Thêm bài thơ của bạn</p>
          <p className="text-sm text-ink/70">
            Nút "Thêm bài thơ" cho phép lớp bổ sung cảm xúc mới ngay trong buổi báo tường.
          </p>
        </div>
        <button
          type="button"
          className="pulse-button pulse-button--primary self-start"
          onClick={() => setFormOpen((open) => !open)}
        >
          {formOpen ? 'Đóng lại' : '+ Thêm bài thơ'}
        </button>
        {formOpen ? (
          <form className="grid gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              className="rounded-2xl border border-black/10 px-4 py-2 text-sm"
              placeholder="Tên bài thơ"
              value={form.title}
              onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
            />
            <textarea
              className="rounded-2xl border border-black/10 px-4 py-2 text-sm"
              placeholder="Gõ mỗi câu thơ trên một dòng"
              rows={4}
              value={form.verses}
              onChange={(e) => setForm((prev) => ({ ...prev, verses: e.target.value }))}
            />
            <input
              type="text"
              className="rounded-2xl border border-black/10 px-4 py-2 text-sm"
              placeholder="Ghi chú (tuỳ chọn)"
              value={form.note}
              onChange={(e) => setForm((prev) => ({ ...prev, note: e.target.value }))}
            />
            {error ? <p className="text-sm text-red-500">{error}</p> : null}
            <button type="submit" className="pulse-button pulse-button--primary self-start">
              Lưu bài thơ
            </button>
          </form>
        ) : null}
      </section>
    </div>
  );
}
