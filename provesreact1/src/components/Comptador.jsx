import React, { useState } from "react";

function Comptador({valorInicial}) {
 
  const [compte, setCompte] = useState(valorInicial); //**

  return (
    <div>
      <p>Compte: {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>Incrementa</button>
      <button onClick={() => setCompte(compte - 1)}>Decrementa</button>
    </div>
  );
}

export default Comptador;
