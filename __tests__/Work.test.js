import React from 'react';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import Work from '../components/Work';
import { WORK_PROJECTS } from '../components/data/work';

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
    expect(screen.getByText('LEGACY ROKN.AI INTERFACE')).toBeInTheDocument();
    expect(
      screen.getByAltText('Legacy Rokn.ai homepage capture')
    ).toHaveAttribute('src', '/rokn_homepage.png');
  });

  it('gives each project one prominent evidence point', () => {
    expect(screen.getByText('3,500+')).toBeInTheDocument();
    expect(screen.getByText('799')).toBeInTheDocument();
  });

  it('collapses secondary project details on mobile and expands them accessibly', async () => {
    window.matchMedia = jest.fn().mockReturnValue({
      matches: true,
      media: '(max-width: 640px)',
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });

    const view = render(<Work />);
    const project = within(view.container);
    const toggles = project.getAllByRole('button', {
      name: /view technical details/i,
    });
    const firstPanel = view.container.querySelector(
      '#project-details-learnshift'
    );

    await waitFor(() => expect(firstPanel).toHaveAttribute('hidden'));
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggles[0]);
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'true');
    expect(firstPanel).not.toHaveAttribute('hidden');
  });

  it('lazy-loads the below-the-fold project imagery', () => {
    expect(
      screen.getByAltText('Legacy Rokn.ai homepage capture')
    ).toHaveAttribute('loading', 'lazy');
  });
});
