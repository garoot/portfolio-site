import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './Home';

describe('HomePage', () => {
    it('renders without crashing', () => {
        render(<HomePage />);
    });

    it('renders the image with correct attributes', () => {
        render(<HomePage />);
        // get all elements that have alt text: '', which is basically the images in this page
        const image = screen.getByAltText('');

        expect(image).toHaveAttribute('src', '/character9.png');
        expect(image).toHaveAttribute('alt', '');
        expect(image).toHaveAttribute('width', '200');
        expect(image).toHaveAttribute('height', '300');
    });

    it('renders the About Me button and triggers click event', () => {
        render(<HomePage />);
        const aboutMeButton = screen.getByText(/About Me/i);

        expect(aboutMeButton).toBeInTheDocument();
        fireEvent.click(aboutMeButton);
    });

    it('renders the Hit Me Up button', () => {
        render(<HomePage />);
        const hitMeButton = screen.getByText(/Hit Me Up/i);
        expect(hitMeButton).toBeInTheDocument();
    });
});
