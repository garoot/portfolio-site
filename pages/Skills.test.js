import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SkillsPage from './Skills';

describe('SkillsPage', () => {
    it('renders without crashing', () => {
        render(<SkillsPage />);
    });


    it('renders the Backend skills when Backend button is clicked', () => {
        render(<SkillsPage />);
        fireEvent.click(screen.getByText('Backend'));
        expect(screen.getByText('Express.js')).toBeInTheDocument();
        expect(screen.getByText('MongoDB')).toBeInTheDocument();
    });

    it('renders the Design & Prototype skills when Design & Prototype button is clicked', () => {
        render(<SkillsPage />);
        fireEvent.click(screen.getByText('Design & Prototype'));
        expect(screen.getByText('AdobeXD')).toBeInTheDocument();
    });

    it('renders the Collaboration skills when Collaboration button is clicked', () => {
        render(<SkillsPage />);
        fireEvent.click(screen.getByText('Collaboration'));
        expect(screen.getByText('Git')).toBeInTheDocument();
        expect(screen.getByText('Trello')).toBeInTheDocument();
    });

    it('renders the Deployment skills when Deployment button is clicked', () => {
        render(<SkillsPage />);
        fireEvent.click(screen.getByText('Deployment'));
        expect(screen.getByText('Docker')).toBeInTheDocument();
        expect(screen.getByText('Bitbucket')).toBeInTheDocument();
        expect(screen.getByText('Terraform')).toBeInTheDocument();
        expect(screen.getByText('Kubernetes')).toBeInTheDocument();
        expect(screen.getByText('Azure')).toBeInTheDocument();
    });

    it('renders the Honorable Mentions skills when Honorable Mentions button is clicked', () => {
        render(<SkillsPage />);
        fireEvent.click(screen.getByText('Honorable Mentions'));
        expect(screen.getByText('Photoshop')).toBeInTheDocument();
        expect(screen.getByText('After Effects')).toBeInTheDocument();
        expect(screen.getByText('Premiere Pro')).toBeInTheDocument();
    });
});
