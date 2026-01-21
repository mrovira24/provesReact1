import React from "react";

function Llista() {
  const [items, setItems] = React.useState([
    { id: 1, text: "Primer" },
    { id: 2, text: "Segon" },
    { id: 3, text: "Tercer" }
  ]);

  const eliminaPrimer = () => {
    setItems(items.slice(1));
  };

  return (
    <>
      <button onClick={eliminaPrimer}>Elimina primer</button>
      <ul>
        {items.map(item => (
          <li>
            <input defaultValue={item.text} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Llista;