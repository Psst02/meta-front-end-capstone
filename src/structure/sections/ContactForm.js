import './Form.css';
import { Formik } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object({
  firstName: Yup.string().required('Required field.'),
  lastName: Yup.string().required('Required field.'),
  phone: Yup.number()
    .min(1, 'At least 1 diner.')
    .max(10, 'Max capacity exceeded.')
    .required('Required field.'),
});


export default function BookingForm({
    data,
    onChange,
    onValidChange,
    onSubmit
}) {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit();
    }
    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input type="text"
            id="first-name"
            placeholder="Jane"
            value={data.firstName}
            onChange={e => onChange({ firstName: e.target.value })}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input type="text"
            id="last-name"
            placeholder="Doe"
            value={data.lastName}
            onChange={e => onChange({ lastName: e.target.value })}
            required
          />

          <label htmlFor="phone-no">Mobile No.</label>
          <input type="tel"
            id="phone-no"
            placeholder="312-123-4567"
            value={data.phone}
            onChange={e => onChange({ phone: e.target.value })}
            pattern="^(312|773|872)[-\s]?\d{3}[-\s]?\d{4}$"
            title="Chicago phone number (e.g. 312-123-4567)"
            required
          />

          <button className="preset-btn" type="submit">Reserve Table</button>
        </form>
    );
}