import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

const SECTION_IDS = ['top', 'about', 'timeline', 'skills', 'work', 'creative', 'contact'];

function setReducedMotion(matches) {
  window.matchMedia = (query) => ({
    matches: /prefers-reduced-motion/.test(query) ? matches : false,
    media: query,
    onchange: null,
    addListener() {},
    removeListener() {},
    addEventListener() {},
    removeEventListener() {},
    dispatchEvent: () => false,
  });
}

describe('Home page structure', () => {
  beforeEach(() => {
    setReducedMotion(false);
    render(<Home />);
  });

  it('renders every approved section in order', () => {
    SECTION_IDS.forEach((id) => {
      expect(document.getElementById(id)).toBeInTheDocument();
    });

    const positions = SECTION_IDS.map((id) =>
      Array.prototype.indexOf.call(
        document.querySelectorAll('[id]'),
        document.getElementById(id)
      )
    );
    const sorted = [...positions].sort((a, b) => a - b);
    expect(positions).toEqual(sorted);
  });

  it('exposes semantic landmarks', () => {
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: /primary/i })
    ).toBeInTheDocument();
  });

  it('has exactly one h1 and a section heading for each major block', () => {
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);

    const h2s = screen
      .getAllByRole('heading', { level: 2 })
      .map((h) => h.textContent);
    ['The full career story', 'Four capability domains', 'Selected systems', 'Stories in motion', 'How the systems behave'].forEach(
      (title) => expect(h2s).toContain(title)
    );
  });

  it('offers a skip link to the main content', () => {
    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute(
      'href',
      '#main'
    );
  });

  it('renders exactly one terminal transition', () => {
    // The window title bar appears once per terminal.
    expect(screen.getAllByText('majeed@garoot.ai — describe')).toHaveLength(1);
  });

  it('keeps the contact details reachable', () => {
    expect(
      screen.getAllByRole('link', { name: /majeed@garoot\.ai/i }).length
    ).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /\+966/ })).toHaveAttribute(
      'href',
      'tel:+966599123218'
    );
  });
});

describe('reduced motion', () => {
  it('renders the full page without throwing when motion is reduced', () => {
    setReducedMotion(true);
    expect(() => render(<Home />)).not.toThrow();
  });

  it('keeps the complete terminal text available when motion is reduced', () => {
    setReducedMotion(true);
    render(<Home />);
    expect(
      screen.getAllByText(/describe --focus/).length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText(
        /AI systems · cloud architecture · production reliability/
      ).length
    ).toBeGreaterThan(0);
  });

  it('still renders the hero and all sections when motion is reduced', () => {
    setReducedMotion(true);
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'I build and operate production AI systems'
    );
    SECTION_IDS.forEach((id) => {
      expect(document.getElementById(id)).toBeInTheDocument();
    });
  });
});
