// tests to ensure:
// - the component renders without crashing.
// - the text content id displayed correctly.
// - the images are rendered with the correct attributes.

import { render, screen } from '@testing-library/react';
import React from 'react'
import BioPage from '../pages/Bio';

describe('BioPage', () => {
    it('renders without crashing', () => {
        render(<BioPage/>)
    });

    it('renders images with correct attributes', () =>{
        render(<BioPage />);
        const images = screen.getAllByRole('img');

        // Check image URLs
        expect(images[0]).toHaveAttribute('src', '/certificate.png');
        expect(images[1]).toHaveAttribute('src', '/deakin.png');
        expect(images[2]).toHaveAttribute('src', '/uvic.png');
        expect(images[3]).toHaveAttribute('src', '/codingdojo.png');
        expect(images[4]).toHaveAttribute('src', '/character9.png');

    })
});

