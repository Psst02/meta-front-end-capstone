import './Form.css';
import { Formik, useFormikContext } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const contactSchema = Yup.object({
  firstName: Yup.string().required('Required field'),
  lastName: Yup.string().required('Required field'),
  phone: Yup.string()
    .matches(/^(312|773|872)[-\s]?\d{3}[-\s]?\d{4}$/, 'Must be a Chicago number')
    .required('Required field'),
});

export default function ContactForm({
  data,
  updateData,
  onValidChange,
  onSubmit,
}) {
  return (
    <Formik
      initialValues={data}
      validationSchema={contactSchema}
      validateOnMount
      validateOnChange
      validateOnBlur
      enableReinitialize
      onSubmit={(values) => {
        updateData(values);
        onSubmit();
      }}
    >
      <ContactFormContent
        updateData={updateData}
        onValidChange={onValidChange}
      />
    </Formik>
  );
}

function ContactFormContent({ onValidChange, updateData }) {
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
  }, [isValid, onValidChange]);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName" className="required">
        First Name
      </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="Jane"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.firstName && errors.firstName && (
        <p className="feedback" aria-live="polite">{errors.firstName}</p>
      )}

      <label htmlFor="lastName" className="required">
        Last Name
      </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Doe"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.lastName && errors.lastName && (
        <p className="feedback" aria-live="polite">{errors.lastName}</p>
      )}

      <label htmlFor="phone" className="required">
        Mobile No.
      </label>
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="312-123-4567"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        title="Chicago phone number (e.g. 312-123-4567)"
      />
      {touched.phone && errors.phone && (
        <p className="feedback" aria-live="polite">{errors.phone}</p>
      )}

      <button
        type="submit"
        className="preset-btn"
        disabled={!isValid}
      >
        Reserve Table
      </button>
    </form>
  );
}
