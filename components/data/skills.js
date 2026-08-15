// data/skills.js
// Four capability domains, exactly as they appear on the CV.

export const SKILL_GROUPS = [
  {
    id: 'solution',
    icon: 'share',
    label: 'Solution Engineering & Cloud Architecture',
    blurb:
      'Solution architecture, requirements analysis, and end-to-end ownership of distributed systems.',
    items: [
      'Solution Architecture',
      'Requirements Analysis',
      'Cloud Architecture',
      'API Integration',
      'Distributed Systems',
      'Resiliency',
      'End-to-End System Ownership',
      'Tradeoff & Failure Analysis',
    ],
  },
  {
    id: 'ai',
    icon: 'sparkle',
    label: 'AI Engineering',
    blurb: 'Agentic AI, LLM applications, RAG, and model orchestration.',
    items: [
      'Agentic AI',
      'LLM Applications',
      'Multi-Agent Systems',
      'RAG',
      'Embeddings',
      'Model Orchestration',
      'Structured Outputs',
    ],
  },
  {
    id: 'backend',
    icon: 'braces',
    label: 'Backend & Production',
    blurb:
      'Python and Node.js REST APIs, event-driven systems, and cost optimization.',
    items: [
      'Python',
      'Node.js',
      'REST APIs',
      'Authentication',
      'Event-Driven Systems',
      'Concurrency',
      'Idempotency',
      'Cost Optimization',
    ],
  },
  {
    id: 'reliability',
    icon: 'shield',
    accent: true,
    label: 'AI Reliability, Risk & Governance',
    blurb:
      'Validation, observability, failure recovery, and operational risk management.',
    items: [
      'Output Validation & Safeguards',
      'Observability & Traceability',
      'Structured Logging',
      'Retries & Failure Recovery',
      'Security Controls',
      'Operational Risk Management',
      'Auditability',
      'Responsible AI Governance — Developing',
    ],
  },
];
