
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Salutacio from "./components/Salutacio";
import Comptador from "./components/Comptador";
import InputNom from "./components/InputNom";
import LlistaFruits from "./components/LlistaFruits";
import LlistaUsuaris from "./components/LlistaUsuaris";


function App() {


 return (
 <div>
   <h1>Hola món!</h1>
   <Salutacio  nom="Maria" edat={35} />
   <Salutacio  nom="Joan" edat={45} />

   <Comptador valorInicial={1} />
   <InputNom />

   <LlistaFruits />
   <LlistaUsuaris />

   
 </div>
 );
}
export default App;
