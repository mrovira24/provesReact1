import { useState } from "react";

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAddTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tasca..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Afegeix</button>
    </form>
  );
}

export default AddTask;
