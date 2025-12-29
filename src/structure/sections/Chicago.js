import './Chicago.css';

import about1 from '../../about images/about1.jpg';
import about2 from '../../about images/about2.jpg';

export default function Chicago() {
    return (
        <section className="about" id="about">
          <div>
            <article>
              <header>
                <h2 className="shop-name">Little Lemon</h2>
                <p className="shop-loc">Chicago</p>
              </header>
              <p className="about-desc">
                Little Lemon is a charming neighbourhood bistro that serves simple food and
                classic cocktails in a lively but casual environment. The restaurant features
                a locally-sourced menu with daily specials.
              </p>
            </article>
            <div className="photo-stack" aria-hidden="true">
              <img src={about1}
                alt="Dish 1"
                className="photo photo-back"
              />
              <img src={about2}
                alt="Dish 2"
                className="photo photo-front"
              />
            </div>
          </div>
        </section>
    );
}