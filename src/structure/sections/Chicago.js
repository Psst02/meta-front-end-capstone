import './Chicago.css';

import about1 from '../../about images/about1.jpg';
import about2 from '../../about images/about2.jpg';

export default function Chicago() {
    return (
        <section className="about" aria-label="About">
          <div>
            <section>
              <h2 className="shop-name">Little Lemon</h2>
              <h3 className="shop-loc">Chicago</h3>
              <p>
                Little Lemon is a charming neighbourhood bistro that serves simple food and
                classic cocktails in a lively but casual environment. The restaurant features
                a locally-sourced menu with daily specials.
              </p>
            </section>
            <div className="photo-stack">
              <img src={about1} alt="Dish 1" className="photo photo-back" />
              <img src={about2} alt="Dish 2" className="photo photo-front" />
            </div>
          </div>
        </section>
    );
}