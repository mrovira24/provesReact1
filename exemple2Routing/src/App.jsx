import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Productes from './components/Productes';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inici</Link> | 
        <Link to="/productes">Productes</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productes" element={<Productes />} />
        <Route path="*" element={<h1>404 - Pàgina no trobada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
