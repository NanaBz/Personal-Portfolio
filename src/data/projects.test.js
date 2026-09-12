import { describe, it, expect } from 'vitest';
import { projects } from './projects';

describe('projects', () => {
  it('renders projects in the intentional editorial order', () => {
    expect(projects.map((project) => project.number)).toEqual([
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
    ]);
    expect(projects.map((project) => project.id)).toEqual([
      'league-scheduler',
      'aetherqore',
      'ancora',
      'feastflow',
      'novaforge',
      'fake-news-detector',
    ]);
  });

  it('keeps League Scheduler first with existing links', () => {
    const leagueScheduler = projects[0];
    expect(leagueScheduler.title).toBe('League Scheduler');
    expect(leagueScheduler.links.github).toBe('https://github.com/NanaBz/League-Scheduler');
    expect(leagueScheduler.links.live).toBe('https://league-scheduler-bqav.vercel.app/');
  });

  it('positions AetherQore as co-founder backend lead without public links', () => {
    const aetherqore = projects[1];
    expect(aetherqore.title).toBe('AetherQore');
    expect(aetherqore.category).toMatch(/Co-founder & Backend Lead/i);
    expect(aetherqore.links).toBeUndefined();
    expect(aetherqore.imageFit).toBe('logo');
    expect(aetherqore.imageAlt).toMatch(/logo/i);
    expect(aetherqore.build).toMatch(/planned AI layer/i);
  });
});
