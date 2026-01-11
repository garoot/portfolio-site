'use client';

import React, { useEffect, useState } from 'react';

export default function TypewriterText({
  text,
  speed = 14,
  cursorClass = '',
  cursorBlinkClass = '',
}) {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i < text.length) {
        setVisibleText((prev) => prev + text.charAt(i));
        i += 1;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {visibleText}
      <span className={`${cursorClass} ${cursorBlinkClass}`}>▍</span>
    </span>
  );
}
