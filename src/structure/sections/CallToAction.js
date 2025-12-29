import './CallToAction.css';
import image from '../../food images/foodPlatter.jpg';
import Button from '../../components/Button.js';

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
          <Button text="Reserve a Table" />
        </section>
        <figure>
          <img src={image} alt="Food platter served at Little Lemon" />
        </figure>
      </div>
    </header>
  );
}
