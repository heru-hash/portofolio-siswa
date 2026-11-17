import React from 'react';
import { ArrowDownRight, FilePenLine } from 'lucide-react';
import { AcademicMetric, StudentProfile } from '../types/portfolio';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  profile: StudentProfile;
  metrics: AcademicMetric[];
  onOpenEditor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  metrics,
  onOpenEditor,
}) => {
  return (
    <section id="profil" className="pt-12 pb-14 md:pt-16 md:pb-20 border-b border-[#E2E8F0]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs md:text-sm font-medium text-[#475569] tracking-normal mb-4">
                <span>{profile.schoolName}</span>
                <span aria-hidden="true" className="mx-2 text-[#CBD5E1]">
                  ·
                </span>
                <span>{profile.gradeClass}</span>
                <span aria-hidden="true" className="mx-2 text-[#CBD5E1]">
                  ·
                </span>
                <span className="font-mono tabular-nums">NISN {profile.nisn}</span>
              </p>

              <h1
                className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-semibold leading-[1.12] tracking-tight text-[#0F172A] mb-6"
                style={{ textWrap: 'balance' }}
              >
                {profile.headline}
              </h1>

              <p className="text-base md:text-[17px] leading-[1.7] text-[#334155] max-w-[65ch] mb-8">
                {profile.executiveSummary}
              </p>
            </div>

            <div className="space-y-6">
              <div className="pt-5 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="block text-xs font-medium text-[#64748B] mb-1">
                    Nama Lengkap
                  </span>
                  <span className="font-semibold text-[#0F172A]">{profile.fullName}</span>
                </div>
                <div>
                  <span className="block text-xs font-medium text-[#64748B] mb-1">
                    Fokus Studi & Minat Riset
                  </span>
                  <span className="font-medium text-[#0F172A]">{profile.academicFocus}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 no-print">
                <a
                  href="#karya"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                >
                  <span>Telusuri Karya Pilihan</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenEditor}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#0F172A] bg-white border border-[#CBD5E1] hover:bg-[#F1F5F9] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                >
                  <FilePenLine className="w-4 h-4 text-[#475569]" />
                  <span>Sunting Data Portofolio</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Formal Portrait Container */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[360px] lg:min-h-[460px] bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden">
              <ResilientImage
                src={profile.portraitUrl}
                alt={`Foto formal ${profile.fullName}, ${profile.gradeClass} ${profile.schoolName}`}
                fallbackTitle={profile.fullName}
                className="w-full h-full lg:h-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/45 to-transparent p-6 text-white">
                <p className="text-base font-semibold tracking-tight">{profile.fullName}</p>
                <p className="text-xs text-slate-200 mt-0.5">
                  {profile.city} · Angkatan {profile.graduationYear}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Academic Summary Strip */}
        <div className="mt-12 pt-8 border-t border-[#E2E8F0] grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div key={metric.id} className="space-y-1.5">
              <div className="font-mono text-2xl md:text-3xl font-semibold text-[#0F172A] tabular-nums tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-[#1E293B]">{metric.label}</div>
              <div className="text-xs text-[#64748B] leading-relaxed">{metric.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
