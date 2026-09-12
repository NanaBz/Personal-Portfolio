import { experience } from '../../data/experience';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { DisplayHeading } from '../ui/DisplayHeading';
import { Reveal } from '../ui/Reveal';
import './Experience.css';

export function Experience() {
  return (
    <Section
      id="experience"
      spacing="default"
      aria-labelledby="experience-heading"
    >
      <Container>
        <Reveal>
          <p className="eyebrow">Experience</p>
        </Reveal>

        <Reveal delay={80}>
          <DisplayHeading
            as="h2"
            variant="section"
            id="experience-heading"
            className="experience__heading"
          >
            What shaped the way I work.
          </DisplayHeading>
        </Reveal>

        <Reveal delay={120}>
          <p className="body-text body-text--lg experience__lead">
            Not a résumé timeline — a record of how my direction evolved through
            exposure, building, and teaching.
          </p>
        </Reveal>

        <ol className="experience__timeline">
          {experience.map((entry, index) => (
            <Reveal key={entry.id} delay={160 + index * 60}>
              <li
                className={`experience__entry${entry.isFuture ? ' experience__entry--future' : ''}`}
              >
                <div className="experience__marker" aria-hidden="true">
                  <span className="experience__year">{entry.year}</span>
                </div>

                <div className="experience__card">
                  <p className="eyebrow experience__category">{entry.title}</p>
                  <h3 className="experience__role">{entry.role}</h3>

                  {entry.organization && (
                    <p className="experience__org">
                      {entry.organization}
                      {entry.location && (
                        <span className="experience__location"> · {entry.location}</span>
                      )}
                    </p>
                  )}

                  {entry.period && (
                    <p className="label experience__period">{entry.period}</p>
                  )}

                  <p className="body-text experience__summary">{entry.summary}</p>
                  <p className="body-text experience__narrative">{entry.narrative}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
