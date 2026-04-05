import { useEffect, useRef, useState } from 'react';

export default function useRevealOnView(options = {}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const savedOptions = useRef(options);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, ...savedOptions.current }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, revealed];
}
