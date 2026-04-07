import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    // Guardar username a localStorage
    localStorage.setItem("username", username);

    // Redirigir a llista de sales
    navigate("/rooms");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Inicia sessió</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Introdueix el teu nom"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", width: "200px" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;