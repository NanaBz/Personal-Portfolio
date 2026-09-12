import { beyondIntro, interests } from '../../data/interests';
import { images } from '../../lib/images';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { DisplayHeading } from '../ui/DisplayHeading';
import { ImageFrame } from '../ui/ImageFrame';
import { Reveal } from '../ui/Reveal';
import './BeyondTechnology.css';

function getInterestImage(imageKey) {
  if (!imageKey || !images[imageKey]) return null;
  return images[imageKey];
}

export function BeyondTechnology() {
  return (
    <Section
      id="beyond"
      spacing="default"
      aria-labelledby="beyond-heading"
    >
      <Container>
        <header className="beyond__intro">
          <Reveal>
            <p className="eyebrow">{beyondIntro.eyebrow}</p>
          </Reveal>

          <Reveal delay={80}>
            <DisplayHeading
              as="h2"
              variant="section"
              id="beyond-heading"
              className="beyond__heading"
            >
              {beyondIntro.heading}
            </DisplayHeading>
          </Reveal>

          <Reveal delay={120}>
            <p className="body-text body-text--lg beyond__lead">{beyondIntro.lead}</p>
          </Reveal>
        </header>

        <div className="beyond__grid">
          {interests.map((interest, index) => {
            const imageData = getInterestImage(interest.imageKey);

            return (
              <Reveal
                key={interest.id}
                delay={160 + index * 80}
                className={`beyond__item beyond__item--${interest.emphasis}${interest.imageKey ? ' beyond__item--has-image' : ''}`}
              >
                <article aria-labelledby={`${interest.id}-title`}>
                  {imageData && (
                    <div className="beyond__image">
                      <ImageFrame
                        src={imageData.primary}
                        alt={imageData.alt}
                        aspectRatio="landscape"
                        objectPosition={imageData.objectPosition}
                      />
                    </div>
                  )}

                  <div className="beyond__text">
                    <h3 id={`${interest.id}-title`} className="beyond__title">
                      {interest.title}
                    </h3>
                    <p className="beyond__hook">{interest.hook}</p>
                    <p className="body-text beyond__body">{interest.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
