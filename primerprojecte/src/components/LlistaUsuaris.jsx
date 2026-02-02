function LlistaUsuaris() {
	const usuaris = [
	 { id: 1, nom: "Anna" },
	 { id: 2, nom: "Marc" }
	];
	return (
	 <ul>
	 {usuaris.map(usuari => (
	 <li key={usuari.id}>{usuari.nom}</li>
	 ))}
	 </ul>
	);
}
export default LlistaUsuaris;