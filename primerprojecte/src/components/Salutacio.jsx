function Salutacio({nom, edat}) {

  function manegadorClic (){
    alert(nom);
  }
  
 return (
 <div>
	 <h2>Hola {nom}! Sóc un component de React </h2> 
	 <button onClick={manegadorClic} >Fes clic </button>
	 <p>Tens {edat} anys.</p>
 </div>
 );
}
export default Salutacio;