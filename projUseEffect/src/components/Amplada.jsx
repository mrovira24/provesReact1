import React, { useState, useEffect } from "react";

function Amplada() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {window.removeEventListener("resize", handleResize); };

  },[]);

  return <p>{width}px</p>;
}

export default Amplada;
