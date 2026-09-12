import { images } from '../../lib/images';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { DisplayHeading } from '../ui/DisplayHeading';
import { ImageFrame } from '../ui/ImageFrame';
import { Reveal } from '../ui/Reveal';
import './StoryOpening.css';

export function StoryOpening() {
  return (
    <Section id="story" spacing="default" aria-labelledby="story-heading">
      <Container>
        <Reveal>
          <p className="eyebrow story__eyebrow">Who I Am</p>
        </Reveal>

        <Reveal delay={80}>
          <DisplayHeading
            as="h2"
            variant="section"
            id="story-heading"
            className="story__heading"
          >
            Before I built things, I had to figure out what I wanted to build.
          </DisplayHeading>
        </Reveal>

        <div className="story__layout">
          <div className="story__body">
            <Reveal delay={120}>
              <p className="body-text body-text--lg story__paragraph">
                I didn&apos;t enter Computer Science with everything figured out. My
                brother had studied it, and at the time I wasn&apos;t completely sure
                what direction I wanted to take.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="body-text story__paragraph">
                Then Web Technologies changed how I saw it. For the first time, I
                could see how an idea could move from something in my head to something
                people could actually interact with.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <ul className="story__disciplines" aria-label="Areas of building">
                <li>Frontend.</li>
                <li>Backend.</li>
                <li>Design.</li>
                <li>Deployment.</li>
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <p className="body-text story__paragraph">
                Computer Science stopped feeling like just a subject. It became a way
                to do something about the ideas I had — to see a problem, imagine
                possibilities, and try to make something real.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140} className="story__visual">
            <ImageFrame
              src={images.story.primary}
              alt={images.story.alt}
              aspectRatio="portrait"
              className="story__image"
              width={343}
              height={361}
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
