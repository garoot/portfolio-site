import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Experience from '../components/Experience';
import Credentials from '../components/Credentials';
import { EXPERIENCE_ITEMS } from '../components/data/experience';
import { CREDENTIAL_GROUPS } from '../components/data/credentials';

describe('Professional experience', () => {
  beforeEach(() => render(<Experience />));

  it('renders every professional engagement without credentials mixed in', () => {
    const section = document.getElementById('experience');
    const cards = within(section).getAllByRole('article');
    expect(cards).toHaveLength(EXPERIENCE_ITEMS.length);
    expect(within(section).queryByText(/Azure AI-900 Certification/i)).toBeNull();
  });

  it('orders experience newest first', () => {
    const headings = within(document.getElementById('experience'))
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent);

    expect(headings[0]).toBe('AI Systems Engineer');
    expect(headings[1]).toBe('AI / Software Engineer');
    expect(headings.at(-1)).toBe(
      'Purchasing Representative / Digital Sales Support'
    );
  });

  it('keeps freelance ownership and HackerGee evidence concise and visible', () => {
    expect(
      screen.getByText(/Owned delivery from client requirements/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/3,500\+ course registrations/i)).toBeInTheDocument();
  });
});

describe('Education and credentials', () => {
  beforeEach(() => render(<Credentials />));

  it('renders every supporting credential from its single data source', () => {
    CREDENTIAL_GROUPS.forEach((group) => {
      group.rows.forEach((row) => {
        expect(screen.getByText(row.title)).toBeInTheDocument();
      });
    });
  });

  it('distinguishes earned, current, completed, and preparation states', () => {
    expect(screen.getAllByText('EARNED')).toHaveLength(2);
    expect(screen.getAllByText('COMPLETED')).toHaveLength(2);
    expect(screen.getByText('IN PROGRESS')).toBeInTheDocument();
    expect(screen.getAllByText('IN PREPARATION')).toHaveLength(2);
  });
});
