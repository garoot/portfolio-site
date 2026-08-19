import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from '../components/Timeline';
import { TIMELINE_ITEMS } from '../components/data/timeline';

describe('Timeline', () => {
  beforeEach(() => render(<Timeline />));

  it('renders one card per data entry', () => {
    const items = screen.getAllByRole('listitem');
    const milestones = items.filter((li) => li.querySelector('article'));
    expect(milestones).toHaveLength(TIMELINE_ITEMS.length);
    expect(milestones).toHaveLength(13);
  });

  it('renders every milestone title from the data source', () => {
    TIMELINE_ITEMS.forEach((item) => {
      expect(
        screen.getAllByText(item.title, { exact: false }).length
      ).toBeGreaterThan(0);
    });
  });

  it('numbers the milestones 01 through 13 in chronological order', () => {
    const sorted = [...TIMELINE_ITEMS].sort((a, b) =>
      a.start.year !== b.start.year
        ? a.start.year - b.start.year
        : a.start.month - b.start.month
    );

    sorted.forEach((item, i) => {
      const num = String(i + 1).padStart(2, '0');
      expect(screen.getByText(num)).toBeInTheDocument();
    });

    // First and last are the expected milestones.
    expect(sorted[0].title).toBe('Bachelor of Computer Science');
    expect(sorted.slice(-2).some((item) => item.org === 'Tuwaiq Academy')).toBe(
      true
    );
  });

  it('includes the LinkedIn freelance experience with ownership evidence', () => {
    expect(screen.getByText('05/2019 – 03/2023')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Freelance' })).toBeInTheDocument();
    expect(
      screen.getByText(/owned delivery from client requirements/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/3,500\+ course registrations/i)).toBeInTheDocument();
  });

  it('includes the LinkedIn Teaching Assistant role', () => {
    expect(
      screen.getByRole('heading', { name: 'Teaching Assistant' })
    ).toBeInTheDocument();
    expect(screen.getByText('CodeCamp · Melbourne, Australia')).toBeInTheDocument();
    expect(screen.getByText('01/2022 – 12/2022')).toBeInTheDocument();
  });

  it('uses the current LinkedIn title for Human Managed', () => {
    expect(screen.getByRole('heading', { name: 'AI Engineer' })).toBeInTheDocument();
  });

  it('renders date ranges, including open-ended ones', () => {
    expect(screen.getByText('01/2013 – 05/2019')).toBeInTheDocument();
    expect(screen.getAllByText(/07\/2026 – Present/).length).toBeGreaterThan(0);
  });

  it('shows earned certifications with an explicit EARNED status', () => {
    const earned = TIMELINE_ITEMS.filter((i) => i.status === 'EARNED');
    expect(earned).toHaveLength(2);
    expect(screen.getAllByText('EARNED')).toHaveLength(2);
  });

  it('marks in-progress work without implying completion', () => {
    expect(screen.getAllByText('IN PROGRESS').length).toBeGreaterThan(0);
    expect(screen.getAllByText('CURRENT')).toHaveLength(2);
  });

  it('links Mouja.ai out to the live site', () => {
    const link = screen.getByRole('link', { name: /mouja\.ai/i });
    expect(link).toHaveAttribute('href', 'https://mouja.ai/');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('composes organisation and location when both are present', () => {
    expect(
      screen.getByText('Human Managed · Remote — Singapore')
    ).toBeInTheDocument();
  });
});
