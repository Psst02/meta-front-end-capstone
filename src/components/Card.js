import './Card.css';

export default function Card({ url, title, price, description }) {
    return (
        <article className="card">
          <img src={url} alt={title}/>
          <div className="text-content">
            <header>
              <h3>{title}</h3>
              <p className="price">${price}</p>
            </header>
            <p>{description}</p>
            <p>
              Order Delivery&ensp;
              <span>
                <i className="fa-solid fa-person-biking" aria-hidden="true"></i>
              </span>
            </p>
          </div>
        </article>
    );
}