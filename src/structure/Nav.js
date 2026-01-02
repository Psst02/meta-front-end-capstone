import './Nav.css';
import logo from '../logos/Logo.svg';
import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

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
          <NavLinks hasActive={true}/>
        </ul>

        <button className="icon-btn"
          aria-expanded={isOpen}
          aria-controls="side-menu"
          aria-label="Open navigation menu"
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
        <nav>
          <header>
            <button className="icon-btn"
              aria-label="Close navigation menu"
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
  const { pathname, hash } = useLocation();

  return (
    <>
      <li>
        <NavLink to="/"
          end
          className={!hash && pathname === "/" ? "active" : undefined}
          onClick={onNavigate}
        >
          HOME
        </NavLink>
      </li>

      <li>
        <a href="/#about"
          className={hash === "#about" ? "active" : undefined}
          onClick={onNavigate}
        >
          ABOUT
        </a>
      </li>

      <li>
        <NavLink to="/menu"
          end
          className={!hash && pathname === "/menu" ? "active" : undefined}
          onClick={onNavigate}
        >
          MENU
        </NavLink>
      </li>

      <li>
        <NavLink to="/booking"
          className={!hash && pathname === "/booking" ? "active" : undefined}
          onClick={onNavigate}
        >
          RESERVATIONS
        </NavLink>
      </li>

      <li>
        <NavLink to="/order-online"
          end
          className={!hash && pathname === "/order-online" ? "active" : undefined}
          onClick={onNavigate}
        >
          ORDER ONLINE
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/login"
          end
          className={!hash && pathname === "/login" ? "active" : undefined}
          onClick={onNavigate}
        >
          LOGIN
        </NavLink>
      </li>
    </>
  );
}
