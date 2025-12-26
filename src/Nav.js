import logo from './Logo.svg';

export function Nav() {
    return(
        <nav>
            <img src={logo} alt="Little Lemon logo"/>
            <ul>
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