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

  it('renders the active and paused case-study statuses truthfully', () => {
    expect(screen.getByRole('heading', { name: 'LearnShift' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Mouja.ai' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Rokn.ai' })).toBeInTheDocument();
    expect(screen.getAllByText('LIVE')).toHaveLength(2);
    expect(screen.getByText('PAUSED')).toBeInTheDocument();
    expect(screen.getByText('PRODUCT R&D · PAUSED')).toBeInTheDocument();
  });

  it('presents Mouja.ai before LearnShift', () => {
    const projectHeadings = screen.getAllByRole('heading', { level: 3 });

    expect(projectHeadings.map((heading) => heading.textContent)).toEqual([
      'Mouja.ai',
      'LearnShift',
      'Rokn.ai',
    ]);
  });

  it('uses the Mouja wordmark without duplicating the accessible project name', () => {
    const heading = screen.getByRole('heading', { name: 'Mouja.ai' });
    const logo = heading.querySelector('img');

    expect(logo).toHaveAttribute('src', '/mouja-pixel-media-logo.svg');
    expect(logo).toHaveAttribute('alt', '');
    expect(logo).toHaveAttribute('aria-hidden', 'true');
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

  it('renders both project previews as muted, looping inline videos', () => {
    expect(document.querySelectorAll('video')).toHaveLength(WORK_PROJECTS.length);

    WORK_PROJECTS.forEach((project) => {
      const source = document.querySelector(`source[src="${project.video}"]`);
      const video = source.parentElement;

      expect(video).toHaveAttribute('autoplay');
      expect(video).toHaveAttribute('loop');
      expect(video).toHaveAttribute('playsinline');
      expect(video).toHaveAttribute('preload', 'metadata');
      expect(video).toHaveAttribute('poster', project.image);
      expect(video.muted).toBe(true);
      expect(source).toHaveAttribute('type', 'video/mp4');
    });

    expect(screen.queryByText('LEGACY ROKN.AI INTERFACE')).toBeNull();

    const moujaVideo = document.querySelector(
      'source[src="/mouja-preview.mp4"]'
    ).parentElement;
    const mediaControl = moujaVideo.closest('[role="button"]');

    expect(mediaControl).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(mediaControl);
    expect(mediaControl).toHaveAttribute('aria-pressed', 'true');
    fireEvent.keyDown(mediaControl, { key: 'Escape' });
    expect(mediaControl).toHaveAttribute('aria-pressed', 'false');
  });

  it('gives each project one prominent evidence point', () => {
    expect(screen.getByText('3,500+')).toBeInTheDocument();
    expect(screen.getByText('799')).toBeInTheDocument();
  });

  it('collapses secondary project details on mobile and expands them accessibly', async () => {
    window.matchMedia = jest.fn((query) => ({
      matches: query === '(max-width: 640px)',
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const view = render(<Work />);
    const project = within(view.container);
    const toggles = project.getAllByRole('button', {
      name: /view technical details/i,
    });
    const firstPanel = view.container.querySelector(
      `#${toggles[0].getAttribute('aria-controls')}`
    );

    await waitFor(() => expect(firstPanel).toHaveAttribute('hidden'));
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(toggles[0]);
    expect(toggles[0]).toHaveAttribute('aria-expanded', 'true');
    expect(firstPanel).not.toHaveAttribute('hidden');
  });

  it('uses static project imagery when reduced motion is requested', async () => {
    window.matchMedia = jest.fn((query) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const view = render(<Work />);

    await waitFor(() => {
      expect(view.container.querySelectorAll('video')).toHaveLength(0);
    });

    WORK_PROJECTS.forEach((project) => {
      expect(within(view.container).getByAltText(project.imageAlt)).toHaveAttribute(
        'src',
        project.image
      );
    });
  });
});
