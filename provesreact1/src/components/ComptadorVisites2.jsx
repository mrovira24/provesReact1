import React, { useState, useEffect, useRef } from "react";

function ComptadorVisites2() {
  const [visites2, setVisites2] = useState(0);
  const jaIncrementat2 = useRef(false);

  useEffect(() => {
    if (jaIncrementat2.current) return; // ja s'ha executat

    const visitesGuardades2 = localStorage.getItem("visites2");
    let comptador2 = visitesGuardades2 ? parseInt(visitesGuardades2) : 0;

    comptador2 += 1; 
    setVisites2(comptador2);
    localStorage.setItem("visites2", comptador2);

    jaIncrementat2.current = true; // marquem que ja hem incrementat
  }, []);

  return (
    <div>
      <h2>Visites a la pàgina: {visites2}</h2>
    </div>
  );
}

export default ComptadorVisites2;
