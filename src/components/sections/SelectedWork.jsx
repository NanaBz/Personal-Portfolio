import { projects } from '../../data/projects';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { DisplayHeading } from '../ui/DisplayHeading';
import { Reveal } from '../ui/Reveal';
import { ProjectStory } from './ProjectStory';
import './SelectedWork.css';

export function SelectedWork() {
  return (
    <Section id="selected-work" spacing="sm" aria-labelledby="selected-work-heading">
      <Container>
        <header className="selected-work__intro">
          <Reveal>
            <p className="eyebrow">Selected Work</p>
          </Reveal>

          <Reveal delay={80}>
            <DisplayHeading
              as="h2"
              variant="section"
              id="selected-work-heading"
              className="selected-work__heading"
            >
              Some ideas stayed ideas.
              <br />
              These didn&apos;t.
            </DisplayHeading>
          </Reveal>

          <Reveal delay={120}>
            <p className="body-text body-text--lg selected-work__lead">
              {projects.length} projects — each one starting with a problem, a question, or
              something that didn&apos;t feel good enough. Not a list of apps.
              Examples of how I think.
            </p>
          </Reveal>
        </header>

        <div className="selected-work__projects">
          {projects.map((project, index) => (
            <ProjectStory
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
