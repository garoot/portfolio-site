import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkPage from './Work';

describe('WorkPage', () => {
    it('renders without crashing', () => {
        render(<WorkPage />);
    });

    it('renders the Github link', () => {
        render(<WorkPage />);
        const githubLink = screen.getByText('Github');
        expect(githubLink).toBeInTheDocument();
        expect(githubLink).toHaveAttribute('href', '');
    });

    it('renders the Visit Site link', () => {
        render(<WorkPage />);
        const visitSiteLink = screen.getByText('Visit Site');
        expect(visitSiteLink).toBeInTheDocument();
        expect(visitSiteLink).toHaveAttribute('href', '');
    });

    it('renders the project image', () => {
        render(<WorkPage />);
        const projectImage = screen.getByRole('img');
        expect(projectImage).toBeInTheDocument();
        expect(projectImage).toHaveAttribute('src', '/malakphoto.png');
        expect(projectImage).toHaveClass('cardImage');
    });
});
