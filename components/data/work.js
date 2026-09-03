// data/work.js
//
// Selected systems + Beyond Systems. Facts, metrics, and links are preserved;
// project lenses are ordered to support recruiter-first scanning.

export const WORK_PROJECTS = [
  {
    id: 'learnshift',
    title: 'LearnShift',
    tagline: 'AI-enabled learning platform with contextual tutor responses',
    period: '07/2025 – Present',
    status: 'LIVE',
    video: '/learnshift-preview.mp4',
    image: '/learnshift_homepage2.png',
    imageAlt: 'LearnShift homepage — AI-enabled learning platform',
    lenses: [
      {
        k: 'PRODUCT',
        primary: true,
        t: 'Built LearnShift.io after running Hackergee, whose online course drew 3,500+ registrations. The platform combines course delivery, learner progress, playback, and contextual AI tutoring.',
      },
      {
        k: 'OWNERSHIP',
        primary: true,
        t: 'Owned backend AI services and REST APIs for courses, users, playback, embeddings, retrieval, and LLM workflows.',
      },
      {
        k: 'ARCHITECTURE',
        primary: true,
        t: 'Designed retrieval around learner progress and course state to keep AI responses grounded in selected material.',
      },
      {
        k: 'RELIABILITY',
        t: 'Used structured prompts, response checks, retries, and fallbacks to improve consistency.',
      },
      {
        k: 'DEPLOYMENT',
        t: 'Automated GitHub-based deployments through Vercel and Render.',
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
    tagline: 'AI Growth Intelligence for Saudi E-commerce',
    period: '07/2026 – Present',
    status: 'LIVE',
    logo: '/mouja-pixel-media-logo.svg',
    video: '/mouja-preview.mp4',
    // Static fallback for loading failures and reduced-motion preferences.
    image: '/rokn_homepage.png',
    imageAlt: 'Legacy Rokn.ai homepage capture',
    imageNotice: 'LEGACY ROKN.AI INTERFACE',
    lenses: [
      {
        k: 'PRODUCT',
        primary: true,
        t: 'An AI-native growth intelligence platform for Saudi e-commerce.',
      },
      {
        k: 'OWNERSHIP',
        primary: true,
        t: 'Engineered a two-agent workflow for Salla merchant profiling and Saudi UGC opportunity analysis.',
      },
      {
        k: 'VALIDATION',
        primary: true,
        t: 'Validated one live Arabic profile in staging at 48.2 seconds and $0.09, blocking invalid output before persistence.',
      },
      {
        k: 'SECURITY',
        t: 'Tested bounded Salla extraction on five public storefronts, backed by 31 passing SSRF and URL-security tests.',
      },
      {
        k: 'API',
        t: 'Implemented all nine v1 ingestion API operations, including four authenticated idempotent mutations, validated by 799 passing unit tests.',
      },
    ],
    highlight: {
      prefix: 'Validated by',
      figure: '799',
      suffix: 'passing unit tests',
    },
    actions: [
      { label: 'mouja.ai', href: 'https://mouja.ai/', variant: 'dark' },
      { label: 'Repository — Private', variant: 'disabled' },
    ],
  },

  {
    id: 'rokn',
    title: 'Rokn.ai',
    tagline:
      'AI product builder turning ideas into scoped, buildable software',
    period: 'PRODUCT R&D · PAUSED',
    status: 'PAUSED',
    statusTone: 'paused',
    video: '/rokn-preview.mp4',
    image: '/rokn_homepage.png',
    imageAlt: 'Rokn.ai product-building interface',
    lenses: [
      {
        k: 'PRODUCT',
        primary: true,
        t: 'Built an AI product-creation system that turns rough ideas into scoped plans, architecture, and implementation-ready outputs.',
      },
      {
        k: 'OWNERSHIP',
        primary: true,
        t: 'Owned idea intake, scope clarification, structured generation, editing, and build orchestration.',
      },
      {
        k: 'ARCHITECTURE',
        primary: true,
        t: 'Designed a pipeline from user intent through product definition, complexity assessment, and implementation output.',
      },
      {
        k: 'RELIABILITY',
        t: 'Added structured prompts, validation, retries, and workflow controls to stabilize generation.',
      },
      {
        k: 'DELIVERY',
        t: 'Iterated as a web product to test and refine the generation workflow.',
      },
    ],
    highlight: {
      prefix: 'Core flow:',
      figure: 'idea → scope → architecture → build',
      suffix: '',
    },
    actions: [],
  },
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
