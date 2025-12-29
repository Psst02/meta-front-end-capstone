import './Nav.css';
import logo from '../logos/Logo.svg';

export default function Nav() {
    return(
        <nav>
          <img src={logo} alt="Little Lemon logo"/>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">RESERVATIONS</a></li>
            <li><a href="#">ORDER ONLINE</a></li>
            <li><a href="#">LOGIN</a></li>
          </ul>
        </nav>
    );
}