import React, { useState } from "react";
import TascaForm from "./components/TascaForm";
import TascaLlista from "./components/TascaLlista";
import Rellotge from "./components/Rellotge";

function App() {
  const [tasques, setTasques] = useState([]);

  // Afegir nova tasca
  const afegirTasca = (nom) => {
    const novaTasca = { id: Date.now(), nom, completada: false };
    setTasques([novaTasca, ...tasques]);
  };

  // Marcar tasca com a completada
  const toggleCompletada = (id) => {
    setTasques(
      tasques.map((tasca) =>
        tasca.id === id ? { ...tasca, completada: !tasca.completada } : tasca
      )
    );
  };

  // Eliminar tasca
  const eliminarTasca = (id) => {
    setTasques(tasques.filter((tasca) => tasca.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Llista de Tasques</h1>
      <Rellotge />
      <TascaForm afegirTasca={afegirTasca} />
      <TascaLlista
        tasques={tasques}
        toggleCompletada={toggleCompletada}
        eliminarTasca={eliminarTasca}
      />
    </div>
  );
}

export default App;
