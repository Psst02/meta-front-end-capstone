export default function Testimonial({ rating, url, username, review }) {
    const max = 5;
    const review = [];
    if (rating <= max) {
        
        <span><i class="fa-regular fa-star" style="color: #FFD43B;"></i></span>
    }
    const altText = `${username}'s photo`;
    return (
        <article className="review">
          <div aria-label="Ratings">
            {rating.map(star => (
                <span><i class="fa-solid fa-star" style="color: #FFD43B;"></i></span>
            ))}
          </div>
          <img src={url} alt={altText} />
          <h3 aria-label="Username"></h3>
          <p>{review}</p>
        </article>
    );
}