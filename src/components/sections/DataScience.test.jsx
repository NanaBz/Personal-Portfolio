import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DataScience } from './DataScience';

describe('DataScience', () => {
  it('renders the editorial WHY path with accessible text', () => {
    render(<DataScience />);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /building showed me how to make things/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText('WHY?')).toBeInTheDocument();
    expect(
      screen.getByRole('list', { name: /from observation to understanding/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Ask')).toBeInTheDocument();
    expect(screen.getByText('The question behind the work')).toBeInTheDocument();
    expect(screen.getByText(/See: Something happened/i)).toHaveClass('visually-hidden');
  });
});
