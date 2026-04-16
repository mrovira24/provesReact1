// App.jsx
import { useState, useEffect, useRef } from 'react';

function App() {
  const [missatges, setMissatges] = useState([]);
  const [input, setInput] = useState('');
  const socketRef = useRef(null);

  useEffect(() => {
    // Ens connectem al servidor que hem creat abans
    socketRef.current = new WebSocket('ws://localhost:8080');

    socketRef.current.onmessage = (event) => {
      // Afegim el nou missatge a la llista
      setMissatges((prev) => [...prev, event.data]);
    };

    // Tanquem la connexió en desmuntar el component
    return () => socketRef.current.close();
  }, []);

  const enviarMissatge = (e) => {
    e.preventDefault();
    if (input.trim() && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(input);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>WebSocket Chat 💬</h2>
      <div style={{ border: '1px solid #ccc', height: '200px', overflowY: 'scroll', marginBottom: '10px', padding: '10px' }}>
        {missatges.map((m, i) => (
          <div key={i}><strong>Usuari:</strong> {m}</div>
        ))}
      </div>
      <form onSubmit={enviarMissatge}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Escriu alguna cosa..."
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
