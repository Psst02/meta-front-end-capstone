import './Form.css';

export default function BookingForm({
  availableTimes,
  dispatch,
  data,
  onChange,
  onValidChange,
  onNext
}) {
    const handleSubmit = (e) => {
      e.preventDefault();
      onNext();
    }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose Date</label>
          <input type="date"
            id="res-date"
            value={data.date}
            onChange={(e) => {
              onChange({ date: e.target.value });
              dispatch({ type: "UPDATE", date: e.target.value });
            }}
            required
          />

          <label htmlFor="res-time">Choose Time</label>
          <select id="res-time"
            value={data.time}
            onChange={e => onChange({ time: e.target.value })}
            required
          >
            <option value="" disabled hidden>
              Select a Time
            </option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>

          <label htmlFor="guests">Number of Guests</label>
          <input type="number"
            id="guests"
            value={data.guests}
            onChange={e => onChange({ guests: e.target.value })}
            min="1"
            max="10"
            required
          />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion"
            value={data.occasion}
            onChange={e => onChange({ occasion: e.target.value })}
            required
          >
            <option value="" disabled hidden>
              Occasion
            </option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Graduation">Graduation</option>
          </select>

          <button className="preset-btn" type="submit">Confirm Options</button>
        </form>
    );
}