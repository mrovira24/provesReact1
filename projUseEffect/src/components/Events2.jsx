import React, { useState, useEffect } from "react";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Funció async per carregar esdeveniments
    const fetchEvents = async () => {
      try {
        // Fer la crida a l'API
        const res = await fetch("/api/events2.json");
        
        // Comprovem que la resposta sigui correcta
        if (!res.ok) {
          throw new Error("No s'han pogut carregar els esdeveniments");
        }

        const contentType = res.headers.get("Content-Type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("El fitxer retornat no és un JSON vàlid");
        }
        
        // Convertim la resposta a JSON
        const data = await res.json();

        // Actualitzem l'estat amb els esdeveniments
        setEvents(data);
      } catch (err) {
        // Si hi ha algun error, el guardem a l'estat
        setError(err.message);
      } finally {
        // Quan acabem, actualitzem l'estat de càrrega
        setLoading(false);
      }
    };

    // Cridem la funció de carregament
    fetchEvents();
  }, []); // L'array buit significa que es cridarà només quan es munta el component

  // Si estem carregant, mostrem un missatge
  if (loading) {
    return <p>Carregant esdeveniments...</p>;
  }

  // Si hi ha algun error, el mostrem
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Si tot va bé, mostrem la llista d'esdeveniments
  return (
    <div>
      <h2>Llista d'esdeveniments</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;


