import { whatsNext } from '../../data/whatsNext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { DisplayHeading } from '../ui/DisplayHeading';
import { Reveal } from '../ui/Reveal';
import './WhatsNext.css';

export function WhatsNext() {
  return (
    <Section
      id="whats-next"
      spacing="lg"
      background="secondary"
      aria-labelledby="whats-next-heading"
    >
      <Container>
        <Reveal>
          <p className="eyebrow">{whatsNext.eyebrow}</p>
        </Reveal>

        <Reveal delay={80}>
          <DisplayHeading
            as="h2"
            variant="section"
            id="whats-next-heading"
            className="whats-next__heading"
          >
            {whatsNext.heading}
          </DisplayHeading>
        </Reveal>

        <Reveal delay={120}>
          <p className="body-text body-text--lg whats-next__lead">{whatsNext.lead}</p>
        </Reveal>

        {whatsNext.body.map((paragraph) => (
          <Reveal key={paragraph.slice(0, 32)} delay={160}>
            <p className="body-text whats-next__paragraph">{paragraph}</p>
          </Reveal>
        ))}

        <ul className="whats-next__directions">
          {whatsNext.directions.map((item, index) => (
            <Reveal key={item.label} delay={200 + index * 60}>
              <li className="whats-next__direction">
                <span className="whats-next__direction-label">{item.label}</span>
                <p className="body-text">{item.text}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={480}>
          <div className="whats-next__closing" aria-label="Do something about it">
            {whatsNext.closing.lines.map((line) => (
              <span key={line} className="whats-next__closing-line">
                {line}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
