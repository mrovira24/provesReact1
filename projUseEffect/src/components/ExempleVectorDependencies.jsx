import React, { useState, useEffect } from "react";

function ExempleVectorDependencies() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    console.log("1.Sense []");
  });

  useEffect(() => {
    console.log("2. Amb []");
  }, []);

  useEffect(() => {
    console.log("3. Només quan canvia a");
  }, [a]);

  return (
    <>
      <button onClick={() => setA(a + 1)}>A +1</button>
      <button onClick={() => setB(b + 1)}>B +1</button>
    </>
  );
}

export default ExempleVectorDependencies;
