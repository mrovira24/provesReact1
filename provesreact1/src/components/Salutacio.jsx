import React from "react";

function Salutacio({nom , edat}) {
  return (
    <div>
      <h2>Hola, {nom}!</h2>
      <p>Tens {edat} anys.</p>
    </div>
  );
}

export default Salutacio;
