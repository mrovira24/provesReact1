import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Temps from "./components/Temps.jsx"
import Amplada from "./components/Amplada.jsx"
import ExempleVectorDependencies from "./components/ExempleVectorDependencies.jsx"
import Events from "./components/Events.jsx"
import Events2 from "./components/Events2.jsx"

function App() {

  return (
    <div>
      <h1>Hora:</h1>
      <Temps />
      <Amplada />
      <ExempleVectorDependencies />
      <h1>Events:</h1>
      <Events />
      <h1>Events2:</h1>
      <Events2 />
    </div>
  )
}

export default App
