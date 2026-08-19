import React, { useState } from 'react';
import { Share2, Sparkles, Braces, ShieldCheck } from 'lucide-react';
import { SectionLabel, IconTile } from './ui/Primitives';
import { SKILL_GROUPS } from './data/skills';
import s from '../styles/skills.module.css';

const ICONS = {
  share: Share2,
  sparkle: Sparkles,
  braces: Braces,
  shield: ShieldCheck,
};

export default function Skills() {
  const [open, setOpen] = useState(0);

  return (
    <section id="skills" className={s.section} aria-labelledby="skills-title">
      <SectionLabel>Skills</SectionLabel>

      <h2 id="skills-title" className={s.title}>
        Four capability domains
      </h2>
      <p className={s.lead}>
        Architecture, AI engineering, production systems, and governance
        foundations—organized around how reliable solutions are delivered.
      </p>

      <div className={s.rows}>
        {SKILL_GROUPS.map((g, i) => {
          const Icon = ICONS[g.icon] || Braces;
          const expanded = open === i;
          const panelId = `skill-panel-${g.id}`;
          const btnId = `skill-btn-${g.id}`;

          return (
            <div key={g.id} className={s.row}>
              <h3 className={s.rowHeading}>
                <button
                  id={btnId}
                  type="button"
                  className={s.trigger}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? -1 : i)}
                >
                  <span className={s.num}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <IconTile tone={g.accent ? 'accent' : 'neutral'} size="lg">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </IconTile>

                  <span className={s.text}>
                    <span className={s.name}>{g.label}</span>
                    <span className={s.blurb}>{g.blurb}</span>
                  </span>

                  <span className={s.chev} aria-hidden="true">
                    {expanded ? '−' : '+'}
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={s.panel}
                hidden={!expanded}
              >
                <ul className={s.items}>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
