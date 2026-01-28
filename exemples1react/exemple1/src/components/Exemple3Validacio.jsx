import { useState } from "react";


function Exemple3Validacio() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      setError("El camp no pot estar buit");
      return;
    }

    setError("");
    alert(text);
    setText(""); //posa el input text en blanc
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Afegir</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
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
