
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import {AuthProvider} from './context/AuthContext'
import  Navbar from './components/Navbar'
import  Login from './components/Login'

function App() {


  return (
    <AuthProvider>
      <Navbar />
      <Login />
      
    </AuthProvider>
  );
}

export default App
