import './Nav.css';
import logo from './Logo.svg';

export default function Nav() {
    return(
        <nav>
          <img src={logo} alt="Little Lemon logo"/>
          <ul className="nav-links">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">RESERVATIONS</a></li>
            <li><a href="#">ORDER ONLINE</a></li>
            <li><a href="#">LOGIN</a></li>
          </ul>
        </nav>
    );
}