import React from 'react';
import s from '../../styles/ui.module.css';

/* ─────────────────────────────────────────────
   SECTION LABEL — white pill + orange dot
───────────────────────────────────────────── */
export function SectionLabel({ children }) {
  return (
    <span className={s.sectionLabel}>
      <span className={s.labelDot} aria-hidden="true" />
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   BUTTONS
   `dark`  — primary tactile ink pill
   `light` — raised white pill
   `text`  — inline text link with arrow
───────────────────────────────────────────── */
export function Button({
  as = 'a',
  variant = 'dark',
  size = 'md',
  href,
  children,
  className = '',
  ...rest
}) {
  const Tag = as;
  const cls = [
    s.btn,
    variant === 'dark' ? s.btnDark : '',
    variant === 'light' ? s.btnLight : '',
    variant === 'text' ? s.btnText : '',
    variant === 'disabled' ? s.btnDisabled : '',
    size === 'sm' ? s.btnSm : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const external = typeof href === 'string' && /^https?:/.test(href);

  return (
    <Tag
      className={cls}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ─────────────────────────────────────────────
   STATUS CHIP
   Status is carried by text, never colour alone.
───────────────────────────────────────────── */
export function Chip({ tone = 'neutral', children, className = '' }) {
  return (
    <span className={`${s.chip} ${s[`chip_${tone}`] || ''} ${className}`}>
      <span className={s.chipDot} aria-hidden="true" />
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   ICON TILE — rounded square holding one outline icon
───────────────────────────────────────────── */
export function IconTile({ tone = 'neutral', size = 'md', children }) {
  return (
    <span
      className={`${s.tile} ${s[`tile_${tone}`] || ''} ${size === 'lg' ? s.tileLg : ''}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   SECTION HEADING BLOCK
───────────────────────────────────────────── */
export function SectionHead({ label, title, lead, id, children }) {
  return (
    <header className={s.head}>
      <SectionLabel>{label}</SectionLabel>
      <h2 id={id} className={s.h2}>
        {title}
      </h2>
      {lead ? <p className={s.lead}>{lead}</p> : null}
      {children}
    </header>
  );
}
