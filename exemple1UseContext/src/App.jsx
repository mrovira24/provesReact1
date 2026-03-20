import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import { createContext } from 'react'
import { ThemeContext } from './context/ThemeContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

import Button from './components/Button.jsx'


function App() {


// const theme = "dark";

  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
  );
}

export default App
