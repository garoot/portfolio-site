import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import s from '../styles/nav.module.css';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

// Below this the bar sits full-size over the hero; past it, it compacts.
const COMPACT_AT = 72;
// Auto-hide never engages inside the hero.
const HIDE_AFTER = 160;
// Ignore sub-pixel scroll jitter.
const DELTA = 6;

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function Nav() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);

  const lastY = useRef(0);
  const panelRef = useRef(null);
  const toggleRef = useRef(null);

  /* Active section tracking */
  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
      );
      o.observe(el);
      return o;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  /* Compact + auto-hide.
     Scrolling down gets the bar out of the way; scrolling up brings it back. */
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        setCompact(y > COMPACT_AT);

        if (open || y < HIDE_AFTER) {
          setHidden(false);
        } else if (delta > DELTA) {
          setHidden(true);
        } else if (delta < -DELTA) {
          setHidden(false);
        }

        lastY.current = y;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  /* Smooth scroll, honouring reduced motion */
  const go = useCallback((e, id) => {
    e.preventDefault();
    setOpen(false);
    setHidden(false);

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    });

    // Move focus so keyboard users land in the section they chose.
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }, []);

  /* Mobile menu: escape to close, focus trap, restore focus */
  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== 'Tab') return;
      const items = panelRef.current?.querySelectorAll('a, button');
      if (!items || items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector('a, button')?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const wrapCls = [
    s.wrap,
    compact ? s.compact : '',
    hidden ? s.hidden : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={wrapCls} data-hidden={hidden ? 'true' : 'false'}>
      <nav className={s.pill} aria-label="Primary">
        <a className={s.brand} href="#top" onClick={(e) => go(e, 'top')}>
          <span className={s.mark} aria-hidden="true">
            AG
          </span>
          <span className={s.brandName}>Abdulmajeed Garoot</span>
        </a>

        <ul className={s.links}>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                className={active === id ? s.active : undefined}
                aria-current={active === id ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a className={s.cta} href="mailto:majeed@garoot.ai">
          Let&rsquo;s Talk
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={s.burger}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        className={`${s.panel} ${open ? s.panelOpen : ''}`}
        hidden={!open}
      >
        <ul>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                className={active === id ? s.active : undefined}
                aria-current={active === id ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a className={s.panelCta} href="mailto:majeed@garoot.ai">
          Let&rsquo;s Talk
        </a>
      </div>
    </header>
  );
}
