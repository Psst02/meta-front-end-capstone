import './Nav.css';
import logo from '../logos/Logo.svg';
import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FocusTrap } from 'focus-trap-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const sideNavRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

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

      <FocusTrap
        active={isOpen}
        focusTrapOptions={{
          escapeDeactivates: true,
          returnFocusOnDeactivate: true,
          clickOutsideDeactivates: true,
          onDeactivate: closeMenu,
          fallbackFocus: '#side-menu',
        }}
      >
        <aside ref={sideNavRef}
          id="side-menu"
          className={`side-nav ${isOpen ? 'open' : ''}`}
          inert={!isOpen}
        >
          <nav aria-label="Mobile navigation">
            <header>
              <button className="icon-btn"
                aria-label="Close navigation menu"
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon={faXmark} size="lg" aria-hidden="true" />
              </button>
            </header>
            <hr />
            <ul className="nav-links mobile">
              <NavLinks onNavigate={closeMenu} />
            </ul>
          </nav>
        </aside>
      </FocusTrap>
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
