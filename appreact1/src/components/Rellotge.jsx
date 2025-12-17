import React, { useState, useEffect } from "react";

function Rellotge() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // neteja interval al desmuntar
  }, []);

  return <h3>Hora actual: {hora}</h3>;
}

export default Rellotge;
