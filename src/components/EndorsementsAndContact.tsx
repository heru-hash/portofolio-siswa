import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { FacultyEndorsement, StudentProfile } from '../types/portfolio';

interface EndorsementsAndContactProps {
  profile: StudentProfile;
  endorsements: FacultyEndorsement[];
}

export const EndorsementsAndContact: React.FC<EndorsementsAndContactProps> = ({
  profile,
  endorsements,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderInstitution, setSenderInstitution] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [purpose, setPurpose] = useState('Verifikasi Dokumen Akademik');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!senderName.trim() || !senderEmail.trim() || !message.trim()) {
      setFormError('Mohon lengkapi nama, alamat surel, serta isi pesan permohonan Anda.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-16 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-6 space-y-16">
        {/* Attributable Faculty Endorsements */}
        <div>
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-medium text-[#1D4ED8] mb-2">
              04. Rekomendasi Pendidik & Pembimbing
            </p>
            <h2
              className="font-serif text-2xl md:text-3xl font-semibold text-[#0F172A] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Catatan Evaluasi Resmi Tenaga Pendidik
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {endorsements.map((item) => (
              <blockquote
                key={item.id}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-7 flex flex-col justify-between print-break-inside-avoid"
              >
                <p className="font-serif text-base md:text-[17px] leading-[1.7] text-[#1E293B] mb-6">
                  “{item.quote}”
                </p>
                <footer className="pt-4 border-t border-[#E2E8F0] flex items-baseline justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">{item.authorName}</div>
                    <div className="text-xs text-[#475569] mt-0.5">
                      {item.authorRole} · {item.institution}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#64748B] whitespace-nowrap">
                    {item.dateIssued}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Formal Contact & Verification Inquiry */}
        <div className="pt-12 border-t border-[#E2E8F0] grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-medium text-[#1D4ED8] mb-2">
                Korespondensi & Verifikasi
              </p>
              <h3 className="font-serif text-2xl font-semibold text-[#0F172A] tracking-tight">
                Kontak Resmi Siswa
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mt-3">
                Panitia seleksi perguruan tinggi, pemberi beasiswa, maupun mitra riset dapat
                mengajukan permintaan verifikasi dokumen asli rapor atau surat keterangan sekolah
                melalui formulir resmi di samping.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#E2E8F0] text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-[#64748B]">Surel Institusi</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-medium text-[#0F172A] hover:text-[#1D4ED8] hover:underline underline-offset-4"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-[#64748B]">Asal Sekolah & Domisili</span>
                  <span className="font-medium text-[#0F172A]">
                    {profile.schoolName}, {profile.city}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#1D4ED8] mt-1 shrink-0" />
                <div>
                  <span className="block text-xs text-[#64748B]">Identitas Induk Siswa</span>
                  <span className="font-mono text-xs font-medium text-[#0F172A] tabular-nums">
                    NISN {profile.nisn} · Angkatan {profile.graduationYear}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 no-print">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#1D4ED8] mx-auto" strokeWidth={1.75} />
                  <h4 className="font-serif text-xl font-semibold text-[#0F172A]">
                    Permohonan Korespondensi Tercatat
                  </h4>
                  <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                    Terima kasih, <span className="font-semibold text-[#0F172A]">{senderName}</span>
                    . Pesan terkait <span className="font-medium">{purpose}</span> telah disiapkan
                    untuk dikirimkan ke <span className="font-mono text-xs">{profile.email}</span>.
                  </p>
                  <div className="pt-2 flex items-center justify-center gap-3">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(
                        `[${purpose}] ${senderName} - ${senderInstitution || 'Korespondensi Resmi'}`
                      )}&body=${encodeURIComponent(message)}`}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors"
                    >
                      Buka Aplikasi Surel
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setSenderName('');
                        setSenderInstitution('');
                        setSenderEmail('');
                        setMessage('');
                      }}
                      className="px-4 py-2 text-xs font-medium text-[#334155] border border-[#CBD5E1] hover:bg-[#F8FAFC] rounded-lg transition-colors cursor-pointer"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#334155] mb-1.5"
                      >
                        Nama Lengkap Pengirim
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="Dr. Andi Kurniawan"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-inst"
                        className="block text-xs font-semibold text-[#334155] mb-1.5"
                      >
                        Instansi / Perguruan Tinggi
                      </label>
                      <input
                        id="contact-inst"
                        type="text"
                        value={senderInstitution}
                        onChange={(e) => setSenderInstitution(e.target.value)}
                        placeholder="Panitia Seleksi Beasiswa / Fakultas"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#334155] mb-1.5"
                      >
                        Alamat Surel Resmi
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="nama@instansi.ac.id"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-purpose"
                        className="block text-xs font-semibold text-[#334155] mb-1.5"
                      >
                        Keperluan Korespondensi
                      </label>
                      <select
                        id="contact-purpose"
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                      >
                        <option value="Verifikasi Dokumen Akademik">
                          Verifikasi Dokumen Akademik
                        </option>
                        <option value="Wawancara Seleksi Beasiswa">
                          Wawancara Seleksi Beasiswa
                        </option>
                        <option value="Kolaborasi Riset Ilmiah">Kolaborasi Riset Ilmiah</option>
                        <option value="Undangan Simposium / Seminar">
                          Undangan Simposium / Seminar
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#334155] mb-1.5"
                    >
                      Pesan Resmi
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tuliskan maksud korespondensi atau dokumen yang perlu diverifikasi..."
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg text-[#0F172A] focus:bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8]"
                    />
                  </div>

                  {formError && (
                    <p role="alert" className="text-xs font-medium text-[#B91C1C]">
                      {formError}
                    </p>
                  )}

                  <div className="flex items-center justify-end pt-2">
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
                    >
                      Kirim Permohonan Resmi
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
