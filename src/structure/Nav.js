import './Nav.css';
import logo from '../logos/Logo.svg';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const sideNavRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const focusSelectors = `a[href], button`;
    const focusEl = sideNavRef.current.querySelectorAll(focusSelectors);

    const first = focusEl[0];
    const last = focusEl[focusEl.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="top-nav" aria-label="Primary navigation">
        <img src={logo} alt="Little Lemon logo" />
        <ul className="nav-links desktop">
          <NavLinks />
        </ul>

        <button className="icon-btn"
          aria-expanded={isOpen}
          aria-controls="side-menu"
          aria-label="Open navigation menu on click"
          onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars} size="lg" aria-hidden="true" />
        </button>
      </nav>

      {isOpen && (
        <div
          className="backdrop"
          onPointerDown={closeMenu}
          aria-hidden="true"
        />
      )}

      <aside ref={sideNavRef}
        id="side-menu"
        inert={!isOpen}
        className={`side-nav ${isOpen ? "open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          <header>
            <button className="icon-btn"
              aria-label="Close navigation menu on click"
              onClick={closeMenu}>
              <FontAwesomeIcon icon={faXmark} size="lg" aria-hidden="true" />
            </button>
          </header>
          <hr />
          <ul className="nav-links mobile">
            <NavLinks onNavigate={closeMenu} />
          </ul>
        </nav>
      </aside>
    </>
  );
}

function NavLinks({ onNavigate }) {
  return (
    <>
      <li>
        <NavLink to="/" onClick={onNavigate}>
          HOME
        </NavLink>
      </li>

      <li>
        <a href="/#about" onClick={onNavigate}>
          ABOUT
        </a>
      </li>

      <li>
        <NavLink to="/menu" onClick={onNavigate}>
          MENU
        </NavLink>
      </li>

      <li>
        <NavLink to="/booking" onClick={onNavigate}>
          RESERVATIONS
        </NavLink>
      </li>

      <li>
        <NavLink to="/order-online" onClick={onNavigate}>
          ORDER ONLINE
        </NavLink>
      </li>

      <li>
        <NavLink to="/login" onClick={onNavigate}>
          LOGIN
        </NavLink>
      </li>
    </>
  );
}
