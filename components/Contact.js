import React from 'react';
import { Mail, Download, ArrowUpRight } from 'lucide-react';
import { SectionLabel, Button } from './ui/Primitives';
import s from '../styles/contact.module.css';

export default function Contact() {
  return (
    <>
      <section id="contact" className={s.section} aria-labelledby="contact-title">
        <SectionLabel>Contact</SectionLabel>

        <h2 id="contact-title" className={s.heading}>
          Open to solution engineering and AI systems work.
        </h2>

        <p className={s.who}>Abdulmajeed Garoot · Riyadh, Saudi Arabia</p>

        <div className={s.actions}>
          <Button href="mailto:majeed@garoot.ai" variant="dark">
            <Mail size={16} aria-hidden="true" />
            majeed@garoot.ai
          </Button>

          <Button
            href="https://linkedin.com/in/abdulmajeed-garoot"
            variant="light"
          >
            LinkedIn
            <ArrowUpRight size={15} aria-hidden="true" />
          </Button>

          <Button href="https://github.com/garoot" variant="light">
            GitHub
            <ArrowUpRight size={15} aria-hidden="true" />
          </Button>

          <Button href="/Abdulmajeed_Garoot_CV.pdf" variant="light">
            <Download size={15} aria-hidden="true" />
            Download CV
          </Button>
        </div>

        <p className={s.meta}>
          garoot.ai · Arabic — Native · English — Professional proficiency
          (IELTS Academic 6.5) · Saudi National ·{' '}
          <a className={s.tel} href="tel:+966599123218">
            +966 59 912 3218
          </a>
        </p>

      </section>

      <footer className={s.footer}>
        <span>© 2026 Abdulmajeed Garoot</span>
        <span className={s.footerMeta}>Riyadh, Saudi Arabia</span>
      </footer>
    </>
  );
}
