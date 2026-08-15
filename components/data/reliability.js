// data/reliability.js
//
// Six proof cards plus the single dark evidence tile.
// Every figure here is already stated in the Mouja.ai project lenses —
// nothing is extrapolated.

export const PROOF_CARDS = [
  {
    id: 'validation',
    icon: 'check',
    title: 'Validation & Safeguards',
    body: 'Response checks, structured prompting, and invalid output blocked before persistence.',
  },
  {
    id: 'observability',
    icon: 'activity',
    title: 'Observability & Traceability',
    body: 'Structured logging and traceability built into production AI services.',
  },
  {
    id: 'resiliency',
    icon: 'refresh',
    title: 'Resiliency & Failure Recovery',
    body: 'Retries and fallback handling across AI workflows and integrations.',
  },
  {
    id: 'security',
    icon: 'shield',
    title: 'Security Controls',
    body: 'Bounded extraction with 31 passing SSRF and URL-security tests.',
  },
  {
    id: 'cost',
    icon: 'cost',
    title: 'Cost Awareness',
    body: 'Cost optimization in backend work; $0.09 validated per staging profile.',
  },
  {
    id: 'risk',
    icon: 'scale',
    title: 'Risk & Governance',
    body: 'CRMO earned (Apr 2026). Responsible AI governance — developing; AIGP in preparation.',
  },
];

export const EVIDENCE_TILE = {
  label: 'VERIFIED IN STAGING — MOUJA.AI',
  headlineTime: '48.2s',
  headlineCost: '$0.09',
  subject: 'one live Arabic merchant profile',
  lines: [
    { text: '799 unit tests passing' },
    { text: '31 SSRF & URL-security tests passing' },
    { text: '4 authenticated idempotent mutations' },
    { text: 'invalid output blocked before persistence', marker: true },
  ],
};
