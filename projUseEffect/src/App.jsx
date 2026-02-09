import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Temps from "./components/Temps.jsx"
import Amplada from "./components/Amplada.jsx"
import ExempleVectorDependencies from "./components/ExempleVectorDependencies.jsx"

function App() {

  return (
    <div>
      <h1>Hora:</h1>
      <Temps />
      <Amplada />
      <ExempleVectorDependencies />
    </div>
  )
}

export default App
