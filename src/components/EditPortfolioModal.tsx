import React, { useEffect, useState } from 'react';
import { Plus, RotateCcw, Trash2, X } from 'lucide-react';
import { AchievementRecord, PortfolioData, SubjectGrade } from '../types/portfolio';

interface EditPortfolioModalProps {
  isOpen: boolean;
  data: PortfolioData;
  onSave: (updated: PortfolioData) => void;
  onReset: () => void;
  onClose: () => void;
}

type EditorTab = 'identitas' | 'prestasi' | 'akademik';

export const EditPortfolioModal: React.FC<EditPortfolioModalProps> = ({
  isOpen,
  data,
  onSave,
  onReset,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<EditorTab>('identitas');
  const [draft, setDraft] = useState<PortfolioData>(data);

  useEffect(() => {
    if (isOpen) {
      setDraft(data);
    }
  }, [isOpen, data]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const updateProfile = (field: keyof PortfolioData['profile'], value: string) => {
    setDraft((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [field]: value,
        ...(field === 'fullName'
          ? { shortName: value.trim().split(/\s+/).slice(0, 2).join(' ') || prev.profile.shortName }
          : {}),
      },
    }));
  };

  const handleAddAchievement = () => {
    const newRecord: AchievementRecord = {
      id: `ach-${Date.now()}`,
      year: new Date().getFullYear().toString(),
      title: 'Penghargaan Akademik Baru',
      level: 'Nasional',
      organizer: 'Lembaga Penyelenggara',
      placement: 'Juara 1',
      certificateNumber: 'SK/2026/001',
      description: 'Deskripsi singkat pencapaian dan lingkup seleksi kompetisi.',
    };
    setDraft((prev) => ({
      ...prev,
      achievements: [newRecord, ...prev.achievements],
    }));
  };

  const handleUpdateAchievement = (
    id: string,
    field: keyof AchievementRecord,
    value: string
  ) => {
    setDraft((prev) => ({
      ...prev,
      achievements: prev.achievements.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleRemoveAchievement = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((item) => item.id !== id),
    }));
  };

  const handleUpdateGrade = (id: string, field: keyof SubjectGrade, value: string | number) => {
    setDraft((prev) => ({
      ...prev,
      grades: prev.grades.map((g) => (g.id === id ? { ...g, [field]: value } : g)),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(draft);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="editor-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/65 backdrop-blur-xs p-4 no-print"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between">
          <div>
            <h3 id="editor-modal-title" className="text-base font-semibold text-[#0F172A]">
              Sunting Data Portofolio Siswa
            </h3>
            <p className="text-xs text-[#64748B] mt-0.5">
              Perubahan tersimpan otomatis di peramban ini dan langsung tampil pada versi cetak.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup panel penyuntingan"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#E2E8F0]/60 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-navigation Tabs */}
        <div className="px-6 pt-3 border-b border-[#E2E8F0] flex items-center gap-6 bg-white">
          {(
            [
              { id: 'identitas', label: 'Identitas Siswa' },
              { id: 'prestasi', label: 'Daftar Prestasi' },
              { id: 'akademik', label: 'Nilai Rapor Inti' },
            ] as const
          ).map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-xs font-semibold border-b-2 transition-colors cursor-pointer ${
                  active
                    ? 'border-[#1D4ED8] text-[#1D4ED8]'
                    : 'border-transparent text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          {activeTab === 'identitas' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Nama Lengkap Siswa
                </label>
                <input
                  type="text"
                  value={draft.profile.fullName}
                  onChange={(e) => updateProfile('fullName', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">NISN</label>
                <input
                  type="text"
                  value={draft.profile.nisn}
                  onChange={(e) => updateProfile('nisn', e.target.value)}
                  className="w-full px-3 py-2 text-sm font-mono border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Nama Sekolah
                </label>
                <input
                  type="text"
                  value={draft.profile.schoolName}
                  onChange={(e) => updateProfile('schoolName', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Kelas & Jurusan
                </label>
                <input
                  type="text"
                  value={draft.profile.gradeClass}
                  onChange={(e) => updateProfile('gradeClass', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Kota / Provinsi
                </label>
                <input
                  type="text"
                  value={draft.profile.city}
                  onChange={(e) => updateProfile('city', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Surel Resmi
                </label>
                <input
                  type="email"
                  value={draft.profile.email}
                  onChange={(e) => updateProfile('email', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Judul Utama Portofolio
                </label>
                <input
                  type="text"
                  value={draft.profile.headline}
                  onChange={(e) => updateProfile('headline', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#334155] mb-1">
                  Ringkasan Eksekutif
                </label>
                <textarea
                  rows={3}
                  value={draft.profile.executiveSummary}
                  onChange={(e) => updateProfile('executiveSummary', e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#1D4ED8]"
                />
              </div>
            </div>
          )}

          {activeTab === 'prestasi' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#475569]">
                  Kelola catatan prestasi dan penghargaan resmi siswa.
                </p>
                <button
                  type="button"
                  onClick={handleAddAchievement}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1D4ED8] border border-[#1D4ED8] rounded-lg hover:bg-[#1D4ED8]/5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tambah Prestasi</span>
                </button>
              </div>

              <div className="space-y-4">
                {draft.achievements.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 border border-[#E2E8F0] rounded-xl bg-[#F8FAFC] space-y-3"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-medium text-[#64748B] mb-1">
                          Tahun
                        </label>
                        <input
                          type="text"
                          value={item.year}
                          onChange={(e) => handleUpdateAchievement(item.id, 'year', e.target.value)}
                          className="w-full px-2.5 py-1.5 text-xs font-mono bg-white border border-[#CBD5E1] rounded-md"
                        />
                      </div>
                      <div className="sm:col-span-7">
                        <label className="block text-[11px] font-medium text-[#64748B] mb-1">
                          Nama Penghargaan
                        </label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) =>
                            handleUpdateAchievement(item.id, 'title', e.target.value)
                          }
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-md"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-medium text-[#64748B] mb-1">
                          Tingkat
                        </label>
                        <select
                          value={item.level}
                          onChange={(e) =>
                            handleUpdateAchievement(item.id, 'level', e.target.value)
                          }
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-md"
                        >
                          <option value="Nasional">Nasional</option>
                          <option value="Provinsi">Provinsi</option>
                          <option value="Kota/Kabupaten">Kota/Kabupaten</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-end">
                      <div className="sm:col-span-5">
                        <label className="block text-[11px] font-medium text-[#64748B] mb-1">
                          Pencapaian
                        </label>
                        <input
                          type="text"
                          value={item.placement}
                          onChange={(e) =>
                            handleUpdateAchievement(item.id, 'placement', e.target.value)
                          }
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-md"
                        />
                      </div>
                      <div className="sm:col-span-6">
                        <label className="block text-[11px] font-medium text-[#64748B] mb-1">
                          Penyelenggara
                        </label>
                        <input
                          type="text"
                          value={item.organizer}
                          onChange={(e) =>
                            handleUpdateAchievement(item.id, 'organizer', e.target.value)
                          }
                          className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-md"
                        />
                      </div>
                      <div className="sm:col-span-1 flex justify-end">
                        <button
                          type="button"
                          onClick={() => handleRemoveAchievement(item.id)}
                          aria-label={`Hapus ${item.title}`}
                          className="p-2 text-[#B91C1C] hover:bg-red-50 rounded-md cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'akademik' && (
            <div className="space-y-3">
              <p className="text-xs text-[#475569] mb-2">
                Sesuaikan rata-rata nilai mata pelajaran inti semester 1 hingga 5.
              </p>
              {draft.grades.map((grade) => (
                <div
                  key={grade.id}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center p-3 border border-[#E2E8F0] rounded-xl bg-[#F8FAFC]"
                >
                  <div className="sm:col-span-5">
                    <input
                      type="text"
                      value={grade.subject}
                      onChange={(e) => handleUpdateGrade(grade.id, 'subject', e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs font-medium bg-white border border-[#CBD5E1] rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <input
                      type="text"
                      value={grade.predicate}
                      onChange={(e) => handleUpdateGrade(grade.id, 'predicate', e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded-md"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      max="100"
                      value={grade.averageScore}
                      onChange={(e) =>
                        handleUpdateGrade(
                          grade.id,
                          'averageScore',
                          Math.min(100, Math.max(0, Number(e.target.value) || 0))
                        )
                      }
                      className="w-full px-2.5 py-1.5 text-xs font-mono text-right bg-white border border-[#CBD5E1] rounded-md"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </form>

        <div className="px-6 py-4 border-t border-[#E2E8F0] bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onReset();
              onClose();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#475569] hover:text-[#0F172A] border border-[#CBD5E1] bg-white rounded-lg cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Pulihkan Data Awal</span>
          </button>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#334155] border border-[#CBD5E1] bg-white hover:bg-[#F1F5F9] rounded-lg cursor-pointer"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={() => {
                onSave(draft);
                onClose();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg cursor-pointer"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
