import { describe, it, expect } from 'vitest';
import { images } from './images';
import { projects } from '../data/projects';

describe('images registry', () => {
  it('uses real assets for integrated personal sections', () => {
    expect(String(images.profile.hero)).toContain('hero.jpg');
    expect(String(images.story.primary)).toContain('primary.png');
    expect(String(images.football.primary)).toContain('primary.jpg');
    expect(String(images.graduation.primary)).toContain('primary.png');
    expect(String(images.writing.primary)).toContain('primary.jpg');
    expect(images.story.alt).toMatch(/editorial visual/i);
    expect(images.profile.alt.hero).toMatch(/Nanakwaku Boakye-Akyeampong/i);
    expect(images.writing.alt).toMatch(/writing at a desk/i);
  });

  it('maps every project to a non-placeholder visual asset', () => {
    projects.forEach((project) => {
      const entry = images.projects[project.id];
      expect(entry.src).toBeTruthy();
      expect(entry.alt).toBeTruthy();
      expect(String(entry.src)).not.toContain('placeholder');
    });
  });
});
