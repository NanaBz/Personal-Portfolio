import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { ImageFrame } from '../ui/ImageFrame';
import { images } from '../../lib/images';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Container className="hero__container">
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow hero-entrance hero-entrance--1">
            Nanakwaku Boakye-Akyeampong / NBA
          </p>

          <h1 id="hero-heading" className="hero__heading">
            <span className="hero__line hero-entrance hero-entrance--2">
              I have a lot of
            </span>
            <span className="hero__line hero__line--accent hero-entrance hero-entrance--3">
              ideas.
            </span>
            <span className="hero__line hero__line--statement hero-entrance hero-entrance--4">
              I do something about them.
            </span>
          </h1>

          <p className="body-text body-text--lg hero__supporting hero-entrance hero-entrance--5">
            I&apos;m an aspiring Data Scientist, creative problem solver, and builder
            who uses technology to turn ideas into something real.
          </p>

          <div className="hero__actions hero-entrance hero-entrance--6">
            <Button variant="primary" size="lg" as="a" href="#story">
              Explore My Story
            </Button>
            <Button variant="outline" size="lg" as="a" href="#selected-work">
              See What I&apos;ve Built
            </Button>
          </div>

          <p className="hero__tagline label hero-entrance hero-entrance--7">
            Data by direction. Ideas by instinct.
          </p>
        </div>

        <div className="hero__visual hero-entrance hero-entrance--3">
          <ImageFrame
            src={images.profile.hero}
            alt={images.profile.alt.hero}
            aspectRatio="portrait"
            priority
            className="hero__portrait"
          />
        </div>
      </Container>
    </section>
  );
}
