import React from 'react';
import { OrganizationRole, SubjectGrade } from '../types/portfolio';

interface AcademicRecordSectionProps {
  grades: SubjectGrade[];
  organizations: OrganizationRole[];
}

export const AcademicRecordSection: React.FC<AcademicRecordSectionProps> = ({
  grades,
  organizations,
}) => {
  const overallAverage =
    grades.length > 0
      ? (grades.reduce((sum, item) => sum + item.averageScore, 0) / grades.length)
          .toFixed(2)
          .replace('.', ',')
      : '0,00';

  return (
    <section id="akademik" className="py-16 md:py-20 border-b border-[#E2E8F0] bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium text-[#1D4ED8] mb-2">
            03. Transkrip Akademik & Organisasi
          </p>
          <h2
            className="font-serif text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Ringkasan Capaian Mata Pelajaran Inti & Mandat Kepemimpinan
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Academic Transcript Summary */}
          <div className="lg:col-span-6">
            <div className="flex items-baseline justify-between pb-4 border-b border-[#E2E8F0]">
              <h3 className="text-base font-semibold text-[#0F172A]">
                Rekapitulasi Nilai Rapor (Sem. 1–5)
              </h3>
              <span className="font-mono text-xs font-semibold text-[#1D4ED8] tabular-nums">
                Rata-rata Inti: {overallAverage}
              </span>
            </div>

            <div className="divide-y divide-[#E2E8F0]">
              {grades.map((grade) => (
                <div
                  key={grade.id}
                  className="py-4 flex items-center justify-between gap-4 print-break-inside-avoid"
                >
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">{grade.subject}</div>
                    <div className="text-xs text-[#64748B] mt-0.5">
                      {grade.category} · {grade.semesterRange}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono text-base font-semibold text-[#0F172A] tabular-nums">
                      {grade.averageScore.toFixed(1).replace('.', ',')}
                    </div>
                    <div className="text-xs text-[#475569]">{grade.predicate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Organizational Leadership */}
          <div className="lg:col-span-6">
            <div className="flex items-baseline justify-between pb-4 border-b border-[#E2E8F0]">
              <h3 className="text-base font-semibold text-[#0F172A]">
                Pengalaman Organisasi & Kepanitiaan
              </h3>
              <span className="font-mono text-xs text-[#64748B] tabular-nums">
                {organizations.length} Mandat Aktif
              </span>
            </div>

            <div className="divide-y divide-[#E2E8F0]">
              {organizations.map((org) => (
                <article key={org.id} className="py-5 print-break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-semibold text-[#0F172A]">{org.role}</h4>
                    <span className="font-mono text-xs text-[#475569] tabular-nums">
                      {org.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#1D4ED8] mb-2">{org.organization}</p>
                  <p className="text-sm text-[#475569] leading-relaxed">{org.mandate}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
