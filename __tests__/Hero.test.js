import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero', () => {
  beforeEach(() => render(<Hero />));

  it('renders the approved headline as the page h1', () => {
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toHaveTextContent('I build and operate production AI systems');
  });

  it('renders the eyebrow and supporting line', () => {
    expect(
      screen.getByText('AI SYSTEMS · CLOUD · RELIABILITY')
    ).toBeInTheDocument();
    expect(
      screen.getByText(/where control, reliability, and execution matter/i)
    ).toBeInTheDocument();
  });

  it('exposes all three calls to action with correct targets', () => {
    expect(screen.getByRole('link', { name: /view work/i })).toHaveAttribute(
      'href',
      '#work'
    );
    expect(screen.getByRole('link', { name: /download cv/i })).toHaveAttribute(
      'href',
      '/Abdulmajeed_Garoot_CV.pdf'
    );
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/abdulmajeed-garoot'
    );
  });

  it('keeps the pixel mascot as a described image, not decoration', () => {
    const mascot = screen.getByAltText(/pixel-art mascot of abdulmajeed/i);
    expect(mascot).toHaveAttribute('src', '/character9.png');
  });

  it('preserves the Riyadh location metadata', () => {
    expect(screen.getByText('RIYADH · SAUDI ARABIA')).toBeInTheDocument();
  });

  it('opens external links safely', () => {
    const linkedin = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedin).toHaveAttribute('target', '_blank');
    expect(linkedin).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });
});
