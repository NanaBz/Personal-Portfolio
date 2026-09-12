import { contact, footer } from '../../data/contact';
import { site } from '../../data/site';
import { Container } from './Container';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <Container>
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="footer__name-short">{site.preferredName}</p>
            <p className="footer__name-full">{site.name}</p>
            <ul className="footer__tagline">
              {footer.tagline.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <nav className="footer__links" aria-label="Footer">
            <a href={`mailto:${contact.email}`} className="footer__link transition-base">
              Email
            </a>
            <a
              href={contact.linkedin}
              className="footer__link transition-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={contact.github}
              className="footer__link transition-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>
        </div>

        <p className="footer__copyright">
          &copy; {year} {site.name}
        </p>
      </Container>
    </footer>
  );
}
