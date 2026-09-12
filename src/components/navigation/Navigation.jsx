import { useEffect, useId, useState } from 'react';
import { site } from '../../data/site';
import { NAV_LINKS } from '../../data/navigation';
import { Button } from '../ui/Button';
import './Navigation.css';

const DESKTOP_LINKS = NAV_LINKS.filter((link) => link.href !== '#contact');

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('nav-menu-open');

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('nav-menu-open');
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <header className="nav" role="banner">
      <div className="nav__inner">
        <a href="#main-content" className="nav__brand transition-base" aria-label={`${site.preferredName} — home`}>
          {site.preferredName}
        </a>

        <nav className="nav__actions" aria-label="Primary">
          {DESKTOP_LINKS.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              size="sm"
              as="a"
              href={link.href}
              className="nav__desktop-link"
            >
              {link.label}
            </Button>
          ))}

          <Button
            variant="ghost"
            size="sm"
            className="nav__menu-btn"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMenu}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </Button>

          <Button variant="outline" size="sm" as="a" href="#contact">
            Contact
          </Button>
        </nav>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="nav__backdrop"
          aria-label="Dismiss menu"
          onClick={closeMenu}
          tabIndex={-1}
        />
      )}

      <div
        id={menuId}
        className={`nav__mobile-panel${menuOpen ? ' is-open' : ''}`}
        hidden={!menuOpen}
      >
        <ul className="nav__mobile-list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__mobile-link transition-base" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
