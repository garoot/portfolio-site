import React from 'react';
import {
  Check,
  Activity,
  RefreshCw,
  ShieldCheck,
  DollarSign,
  Scale,
} from 'lucide-react';
import { SectionLabel, IconTile } from './ui/Primitives';
import { PROOF_CARDS, EVIDENCE_TILE } from './data/reliability';
import s from '../styles/reliability.module.css';

const ICONS = {
  check: Check,
  activity: Activity,
  refresh: RefreshCw,
  shield: ShieldCheck,
  cost: DollarSign,
  scale: Scale,
};

export default function Reliability() {
  return (
    <section
      className={s.section}
      aria-labelledby="reliability-title"
    >
      <SectionLabel>Reliability &amp; Evidence</SectionLabel>

      <h2 id="reliability-title" className={s.heading}>
        How the systems behave
      </h2>
      <p className={s.lead}>
        Validation, observability, recovery, security, cost, and risk — each
        backed by shipped work, not claims.
      </p>

      <div className={s.layout}>
        <ul className={s.cards}>
          {PROOF_CARDS.map((p) => {
            const Icon = ICONS[p.icon] || Check;
            return (
              <li key={p.id} className={s.card}>
                <IconTile>
                  <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                </IconTile>
                <h3 className={s.cardTitle}>{p.title}</h3>
                <p className={s.cardBody}>{p.body}</p>
              </li>
            );
          })}
        </ul>

        <aside className={s.tile} aria-label="Verified staging evidence">
          <span className={s.tileLabel}>{EVIDENCE_TILE.label}</span>

          <p className={s.figure}>
            {EVIDENCE_TILE.headlineTime} ·{' '}
            <span className={s.cost}>{EVIDENCE_TILE.headlineCost}</span>
          </p>
          <p className={s.subject}>{EVIDENCE_TILE.subject}</p>

          <ul className={s.lines}>
            {EVIDENCE_TILE.lines.map((l) => (
              <li key={l.text} className={l.marker ? s.lineDim : undefined}>
                {l.marker ? (
                  <span className={s.marker} aria-hidden="true" />
                ) : null}
                {l.text}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
