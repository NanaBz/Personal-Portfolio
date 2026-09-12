import { philosophySteps } from '../../data/site';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { DisplayHeading } from '../ui/DisplayHeading';
import { Reveal } from '../ui/Reveal';
import './PhilosophyPattern.css';

export function PhilosophyPattern() {
  return (
    <Section
      spacing="default"
      background="secondary"
      aria-labelledby="philosophy-heading"
    >
      <Container>
        <Reveal>
          <p className="eyebrow philosophy__eyebrow">How I Think</p>
        </Reveal>

        <Reveal delay={80}>
          <DisplayHeading
            as="h2"
            variant="subsection"
            id="philosophy-heading"
            className="philosophy__heading"
          >
            See. Think. Do.
          </DisplayHeading>
        </Reveal>

        <Reveal delay={120}>
          <p className="body-text philosophy__intro">
            This is the pattern behind most of what I build — and most of what I
            care about.
          </p>
        </Reveal>

        <ol className="philosophy__steps">
          {philosophySteps.map((step, index) => (
            <Reveal key={step.id} delay={160 + index * 80}>
              <li className="philosophy__step">
                <span className="philosophy__step-label">{step.label}</span>
                <p className="philosophy__step-text">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
