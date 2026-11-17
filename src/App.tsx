/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { AcademicRecordSection } from './components/AcademicRecordSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EditPortfolioModal } from './components/EditPortfolioModal';
import { EndorsementsAndContact } from './components/EndorsementsAndContact';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { DEFAULT_PORTFOLIO } from './data/defaultPortfolio';
import { PortfolioData, PortfolioProject } from './types/portfolio';

const STORAGE_KEY = 'portofolio_siswa_formal_v1';

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved) as PortfolioData;
      }
    } catch {
      // Fallback to default data if storage is unavailable
    }
    return DEFAULT_PORTFOLIO;
  });

  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  useEffect(() => {
    document.title = `${portfolioData.profile.fullName} — Portofolio Digital Siswa`;
  }, [portfolioData.profile.fullName]);

  const handleSaveData = (updated: PortfolioData) => {
    const avgScore =
      updated.grades.length > 0
        ? (
            updated.grades.reduce((acc, g) => acc + g.averageScore, 0) /
            updated.grades.length
          )
            .toFixed(2)
            .replace('.', ',')
        : '0,00';

    const syncedMetrics = updated.metrics.map((metric) => {
      if (metric.id === 'gpa') {
        return { ...metric, value: avgScore };
      }
      if (metric.id === 'awards') {
        return {
          ...metric,
          value: String(updated.achievements.length).padStart(2, '0'),
        };
      }
      if (metric.id === 'graduation') {
        return {
          ...metric,
          value: updated.profile.graduationYear,
        };
      }
      return metric;
    });

    const nextState: PortfolioData = {
      ...updated,
      metrics: syncedMetrics,
    };

    setPortfolioData(nextState);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    } catch {
      // Ignore storage quota errors
    }
  };

  const handleResetData = () => {
    setPortfolioData(DEFAULT_PORTFOLIO);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      <Header brandName={portfolioData.profile.shortName} onPrint={handlePrint} />

      <main className="flex-1">
        <HeroSection
          profile={portfolioData.profile}
          metrics={portfolioData.metrics}
          onOpenEditor={() => setIsEditorOpen(true)}
        />

        <ProjectsSection
          projects={portfolioData.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <AchievementsSection achievements={portfolioData.achievements} />

        <AcademicRecordSection
          grades={portfolioData.grades}
          organizations={portfolioData.organizations}
        />

        <EndorsementsAndContact
          profile={portfolioData.profile}
          endorsements={portfolioData.endorsements}
        />
      </main>

      <footer className="border-t border-[#E2E8F0] bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            <span className="font-semibold text-[#0F172A]">
              {portfolioData.profile.fullName}
            </span>
            <span aria-hidden="true" className="mx-2 text-[#CBD5E1]">
              ·
            </span>
            <span>{portfolioData.profile.schoolName}</span>
            <span aria-hidden="true" className="mx-2 text-[#CBD5E1]">
              ·
            </span>
            <span className="font-mono tabular-nums">
              NISN {portfolioData.profile.nisn}
            </span>
          </div>

          <div className="flex items-center gap-6 no-print">
            <a href="#profil" className="hover:text-[#0F172A] transition-colors">
              Kembali ke Atas
            </a>
            <button
              type="button"
              onClick={handlePrint}
              className="text-[#1D4ED8] font-medium hover:underline underline-offset-4 cursor-pointer"
            >
              Cetak Versi Dossier
            </button>
          </div>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <EditPortfolioModal
        isOpen={isEditorOpen}
        data={portfolioData}
        onSave={handleSaveData}
        onReset={handleResetData}
        onClose={() => setIsEditorOpen(false)}
      />
    </div>
  );
}
