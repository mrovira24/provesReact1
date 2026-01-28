import { useState } from "react";

function Exemple4Llista() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;

    setItems([...items, text]);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Afegir</button>
      </form>

      {items.length === 0 && <p>No hi ha elements</p>}

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exemple4Llista;

/*
1️⃣ ...items → spread operator

Si items és:

["pa", "llet"]


L’expressió:

[...items]


és:

["pa", "llet"]


👉 Crea una còpia nova de l’array

2️⃣ Afegim text al final
[...items, text]


Si text = "ous":

["pa", "llet", "ous"]


👉 Nou array, amb un element més

3️⃣ setItems(...)
setItems(["pa", "llet", "ous"]);


👉 React rep un array nou
👉 React detecta el canvi
👉 React torna a renderitzar

🧪 Exemple pas a pas
Estat inicial
items = []

Usuari escriu "hola" i envia
setItems([...[], "hola"])


👉 ["hola"]

Segona vegada "adeu"
setItems(["hola", "adeu"])

❓ Per què no podem fer push?
items.push(text); // ❌
setItems(items);


👉 Això modifica el mateix array
👉 React no detecta bé el canvi
👉 Pot no renderitzar

👉 Regla d’or:

Mai modificar l’estat directament

🧠 Traducció humana

“Crea una còpia de la llista actual
afegeix-hi el text nou
i guarda-la com a nou estat”

📌 Resum curtíssim
Part  Què fa
items Llista actual
...items  Còpia de la llista
text  Element nou
setItems  Actualitza l’estat
🔗 Connexió directa amb la Pràctica 1

A la To-Do App faràs exactament el mateix, però amb objectes:

setTasks([...tasks, newTask]);


👉 Si entens aquesta línia, la pràctica 1 ja no fa por 💪

Si vols, puc:

Fer un dibux visual

Mostrar la versió amb map

Explicar la versió funcional:

setItems(prev => [...prev, text]);


Digues-m’ho 😊

3 missatges pendents. Actualitza a ChatGPT Go per continuar la conversa
Actualitza a Go

*/