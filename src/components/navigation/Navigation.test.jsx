import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Navigation } from './Navigation';

describe('Navigation', () => {
  beforeEach(() => {
    document.body.classList.remove('nav-menu-open');
  });

  afterEach(() => {
    document.body.classList.remove('nav-menu-open');
  });

  it('renders brand, desktop section links, and contact', () => {
    render(<Navigation />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByLabelText('NBA — home')).toHaveTextContent('NBA');
    expect(screen.getByRole('link', { name: 'Story' })).toHaveAttribute('href', '#story');
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#selected-work');
    expect(screen.getByRole('link', { name: 'Data' })).toHaveAttribute('href', '#data-science');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: 'Beyond' })).toHaveAttribute('href', '#beyond');
    expect(screen.getAllByRole('link', { name: 'Contact' })[0]).toHaveAttribute('href', '#contact');
  });

  it('opens mobile menu and closes on Escape', async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    const menuButton = screen.getByRole('button', { name: 'Open menu' });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    await user.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument();
    expect(document.body.classList.contains('nav-menu-open')).toBe(true);

    await user.keyboard('{Escape}');

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    expect(document.body.classList.contains('nav-menu-open')).toBe(false);
  });

  it('closes mobile menu when a navigation link is clicked', async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    await user.click(screen.getByRole('button', { name: 'Open menu' }));

    const mobileStoryLinks = screen.getAllByRole('link', { name: 'Story' });
    const mobileStoryLink = mobileStoryLinks[mobileStoryLinks.length - 1];
    await user.click(mobileStoryLink);

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });
});
