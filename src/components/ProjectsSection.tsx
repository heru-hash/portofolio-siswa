import React, { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioProject, ProjectCategory } from '../types/portfolio';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  projects: PortfolioProject[];
  onSelectProject: (project: PortfolioProject) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'Semua Karya',
  'Riset Ilmiah',
  'Teknologi & Rekayasa',
  'Kepemimpinan',
  'Literasi',
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('Semua Karya');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Semua Karya') {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <section id="karya" className="py-16 md:py-20 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#1D4ED8] mb-2">
              01. Karya Ilmiah & Proyek Pilihan
            </p>
            <h2
              className="font-serif text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Portofolio Riset, Rekayasa, dan Inisiatif Akademik
            </h2>
          </div>

          {/* Interactive Category Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter kategori karya"
            className="flex flex-wrap items-center gap-1 p-1 bg-[#F1F5F9] rounded-lg border border-[#E2E8F0] self-start lg:self-auto no-print"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                    isActive
                      ? 'bg-white text-[#0F172A] shadow-sm'
                      : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-[#CBD5E1] rounded-2xl bg-[#F8FAFC]">
            <p className="text-sm font-medium text-[#475569]">
              Belum ada karya terdokumentasi pada kategori ini.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const isWide = selectedCategory === 'Semua Karya' && (project.featured || index === 0);

              return (
                <article
                  key={project.id}
                  className={`group bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-150 hover:border-[#94A3B8] print-break-inside-avoid ${
                    isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="text-left flex flex-col h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                  >
                    <div
                      className={`w-full overflow-hidden bg-[#E2E8F0] ${
                        isWide ? 'aspect-[16/9]' : 'aspect-[4/3]'
                      }`}
                    >
                      <ResilientImage
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        fallbackTitle={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Quiet unboxed metadata line */}
                        <div className="flex flex-wrap items-center gap-2 text-xs text-[#64748B] mb-2.5">
                          <span className="font-medium text-[#1D4ED8]">{project.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-mono tabular-nums">{project.year}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.recognition}</span>
                        </div>

                        <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] leading-snug mb-3 group-hover:text-[#1D4ED8] transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm text-[#475569] leading-relaxed line-clamp-3">
                          {project.summary}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#0F172A]">
                        <span className="font-mono text-[#64748B] tabular-nums">
                          {project.repositoryOrDocCode}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#1D4ED8] group-hover:underline underline-offset-4">
                          <span>Baca Dossier Lengkap</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
