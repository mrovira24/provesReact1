import React, { useState, useEffect } from "react";

function ComptadorVisites() {
  const [visites, setVisites] = useState(0);

  useEffect(() => {
    // llegir visites des del localStorage
    const visitesGuardades = localStorage.getItem("visites");
    let comptador = visitesGuardades ? parseInt(visitesGuardades) : 0;

    comptador += 1; // sumar 1 per aquesta visita
    setVisites(comptador);

    // guardar de nou al localStorage
    localStorage.setItem("visites", comptador);
  }, []);

  return (
    <div>
      <h2>Visites a la pàgina: {visites}</h2>
    </div>
  );
}

export default ComptadorVisites;
