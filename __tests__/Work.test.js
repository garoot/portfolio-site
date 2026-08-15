import React from 'react';
import { render, screen } from '@testing-library/react';
import Work from '../components/Work';
import { WORK_PROJECTS, MOUJA_EVIDENCE } from '../components/data/work';

describe('Selected systems', () => {
  beforeEach(() => render(<Work />));

  it('uses the approved section heading', () => {
    expect(
      screen.getByRole('heading', { name: 'Selected systems' })
    ).toBeInTheDocument();
  });

  it('renders both case studies with LIVE status', () => {
    expect(screen.getByRole('heading', { name: 'LearnShift' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Mouja.ai' })).toBeInTheDocument();
    expect(screen.getAllByText('LIVE')).toHaveLength(2);
  });

  it('renders every lens for both projects from the data source', () => {
    WORK_PROJECTS.forEach((p) => {
      p.lenses.forEach((l) => {
        // OVERVIEW etc. appear once per project, so allow repeats of the key
        // but require the body copy to be present.
        expect(screen.getAllByText(l.k).length).toBeGreaterThan(0);
        expect(screen.getAllByText(l.t).length).toBeGreaterThan(0);
      });
    });

    // Every lens body is accounted for, none dropped.
    const totalLenses = WORK_PROJECTS.reduce(
      (n, p) => n + p.lenses.length,
      0
    );
    expect(document.querySelectorAll('dd')).toHaveLength(totalLenses);
  });

  it('preserves the Hackergee traction evidence', () => {
    expect(screen.getByText('3,500+')).toBeInTheDocument();
    expect(screen.getByText(/Hackergee course:/)).toBeInTheDocument();
  });

  it('preserves LearnShift actions', () => {
    expect(screen.getByRole('link', { name: /live site/i })).toHaveAttribute(
      'href',
      'https://learnshift.io/'
    );
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/garoot/LearnShift-for-everyone'
    );
  });

  it('links Mouja.ai out and marks its repository private without a dead link', () => {
    expect(screen.getByRole('link', { name: /mouja\.ai/i })).toHaveAttribute(
      'href',
      'https://mouja.ai/'
    );
    const priv = screen.getByText(/repository — private/i);
    expect(priv.tagName).not.toBe('A');
  });

  it('labels the legacy capture truthfully rather than as a Mouja screenshot', () => {
    expect(
      screen.getByText('LEGACY ROKN.AI CAPTURE — Mouja.ai screenshot pending')
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('Legacy Rokn.ai homepage capture')
    ).toHaveAttribute('src', '/rokn_homepage.png');
  });

  it('renders the Mouja evidence strip verbatim', () => {
    MOUJA_EVIDENCE.forEach((e) => {
      expect(screen.getByText(e.t)).toBeInTheDocument();
    });
  });

  it('lazy-loads the below-the-fold project imagery', () => {
    expect(
      screen.getByAltText('Legacy Rokn.ai homepage capture')
    ).toHaveAttribute('loading', 'lazy');
  });
});
