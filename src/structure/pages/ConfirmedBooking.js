import './Booking.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ConfirmedBooking() {
    return (
        <section className="green-bg">
          <h1>Confirmation</h1>
          <div className="message-container">
            <FontAwesomeIcon icon={faCircleCheck}
              style={{ color: "#495E57" }}
              size="2xl"
              className="check-icon"
            />
            <p>Successfully reserved. A confirmation message will be sent to you shortly
              with your booking details.
            </p>
            <Link to="/">
              <button className="preset-btn">Back to Home</button>
            </Link>
          </div>
        </section>
    );
}