import { PortfolioData } from '../types/portfolio';

export const DEFAULT_PORTFOLIO: PortfolioData = {
  profile: {
    fullName: 'Raka Pratama Wijaya',
    shortName: 'Raka Pratama',
    nisn: '0084917263',
    schoolName: 'SMA Negeri 1 Jakarta',
    gradeClass: 'Kelas XII MIPA 1',
    graduationYear: '2026',
    city: 'Jakarta Pusat, DKI Jakarta',
    email: 'raka.wijaya@sman1jakarta.sch.id',
    headline: 'Dokumentasi Akademik, Riset Ilmiah, dan Kepemimpinan Siswa.',
    executiveSummary:
      'Siswa tingkat akhir peminatan Matematika dan Ilmu Pengetahuan Alam dengan fokus riset terapan pada rekayasa lingkungan berbasis sensor dan pengembangan sistem literasi digital sekolah. Berkomitmen melanjutkan studi sarjana di bidang Teknik Elektro dan Ilmu Komputer.',
    academicFocus: 'Matematika Terapan, Rekayasa Sensor IoT, dan Kebijakan Literasi Sekolah',
    portraitUrl: '/src/assets/images/student_formal_portrait_1794888941281.jpg',
  },
  metrics: [
    {
      id: 'gpa',
      value: '94,80',
      label: 'Rata-Rata Nilai Rapor',
      detail: 'Semester 1 hingga 5 (Skala 100)',
    },
    {
      id: 'awards',
      value: '06',
      label: 'Penghargaan Resmi',
      detail: 'Tingkat Provinsi dan Nasional',
    },
    {
      id: 'research',
      value: '04',
      label: 'Karya Riset & Proyek',
      detail: 'Terpublikasi di Lingkungan Sekolah',
    },
    {
      id: 'graduation',
      value: '2026',
      label: 'Tahun Kelulusan',
      detail: 'Angkatan ke-78 SMA Negeri 1',
    },
  ],
  projects: [
    {
      id: 'proj-hydroponics',
      title: 'Sistem Pemantauan Kualitas Air Hidroponik Berbasis Mikrokontroler Terpadu',
      category: 'Teknologi & Rekayasa',
      year: '2025',
      recognition: 'Finalis Nasional LKIR BRIN',
      summary:
        'Purwarupa pemantauan kadar pH, TDS, dan suhu larutan nutrisi tanaman hidroponik secara kontinu menggunakan sensor terkalibrasi dan pencatatan data otomatis.',
      imageUrl: '/src/assets/images/project_smart_hydroponics_1794888941907.jpg',
      imageAlt: 'Purwarupa sistem pemantauan kualitas air hidroponik di laboratorium sains sekolah',
      featured: true,
      background:
        'Kebun praktik biologi sekolah menghadapi fluktuasi keasaman air yang menyebabkan penurunan hasil panen selada hingga 28% pada musim kemarau. Pencatatan manual dua kali sehari dinilai kurang responsif terhadap perubahan kadar nutrisi.',
      methodology:
        'Merancang rangkaian pembacaan sensor pH, konduktivitas listrik (TDS), dan suhu berbasis ESP32 dengan kalibrasi larutan penyangga standar laboratorium, serta integrasi pompa peristaltik otomatis untuk penyeimbangan pH.',
      outcomeMetric:
        'Menjaga kestabilan pH pada rentang 5,8–6,2 selama 45 hari uji coba serta meningkatkan efisiensi pemakaian larutan nutrisi sebesar 32% dibandingkan metode manual.',
      supervisor: 'Hendra Kusuma, S.Si., M.Sc. (Pembina Kelompok Ilmiah Remaja)',
      repositoryOrDocCode: 'DOC-KIR-2025-014',
    },
    {
      id: 'proj-library',
      title: 'Arsitektur Indeks Analitik Perpustakaan Digital Sekolah',
      category: 'Riset Ilmiah',
      year: '2025',
      recognition: 'Juara 1 Inovasi Layanan Pendidikan Kota',
      summary:
        'Perancangan sistem katalogisasi dan analisis tren peminjaman buku referensi ilmiah untuk membantu pustakawan memetakan kebutuhan literatur siswa per jenjang.',
      imageUrl: '/src/assets/images/project_digital_literacy_1794888943317.jpg',
      imageAlt: 'Tampilan analitik perpustakaan akademik pada meja belajar kayu di perpustakaan',
      background:
        'Data sirkulasi 4.200 eksemplar buku di perpustakaan sekolah sebelumnya tersimpan dalam buku induk terpisah sehingga pengadaan buku tahunan sulit disesuaikan dengan minat baca aktual siswa.',
      methodology:
        'Melakukan audit basis data sirkulasi selama 12 bulan terakhir, menyusun skema klasifikasi DDC terstruktur, dan membangun antarmuka pelaporan statistik peminjaman bulanan.',
      outcomeMetric:
        'Mengurangi waktu penyusunan laporan pengadaan bulanan dari 6 jam kerja menjadi 15 menit serta meningkatkan sirkulasi buku sains sebesar 41% dalam satu semester.',
      supervisor: 'Dra. Ratna Sari Dewi (Kepala Perpustakaan Sekolah)',
      repositoryOrDocCode: 'DOC-PERPUS-2025-008',
    },
    {
      id: 'proj-symposium',
      title: 'Simposium Ilmiah Pelajar & Forum Debat Kebijakan Lingkungan Regional',
      category: 'Kepemimpinan',
      year: '2024',
      recognition: 'Ketua Pelaksana · 18 Sekolah Peserta',
      summary:
        'Inisiasi dan penyelenggaraan forum presentasi karya tulis ilmiah antar-SMA se-DKI Jakarta yang menghadirkan panel dewan juri dari akademisi perguruan tinggi.',
      imageUrl: '/src/assets/images/project_academic_symposium_1794888943045.jpg',
      imageAlt: 'Presentasi simposium ilmiah pelajar di ruang auditorium sekolah',
      background:
        'Minimnya wadah presentasi lisan bagi penulis karya tulis ilmiah tingkat SMA membuat banyak penelitian siswa berhenti pada tahap laporan tertulis tanpa umpan balik akademik terbuka.',
      methodology:
        'Mengkoordinasikan 24 panitia siswa lintas angkatan, menyusun rubrik penilaian standar ilmiah bersama dosen pembimbing tamu, dan mengelola 36 sesi presentasi paralel.',
      outcomeMetric:
        'Menghimpun 42 naskah penelitian pelajar dari 18 SMA dan menerbitkan prosiding kompilasi resmi perpustakaan daerah.',
      supervisor: 'Drs. Bambang Sutrisno, M.Pd. (Wakil Kepala Sekolah Bidang Kesiswaan)',
      repositoryOrDocCode: 'DOC-OSIS-2024-021',
    },
    {
      id: 'proj-monograph',
      title: 'Monograf Kajian Pemodelan Geometri Diferensial untuk Optimasi Jaringan Distribusi Air',
      category: 'Literasi',
      year: '2024',
      recognition: 'Naskah Terbaik Lomba Esai Matematika SMA',
      summary:
        'Karya tulis telaah matematis mengenai pemanfaatan graf berbobot dan pendekatan kurva geodesik dalam meminimalkan kehilangan tekanan pada jaringan pipa air bersih.',
      imageUrl: '/src/assets/images/project_research_monograph_1794888942945.jpg',
      imageAlt: 'Monograf karya tulis ilmiah dan catatan persamaan matematika di atas meja',
      background:
        'Ketidakmerataan distribusi tekanan air di kawasan permukiman padat sering kali dianalisis secara empiris tanpa pendekatan optimasi topologi jaringan pipa.',
      methodology:
        'Menggunakan studi literatur teori graf, simulasi numerik alokasi simpul distribusi, serta verifikasi skenario pada model jaringan 16 titik simpul.',
      outcomeMetric:
        'Memperoleh nilai telaah tertinggi (95,5/100) dari dewan juri dan diarsipkan sebagai referensi pengayaan Klub Olimpiade Matematika sekolah.',
      supervisor: 'Ahmad Fauzan, S.Pd., M.Mat. (Guru Pembina Olimpiade Matematika)',
      repositoryOrDocCode: 'DOC-MAT-2024-005',
    },
  ],
  achievements: [
    {
      id: 'ach-1',
      year: '2025',
      title: 'Olimpiade Sains Nasional (OSN) Bidang Informatika',
      level: 'Nasional',
      organizer: 'Pusat Prestasi Nasional, Kemendikbudristek',
      placement: 'Medali Perak',
      certificateNumber: 'PUSPRESNAS/OSN-INF/2025/0412',
      description:
        'Meraih peringkat ke-9 nasional pada seleksi pemrograman kompetitif dan algoritma tingkat SMA dari 100 finalis seluruh provinsi.',
    },
    {
      id: 'ach-2',
      year: '2025',
      title: 'Lomba Karya Ilmiah Remaja (LKIR) Bidang Ilmu Pengetahuan Teknik',
      level: 'Nasional',
      organizer: 'Badan Riset dan Inovasi Nasional (BRIN)',
      placement: 'Finalis 10 Besar',
      certificateNumber: 'BRIN/LKIR-IPT/2025/0089',
      description:
        'Lolos tahap presentasi akhir nasional dengan karya purwarupa sistem kendali pH otomatis untuk budidaya hidroponik skala laboratorium sekolah.',
    },
    {
      id: 'ach-3',
      year: '2025',
      title: 'Lomba Debat Bahasa Indonesia (LDBI) Tingkat Provinsi',
      level: 'Provinsi',
      organizer: 'Dinas Pendidikan Provinsi DKI Jakarta',
      placement: 'Juara 1 & Pembicara Terbaik ke-2',
      certificateNumber: 'DISDIK-DKI/LDBI/2025/117',
      description:
        'Mewakili tim inti sekolah dalam empat babak eliminasi dengan mosi kebijakan energi terbarukan, ekonomi digital, dan tata kelola pendidikan.',
    },
    {
      id: 'ach-4',
      year: '2024',
      title: 'Kompetisi Sains Ruangguru & Fakultas MIPA UI',
      level: 'Nasional',
      organizer: 'Fakultas Matematika dan Ilmu Pengetahuan Alam UI',
      placement: 'Juara Harapan 1',
      certificateNumber: 'FMIPA-UI/KSR/2024/0328',
      description:
        'Menyelesaikan uji kemampuan analitis bidang Matematika dan Fisika Terapan di antara 1.400 peserta tingkat SMA se-Indonesia.',
    },
    {
      id: 'ach-5',
      year: '2024',
      title: 'Festival Inovasi dan Kewirausahaan Siswa Indonesia (FIKSI)',
      level: 'Provinsi',
      organizer: 'Suku Dinas Pendidikan Jakarta Pusat',
      placement: 'Juara 2 Kategori Teknologi Terapan',
      certificateNumber: 'SUDIN-JP/FIKSI/2024/064',
      description:
        'Mengembangkan rancangan perangkat lunak katalogisasi perpustakaan sekolah berbasis web ringan untuk sekolah mitra.',
    },
    {
      id: 'ach-6',
      year: '2023',
      title: 'Olimpiade Matematika Tingkat Kota Administrasi',
      level: 'Kota/Kabupaten',
      organizer: 'Musyawarah Guru Mata Pelajaran Matematika DKI Jakarta',
      placement: 'Juara 1',
      certificateNumber: 'MGMP-MAT/2023/019',
      description:
        'Memperoleh nilai tertinggi pada uji pembuktian kombinatorika dan teori bilangan tingkat kelas X–XI.',
    },
  ],
  grades: [
    {
      id: 'grd-math-p',
      subject: 'Matematika Peminatan',
      category: 'Kelompok Peminatan MIPA',
      averageScore: 96.4,
      predicate: 'Sangat Baik (A)',
      semesterRange: 'Sem. 1–5',
    },
    {
      id: 'grd-inf',
      subject: 'Informatika & Algoritma',
      category: 'Muatan Pilihan Terapan',
      averageScore: 97.2,
      predicate: 'Sangat Baik (A)',
      semesterRange: 'Sem. 1–5',
    },
    {
      id: 'grd-phys',
      subject: 'Fisika',
      category: 'Kelompok Peminatan MIPA',
      averageScore: 95.0,
      predicate: 'Sangat Baik (A)',
      semesterRange: 'Sem. 1–5',
    },
    {
      id: 'grd-chem',
      subject: 'Kimia',
      category: 'Kelompok Peminatan MIPA',
      averageScore: 93.8,
      predicate: 'Sangat Baik (A)',
      semesterRange: 'Sem. 1–5',
    },
    {
      id: 'grd-eng',
      subject: 'Bahasa Inggris',
      category: 'Kelompok Wajib',
      averageScore: 95.6,
      predicate: 'Sangat Baik (A)',
      semesterRange: 'Sem. 1–5',
    },
    {
      id: 'grd-idn',
      subject: 'Bahasa Indonesia',
      category: 'Kelompok Wajib',
      averageScore: 93.4,
      predicate: 'Sangat Baik (A)',
      semesterRange: 'Sem. 1–5',
    },
  ],
  organizations: [
    {
      id: 'org-1',
      role: 'Ketua Umum',
      organization: 'Kelompok Ilmiah Remaja (KIR) SMA Negeri 1 Jakarta',
      period: '2024 – 2025',
      mandate:
        'Membina 48 anggota aktif dalam penyusunan metodologi penelitian ilmiah, menyelenggarakan klinik penulisan karya tulis mingguan, serta mengawal pengiriman 11 tim ke kompetisi riset tingkat provinsi dan nasional.',
    },
    {
      id: 'org-2',
      role: 'Wakil Ketua II Bidang Penalaran & Akademik',
      organization: 'Organisasi Siswa Intra Sekolah (OSIS)',
      period: '2023 – 2024',
      mandate:
        'Mengkoordinasikan program bimbingan sebaya persiapan olimpiade bagi siswa kelas X, mengelola buletin akademik semesteran, dan memfasilitasi penyelenggaraan Simposium Ilmiah Pelajar 2024.',
    },
    {
      id: 'org-3',
      role: 'Koordinator Divisi Pemrograman',
      organization: 'Klub Olimpiade Sains Sekolah',
      period: '2023 – 2025',
      mandate:
        'Menyusun modul latihan struktur data dan pemecahan masalah berbasis C++ dan Python untuk 22 siswa peserta seleksi olimpiade tingkat kota.',
    },
  ],
  endorsements: [
    {
      id: 'end-1',
      quote:
        'Raka menunjukkan kedisiplinan akademik yang konsisten sepanjang lima semester. Kemampuannya menjembatani ketekunan riset laboratorium dengan kepemimpinan organisasi siswa menjadikannya teladan positif di lingkungan sekolah.',
      authorName: 'Dra. Sri Wahyuni, M.Pd.',
      authorRole: 'Kepala Sekolah',
      institution: 'SMA Negeri 1 Jakarta',
      dateIssued: 'November 2025',
    },
    {
      id: 'end-2',
      quote:
        'Selama membimbing Raka di Kelompok Ilmiah Remaja, saya menyaksikan ketelitiannya dalam menguji hipotesis secara empiris. Ia tidak hanya merancang perangkat keras dengan baik, tetapi juga mampu mempertanggungjawabkan datanya secara sistematis di hadapan penguji.',
      authorName: 'Hendra Kusuma, S.Si., M.Sc.',
      authorRole: 'Guru Pembina Karya Ilmiah Remaja',
      institution: 'SMA Negeri 1 Jakarta',
      dateIssued: 'Oktober 2025',
    },
  ],
};
