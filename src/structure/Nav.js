import './Nav.css';
import logo from '../logos/Logo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

        <button className="hamburger-btn"
          aria-expanded={isOpen}
          aria-controls="side-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(prev => !prev)}>
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

      <aside id="side-menu" className={`side-nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-links mobile" onClick={closeMenu}>
          <NavLinks />
        </ul>
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
