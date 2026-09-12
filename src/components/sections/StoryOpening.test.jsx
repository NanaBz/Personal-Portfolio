import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StoryOpening } from './StoryOpening';

describe('StoryOpening', () => {
  it('renders story copy with the editorial story image', () => {
    render(<StoryOpening />);

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /before i built things/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: /editorial visual for the Who I Am story section/i,
      }),
    ).toBeInTheDocument();
  });
});
