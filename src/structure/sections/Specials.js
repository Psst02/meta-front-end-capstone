import './Specials.css';

import Button from '../../components/Button.js';
import Card from '../../components/Card.js';

import bruschetta from '../../food images/bruschetta.svg';
import greekSalad from '../../food images/greek salad.jpg';
import lemonDessert from '../../food images/lemon dessert.jpg';

export default function Specials() {
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

    return (
        <section className="highlights" id="highlights">
          <header>
            <h2>Specials</h2>
            <Button text="Open Menu" />
          </header>
          <ul>
            {specials.map(dish => (
                <li key={dish.title}>
                  <Card url={dish.url}
                    title={dish.title}
                    price={dish.price}
                    description={dish.description}
                  />
                </li>
            ))}
          </ul>
        </section>
    );
}