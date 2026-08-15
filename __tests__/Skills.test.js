import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Skills from '../components/Skills';
import { SKILL_GROUPS } from '../components/data/skills';

describe('Skills', () => {
  beforeEach(() => render(<Skills />));

  it('renders exactly the four approved capability domains', () => {
    expect(SKILL_GROUPS).toHaveLength(4);
    SKILL_GROUPS.forEach((g) => {
      expect(
        screen.getByRole('button', { name: new RegExp(g.label, 'i') })
      ).toBeInTheDocument();
    });
  });

  // The <section> itself also has role="region", so select the panels by id.
  const panelsOf = () =>
    SKILL_GROUPS.map((g) => document.getElementById(`skill-panel-${g.id}`));

  it('opens the first domain by default and hides the rest', () => {
    const panels = panelsOf();
    expect(panels).toHaveLength(4);
    panels.forEach((p) => expect(p).toHaveAttribute('role', 'region'));

    expect(panels[0]).not.toHaveAttribute('hidden');
    expect(panels[1]).toHaveAttribute('hidden');
    expect(panels[2]).toHaveAttribute('hidden');
    expect(panels[3]).toHaveAttribute('hidden');
  });

  it('expands a domain on click and collapses the previous one', () => {
    const triggers = screen.getAllByRole('button');
    const panels = panelsOf();

    fireEvent.click(triggers[2]);

    expect(triggers[2]).toHaveAttribute('aria-expanded', 'true');
    expect(triggers[0]).toHaveAttribute('aria-expanded', 'false');
    expect(panels[2]).not.toHaveAttribute('hidden');
    expect(panels[0]).toHaveAttribute('hidden');
  });

  it('collapses an open domain when clicked again', () => {
    const triggers = screen.getAllByRole('button');
    expect(triggers[0]).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(triggers[0]);
    expect(triggers[0]).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders every approved skill from the data source', () => {
    SKILL_GROUPS.forEach((g) => {
      g.items.forEach((item) => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });
  });

  it('keeps the governance qualifier visible and unweakened', () => {
    expect(
      screen.getByText('Responsible AI Governance — Developing')
    ).toBeInTheDocument();
  });

  it('associates each trigger with the panel it controls', () => {
    const triggers = screen.getAllByRole('button');
    triggers.forEach((t) => {
      const id = t.getAttribute('aria-controls');
      expect(id).toBeTruthy();
      expect(document.getElementById(id)).toBeTruthy();
    });
  });
});
