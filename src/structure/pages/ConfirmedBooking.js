import './Booking.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ConfirmedBooking() {
    return (
        <section className="green-bg">
          <div className="message-container">
            <h3>BOOKING CONFIRMED <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#495E57" }}/></h3>
            <p>A confirmation message will be sent shortly. <a href="#">View Reservation</a>.</p>
          </div>
        </section>
    );
}