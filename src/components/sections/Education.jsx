import { education } from '../../data/education';
import { images } from '../../lib/images';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { DisplayHeading } from '../ui/DisplayHeading';
import { ImageFrame } from '../ui/ImageFrame';
import { Reveal } from '../ui/Reveal';
import './Education.css';

export function Education() {
  return (
    <Section
      id="education"
      spacing="default"
      background="secondary"
      aria-labelledby="education-heading"
    >
      <Container>
        <div className="education__layout">
          <div className="education__content">
            <Reveal>
              <p className="eyebrow">{education.eyebrow}</p>
            </Reveal>

            <Reveal delay={80}>
              <DisplayHeading
                as="h2"
                variant="section"
                id="education-heading"
                className="education__heading"
              >
                {education.heading}
              </DisplayHeading>
            </Reveal>

            <Reveal delay={120}>
              <p className="education__degree">{education.degree}</p>
              <p className="education__institution">{education.institution}</p>
              <p className="label education__graduated">
                Graduated {education.graduated}
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="body-text body-text--lg education__lead">
                {education.lead}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="body-text">{education.body}</p>
            </Reveal>
          </div>

          <Reveal delay={120} className="education__visual">
            <ImageFrame
              src={images.graduation.primary}
              alt={images.graduation.alt}
              aspectRatio="landscape"
              objectPosition={images.graduation.objectPosition}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
