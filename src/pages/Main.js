import './Main.css';
import Button from './components/Button.js';
import Card from './components/Card.js';
import Testimonial from './components/Testimonial.js';

import bruschetta from './food images/bruschetta.svg';
import greekSalad from './food images/greek salad.jpg';
import lemonDessert from './food images/lemon dessert.jpg';

import pfp1 from './profile images/pfp1.jpg';
import pfp2 from './profile images/pfp2.jpg';
import pfp3 from './profile images/pfp3.webp';
import pfp4 from './profile images/pfp4.jpg';

import about1 from './about images/about1.jpg';
import about2 from './about images/about2.jpg';

export default function Main() {
    const specials = [
        {
            url: bruschetta,
            title: "Bruschetta",
            price: "5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
        },
        {
            url: greekSalad,
            title: "Greek Salad",
            price: "12.99",
            description: "The famous Greek Salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        },
        {
            url: lemonDessert,
            title: "Lemon Cake",
            price: "5.00",
            description: "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined."
        },
    ];

    const testimonials = [
      {
        rating: 5,
        url: pfp1,
        username: "Sarah M.",
        review: "Amazing food and cozy atmosphere. The lemon dessert is a must-try!"
      },
      {
        rating: 4,
        url: pfp3,
        username: "James K.",
        review: "Great service and fresh flavors. Will definitely come back again."
      },
      {
        rating: 4,
        url: pfp2,
        username: "Amina R.",
        review: "Best Mediterranean place in town. Everything tasted authentic."
      },
      {
        rating: 5,
        url: pfp4,
        username: "Daniel T.",
        review: "Lovely experience overall. The staff were friendly and helpful."
      },
    ];

    return(
        <main>
          <section className="highlights" aria-label="Highlights">
            <div className="highlights-header">
              <h2>Specials</h2>
              <Button text="Open Menu" />
            </div>
            <div className="card-container">
              {specials.map(dish => (
                  <Card key={dish.title}
                    url={dish.url}
                    title={dish.title}
                    price={dish.price}
                    description={dish.description}
                  />
              ))
              }
            </div>
          </section>
          <section className="testimonials" aria-label="Testimonials">
            <h2>Testimonials</h2>
            <div className="review-container">
              {testimonials.map(person => (
                  <Testimonial key={person.username}
                    rating={person.rating}
                    url={person.url}
                    username={person.username}
                    review={person.review}
                  />
              ))}
            </div>
          </section>
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
        </main>
    );
}