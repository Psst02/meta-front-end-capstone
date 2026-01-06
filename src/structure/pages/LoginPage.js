import './Page.css';
import LoginForm from '../forms/LoginForm';
import { useNavGuard } from '../../NavGuardContext.js';

export default function LoginPage() {
  const { setIsDirty } = useNavGuard();

  return (
      <section className="green-bg">
        <h1>Welcome</h1>
        <LoginForm setNavDirty={setIsDirty} />
      </section>
  );
}