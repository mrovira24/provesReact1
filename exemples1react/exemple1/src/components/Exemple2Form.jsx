import { useState } from "react";

function Exemple2Form() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Has enviat: ${text}`);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
}

export default Exemple2Form;
