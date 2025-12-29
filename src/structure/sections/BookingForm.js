import './BookingForm.css';
import { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    return (
        <form>
          <h1>Reservation</h1>

          <div className="form-container">
            <label htmlFor="res-date">Choose Date</label>
            <input type="date"
              id="res-date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                dispatch({ type: "UPDATE", date: e.target.value })
              }}
              required
            />

            <label htmlFor="res-time">Choose Time</label>
            <select id="res-time"
              value={time}
              onChange={e => setTime(e.target.value)}
              required
            >
              <option value="" disabled selected hidden>
                Select a Time
              </option>
              {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>

            <label htmlFor="guests">Number of Guests</label>
            <input type="number"
              id="guests"
              value={guests}
              onChange={e => setGuests(e.target.value)}
              min="1"
              max="10"
              required
            />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion"
              value={occasion}
              onChange={e => setOccasion(e.target.value)}
              required
            >
              <option value="" disabled selected hidden>
                Occasion
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Graduation">Graduation</option>
            </select>

            <button className="preset-btn" type="submit">Make your Reservation</button>
          </div>
        </form>
    );
}