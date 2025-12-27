import './Footer.css';
import logo from './Logo.png';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <img src={logo} alt="Little Lemon logo" width="80" />
        </div>

        <nav aria-label="Footer navigation">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>

        <address>
          <h4>Contact</h4>
          <ul>
            <li><a href="#">Our Location</a></li>
            <li><a href="#">+1-773-123-4567</a></li>
            <li><a href="#">Email Us</a></li>
          </ul>
        </address>

        <nav aria-label="Social media links">
          <h4>Social Media Links</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </nav>
      </div>
      <p aria-label='Copyright'>&copy; 2025 Little Lemon | All rights reserved.</p>
    </footer>
  );
}
