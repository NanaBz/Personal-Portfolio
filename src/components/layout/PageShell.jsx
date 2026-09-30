import { Navigation } from '../navigation/Navigation';
import { BackToTop } from '../ui/BackToTop';
import { Footer } from './Footer';
import './PageShell.css';

export function PageShell({ children }) {
  return (
    <div id="top" className="page-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="page-shell__main">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
