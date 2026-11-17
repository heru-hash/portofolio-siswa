import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { PortfolioProject } from '../types/portfolio';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/65 backdrop-blur-xs p-4 md:p-6 overflow-y-auto no-print"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="flex items-center gap-2 text-xs text-[#475569]">
            <span className="font-semibold text-[#1D4ED8]">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.repositoryOrDocCode}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup dossier karya"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-[#E2E8F0]/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8 space-y-6">
          <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#F1F5F9] border border-[#E2E8F0]">
            <ResilientImage
              src={project.imageUrl}
              alt={project.imageAlt}
              fallbackTitle={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-medium text-[#64748B] mb-1.5">{project.recognition}</p>
            <h3
              id="project-modal-title"
              className="font-serif text-2xl md:text-3xl font-semibold text-[#0F172A] leading-tight"
            >
              {project.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4 border-t border-[#E2E8F0] text-sm leading-relaxed text-[#334155]">
            <div>
              <h4 className="text-xs font-semibold text-[#0F172A] mb-1.5">
                Latar Belakang Permasalahan
              </h4>
              <p>{project.background}</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[#0F172A] mb-1.5">
                Metodologi & Pelaksanaan
              </h4>
              <p>{project.methodology}</p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-[#0F172A] mb-1.5">
                Capaian & Hasil Terukur
              </h4>
              <p>{project.outcomeMetric}</p>
            </div>
          </div>

          <div className="pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#475569]">
            <div>
              <span className="block text-[#64748B] mb-0.5">Pembimbing Akademik</span>
              <span className="font-semibold text-[#0F172A]">{project.supervisor}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
            >
              Tutup Dossier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
