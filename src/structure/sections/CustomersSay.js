import './CustomersSay.css';

import Testimonial from '../../components/Testimonial.js';

import pfp1 from '../../profile images/pfp1.jpg';
import pfp2 from '../../profile images/pfp2.jpg';
import pfp3 from '../../profile images/pfp3.webp';
import pfp4 from '../../profile images/pfp4.jpg';

export default function CustomersSay() {
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

    return (
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
    );
}