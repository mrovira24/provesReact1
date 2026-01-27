import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Salutacio from "./components/Salutacio";
import Comptador from "./components/Comptador";
import ComptadorTemps from "./components/ComptadorTemps";
import ComptadorVisites from "./components/ComptadorVisites";
import ComptadorVisites2 from "./components/ComptadorVisites2";
import LlistaFruits from "./components/LlistaFruits";
import LlistaFruits2 from "./components/LlistaFruits2";
import Llista from "./components/Llista";
import Llista2 from "./components/Llista2";


function App() {
 

  return (
    <div>
     
      <h1>Proves components!!</h1>
      <Salutacio nom="Maria" edat="35" onClick={() => alert('H')} />
      <Comptador valorInicial={1}/>
      <ComptadorTemps />
      <ComptadorVisites />
      <ComptadorVisites2 />
      <LlistaFruits />
     
      <Llista />
      <Llista2 />
      <button onClick={() => alert('O')}>Fes clic</button>
    </div>
  )
}

export default App
