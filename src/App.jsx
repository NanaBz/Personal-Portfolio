import { PageShell } from './components/layout/PageShell';
import { Hero } from './components/sections/Hero';
import { StoryOpening } from './components/sections/StoryOpening';
import { PhilosophyPattern } from './components/sections/PhilosophyPattern';
import { SelectedWork } from './components/sections/SelectedWork';
import { DataScience } from './components/sections/DataScience';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { BeyondTechnology } from './components/sections/BeyondTechnology';
import { WhatsNext } from './components/sections/WhatsNext';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <PageShell>
      <Hero />
      <StoryOpening />
      <PhilosophyPattern />
      <SelectedWork />
      <DataScience />
      <Experience />
      <Education />
      <BeyondTechnology />
      <WhatsNext />
      <Contact />
    </PageShell>
  );
}
