import React, { useState } from "react";

function Contador() {
  const [compte, setCompte] = useState(0); //**

  return (
    <div>
      <p>Compte: {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>Incrementa</button>
      <button onClick={() => setCompte(compte - 1)}>Decrementa</button>
    </div>
  );
}

export default Contador;
