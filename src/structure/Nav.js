import './Nav.css';
import logo from '../logos/Logo.svg';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
      if (e.key === "ArrowDown" || e.key === "ArrowUp") e.preventDefault();
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
          aria-label="Open navigation menu"
          onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faBars} size="lg" aria-hidden="true" />
        </button>
      </nav>

      {isOpen && (
        <div
          className="backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <aside ref={sideNavRef}
        id="side-menu"
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
          <ul className="nav-links mobile" onClick={closeMenu}>
            <NavLinks />
          </ul>
        </nav>
      </aside>
    </>
  );
}

function NavLinks() {
  return (
    <>
      <li><Link to="/">HOME</Link></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#">MENU</a></li>
      <li><Link to="/booking">RESERVATIONS</Link></li>
      <li><a href="#">ORDER ONLINE</a></li>
      <li><a href="#">LOGIN</a></li>
    </>
  );
}
