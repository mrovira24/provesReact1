import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <>
          <span>Hola, {user.name}</span>
          <button onClick={logout}>Sortir</button>
        </>
      ) : (
        <span>No has iniciat sessió</span>
      )}
    </nav>
  );
}

export default Navbar;