// data/credentials.js
//
// The About summary. Four categories sharing the Timeline taxonomy.
// Training is deliberately a compact roll-up — full dates and descriptions
// live in the Timeline.

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
    label: 'PROFESSIONAL TRAINING',
    category: 'TRAINING',
    rows: [
      {
        title: '3 programs',
        sub: 'Tuwaiq Academy · MISK Launchpad 8.0 · Coding Dojo',
        sub2: 'Dates and details in the Timeline ↓',
        status: 'TRAINING',
      },
    ],
  },
  {
    id: 'pursuing',
    label: 'CURRENTLY PURSUING',
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
