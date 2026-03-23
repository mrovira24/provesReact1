import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Benvinguts a la nostra botiga! </h1>
      <p>Explora el nostre catàleg per trobar les millors ofertes.</p>
      
      {/* Exemple de navegació programàtica amb un botó */}
      <button 
        onClick={() => navigate('/productes')}
        style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px' }}
      >
        Anar als Productes
      </button>
    </div>
  );
};

export default Home;