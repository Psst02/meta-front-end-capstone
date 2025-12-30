import './Card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";

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
                <FontAwesomeIcon icon={faPersonBiking} size="lg" aria-hidden="true"/>
              </span>
            </p>
          </div>
        </article>
    );
}