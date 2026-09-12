/**
 * Image asset registry.
 *
 * Real assets:
 *   profile/hero.jpg, story/primary.png, football/primary.jpg,
 *   graduation/primary.png, and project visuals under projects/
 *
 * Placeholder SVGs remain for future project drops.
 */

import profileHero from '../assets/images/profile/hero.jpg';
import storyVisual from '../assets/images/story/primary.png';
import footballPhoto from '../assets/images/football/primary.jpg';
import graduationPhoto from '../assets/images/graduation/primary.png';
import writingPhoto from '../assets/images/writing/primary.jpg';
import { projects } from '../data/projects';

export const images = {
  profile: {
    hero: profileHero,
    alt: {
      hero: 'Nanakwaku Boakye-Akyeampong (NBA) — professional portrait',
    },
  },
  story: {
    primary: storyVisual,
    alt: 'Isometric layered forms with purple glow — editorial visual for the Who I Am story section',
  },
  football: {
    primary: footballPhoto,
    alt: 'Nanakwaku Boakye-Akyeampong (NBA) — football portrait',
    objectPosition: 'center 18%',
  },
  graduation: {
    primary: graduationPhoto,
    alt: 'Nanakwaku Boakye-Akyeampong (NBA) — graduation photograph in academic regalia',
    objectPosition: 'center 15%',
  },
  writing: {
    primary: writingPhoto,
    alt: 'Nanakwaku Boakye-Akyeampong (NBA) — writing at a desk in the library',
    objectPosition: 'center 28%',
  },
  projects: Object.fromEntries(
    projects.map((project) => [
      project.id,
      { src: project.image, alt: project.imageAlt },
    ]),
  ),
};
