import './Footer.css';
import logo from '../logos/Logo.png';
import GuardedLink from '../components/GuardedLink';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <img src={logo} alt="Little Lemon logo" width="80" />
        </div>

        <nav aria-label="Footer navigation">
          <h4 className="section-title">Navigation</h4>
          <ul>
            <li><GuardedLink to="/">Home</GuardedLink></li>
            <li><GuardedLink href="/#about">About</GuardedLink></li>
            <li><GuardedLink to="/menu">Menu</GuardedLink></li>
            <li><GuardedLink to="/booking">Reservations</GuardedLink></li>
            <li><GuardedLink to="/order-online">Order Online</GuardedLink></li>
            <li><GuardedLink to="/login">Login</GuardedLink></li>
          </ul>
        </nav>

        <address>
          <h4 className="section-title">Contact</h4>
          <ul>
            <li><a href="/" target="_blank" rel="noreferrer">Our Location</a></li>
            <li><a href="/" target="_blank" rel="noreferrer">+1-773-123-4567</a></li>
            <li><a href="/" target="_blank" rel="noreferrer">Email Us</a></li>
          </ul>
        </address>

        <nav aria-label="Social media links">
          <h4 className="section-title">Social Media Links</h4>
          <ul>
            <li><a href="/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="/" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="/" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </nav>
      </div>
      <p aria-label='Copyright'>&copy; 2025 Little Lemon | All rights reserved.</p>
    </footer>
  );
}
