import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from '../pages/Navbar';

describe('Navbar', () => {
    it('renders the navbar', () => {
        render(<Navbar />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('renders the About link', () => {
        render(<Navbar />);
        expect(screen.getByText('About')).toBeInTheDocument();
    });

    it('renders the Work link', () => {
        render(<Navbar />);
        expect(screen.getByText('Work')).toBeInTheDocument();
    });

    it('renders the Services link', () => {
        render(<Navbar />);
        expect(screen.getByText('Services')).toBeInTheDocument();
    });

    it('renders the Majeed Develops heading', () => {
        render(<Navbar />);
        expect(screen.getByRole('heading', { name: /Majeed Develops/i })).toBeInTheDocument();
    });

    it('renders the Hit Me Up! button', () => {
        render(<Navbar />);
        expect(screen.getByText('Hit Me Up!')).toBeInTheDocument();
    });

    it('renders the message image', () => {
        render(<Navbar />);
        const image = screen.getByAltText('hello');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/message.png');
        expect(image).toHaveAttribute('height', '15');
        expect(image).toHaveAttribute('width', '15');
    });
});
