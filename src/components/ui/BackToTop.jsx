import { useEffect, useState } from 'react';
import './BackToTop.css';

const SCROLL_THRESHOLD = 480;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <a
      href="#top"
      className={`back-to-top transition-base${visible ? ' is-visible' : ''}`}
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <span className="back-to-top__icon" aria-hidden="true">
        ↑
      </span>
      <span className="back-to-top__label">Top</span>
    </a>
  );
}
