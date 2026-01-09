import './Testimonial.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Testimonial({ rating, url, username, review }) {
    const validRating = Math.max(0, Math.min(rating, 5));

    return (
        <article className="review">
          <div role="img" aria-label={`Rating: ${validRating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
              <FontAwesomeIcon key={i}
                icon={i < validRating ? solidStar : regularStar}
                size="sm" style={{color: "#FFD43B",}}
                aria-hidden="true"
              />
            ))}
          </div>
          <figure>
            <img src={url} alt={`${username}`} />
            <figcaption className="section-title">{username}</figcaption>
          </figure>
          <blockquote>
            <p>{review}</p>
          </blockquote>
        </article>
    );
}