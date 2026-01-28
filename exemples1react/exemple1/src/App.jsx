import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Exemple1Input from "./components/Exemple1Input";
import Exemple2Form from "./components/Exemple2Form";
import Exemple3Validacio from "./components/Exemple3Validacio";
import Exemple4Llista from "./components/Exemple4Llista";
import AddItem from "./components/AddItem";

function App() {

  const [items, setItems] = useState([]);

  const addItem = (text) => {
    setItems([...items, text]);
  };

  return (
      <div>
       <h1>Exemple 1 — Input controlat</h1>
      <Exemple1Input />

      <h1>Exemple 2 — Exemple form</h1>
      <Exemple2Form />

      <h1>Exemple 3 — Validació simple</h1>
      <Exemple3Validacio />

      <h1>Exemple 4 — Exemple llista</h1>
      <Exemple4Llista />

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
