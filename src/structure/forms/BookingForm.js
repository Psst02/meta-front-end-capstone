import './Form.css';
import { useEffect } from "react";
import { useFormHelper } from './useFormHelper';

import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);

const maxDate = new Date(today);
maxDate.setDate(maxDate.getDate() + 7);

const bookingSchema = Yup.object({
  date: Yup.date()
    .required('Choose a date')
    .min(today, "Select a future date")
    .max(maxDate, "Must be within 7 days"),
  time: Yup.string().required('Choose a time slot'),
  guests: Yup.number()
    .required('Required field')
    .min(1, 'At least 1 diner')
    .max(10, 'Max capacity exceeded'),
});

export default function BookingForm({
  availableTimes,
  dispatch,
  data,
  updateData,
  onValidChange,
  onNext,
}) {
  return (
    <Formik
      initialValues={data}
      validationSchema={bookingSchema}
      validateOnMount
      validateOnChange
      onSubmit={(values) => {
        updateData(values);
        onNext();
      }}
    >
      <BookingFormContent
        availableTimes={availableTimes}
        dispatch={dispatch}
        updateData={updateData}
        onValidChange={onValidChange}
      />
    </Formik>
  );
}

function BookingFormContent({
  availableTimes,
  updateData,
  dispatch,
  onValidChange,
}) {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormikContext();

  const { interacted, markInteracted, fieldClass } = useFormHelper();

  useEffect(() => {
    updateData(values);
    onValidChange(isValid);
  }, [isValid, values]);

  return (
    <form onSubmit={handleSubmit}>
      <label className="required" htmlFor="date">Date</label>
      <input id="date"
        type="date"
        name="date"
        min={formatDate(today)}
        max={formatDate(maxDate)}
        value={values.date}
        onFocus={() => markInteracted("date")}
        onChange={(e) => {
          handleChange(e);
          dispatch({ type: "UPDATE", date: e.target.value });
        }}
        className={`${fieldClass("date", errors)}`}
      />
      {interacted.date && errors.date && (
        <p className="feedback" aria-live="polite">{errors.date}</p>
      )}

      <label className="required" htmlFor="time">Time</label>
      <select id="time"
        name="time"
        value={values.time}
        onFocus={() => markInteracted("time")}
        onChange={handleChange}
        className={`${fieldClass("time", errors)}`}
      >
        <option value="" disabled hidden>Select a Time</option>
        {availableTimes.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {interacted.time && errors.time && (
        <p className="feedback" aria-live="polite">{errors.time}</p>
      )}

      <label className="required" htmlFor="guests">Guests</label>
      <input id="guests"
        type="number"
        name="guests"
        value={values.guests}
        onFocus={() => markInteracted("guests")}
        onChange={handleChange}
        className={`${fieldClass("guests", errors)}`}
      />
      {interacted.guests && errors.guests && (
        <p className="feedback" aria-live="polite">{errors.guests}</p>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion"
        name="occasion"
        value={values.occasion}
        onChange={handleChange}
      >
        <option value="" disabled hidden> Occasion </option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Graduation">Graduation</option>
        <option value="None">None</option>
      </select>

      <button type="submit"
        className="preset-btn"
        disabled={!isValid}
      >
        Confirm Options
      </button>
    </form>
  );
}

function formatDate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}