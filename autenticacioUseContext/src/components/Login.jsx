import { useAuth } from '../context/AuthContext'

function Login() {
  const { login } = useAuth();

  return (
    <button onClick={() => login('Joan')}>
      Inicia sessió com a Joan
    </button>
  );
}

export default Login; 