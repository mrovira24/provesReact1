import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'




  function App() {
    const user = "Anna";
    return <div>Toolbar:<Toolbar user={user} /></div>;
  }

  function Toolbar({ user }) {
    // Toolbar només passa la prop, no la necessita
    return (<div>UserProfile:<UserProfile user={user} /></div>);
  }

  function UserProfile({ user }) {
    return <div>Usuari del UserProfile: {user}</div>;
  }



export default App
