import './Form.css';
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";

const passwordSchema = Yup.string().trim()
  .required('Choose a password')
  .min(15, 'At least 15 characters')
  .max(64, 'Max 64 characters')
  .matches(/[a-z]/, 'Must include a lowercase letter')
  .matches(/[A-Z]/, 'Must include an uppercase letter')
  .matches(/[0-9]/, 'Must include a number');

const loginSchema = Yup.object({
  email: Yup.string().trim()
    .email('Enter a valid email address')
    .required('Email is required'),
  password: passwordSchema,
});

export default function LoginForm() {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      validateOnMount
      validateOnChange
      validateOnBlur
      enableReinitialize
      onSubmit={({resetForm}) => resetForm()}
    >
      <LoginFormContent/>
    </Formik>
  );
}

function LoginFormContent() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
  } = useFormikContext();

  const passwordErrors = [];
  try {
    passwordSchema.validateSync(values.password, { abortEarly: false });
  } catch (err) {
    passwordErrors.push(...err.errors);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label className="required" htmlFor="email">Email</label>
      <input id="email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="example@gmail.com"
      />
      {touched.email && errors.email && (
        <p className="feedback" aria-live="polite">{errors.email}</p>
      )}

      <label className="required" htmlFor="password">Password</label>
      <input id="password"
        type="password"
        name="password"
        value={values.guests}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && passwordErrors.length > 0 && (
        <ul className="feedback-list" aria-live="polite">
          {passwordErrors.map(msg => (
            <li key={msg} className="feedback">{msg}</li>
          ))}
        </ul>
      )}

      <button type="submit"
        className="preset-btn"
        disabled={!isValid}
      >
        Log In
      </button>
      <p className="signup-txt">New user? <a href="#">Sign up</a> now</p>
    </form>
  );
}
