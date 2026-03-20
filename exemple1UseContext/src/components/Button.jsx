import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Button() {

  const { theme } = useContext(ThemeContext);

  return <button>Soc un botó {theme}</button>
}
export default Button;