export type ProjectCategory =
  | 'Semua Karya'
  | 'Riset Ilmiah'
  | 'Teknologi & Rekayasa'
  | 'Kepemimpinan'
  | 'Literasi';

export type AchievementLevel = 'Semua Tingkat' | 'Nasional' | 'Provinsi' | 'Kota/Kabupaten';

export interface StudentProfile {
  fullName: string;
  shortName: string;
  nisn: string;
  schoolName: string;
  gradeClass: string;
  graduationYear: string;
  city: string;
  email: string;
  headline: string;
  executiveSummary: string;
  academicFocus: string;
  portraitUrl: string;
}

export interface AcademicMetric {
  id: string;
  value: string;
  label: string;
  detail: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Semua Karya'>;
  year: string;
  recognition: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
  featured?: boolean;
  background: string;
  methodology: string;
  outcomeMetric: string;
  supervisor: string;
  repositoryOrDocCode: string;
}

export interface AchievementRecord {
  id: string;
  year: string;
  title: string;
  level: Exclude<AchievementLevel, 'Semua Tingkat'>;
  organizer: string;
  placement: string;
  certificateNumber: string;
  description: string;
}

export interface SubjectGrade {
  id: string;
  subject: string;
  category: string;
  averageScore: number;
  predicate: string;
  semesterRange: string;
}

export interface OrganizationRole {
  id: string;
  role: string;
  organization: string;
  period: string;
  mandate: string;
}

export interface FacultyEndorsement {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  institution: string;
  dateIssued: string;
}

export interface PortfolioData {
  profile: StudentProfile;
  metrics: AcademicMetric[];
  projects: PortfolioProject[];
  achievements: AchievementRecord[];
  grades: SubjectGrade[];
  organizations: OrganizationRole[];
  endorsements: FacultyEndorsement[];
}
