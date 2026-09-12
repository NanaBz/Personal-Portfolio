import { dataScience } from '../../data/dataScience';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { DisplayHeading } from '../ui/DisplayHeading';
import { Reveal } from '../ui/Reveal';
import { WhyVisual } from './WhyVisual';
import './DataScience.css';

export function DataScience() {
  return (
    <Section
      id="data-science"
      spacing="default"
      background="secondary"
      aria-labelledby="data-science-heading"
    >
      <Container>
        <div className="data-science__layout">
          <div className="data-science__content">
            <Reveal>
              <p className="eyebrow">{dataScience.eyebrow}</p>
            </Reveal>

            <Reveal delay={80}>
              <DisplayHeading
                as="h2"
                variant="section"
                id="data-science-heading"
                className="data-science__heading"
              >
                {dataScience.heading}
              </DisplayHeading>
            </Reveal>

            <Reveal delay={120}>
              <p className="body-text body-text--lg data-science__lead">
                {dataScience.lead}
              </p>
            </Reveal>

            {dataScience.body.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={160 + index * 40}>
                <p className="body-text">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={240}>
              <ol
                className="data-science__pattern"
                aria-label="See, Think, Data, Do applied to data work"
              >
                {dataScience.pattern.map((step, index) => (
                  <li key={step.label} className="data-science__pattern-step">
                    <span className="data-science__pattern-index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="data-science__pattern-body">
                      <span className="data-science__pattern-label">{step.label}</span>
                      <p className="data-science__pattern-text">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={280}>
              <div className="data-science__example">
                <p className="data-science__example-title">
                  {dataScience.fakeNewsConnection.title}
                </p>
                <p className="body-text">{dataScience.fakeNewsConnection.text}</p>
                <a
                  href={`#${dataScience.fakeNewsConnection.projectId}`}
                  className="data-science__example-link transition-base"
                >
                  Read the project story
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="label data-science__qualification">
                {dataScience.qualification}
              </p>
              <ul
                className="data-science__tech"
                aria-label="Areas of focus"
              >
                {dataScience.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160} className="data-science__visual-wrap">
            <WhyVisual />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
