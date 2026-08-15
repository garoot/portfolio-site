// data/timeline.js
//
// Eleven milestones in chronological order. `category` drives the shared
// taxonomy used by both the About summary and the Timeline:
// EXPERIENCE · EDUCATION · CERTIFICATION · TRAINING · PREP

export const TIMELINE_ITEMS = [
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
    id: 'amer-hotel',
    type: 'experience',
    category: 'EXPERIENCE',
    title: 'Purchasing Representative / Digital Sales Support',
    org: 'Amer Alshahrani Hotel',
    start: { month: 12, year: 2018 },
    end: { month: 2, year: 2020 },
    description:
      'Built the company’s first digital presence across website, social media, and online sales channels while managing B2C/B2B inquiries, bookings, pricing, quotations, and digital operations.',
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
    id: 'ai-engineer',
    type: 'experience',
    category: 'EXPERIENCE',
    title: 'AI Systems Engineer',
    org: 'Human Managed',
    location: 'Remote — Singapore',
    start: { month: 10, year: 2024 },
    end: { month: 2, year: 2025 },
    description:
      'Translated business and IT requirements into production-ready AI solutions with stakeholders. Designed backend services for scalable AI workflows, context management, and structured prompting. Designed RAG pipelines covering data preparation, embeddings, retrieval, and response orchestration. Designed REST APIs integrating AI services, retrieval workflows, and external systems. Improved production resiliency through validation, observability, structured logging, and traceability.',
  },

  {
    id: 'learnshift',
    type: 'experience',
    category: 'EXPERIENCE',
    status: 'CURRENT',
    title: 'AI / Software Engineer',
    org: 'LearnShift – AI-Enabled Learning Platform',
    start: { month: 7, year: 2025 },
    end: null,
    description:
      'Built backend APIs, RAG workflows, contextual tutor responses, and automated deployments for an AI-enabled learning platform.',
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
    id: 'mouja',
    type: 'experience',
    category: 'EXPERIENCE',
    status: 'CURRENT',
    title: 'AI Systems Engineer',
    org: 'Mouja.ai — AI Growth Intelligence for Saudi E-commerce',
    link: 'https://mouja.ai/',
    linkLabel: 'mouja.ai',
    start: { month: 7, year: 2026 },
    end: null,
    description:
      'Building an AI-native growth intelligence platform for Saudi e-commerce, including a two-agent workflow for Salla merchant profiling and Saudi UGC opportunity analysis.',
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
