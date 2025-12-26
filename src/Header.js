import './Header.css';
import image from './foodPlatter.jpg';

export default function Header() {
    return(
        <header>
          <div className="text-container">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

            <button>Reserve a Table</button>
          </div>
          <div className="image-container">
            <img src={image} alt="Food platter" />
          </div>
        </header>
    );
}