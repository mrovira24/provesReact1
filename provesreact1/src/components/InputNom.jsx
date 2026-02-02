import React, { useState } from "react";
function InputNom() {
 const [nom, setNom] = useState("");

 function manegadorInput({event}){
 	if (event.key === "Enter") {
      setNom(event.target.value);
      setNom("hola");
    }
 }

 return (
 <div>
 <input
 type="text"

 onKeyPress={manegadorInput(e)}
 
 placeholder="Escriu el teu nom"
 />
 <p>Hola, {nom}!</p>
 </div>
 );
}
export default InputNom;