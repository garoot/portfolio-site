import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './index';

describe('Home', () => {
    it('renders without crashing', () => {
        render(<Home />);
    });

    it('renders the Navbar component', () => {
        render(<Home />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders the HomePage component', () => {
        render(<Home />);
        expect(screen.getByText(/Passionate about creating web solutions/i)).toBeInTheDocument();
    });

    it('renders the Bio component', () => {
        render(<Home />);
        // Use a custom matcher function to ensure specificity
        expect(screen.getByText((content, element) => {
        return content.includes('Transform setbacks into comeacks') && element.closest('.bioContent');
        })).toBeInTheDocument();
    });

    it('renders the SkillsPage component', () => {
        render(<Home />);
        // Use the heading text with a more specific query
        expect(screen.getByRole('heading', { name: /Skills/i })).toBeInTheDocument();
    });

    it('renders the WorkPage component', () => {
        render(<Home />);
        // Use the heading text with a more specific query
        expect(screen.getByRole('heading', { name: /Things I've Built/i })).toBeInTheDocument();
    });
});
