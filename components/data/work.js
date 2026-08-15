// data/work.js
//
// Selected systems + Beyond Systems. All facts, metrics and links are
// carried over verbatim; nothing here is estimated.

export const WORK_PROJECTS = [
  {
    id: 'learnshift',
    title: 'LearnShift',
    tagline: 'AI-enabled learning platform with contextual tutor responses',
    period: '07/2025 – Present',
    status: 'LIVE',
    image: '/learnshift_homepage2.png',
    imageAlt: 'LearnShift homepage — AI-enabled learning platform',
    lenses: [
      {
        k: 'OVERVIEW',
        t: 'Built LearnShift.io after operating Hackergee, whose online course attracted 3,500+ registrations. The platform supports course content, user progress, course playback, and AI tutor interactions.',
      },
      {
        k: 'ARCHITECTURE',
        t: 'Designed context-aware retrieval architecture using learner progress and content state, so AI responses stay closer to the selected course material.',
      },
      {
        k: 'BACKEND',
        t: 'Developed backend AI services and REST APIs for embeddings, retrieval, and LLM workflows, covering courses, users, course playback, and AI tutor interactions.',
      },
      {
        k: 'RELIABILITY',
        t: 'Used prompt structure, response checks, retries, and fallback handling to improve consistency across AI interactions.',
      },
      {
        k: 'DEPLOYMENT',
        t: 'Set up automated deployments from GitHub branches using Vercel and Render.',
      },
    ],
    highlight: {
      prefix: 'Hackergee course:',
      figure: '3,500+',
      suffix: 'registrations',
    },
    actions: [
      { label: 'Live Site', href: 'https://learnshift.io/', variant: 'dark' },
      {
        label: 'GitHub',
        href: 'https://github.com/garoot/LearnShift-for-everyone',
        variant: 'light',
      },
    ],
  },

  {
    id: 'mouja',
    title: 'Mouja.ai',
    tagline: 'AI Growth Intelligence for Saudi E-commerce — formerly Rokn.ai',
    period: '07/2026 – Present',
    status: 'LIVE',
    // Truthfully labelled: this is the pre-rebrand capture.
    image: '/rokn_homepage.png',
    imageAlt: 'Legacy Rokn.ai homepage capture',
    imageNotice: 'LEGACY ROKN.AI CAPTURE — Mouja.ai screenshot pending',
    lenses: [
      {
        k: 'OVERVIEW',
        t: 'An AI-native growth intelligence platform for Saudi e-commerce.',
      },
      {
        k: 'AI WORKFLOW',
        t: 'Engineered a two-agent workflow for Salla merchant profiling and Saudi UGC opportunity analysis.',
      },
      {
        k: 'SECURITY',
        t: 'Tested bounded Salla extraction on five public storefronts, backed by 31 passing SSRF and URL-security tests.',
      },
      {
        k: 'VALIDATION',
        t: 'Validated one live Arabic profile in staging at 48.2 seconds and $0.09, blocking invalid output before persistence.',
      },
      {
        k: 'API',
        t: 'Implemented all nine v1 ingestion API operations, including four authenticated idempotent mutations, validated by 799 passing unit tests.',
      },
    ],
    actions: [
      { label: 'mouja.ai', href: 'https://mouja.ai/', variant: 'dark' },
      { label: 'Repository — Private', variant: 'disabled' },
    ],
  },
];

// Compact evidence strip beneath the Mouja.ai case study.
export const MOUJA_EVIDENCE = [
  { t: '31 SSRF & URL-security tests' },
  { t: '799 unit tests', emphasis: true },
  { t: 'Invalid output blocked before persistence' },
  { t: '4 authenticated idempotent mutations' },
  { t: '48.2s / $0.09 staging validation' },
];

export const CREATIVE_WORKS = [
  {
    id: 'saudi-national-day-2022',
    featured: true,
    title: 'Saudi National Day 2022',
    year: '2022',
    format: 'PROMOTIONAL VIDEO',
    description:
      'Promotional video collaboration for Saudi students in Australia',
    image: '/creative/saudi-national-day-2022.webp',
    imageAlt: 'Saudi National Day 2022 — video still',
    href: 'https://vimeo.com/1160782851',
  },
  {
    id: 'django-explainer',
    title: 'How Django Works',
    year: '2021',
    format: 'MOTION DESIGN',
    description: 'Educational motion design explaining core Django concepts',
    image: '/creative/how-django-works.webp',
    imageAlt: 'How Django Works — video still',
    href: 'https://vimeo.com/1160782347',
  },
  {
    id: 'music-video-edit',
    title: 'Creative Video Edit',
    year: '2020',
    format: 'VIDEO EDIT',
    description:
      'Video editing project focused on narrative pacing and rhythm-driven cuts',
    image: '/creative/creative-video-edit.webp',
    imageAlt: 'Creative Video Edit — video still',
    href: 'https://vimeo.com/1160782663',
  },
];
