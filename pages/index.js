import React from 'react';
import Head from 'next/head';

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import TerminalBridge from '../components/TerminalBridge';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Creative from '../components/Creative';
import Reliability from '../components/Reliability';
import Contact from '../components/Contact';

import s from '../styles/page.module.css';

const SITE_URL = 'https://garoot.ai/';

const TITLE = 'Abdulmajeed Garoot — AI Systems Engineer';

const DESCRIPTION =
  'AI Systems Engineer in Riyadh designing production AI and cloud-native solutions across solution architecture, RAG, multi-agent systems, API integration, and reliability. Building Mouja.ai.';

const OG_DESCRIPTION =
  'Production AI and cloud-native systems spanning solution architecture, LLM orchestration, RAG, API integration, and reliability.';

const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdulmajeed Garoot',
  jobTitle: 'AI Systems Engineer',
  description: DESCRIPTION,
  url: SITE_URL,
  email: 'mailto:majeed@garoot.ai',
  telephone: '+966599123218',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
    addressCountry: 'SA',
  },
  nationality: {
    '@type': 'Country',
    name: 'Saudi Arabia',
  },
  knowsLanguage: [
    { '@type': 'Language', name: 'Arabic' },
    { '@type': 'Language', name: 'English' },
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Deakin University' },
    { '@type': 'CollegeOrUniversity', name: 'University of Victoria' },
  ],
  sameAs: [
    'https://linkedin.com/in/abdulmajeed-garoot',
    'https://github.com/garoot',
    'https://garoot.ai',
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={OG_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={OG_DESCRIPTION} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
        />
      </Head>

      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main" className={s.shell}>
        <Hero />
        <About />
        <Timeline />
        <TerminalBridge />
        <Skills />
        <Work />
        <Creative />
        <Reliability />
        <Contact />
      </main>
    </>
  );
}
