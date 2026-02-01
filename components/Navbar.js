import styles from '../styles/navbar.module.css';
import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'bio', label: 'Bio' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
];

function clearHash() {
  const url = window.location.pathname + window.location.search;
  window.history.replaceState(null, '', url);
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  useEffect(() => {
    if (window.location.hash) clearHash();

    const observers = [];

    SECTIONS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          /* 
            Trigger when the section top crosses
            ~30% from the top of the viewport
          */
          rootMargin: '-30% 0px -70% 0px',
          threshold: 0,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);


  const handleNavClick = (e, id) => {
    e.preventDefault();
    if (window.location.hash) clearHash();

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      {/* Identity pill (top-left) */}
      <div
        className={styles.identity}
        onClick={(e) => handleNavClick(e, 'hero')}
      >
        <span className={styles.identityName}>Abdulmajeed Garoot</span>
        <span className={styles.identityRole}>AI Software Engineer</span>
      </div>

      {/* Center navbar */}
      <nav className={styles.navbar}>
        <ul className={styles.navbarContent}>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={activeSection === id ? styles.active : ''}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
