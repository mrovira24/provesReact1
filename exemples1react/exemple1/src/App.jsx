import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ExempleInput from "./components/ExempleInput";
import ExempleForm from "./components/ExempleForm";
import ExempleValidacio from "./components/ExempleValidacio";
import ExempleLlista from "./components/ExempleLlista";
import AddItem from "./components/AddItem";

function App() {

  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, text]);
  };

  return (
      <div>
       <h1>Exemple 1 — Input controlat</h1>
      <ExempleInput />

      <h1>Exemple 2 — Exemple form</h1>
      <ExempleForm />

      <h1>Exemple 3 — Validació simple</h1>
      <ExempleValidacio />

      <h1>Exemple 4 — Exemple llista</h1>
      <ExempleLlista />

      <h1>Exemple 5 — Exemple AddItem</h1>
      <>
        <AddItem onAdd={addItem} />
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </>

      </div>
  )
}

export default App
