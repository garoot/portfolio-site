import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SectionLabel } from './ui/Primitives';
import s from '../styles/about.module.css';

export default function About() {
  return (
    <section id="about" className={s.about} aria-labelledby="about-title">
      <div className={s.grid}>
        <div>
          <SectionLabel>About</SectionLabel>

          <h2 id="about-title" className={s.title}>
            AI Systems Engineer translating business and technical requirements
            into reliable AI and cloud-native solutions.
          </h2>

          <p className={s.body}>
            I work across stakeholder-facing solution design, AI engineering,
            cloud and backend systems, and the production controls needed to
            deliver technology reliably.
          </p>

          <a className={s.jump} href="#work">
            See the systems behind the work
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>

        <ol className={s.principles} aria-label="Solution delivery approach">
          <li>
            <span className={s.num}>01</span>
            <span>
              <strong>Understand the problem</strong>
              <span>Clarify business and technical requirements with stakeholders.</span>
            </span>
          </li>
          <li>
            <span className={s.num}>02</span>
            <span>
              <strong>Architect the solution</strong>
              <span>Select the approach, integrations, controls, and delivery path.</span>
            </span>
          </li>
          <li>
            <span className={s.num}>03</span>
            <span>
              <strong>Own reliable delivery</strong>
              <span>Build, validate, deploy, observe, and improve the system.</span>
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}
