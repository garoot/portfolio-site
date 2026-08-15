import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Nav from '../components/Nav';

const SECTIONS = ['about', 'timeline', 'skills', 'work', 'contact'];

describe('Nav', () => {
  it('points every primary link at a real section anchor', () => {
    render(<Nav />);
    const nav = screen.getByRole('navigation', { name: /primary/i });

    SECTIONS.forEach((id) => {
      const link = within(nav).getByRole('link', {
        name: new RegExp(`^${id}$`, 'i'),
      });
      expect(link).toHaveAttribute('href', `#${id}`);
      // No placeholder anchors.
      expect(link.getAttribute('href')).not.toMatch(/^#\d/);
    });
  });

  it('keeps the email action working', () => {
    render(<Nav />);
    const nav = screen.getByRole('navigation', { name: /primary/i });
    expect(
      within(nav).getByRole('link', { name: /let’s talk/i })
    ).toHaveAttribute('href', 'mailto:majeed@garoot.ai');
  });

  it('scrolls to the matching section when a link is activated', () => {
    const target = document.createElement('section');
    target.id = 'skills';
    target.scrollIntoView = jest.fn();
    document.body.appendChild(target);

    render(<Nav />);
    const nav = screen.getByRole('navigation', { name: /primary/i });
    fireEvent.click(within(nav).getByRole('link', { name: /^skills$/i }));

    expect(target.scrollIntoView).toHaveBeenCalled();
    document.body.removeChild(target);
  });

  describe('mobile menu', () => {
    it('is collapsed and hidden by default', () => {
      render(<Nav />);
      const toggle = screen.getByRole('button', { name: /open menu/i });
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
      expect(document.getElementById('mobile-menu')).toHaveAttribute('hidden');
    });

    it('opens, exposes the same section links, and closes on Escape', () => {
      render(<Nav />);
      const toggle = screen.getByRole('button', { name: /open menu/i });

      fireEvent.click(toggle);
      expect(
        screen.getByRole('button', { name: /close menu/i })
      ).toHaveAttribute('aria-expanded', 'true');

      const panel = document.getElementById('mobile-menu');
      expect(panel).not.toHaveAttribute('hidden');
      SECTIONS.forEach((id) => {
        expect(
          within(panel).getByRole('link', { name: new RegExp(`^${id}$`, 'i') })
        ).toHaveAttribute('href', `#${id}`);
      });

      fireEvent.keyDown(document, { key: 'Escape' });
      expect(
        screen.getByRole('button', { name: /open menu/i })
      ).toHaveAttribute('aria-expanded', 'false');
    });

    it('wires the toggle to the panel it controls', () => {
      render(<Nav />);
      const toggle = screen.getByRole('button', { name: /open menu/i });
      expect(toggle).toHaveAttribute('aria-controls', 'mobile-menu');
    });
  });

  describe('auto-hide on scroll', () => {
    let rafSpy;

    // The scroll handler defers to requestAnimationFrame; run it inline so the
    // state settles synchronously inside act().
    beforeEach(() => {
      rafSpy = jest
        .spyOn(window, 'requestAnimationFrame')
        .mockImplementation((cb) => {
          cb();
          return 0;
        });
    });

    afterEach(() => {
      rafSpy.mockRestore();
      window.scrollY = 0;
    });

    const scrollTo = (y) => {
      window.scrollY = y;
      fireEvent.scroll(window);
    };

    it('stays visible at the top of the page', () => {
      const { container } = render(<Nav />);
      expect(container.firstChild).toHaveAttribute('data-hidden', 'false');
    });

    it('retracts when scrolling down and returns when scrolling up', () => {
      const { container } = render(<Nav />);
      const header = container.firstChild;

      scrollTo(600);
      expect(header).toHaveAttribute('data-hidden', 'true');

      scrollTo(400);
      expect(header).toHaveAttribute('data-hidden', 'false');
    });
  });
});
