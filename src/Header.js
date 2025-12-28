import './Header.css';
import image from './foodPlatter.jpg';
import Button from './components/Button.js';

export default function Header() {
  return (
    <header>
      <div aria-label="Hero">
        <section>
          <div>
            <h1 style={{ color: "#F4CE14" }}>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on traditional
              recipes served with a modern twist.
            </p>
          </div>
          <Button text="Reserve a Table" />
        </section>
        <figure>
          <img src={image} alt="Food platter" />
        </figure>
      </div>
    </header>
  );
}
