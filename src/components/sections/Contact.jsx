import { contact } from '../../data/contact';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { DisplayHeading } from '../ui/DisplayHeading';
import { Reveal } from '../ui/Reveal';
import './Contact.css';

export function Contact() {
  return (
    <Section id="contact" spacing="default" aria-labelledby="contact-heading">
      <Container size="narrow">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
        </Reveal>

        <Reveal delay={80}>
          <DisplayHeading
            as="h2"
            variant="section"
            id="contact-heading"
            className="contact__heading"
          >
            {contact.heading}
          </DisplayHeading>
        </Reveal>

        <Reveal delay={120}>
          <p className="body-text body-text--lg contact__lead">{contact.lead}</p>
        </Reveal>

        <Reveal delay={160}>
          <ul className="contact__invite" aria-label="Open to">
            {contact.invite.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <div className="contact__block">
            <p className="contact__cta-label">Let&apos;s talk.</p>

            <a
              href={`mailto:${contact.email}`}
              className="contact__email transition-base"
            >
              {contact.email}
            </a>

            <div className="contact__links">
              <Button
                variant="outline"
                size="md"
                as="a"
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="md"
                as="a"
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                variant="ghost"
                size="md"
                as="a"
                href={`tel:${contact.phone}`}
              >
                {contact.phoneDisplay}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
