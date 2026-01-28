import { useState } from "react";

function Exemple1Input() {
  const [nom, setNom] = useState("");

  return (

    <div>
      {/* Comentari Exemple 1 */}
      <input
        type="text"
        placeholder="Escriu el teu nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <p>Nom escrit: {nom}</p>
    </div>
  );
}

export default Exemple1Input;

/*
“Quan l’usuari escrigui alguna cosa a l’input,
React em passa un event (e),
jo agafo el valor de l’input (e.target.value)
i el guardo a l’estat (setNom).”

Podem escriure e, event, evt, o qualsevol altre nom que vulguem. 
*/
