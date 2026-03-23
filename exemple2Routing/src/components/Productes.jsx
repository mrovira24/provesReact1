import React from 'react';
import { Link } from 'react-router-dom';

const Productes = () => {
  // Simulació de dades
  const llistaProductes = [
    { id: 1, nom: 'Portàtil Pro', preu: '1200€' },
    { id: 2, nom: 'Ratolí Gaming', preu: '45€' },
    { id: 3, nom: 'Teclat Mecànic', preu: '90€' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>El nostre catàleg</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {llistaProductes.map((prod) => (
          <li key={prod.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
            <strong>{prod.nom}</strong> - {prod.preu} 
            <br />
            {/* Creem un link dinàmic cap al detall de cada producte */}
            <Link to={`/productes/${prod.id}`} style={{ color: '#007bff', fontSize: '0.9em' }}>
              Veure detalls
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productes;