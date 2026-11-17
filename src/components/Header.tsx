import React, { useState } from 'react';
import { Menu, Printer, X } from 'lucide-react';

interface HeaderProps {
  brandName: string;
  onPrint: () => void;
}

const NAV_LINKS = [
  { href: '#profil', label: 'Profil' },
  { href: '#karya', label: 'Karya Pilihan' },
  { href: '#prestasi', label: 'Prestasi' },
  { href: '#akademik', label: 'Akademik' },
  { href: '#kontak', label: 'Kontak' },
];

export const Header: React.FC<HeaderProps> = ({ brandName, onPrint }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F8FAFC]/95 backdrop-blur-sm border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#profil"
          className="font-serif text-lg font-semibold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
        >
          {brandName}
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#475569]"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#0F172A] hover:underline underline-offset-8 decoration-[#1D4ED8] decoration-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0 no-print">
          <button
            type="button"
            onClick={onPrint}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
          >
            <Printer className="w-3.5 h-3.5" strokeWidth={2} />
            <span>Cetak Portofolio</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white px-6 py-4 no-print">
          <nav aria-label="Navigasi seluler" className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-[#334155] hover:text-[#1D4ED8] border-b border-[#F1F5F9] last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onPrint();
              }}
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Portofolio</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
