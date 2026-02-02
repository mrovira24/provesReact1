const fruits = ["Poma", "Plàtan", "Taronja"];
function LlistaFruits() {
 return (
 <ul>
 {fruits.map((fruit, index) => (
 <li key={index}>{fruit}</li>
 ))}
 </ul>
 );
}

export default LlistaFruits;