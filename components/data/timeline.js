// data/timeline.js
//
// Secondary full-journey data. Professional experience is sourced from
// experience.js so role content is not duplicated across data files.
// Taxonomy retained by the optional Timeline component:
// EXPERIENCE · EDUCATION · CERTIFICATION · TRAINING · PREP

import { EXPERIENCE_ITEMS } from './experience';

const JOURNEY_ITEMS = [
  {
    id: 'bsc',
    type: 'education',
    category: 'EDUCATION',
    title: 'Bachelor of Computer Science',
    org: 'University of Victoria',
    start: { month: 1, year: 2013 },
    end: { month: 5, year: 2019 },
    description:
      'Computer science foundation covering algorithms, databases, software design, and systems analysis.',
  },

  {
    id: 'codingdojo',
    type: 'education',
    category: 'TRAINING',
    title: 'Full-stack Web Development Bootcamp',
    org: 'CodingDojo',
    start: { month: 5, year: 2021 },
    end: { month: 7, year: 2021 },
    description:
      'Practical full-stack training covering frontend, backend, databases, APIs, and deployment basics.',
  },

  {
    id: 'msc',
    type: 'education',
    category: 'EDUCATION',
    title: 'Master of Data Science (Professional)',
    org: 'Deakin University',
    location: 'Melbourne, Australia',
    start: { month: 3, year: 2023 },
    end: { month: 9, year: 2025 },
    description:
      'Applied data science and machine learning with focus on software engineering, AI engineering, and real-world systems. GPA equivalent: 3.75/4.00.',
  },

  {
    id: 'azure-ai900',
    type: 'education',
    category: 'CERTIFICATION',
    status: 'EARNED',
    title: 'Azure AI-900 Certification',
    org: 'Microsoft',
    start: { month: 5, year: 2024 },
    end: { month: 5, year: 2024 },
    description:
      'Azure AI Fundamentals certification covering core AI concepts, Azure AI services, and responsible AI basics.',
  },

  {
    id: 'misk-launchpad',
    type: 'education',
    category: 'TRAINING',
    title: 'MISK Launchpad 8.0',
    org: 'MISK & 2080 Ventures',
    start: { month: 7, year: 2025 },
    end: { month: 9, year: 2025 },
    description:
      'Professional development program covering product execution, technical planning, and structured project delivery.',
  },

  {
    id: 'crmo',
    type: 'education',
    category: 'CERTIFICATION',
    status: 'EARNED',
    title: 'CRMO – Certified Risk Management Officer',
    org: 'CRMO',
    start: { month: 4, year: 2026 },
    end: { month: 4, year: 2026 },
    description:
      'Risk management certification supporting practical awareness of controls, operational risk, and reliability in technology environments.',
  },

  {
    id: 'tuwaiq',
    type: 'education',
    category: 'PREP',
    status: 'IN PROGRESS',
    title: 'Modern Software Engineering & AI Systems Bootcamp',
    org: 'Tuwaiq Academy',
    start: { month: 7, year: 2026 },
    end: null,
    description:
      'Intensive program covering modern software engineering practice and applied AI systems. Expected completion: 09/2026.',
  },
];

export const TIMELINE_ITEMS = [
  ...JOURNEY_ITEMS,
  ...EXPERIENCE_ITEMS.map((item) => ({
    ...item,
    type: 'experience',
    category: 'EXPERIENCE',
  })),
];
