import React from "react";



function Salutacio({nom , edat}) {

	function manegadorClic (){
		alert(nom);
	}

  return (
    <div onClick={manegadorClic}>
      <h2>Hola, {nom}!</h2>
      <p>Tens {edat} anys.</p>
    </div>
  );
}

export default Salutacio;

// {} són per entrar a JavaScript dins JSX

// JS normal → nom

// JSX → {nom}