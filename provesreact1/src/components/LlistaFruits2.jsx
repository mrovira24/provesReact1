import React from "react";

const [fruits, setFruits] = React.useState(["Poma", "Plàtan", "Taronja"]);

const eliminaPrimer = () => {
    setFruits(items.slice(1));
  };

function LlistaFruits2() {
  return (
    <>
  	<button onClick={eliminaPrimer}>Elimina primer</button>
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
    </>
  );
}

export default LlistaFruits2;