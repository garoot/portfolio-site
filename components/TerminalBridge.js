import React, { useEffect, useState } from 'react';
import s from '../styles/terminal.module.css';

const PROMPT = 'majeed@portfolio:~$';
const COMMAND = ' I like ideas better when they’re real.';

export default function TerminalBridge() {
  // Renders complete by default. The typing pass runs once per mount, and
  // only when motion is welcome — it never loops.
  const [typed, setTyped] = useState(COMMAND);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setTyped(COMMAND);
      return undefined;
    }

    let i = 0;
    setTyped('');
    const id = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) clearInterval(id);
    }, 42);

    // Restore the full command if we unmount mid-type.
    return () => {
      clearInterval(id);
      setTyped(COMMAND);
    };
  }, []);

  return (
    <div className={s.wrap}>
      <div className={s.window}>
        <div className={s.bar}>
          <span className={s.dot} aria-hidden="true" />
          <span className={s.dot} aria-hidden="true" />
          <span className={s.dot} aria-hidden="true" />
          <span className={s.barTitle}>majeed@garoot.ai — ~/principles</span>
          <span className={s.state} aria-hidden="true" />
        </div>

        <div className={s.body}>
          {/* Full text is always present for assistive technology. */}
          <span className="srOnly">{`${PROMPT}${COMMAND}`}</span>

          <div aria-hidden="true">
            <div>
              <span className={s.prompt}>{PROMPT}</span>
              <span className={s.cmd}>{typed}</span>{' '}
              <span className={s.cursor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
