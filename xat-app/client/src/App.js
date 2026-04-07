import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Chat from "./pages/Chat";

// 🔒 Ruta protegida
const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("username"); // comprovem login
  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirigir ruta inicial */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Llista de sales */}
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />

        {/* Sala de xat */}
        <Route
          path="/chat/:roomId"
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />

        {/* Ruta desconeguda */}
        <Route path="*" element={<h2>404 - Pàgina no trobada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;