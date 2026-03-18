import { createContext, useState, useContext } from 'react';

// 1. Creem el context
const AuthContext = createContext();

// 2. Creem el Provider personalitzat
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Aquí aniria la crida a l'API
    setUser({ name: userData, role: 'admin' });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Hook personalitzat per facilitar el consum (Opcional però recomanat)
export const useAuth = () => useContext(AuthContext);