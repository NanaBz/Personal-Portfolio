import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

const SECTION_ANCHORS = [
  'story',
  'selected-work',
  'data-science',
  'experience',
  'education',
  'beyond',
  'contact',
];

describe('App', () => {
  it('renders hero and personal story sections', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/ideas/i);
    expect(
      screen.getByRole('heading', { level: 2, name: /before i built things/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('See. Think. Do.')).toBeInTheDocument();
    expect(screen.getByText('Skip to main content')).toBeInTheDocument();
  });

  it('renders hero CTAs with correct anchors', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'Explore My Story' })).toHaveAttribute(
      'href',
      '#story',
    );
    expect(screen.getByRole('link', { name: "See What I've Built" })).toHaveAttribute(
      'href',
      '#selected-work',
    );
  });

  it('exposes required section anchors for production navigation', () => {
    render(<App />);
    SECTION_ANCHORS.forEach((id) => {
      expect(document.getElementById(id)).toBeTruthy();
    });
  });

  it('renders selected work with all six projects in order', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 2, name: /some ideas stayed ideas/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/6 projects — each one starting with a problem/i)).toBeInTheDocument();

    const selectedWork = document.getElementById('selected-work');
    const projectTitles = within(selectedWork)
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent);

    expect(projectTitles).toEqual([
      'League Scheduler',
      'AetherQore',
      'Ancora',
      'FeastFlow',
      'NovaForge',
      'Fake News Detector',
    ]);
  });

  it('renders phase 6 sections', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 2, name: /building showed me how to make things/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /what shaped the way i work/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /where it started/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /more to me than technology/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Aspiring Data Scientist')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Football' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Writing' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'Gaming' })).toBeInTheDocument();
  });

  it('renders phase 7 closing sections', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 2, name: /still a lot i want to do/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: /idea worth doing something about/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('DO')).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('IT.')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
