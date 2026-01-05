import './Page.css';
import LoginForm from '../forms/LoginForm';

export default function LoginPage() {
  return (
      <section className="green-bg">
        <h1>Welcome</h1>
        <LoginForm/>
      </section>
  );
}