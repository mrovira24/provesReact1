import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Salutacio from "./components/Salutacio";
import Comptador from "./components/Comptador";


function App() {
 

  return (
    <div>
     
      <h1>Hola Proves components!!</h1>
      <Salutacio nom="Maria" edat="35" />
      <Comptador valorInicial="{0}"/>
    </div>
  )
}

export default App
