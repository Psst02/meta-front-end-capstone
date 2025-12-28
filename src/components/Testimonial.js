import './Testimonial.css';

export default function Testimonial({ rating, url, username, review }) {
    const validRating = Math.max(0, Math.min(rating, 5));
    const altText = `${username}'s photo`;
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
          <figure aria-label="User profile">
            <div className="pfp-container">
              <img src={url} alt={altText} />
            </div>
            <figcaption><h3>{username}</h3></figcaption>
          </figure>
          <q>{review}</q>
        </article>
    );
}