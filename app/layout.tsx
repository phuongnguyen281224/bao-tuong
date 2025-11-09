import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import { BackgroundAudio } from '../components/BackgroundAudio';

const sections: Array<{ href: string; label: string; icon: string }> = [
  { href: '/', label: 'Bìa', icon: '🌈' },
  { href: '/muc-luc', label: 'Mục lục', icon: '📚' },
  { href: '/xa-luan', label: 'Xã luận', icon: '📰' },
  { href: '/tho', label: 'Thơ', icon: '🎵' },
  { href: '/ho-lop-3', label: 'Hò lớp 3', icon: '🥁' },
  { href: '/ve-lop-em', label: 'Vè lớp em', icon: '🧡' },
  { href: '/tranh-anh', label: 'Tranh ảnh', icon: '📷' },
  { href: '/goc-tri-an', label: 'Góc tri ân', icon: '💐' },
];

export const metadata: Metadata = {
  title: 'Báo tường 20/11',
  description: 'Bộ trang báo tường điện tử khối 3 Nam Hồng, mỗi phần là một trang riêng biệt.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen">
        <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-black/5 shadow">
          <nav className="max-w-6xl mx-auto flex flex-wrap gap-3 px-4 py-3 text-sm font-semibold text-muted">
            {sections.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-transparent px-4 py-2 hover:border-brand-orange/40 hover:text-ink transition flex items-center gap-2 bg-white/70 shadow-sm"
                aria-label={link.label}
              >
                <span className="text-lg" aria-hidden>
                  {link.icon}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-black/5 bg-white/80">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-muted">
            &copy; {new Date().getFullYear()} Khối 3 Nam Hồng — Báo tường điện tử.
          </div>
        </footer>
        <BackgroundAudio />
      </body>
    </html>
  );
}

