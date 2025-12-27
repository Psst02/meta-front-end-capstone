import './Card.css';

export default function Card({ url, title, price, description }) {
    return (
        <article aria-label="Food card">
          <img src={url} alt={title}/>
          <div className="text-content">
            <div className="card-header" aria-label="Card header">
                <h3 aria-label="Food name">{title}</h3>
                <p aria-label="Price">${price}</p>
            </div>
            <p aria-label="Food description">{description}</p>
            <p>Order Delivery&nbsp;&nbsp;
                <span><i className="fa-solid fa-person-biking"></i></span>
            </p>
          </div>
        </article>
    );
}