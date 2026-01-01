import './Form.css';
import { Formik } from "formik";
import * as Yup from "yup";

const bookingSchema = Yup.object({
  date: Yup.string().required('Choose a date.'),
  time: Yup.string().required('Choose a time slot.'),
  guests: Yup.number()
    .min(1, 'At least 1 diner.')
    .max(10, 'Max capacity exceeded.')
    .required('Required field.'),
});

export default function BookingForm({
  availableTimes,
  dispatch,
  data,
  onChange,
  onValidChange,
  onNext,
}) {
    return (
        <Formik initialValues={data}
          validationSchema={bookingSchema}
          validateOnChange
          validateOnBlur
          enableReinitialize
          onSubmit={onNext}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isValid,
          }) => {
            const allTouched =
              touched.date &&
              touched.time &&
              touched.guests;

            onValidChange(isValid && allTouched);

            return (
              <form onSubmit={handleSubmit}>
                <label htmlFor="date-id">Date</label>
                <input type="date"
                  id="date-id"
                  name="date"
                  value={values.date}
                  onChange={(e) => {
                    handleChange(e);
                    onChange({ date: e.target.value });
                    dispatch({ type: "UPDATE", date: e.target.value });
                  }}
                />
                {touched.date && errors.date && <p>{errors.date}</p>}

                <label htmlFor="time-id">Time</label>
                <select id="time-id"
                  name="time"
                  value={values.time}
                  onChange={(e) => {
                    handleChange(e);
                    onChange({ time: e.target.value });
                  }}
                >
                  <option value="" disabled hidden>
                    Select a Time
                  </option>
                  {availableTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {touched.time && errors.time && <p>{errors.time}</p>}

                <label htmlFor="guests-id">Number of Guests</label>
                <input type="number"
                  id="guests-id"
                  name="guests"
                  min="1"
                  max="10"
                  value={values.guests}
                  onChange={(e) => {
                    handleChange(e);
                    onChange({ guests: e.target.value });
                  }}
                />
                {touched.guests && errors.guests && <p>{errors.guests}</p>}

                <label htmlFor="occasion-id">Occasion</label>
                <select id="occasion-id"
                  name="occasion"
                  value={values.occasion}
                  onChange={(e) => {
                    handleChange(e);
                    onChange({ occasion: e.target.value });
                  }}
                >
                  <option value="" disabled hidden>
                    Occasion
                  </option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Graduation">Graduation</option>
                </select>

                <button className="preset-btn"
                  type="submit"
                  disabled={!isValid || !allTouched}
                >
                  Confirm Options
                </button>
              </form>
            );
          }}
        </Formik>
    );
}