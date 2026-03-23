import { useContext } from 'react';
// Importem el context que hem creat al fitxer ThemeContext.jsx
import { ThemeContext } from '../context/ThemeContext';

const Button = () => {
  // Extraiem les dades que necessitem del context
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Definim uns estils bàsics depenent del tema
  const estilBoto = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    border: '2px solid #555',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 1s ease'
  };

  return (
    <button style={estilBoto} onClick={toggleTheme}>
      Soc un botó en mode: **{theme.toUpperCase()}**
    </button>
  );
};

export default Button;