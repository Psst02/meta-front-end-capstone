import './Form.css';
import { Formik, useFormikContext } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const bookingSchema = Yup.object({
  date: Yup.string().required('Choose a date'),
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
      validateOnBlur
      enableReinitialize
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
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
  } = useFormikContext();

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
        value={values.date}
        onChange={(e) => {
          handleChange(e);
          dispatch({ type: "UPDATE", date: e.target.value });
        }}
        onBlur={handleBlur}
      />
      {touched.date && errors.date && (
        <p className="feedback" aria-live="polite">{errors.date}</p>
      )}

      <label className="required" htmlFor="time">Time</label>
      <select id="time"
        name="time"
        value={values.time}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="" disabled hidden>Select a Time</option>
        {availableTimes.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {touched.time && errors.time && (
        <p className="feedback" aria-live="polite">{errors.time}</p>
      )}

      <label className="required" htmlFor="guests">Guests</label>
      <input id="guests"
        type="number"
        name="guests"
        value={values.guests}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.guests && errors.guests && (
        <p className="feedback" aria-live="polite">{errors.guests}</p>
      )}

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion"
        name="occasion"
        value={values.occasion}
        onChange={handleChange}
        onBlur={handleBlur}
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
