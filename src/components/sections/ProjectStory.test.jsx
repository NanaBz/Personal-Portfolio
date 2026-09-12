import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { ProjectStory } from './ProjectStory';
import { projects } from '../../data/projects';

describe('ProjectStory', () => {
  const project = projects[0];

  it('renders preview content and expands on click', async () => {
    const user = userEvent.setup();
    render(<ProjectStory project={project} />);

    expect(screen.getByRole('heading', { level: 3, name: project.title })).toBeInTheDocument();
    expect(screen.getByText(project.hook)).toBeInTheDocument();

    const toggle = screen.getByRole('button', { name: 'Read the story' });
    const detailPanel = document.getElementById(toggle.getAttribute('aria-controls'));

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(detailPanel).toHaveAttribute('hidden');

    await user.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(detailPanel).not.toHaveAttribute('hidden');
    expect(screen.getByText('The Problem')).toBeInTheDocument();
    expect(screen.getByText('The Learning')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'View on GitHub' })).toHaveAttribute(
      'href',
      project.links.github,
    );
  });
});
