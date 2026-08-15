import React from 'react';
import { render, screen } from '@testing-library/react';
import Creative from '../components/Creative';
import Reliability from '../components/Reliability';
import { CREATIVE_WORKS } from '../components/data/work';
import { PROOF_CARDS, EVIDENCE_TILE } from '../components/data/reliability';

describe('Beyond Systems', () => {
  beforeEach(() => render(<Creative />));

  it('uses the approved label, heading and supporting line', () => {
    expect(screen.getByText('Beyond Systems')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Stories in motion' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Visual storytelling through motion, culture, and technical explanation.'
      )
    ).toBeInTheDocument();
  });

  it('renders all three creative projects with year and format', () => {
    expect(CREATIVE_WORKS).toHaveLength(3);
    CREATIVE_WORKS.forEach((w) => {
      expect(screen.getByRole('heading', { name: w.title })).toBeInTheDocument();
      expect(screen.getByText(w.description)).toBeInTheDocument();
      expect(
        screen.getByText(`${w.year} · ${w.format}`)
      ).toBeInTheDocument();
    });
  });

  it('uses the approved video stills, not placeholders', () => {
    CREATIVE_WORKS.forEach((w) => {
      const img = screen.getByAltText(w.imageAlt);
      expect(img).toHaveAttribute('src', w.image);
      expect(img.getAttribute('src')).toMatch(/^\/creative\/.+\.webp$/);
    });
  });

  it('links each project to its Vimeo page in a new tab', () => {
    const links = screen.getAllByRole('link', { name: /watch on vimeo/i });
    expect(links).toHaveLength(3);
    links.forEach((l) => {
      expect(l.getAttribute('href')).toMatch(/^https:\/\/vimeo\.com\/\d+$/);
      expect(l).toHaveAttribute('target', '_blank');
    });
  });

  it('does not autoplay — there are no video elements', () => {
    expect(document.querySelectorAll('video')).toHaveLength(0);
  });

  it('lazy-loads the stills', () => {
    CREATIVE_WORKS.forEach((w) => {
      expect(screen.getByAltText(w.imageAlt)).toHaveAttribute(
        'loading',
        'lazy'
      );
    });
  });
});

describe('Reliability & Evidence', () => {
  beforeEach(() => render(<Reliability />));

  it('renders all six proof cards', () => {
    expect(PROOF_CARDS).toHaveLength(6);
    PROOF_CARDS.forEach((p) => {
      expect(screen.getByRole('heading', { name: p.title })).toBeInTheDocument();
      expect(screen.getByText(p.body)).toBeInTheDocument();
    });
  });

  it('renders the verified staging evidence exactly', () => {
    expect(screen.getByText(EVIDENCE_TILE.label)).toBeInTheDocument();
    expect(screen.getByText(/48\.2s/)).toBeInTheDocument();
    expect(screen.getByText('$0.09')).toBeInTheDocument();
    expect(
      screen.getByText('one live Arabic merchant profile')
    ).toBeInTheDocument();

    EVIDENCE_TILE.lines.forEach((l) => {
      expect(screen.getByText(l.text)).toBeInTheDocument();
    });
  });

  it('keeps CRMO earned and governance clearly developing', () => {
    expect(
      screen.getByText(
        'CRMO earned (Apr 2026). Responsible AI governance — developing; AIGP in preparation.'
      )
    ).toBeInTheDocument();
  });
});
