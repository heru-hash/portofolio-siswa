import React, { useEffect, useMemo, useState } from 'react';
import { FileText, Search, X } from 'lucide-react';
import { AchievementLevel, AchievementRecord } from '../types/portfolio';

interface AchievementsSectionProps {
  achievements: AchievementRecord[];
}

const LEVELS: AchievementLevel[] = ['Semua Tingkat', 'Nasional', 'Provinsi', 'Kota/Kabupaten'];

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ achievements }) => {
  const [selectedLevel, setSelectedLevel] = useState<AchievementLevel>('Semua Tingkat');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRecord, setActiveRecord] = useState<AchievementRecord | null>(null);

  useEffect(() => {
    if (!activeRecord) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveRecord(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeRecord]);

  const filteredAchievements = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return achievements.filter((item) => {
      const matchesLevel = selectedLevel === 'Semua Tingkat' || item.level === selectedLevel;
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.organizer.toLowerCase().includes(query) ||
        item.placement.toLowerCase().includes(query);
      return matchesLevel && matchesQuery;
    });
  }, [achievements, selectedLevel, searchQuery]);

  return (
    <section id="prestasi" className="py-16 md:py-20 border-b border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#1D4ED8] mb-2">
              02. Rekam Jejak Prestasi Resmi
            </p>
            <h2
              className="font-serif text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Penghargaan Akademik, Olimpiade, dan Sertifikasi
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 no-print">
            <div className="relative">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari ajang atau penyelenggara..."
                aria-label="Cari penghargaan"
                className="w-full sm:w-64 pl-9 pr-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded-lg text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
              />
            </div>

            <div
              role="tablist"
              aria-label="Filter tingkat penghargaan"
              className="flex flex-wrap items-center gap-1 p-1 bg-white rounded-lg border border-[#E2E8F0]"
            >
              {LEVELS.map((level) => {
                const active = selectedLevel === level;
                return (
                  <button
                    key={level}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#1D4ED8] text-white'
                        : 'text-[#475569] hover:text-[#0F172A]'
                    }`}
                  >
                    {level}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Clean Formal Ledger Table */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden">
          {filteredAchievements.length === 0 ? (
            <div className="py-12 px-6 text-center text-sm text-[#475569]">
              Tidak ditemukan catatan prestasi yang sesuai dengan filter pencarian.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC] text-xs font-semibold text-[#475569]">
                    <th className="py-3.5 px-5 w-20">Tahun</th>
                    <th className="py-3.5 px-5">Nama Kompetisi / Penghargaan</th>
                    <th className="py-3.5 px-5 w-36">Tingkat</th>
                    <th className="py-3.5 px-5">Penyelenggara</th>
                    <th className="py-3.5 px-5">Pencapaian</th>
                    <th className="py-3.5 px-5 text-right no-print w-28">Verifikasi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0] text-sm">
                  {filteredAchievements.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => setActiveRecord(item)}
                      className="hover:bg-[#F8FAFC] transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-5 font-mono text-xs text-[#475569] tabular-nums align-top">
                        {item.year}
                      </td>
                      <td className="py-4 px-5 font-semibold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors align-top">
                        {item.title}
                      </td>
                      <td className="py-4 px-5 text-xs font-medium text-[#334155] align-top whitespace-nowrap">
                        {item.level}
                      </td>
                      <td className="py-4 px-5 text-xs text-[#475569] align-top">
                        {item.organizer}
                      </td>
                      <td className="py-4 px-5 text-xs font-semibold text-[#0F172A] align-top">
                        {item.placement}
                      </td>
                      <td className="py-4 px-5 text-right align-top no-print">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveRecord(item);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1D4ED8] hover:underline underline-offset-4 whitespace-nowrap cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Rincian</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Achievement Verification Detail Modal */}
      {activeRecord && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="achievement-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/60 backdrop-blur-xs p-4 no-print"
          onClick={() => setActiveRecord(null)}
        >
          <div
            className="w-full max-w-lg bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
              <span className="text-xs font-medium text-[#475569]">
                Arsip Sertifikat & Verifikasi Prestasi
              </span>
              <button
                type="button"
                onClick={() => setActiveRecord(null)}
                aria-label="Tutup rincian penghargaan"
                className="w-8 h-8 inline-flex items-center justify-center rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#E2E8F0]/60 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <p className="text-xs text-[#1D4ED8] font-medium mb-1">
                  {activeRecord.level} · {activeRecord.year}
                </p>
                <h3
                  id="achievement-modal-title"
                  className="font-serif text-xl font-semibold text-[#0F172A] leading-snug"
                >
                  {activeRecord.title}
                </h3>
              </div>

              <p className="text-sm text-[#334155] leading-relaxed">{activeRecord.description}</p>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2E8F0] text-xs">
                <div>
                  <dt className="text-[#64748B] mb-1">Capaian Resmi</dt>
                  <dd className="font-semibold text-[#0F172A]">{activeRecord.placement}</dd>
                </div>
                <div>
                  <dt className="text-[#64748B] mb-1">Nomor Piagam / SK</dt>
                  <dd className="font-mono text-[#0F172A] tabular-nums">
                    {activeRecord.certificateNumber}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-[#64748B] mb-1">Lembaga Penyelenggara</dt>
                  <dd className="font-medium text-[#0F172A]">{activeRecord.organizer}</dd>
                </div>
              </dl>

              <div className="pt-3 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveRecord(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
