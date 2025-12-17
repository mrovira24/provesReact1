import React, { useState } from "react";

function TascaForm({ afegirTasca }) {
  const [nom, setNom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nom.trim() !== "") {
      afegirTasca(nom);
      setNom(""); // buidar input
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Escriu una nova tasca"
        style={{ padding: "5px", width: "250px" }}
      />
      <button type="submit" style={{ marginLeft: "10px", padding: "5px 10px" }}>
        Afegir
      </button>
    </form>
  );
}

export default TascaForm;
