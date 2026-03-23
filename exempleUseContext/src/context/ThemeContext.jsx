
import { createContext, useState } from 'react';

// 1. Creem l'objecte Context
export const ThemeContext = createContext();

// 2. Creem el component Provider que exportarem
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};