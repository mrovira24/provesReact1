import { useState } from "react";


function Exemple3Validacio() {
  const [nom, setNom] = useState("");
  const [dni, setDni] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nom.trim() === "") {
      setError("El camp nom no pot estar buit");
      return;
    }
    if (dni.trim() === "") {
      setError("El camp dni no pot estar buit");
      return;
    }

    setError("");
    alert(nom + dni);
    setNom(""); //posa el input text en blanc
    setDni("");
  };

  function renderError() {
    if (error) {
      return <p style={{ color: "red" }}>{error}</p>;
    }
    return null;
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Nom:<input
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      /></label>
      <label>Dni:
      <input 
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      /></label>

      <button>Afegir</button>

{/*      {error && <p style={{ color: "red" }}>{error}</p>} */}

       {renderError()}


    </form>
  );
}

export default Exemple3Validacio;

/*

Enviarem dades al servidor quan vegem el fetch!! 

En JavaScript:

true && "hola"   // → "hola"
false && "hola"  // → false


👉 L’operador &&:

Si el primer valor és true, retorna el segon
Si el primer valor és false, no fa res (retorna false)


Com ho interpreta React?

React fa això:

{condició && JSX}


Si condició és false → no mostra res

Si condició és true → mostra el JSX

*/
