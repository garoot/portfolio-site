// ./data/work.js

export const LENSES = ['Problem', 'Solution', 'Trade-offs', 'Failure Modes', 'Evolution'];

export const WORK_PROJECTS = [
  {
    id: 'learnshift',
    title: 'LearnShift',
    tagline: 'Human-in-the-Loop judgement training for AI-era technical work',
    image: '/learnshift_homepage.png',
    links: {
      github: null,
      external: 'https://learnshift.io',
    },
    lenses: {
      Problem:
        'AI tools accelerate output but erode junior judgement, accountability, and employability.',
      Solution:
        'Designed a decision-first learning system where AI proposes solutions and humans must accept, modify, or reject them with justification.',
      'Trade-offs':
        'Chose depth of judgement exercises over breadth of passive content to maximize real-world transfer.',
      'Failure Modes':
        'Early versions risked over-trusting AI suggestions without forcing explicit human reasoning.',
      Evolution:
        'Evolved into an AI-native system with constrained prompts, reflection loops, and job-like scenarios.',
    },
  },

  {
    id: 'malakphoto',
    title: 'MalakPhoto',
    tagline: 'Client-facing photo delivery system for professional photographers',
    image: '/malakphoto.png',
    links: {
      github: 'https://github.com/garoot/photography-system',
      external: null,
    },
    lenses: {
      Problem:
        'Photographers manually curate and deliver hundreds of images with poor client feedback loops.',
      Solution:
        'Built a guided blurred-preview selection flow that lets clients short-list before final export.',
      'Trade-offs':
        'Introduced more frontend state and UX complexity to eliminate manual back-and-forth.',
      'Failure Modes':
        'Designed uploads and selections to be resilient to partial failures and retries.',
      Evolution:
        'Architecture is ready for AI-assisted image ranking and preference learning.',
    },
  },
];

export const CREATIVE_WORKS = [
  {
    id: 'learnshift-pitch-deck-v3',
    type: 'pdf',
    title: 'LearnShift Pitch Deck (v3)',
    subtitle: 'Investor deck covering problem, solution, moat, market, and pricing',
    src: '/creative/LearnShift - Pitch Deck - v3.pdf',
    highlights: [
      'Problem: why AI-built products fail',
      'Solution / How it works: iterative build loop + transparency layer',
      'Moat / Defensibility: proprietary learning graph',
      'Target market: non-technical builders + founder-creators',
      'Revenue model: Free / Starter / Pro / Elite tiers',
      'Traction: early user signals + product demos',
    ],
  },
  
  {
    id: 'saudi-national-day-2022',
    type: 'video',
    title: 'Saudi National Day 2022',
    subtitle:
      'Promotional collaboration with Masiratna for Saudi students in Australia',
    year: 2022,
    youtubeId: 'https://vimeo.com/1160782851?share=copy&fl=sv&fe=ci',
  },
  {
    id: 'django-explainer',
    type: 'video',
    title: 'How Django Works',
    subtitle:
      'Educational motion design for a Django mini-course',
    year: 2021,
    youtubeId: 'https://vimeo.com/1160782347?share=copy&fl=sv&fe=ci',
  },
  {
    id: 'music-video-edit',
    type: 'video',
    title: 'Creative Video Edit – “Soul Searching”',
    subtitle:
      'Cinematic edit with narrative pacing and rhythm-driven cuts',
    year: 2020,
    youtubeId: 'https://vimeo.com/1160782663?share=copy&fl=sv&fe=ci',
  },
];
