// ./data/work.js

export const LENSES = ['Overview', 'AI Workflow', 'Backend', 'Reliability', 'Deployment'];


export const WORK_PROJECTS = [
  {
    id: 'learnshift',
    title: 'LearnShift',
    tagline: 'AI-enabled learning platform with contextual tutor responses',
    image: '/learnshift_homepage2.png',
    links: {
      github: 'https://github.com/garoot/LearnShift-for-everyone',
      external: 'https://learnshift.io',
    },
    lenses: {
      Overview:
        'Built an AI-enabled learning platform that supports course content, user progress, course playback, and AI tutor interactions.',
      'AI Workflow':
        'Designed a RAG workflow tied to lesson and content state so AI responses stay closer to selected course material.',
      Backend:
        'Developed backend API structure for courses, users, course playback, and AI tutor interactions.',
      Reliability:
        'Used prompt structure, response checks, retries, and fallback handling to improve consistency across AI interactions.',
      Deployment:
        'Set up automated deployments from GitHub branches using Vercel and Render.',
    },
  },

  {
    id: 'rokn',
    title: 'Rokn',
    tagline: 'Multi-step LLM workflow system with validation and control checkpoints',
    image: '/rokn_homepage.png',
    links: {
      github: null,
      external: 'https://rokn.ai',
    },
    lenses: {
      Overview:
        'Built an AI system automation project focused on multi-step LLM workflows, state tracking, and controlled task execution.',
        'AI Workflow':
          'Designed a 5-role AI workflow model covering Product, Tech Lead, Engineering, UI/UX, and Operations.',
      Backend:
        'Worked on backend workflow structure for AI task routing, state management, and tool-based execution.',
      Reliability:
        'Added validation, retries, basic safeguards, and mitigation steps for unstable outputs, repeated actions, and workflow errors.',
      Deployment:
        'Connected project environments to GitHub-based deployment flows for easier staging and production updates.',
    },
  },

 
];

export const CREATIVE_WORKS = [
  {
    id: 'saudi-national-day-2022',
    type: 'video',
    title: 'Saudi National Day 2022',
    subtitle:
      'Promotional video collaboration for Saudi students in Australia',
    year: 2022,
    youtubeId: 'https://vimeo.com/1160782851?share=copy&fl=sv&fe=ci',
  },
  {
    id: 'django-explainer',
    type: 'video',
    title: 'How Django Works',
    subtitle:
      'Educational motion design explaining core Django concepts',
    year: 2021,
    youtubeId: 'https://vimeo.com/1160782347?share=copy&fl=sv&fe=ci',
  },
  {
    id: 'music-video-edit',
    type: 'video',
    title: 'Creative Video Edit',
    subtitle:
      'Video editing project focused on narrative pacing and rhythm-driven cuts',
    year: 2020,
    youtubeId: 'https://vimeo.com/1160782663?share=copy&fl=sv&fe=ci',
  },
];