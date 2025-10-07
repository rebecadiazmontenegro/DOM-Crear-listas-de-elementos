// Añadir dos elementos `<li>` a un `<ul>` (Desde JS), y unirlos al DOM de tu página HTML

const lista = document.getElementById("lista");

const li = document.createElement("li");
const texto = document.createTextNode("Lista 1");

const li2 = document.createElement("li");
const texto2 = document.createTextNode("Lista 2");

li.appendChild(texto)
li2.appendChild(texto2)

lista.appendChild(li);
lista.appendChild(li2);

// Ejercicio 1 bis:
// Nota (ejercicio avanzado): pensar el caso de añadir datos de un array de tareas de tamaño indeterminado (los datos ya están dentro del array)
// ["comprar","barrer","alimentar gato","colada"]

const listaDos = document.getElementById("listaDos")
const arrayTareas = ["comprar","barrer","alimentar gato","colada", "bailar"];

for(let i = 0; i < arrayTareas.length; i++) {
    const liArray = document.createElement("li");
    const textoArray = document.createTextNode(arrayTareas[i]);
    const atributo = document.createAttribute("class");
    atributo.value = "listaArray";
    listaDos.setAttributeNode(atributo);
    liArray.appendChild(textoArray);
    listaDos.appendChild(liArray);
}


