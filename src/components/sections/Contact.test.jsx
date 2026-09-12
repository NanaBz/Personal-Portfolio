import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Contact } from './Contact';
import { contact } from '../../data/contact';

describe('Contact', () => {
  it('renders verified contact links', () => {
    render(<Contact />);

    expect(screen.getByRole('link', { name: contact.email })).toHaveAttribute(
      'href',
      `mailto:${contact.email}`,
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      contact.linkedin,
    );
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', contact.github);
    expect(screen.getByRole('link', { name: contact.phoneDisplay })).toHaveAttribute(
      'href',
      `tel:${contact.phone}`,
    );
  });
});
