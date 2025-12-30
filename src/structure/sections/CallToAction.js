import './CallToAction.css';
import { Link } from 'react-router-dom';
import image from '../../food images/foodPlatter.jpg';

export default function CallToAction() {
  return (
    <header className="hero" id="hero">
      <div>
        <section>
          <h1 className="shop-name">Little Lemon</h1>
          <p className="shop-loc">Chicago</p>
          <p className="hero-desc">
            We are a family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <Link to="/booking">
            <button className="preset-btn">Reserve a Table</button>
          </Link>
        </section>
        <figure>
          <img src={image} alt="Food platter served at Little Lemon" />
        </figure>
      </div>
    </header>
  );
}
