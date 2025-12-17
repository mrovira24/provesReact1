import React, { useState } from "react";

function Comptador({valorInicial}) {
  const valorI = valorInicial;
  const [compte, setCompte] = useState(valorI); //**

  return (
    <div>
      <p>Compte: {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>Incrementa</button>
      <button onClick={() => setCompte(compte - 1)}>Decrementa</button>
    </div>
  );
}

export default Comptador;
