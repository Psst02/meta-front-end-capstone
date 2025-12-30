import './Nav.css';
import logo from '../logos/Logo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
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
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <aside id="side-menu"
        className={`side-nav ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
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
