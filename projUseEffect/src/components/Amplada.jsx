import React, { useState, useEffect } from "react";

function Amplada() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", onResize);
  },[]);

  return <p>{width}px</p>;
}

export default Amplada;
