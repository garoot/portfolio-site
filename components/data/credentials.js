// data/credentials.js
//
// Supporting education, earned credentials, current development, and
// certifications in preparation. Professional roles live separately.

export const CREDENTIAL_GROUPS = [
  {
    id: 'education',
    label: 'EDUCATION',
    category: 'EDUCATION',
    rows: [
      {
        title: 'Master of Data Science (Professional)',
        sub: 'Deakin University · Melbourne, Australia · Sep 2025',
        sub2: 'GPA equivalent: 3.75/4.00',
      },
      {
        title: 'Bachelor of Computer Science',
        sub: 'University of Victoria (Canada) · 2019',
      },
    ],
  },
  {
    id: 'certifications',
    label: 'EARNED CERTIFICATIONS',
    category: 'CERTIFICATION',
    rows: [
      {
        title: 'Microsoft Azure AI-900 — Azure AI Fundamentals',
        sub: 'Microsoft Azure · May 2024',
        status: 'EARNED',
      },
      {
        title: 'Certified Risk Management Officer — CRMO',
        sub: 'Apr 2026',
        status: 'EARNED',
      },
    ],
  },
  {
    id: 'training',
    label: 'PROFESSIONAL DEVELOPMENT',
    category: 'TRAINING',
    rows: [
      {
        title: 'Modern Software Engineering & AI Systems Bootcamp',
        sub: 'Tuwaiq Academy · Jul–Sep 2026',
        status: 'IN PROGRESS',
      },
      {
        title: 'MISK Launchpad 8.0',
        sub: 'MISK & 2080 Ventures · Jul–Sep 2025',
        status: 'COMPLETED',
      },
      {
        title: 'Full-Stack Web Development Bootcamp',
        sub: 'Coding Dojo · May–Jul 2021',
        status: 'COMPLETED',
      },
    ],
  },
  {
    id: 'pursuing',
    label: 'CERTIFICATIONS IN PREPARATION',
    category: 'PREP',
    rows: [
      {
        title: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate',
        sub: 'Exam AI-103: Developing AI Apps and Agents on Azure',
        status: 'IN PREPARATION',
        href: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103',
      },
      {
        title: 'IAPP Artificial Intelligence Governance Professional (AIGP)',
        sub: 'iapp.org/certify/aigp',
        status: 'IN PREPARATION',
        href: 'https://iapp.org/certify/aigp',
      },
    ],
  },
];
