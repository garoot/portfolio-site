// Professional experience is the single source used by the recruiter-facing
// Experience section and, when needed, the optional chronological journey.

export const EXPERIENCE_ITEMS = [
  {
    id: 'mouja',
    title: 'AI Systems Engineer',
    org: 'Mouja.ai — AI Growth Intelligence for Saudi E-commerce',
    start: { month: 7, year: 2026 },
    end: null,
    status: 'CURRENT',
    link: 'https://mouja.ai/',
    linkLabel: 'mouja.ai',
    scope:
      'Building an AI-native growth intelligence platform for Saudi e-commerce.',
    highlights: [
      'Engineered a two-agent workflow for merchant profiling and Saudi UGC opportunity analysis.',
      'Implemented nine v1 ingestion API operations with authenticated, idempotent mutations, validation controls, and 799 passing unit tests.',
    ],
    technologies:
      'Agentic AI · REST APIs · Validation · Security controls · Production reliability',
  },
  {
    id: 'learnshift',
    title: 'AI / Software Engineer',
    org: 'LearnShift — AI-Enabled Learning Platform',
    start: { month: 7, year: 2025 },
    end: null,
    status: 'CURRENT',
    scope:
      'Building and operating an AI-enabled learning platform with contextual tutor interactions.',
    highlights: [
      'Designed context-aware retrieval workflows using learner progress and course-content state.',
      'Built backend APIs, RAG services, and automated deployments spanning courses, users, playback, and AI tutor workflows.',
    ],
    technologies: 'RAG · REST APIs · Embeddings · LLM workflows · Vercel · Render',
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    org: 'Human Managed',
    location: 'Remote — Singapore',
    start: { month: 10, year: 2024 },
    end: { month: 2, year: 2025 },
    scope:
      'Translated business and IT requirements into production-ready AI solutions with stakeholders.',
    highlights: [
      'Designed backend services, RAG pipelines, context management, structured prompting, and REST API integrations.',
      'Improved production resiliency through validation, observability, structured logging, and traceability.',
    ],
    technologies: 'AI workflows · RAG · REST APIs · Observability · Traceability',
  },
  {
    id: 'codecamp-ta',
    title: 'Teaching Assistant',
    org: 'CodeCamp',
    location: 'Melbourne, Australia',
    start: { month: 1, year: 2022 },
    end: { month: 12, year: 2022 },
    scope: 'Supported programming instruction in a part-time teaching role.',
    highlights: [],
  },
  {
    id: 'freelance',
    title: 'Freelance',
    org: 'Freelance (Self-employed)',
    location: 'Remote',
    start: { month: 5, year: 2019 },
    end: { month: 3, year: 2023 },
    scope:
      'Delivered web development, digital product, and technology consulting engagements for individuals, startups, and businesses.',
    highlights: [
      'Owned delivery from client requirements and technology selection through solution architecture, full-stack implementation, deployment, and support.',
      'Built and operated HackerGee, attracting 3,500+ course registrations and developing a professional network that led to client delivery and startup consulting opportunities.',
    ],
    technologies:
      'React · Django · Express.js · SQL · REST APIs · Docker · CI/CD',
  },
  {
    id: 'amer-hotel',
    title: 'Purchasing Representative / Digital Sales Support',
    org: 'Amer Alshahrani Hotel',
    start: { month: 12, year: 2018 },
    end: { month: 2, year: 2020 },
    scope:
      'Supported purchasing and customer operations while introducing the company’s first online presence.',
    highlights: [
      'Enabled online inquiries for a previously paper-based business and coordinated customer requests, pricing, availability, and bookings.',
      'Supported purchasing requirements, supplier communication, and quotations.',
    ],
  },
];
