import React, { useState, useEffect } from "react";

function ComptadorTemps() {
  const [segons, setSegons] = useState(0); // temps inicial en segons
  const [actiu, setActiu] = useState(false); // controlar si el comptador està actiu

  useEffect(() => {
    let interval = null;

    if (actiu) {
      interval = setInterval(() => {
        setSegons((prev) => prev + 1);
      }, 1000); // suma 1 cada segon
    } else if (!actiu && interval !== null) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // neteja l'interval quan el component es desmunta o canvia
  }, [actiu]);

  // convertir segons a format HH:MM:SS
  const formatTemps = () => {
    const h = Math.floor(segons / 3600);
    const m = Math.floor((segons % 3600) / 60);
    const s = segons % 60;
    return `${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
  }

  return (
    <div>
      <h2>Temps: {formatTemps()}</h2>
      <button onClick={() => setActiu(true)}>Inicia</button>
      <button onClick={() => setActiu(false)}>Atura</button>
      <button onClick={() => { setSegons(0); setActiu(false); }}>Reinicia</button>
    </div>
  );
}

export default ComptadorTemps;
