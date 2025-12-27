import './Header.css';
import image from './foodPlatter.jpg';
import Button from './components/Button.js';
import Title from './components/Title.js';

export default function Header() {
  return (
    <header>
      <div aria-label="Hero">
        <section>
          <div>
            <Title />
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
