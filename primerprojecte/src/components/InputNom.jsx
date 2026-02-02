import React, { useState } from "react";
function InputNom() {
 const [nom, setNom] = useState("");

 function manegadorInput(event){
 	if (event.key === "Enter") {
      setNom(event.target.value);
    }
 }

 return (
 <div>
 <input
	 type="text"
	 onKeyDown={manegadorInput}
	 placeholder="Escriu el teu nom"
 />
 <p>Hola, {nom}!</p>
 </div>
 );
}
export default InputNom;