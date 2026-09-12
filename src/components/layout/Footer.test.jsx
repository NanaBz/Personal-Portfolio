import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';
import { site } from '../../data/site';

describe('Footer', () => {
  it('renders brand, links, and dynamic copyright', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText(site.preferredName)).toBeInTheDocument();
    expect(screen.getByText(site.name)).toBeInTheDocument();
    expect(screen.getByText('Aspiring Data Scientist.')).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} ${site.name}`)),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', expect.stringContaining('mailto:'));
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', expect.stringContaining('github.com'));
  });
});
