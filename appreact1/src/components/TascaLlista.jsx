import React from "react";

function TascaLlista({ tasques, toggleCompletada, eliminarTasca }) {
  if (tasques.length === 0) return <p>No hi ha tasques.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasques.map((tasca) => (
        <li
          key={tasca.id}
          style={{
            marginBottom: "10px",
            textDecoration: tasca.completada ? "line-through" : "none",
          }}
        >
          <span onClick={() => toggleCompletada(tasca.id)} style={{ cursor: "pointer" }}>
            {tasca.nom}
          </span>
          <button
            onClick={() => eliminarTasca(tasca.id)}
            style={{ marginLeft: "10px" }}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TascaLlista;
