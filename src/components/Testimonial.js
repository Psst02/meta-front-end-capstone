import './Testimonial.css';

export default function Testimonial({ rating, url, username, review }) {
    const validRating = Math.max(0, Math.min(rating, 5));

    return (
        <article className="review">
          <div role="img" aria-label={`Rating: ${validRating} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
              <i key={i}
                className={`${i < validRating ? "fa-solid" : "fa-regular"} fa-star`}
                style={{ color: "#FFD43B" }}
                aria-hidden="true">
              </i>
            ))}
          </div>
          <figure>
            <img src={url} alt={`${username}'s profile photo`} />
            <figcaption className="section-title">{username}</figcaption>
          </figure>
          <blockquote>
            <p>{review}</p>
          </blockquote>
        </article>
    );
}