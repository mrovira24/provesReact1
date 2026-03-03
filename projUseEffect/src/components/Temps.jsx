import React, { useState, useEffect } from "react";

function Temps() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // neteja l’interval
  });

  return <h2>{hora}</h2>;
}

export default Temps;
